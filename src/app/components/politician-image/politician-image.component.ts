import { Component, Input, OnChanges, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageService } from '../../services/image.service';
import { Politician } from '../../models/politician.model';

@Component({
  selector: 'app-politician-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './politician-image.component.html',
  styleUrls: ['./politician-image.component.scss'],
})
export class PoliticianImageComponent implements OnChanges {
  @Input({ required: true }) politician!: Politician;
  @Input() blurPx = 0;
  @Input() showName = false;

  private imageService = inject(ImageService);

  imageUrl = signal<string | null>(null);
  loading = signal(true);
  hasError = signal(false);

  ngOnChanges(): void {
    this.loading.set(true);
    this.hasError.set(false);
    this.imageUrl.set(null);
    this.imageService.getImageUrl(this.politician.name).subscribe(url => {
      this.imageUrl.set(url);
      this.loading.set(false);
      this.hasError.set(!url);
    });
  }
}
