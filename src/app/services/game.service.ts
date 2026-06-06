import { Injectable, signal, computed } from '@angular/core';
import {
  Politician, GuessComparison, CompareResult,
  PARTY_FAMILY, STATE_REGION, POSITION_LEVEL_GROUP
} from '../models/politician.model';
import { POLITICIANS } from '../data/politicians';

export const MAX_GUESSES = 8;

@Injectable({ providedIn: 'root' })
export class GameService {
  readonly allPoliticians = POLITICIANS;

  private readonly _targetPolitician = signal<Politician>(this.pickDailyPolitician());
  private readonly _guesses = signal<GuessComparison[]>([]);
  private readonly _gameOver = signal(false);
  private readonly _won = signal(false);

  readonly targetPolitician = this._targetPolitician.asReadonly();
  readonly guesses = this._guesses.asReadonly();
  readonly gameOver = this._gameOver.asReadonly();
  readonly won = this._won.asReadonly();
  readonly guessCount = computed(() => this._guesses().length);
  readonly remainingGuesses = computed(() => MAX_GUESSES - this._guesses().length);

  private pickDailyPolitician(): Politician {
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const index = seed % POLITICIANS.length;
    return POLITICIANS[index];
  }

  getFilteredPoliticians(query: string): Politician[] {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase();
    const guessedIds = new Set(this._guesses().map(g => g.politician.id));
    return POLITICIANS.filter(p =>
      !guessedIds.has(p.id) &&
      p.name.toLowerCase().includes(q)
    ).slice(0, 8);
  }

  submitGuess(politician: Politician): void {
    if (this._gameOver()) return;
    const comparison = this.compare(politician, this._targetPolitician());
    this._guesses.update(g => [...g, comparison]);

    if (comparison.isCorrect) {
      this._won.set(true);
      this._gameOver.set(true);
    } else if (this._guesses().length >= MAX_GUESSES) {
      this._gameOver.set(true);
    }
  }

  resetGame(): void {
    this._guesses.set([]);
    this._gameOver.set(false);
    this._won.set(false);
    this._targetPolitician.set(this.pickDailyPolitician());
  }

  private compare(guess: Politician, target: Politician): GuessComparison {
    const partyResult: CompareResult =
      guess.party === target.party ? 'correct' :
      PARTY_FAMILY[guess.party] === PARTY_FAMILY[target.party] ? 'partial' : 'wrong';

    const stateResult: CompareResult =
      guess.state === target.state ? 'correct' :
      STATE_REGION[guess.state] === STATE_REGION[target.state] ? 'partial' : 'wrong';

    const positionResult: CompareResult =
      guess.position === target.position ? 'correct' :
      POSITION_LEVEL_GROUP[guess.position] === POSITION_LEVEL_GROUP[target.position] ? 'partial' : 'wrong';

    const yearDiff = guess.birthYear - target.birthYear;
    const birthYearResult: CompareResult =
      yearDiff === 0 ? 'correct' :
      Math.abs(yearDiff) <= 5 ? 'partial' : 'wrong';

    const genderResult: CompareResult = guess.gender === target.gender ? 'correct' : 'wrong';

    return {
      politician: guess,
      party: partyResult,
      state: stateResult,
      stateRegion: STATE_REGION[guess.state],
      position: positionResult,
      birthYear: birthYearResult,
      birthYearDirection: yearDiff === 0 ? 'exact' : yearDiff > 0 ? 'lower' : 'higher',
      birthYearDiff: Math.abs(yearDiff),
      gender: genderResult,
      isCorrect: guess.id === target.id,
    };
  }
}
