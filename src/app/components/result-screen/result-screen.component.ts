import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-result-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result-screen.component.html',
  styleUrls: ['./result-screen.component.scss'],
})
export class ResultScreenComponent {
  gameService = inject(GameService);

  get won() { return this.gameService.won(); }
  get target() { return this.gameService.targetPolitician(); }
  get guessCount() { return this.gameService.guessCount(); }

  shareResult(): void {
    const guesses = this.gameService.guesses();
    const emojiMap = { correct: '🟩', partial: '🟨', wrong: '⬛' };
    const lines = guesses.map(g =>
      [g.party, g.gender, g.state, g.position, g.birthYear]
        .map(r => emojiMap[r])
        .join('')
    );
    const text = `🇩🇪 Politikedle – ${new Date().toLocaleDateString('de-DE')}\n${this.won ? `✅ ${this.guessCount}/${8}` : `❌ X/8`}\n\n${lines.join('\n')}`;
    navigator.clipboard.writeText(text).then(() => alert('Ergebnis kopiert!'));
  }
}
