import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuessComparison } from '../../models/politician.model';

@Component({
  selector: 'app-guess-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guess-row.component.html',
  styleUrls: ['./guess-row.component.scss'],
})
export class GuessRowComponent {
  @Input({ required: true }) comparison!: GuessComparison;
  @Input() animate = false;
}
