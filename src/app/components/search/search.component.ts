import {
  Component, inject, signal, HostListener, ElementRef, ViewChild
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';
import { Politician } from '../../models/politician.model';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  private gameService = inject(GameService);
  @ViewChild('inputEl') inputEl!: ElementRef<HTMLInputElement>;

  query = signal('');
  suggestions = signal<Politician[]>([]);
  activeIndex = signal(-1);
  selected = signal<Politician | null>(null);

  onInput(value: string): void {
    this.query.set(value);
    this.selected.set(null);
    this.suggestions.set(this.gameService.getFilteredPoliticians(value));
    this.activeIndex.set(-1);
  }

  selectSuggestion(p: Politician): void {
    this.selected.set(p);
    this.query.set(p.name);
    this.suggestions.set([]);
    this.activeIndex.set(-1);
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent): void {
    const list = this.suggestions();
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      this.activeIndex.update(i => Math.min(i + 1, list.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      this.activeIndex.update(i => Math.max(i - 1, -1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const idx = this.activeIndex();
      if (idx >= 0 && idx < list.length) {
        this.selectSuggestion(list[idx]);
      } else if (this.selected()) {
        this.submit();
      }
    } else if (e.key === 'Escape') {
      this.suggestions.set([]);
    }
  }

  submit(): void {
    const p = this.selected();
    if (!p) return;
    this.gameService.submitGuess(p);
    this.query.set('');
    this.selected.set(null);
    this.suggestions.set([]);
    setTimeout(() => this.inputEl?.nativeElement.focus(), 50);
  }

  get gameOver() { return this.gameService.gameOver(); }
  get remainingGuesses() { return this.gameService.remainingGuesses(); }
}
