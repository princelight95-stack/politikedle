import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, shareReplay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ImageService {
  private http = inject(HttpClient);
  private cache = new Map<string, Observable<string | null>>();

  getImageUrl(wikiTitle: string): Observable<string | null> {
    if (this.cache.has(wikiTitle)) {
      return this.cache.get(wikiTitle)!;
    }
    const url = `https://de.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(wikiTitle)}&prop=pageimages&format=json&pithumbsize=400&origin=*`;
    const obs$ = this.http.get<any>(url).pipe(
      map(resp => {
        const pages = resp?.query?.pages;
        if (!pages) return null;
        const page = Object.values(pages)[0] as any;
        return (page?.thumbnail?.source as string) ?? null;
      }),
      catchError(() => of(null)),
      shareReplay(1)
    );
    this.cache.set(wikiTitle, obs$);
    return obs$;
  }
}
