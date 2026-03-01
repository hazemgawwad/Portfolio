import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap, timeout } from 'rxjs';
import { PortfolioData } from '../../shared/models/portfolio.model';
import { PORTFOLIO_FALLBACK_DATA } from '../../features/portfolio/portfolio.fallback-data';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private readonly storageKey = 'portfolio-content-v1';
  private currentData: PortfolioData | null = null;

  constructor(private http: HttpClient) {}

  getPortfolioData(): Observable<PortfolioData> {
    if (this.currentData) {
      return of(this.clone(this.currentData));
    }

    const cached = this.readFromStorage();
    if (cached) {
      this.currentData = cached;
      return of(this.clone(cached));
    }

    return this.http.get<PortfolioData>('data/portfolio.json').pipe(
      timeout(5000),
      catchError(() => of(PORTFOLIO_FALLBACK_DATA)),
      tap((data) => {
        this.currentData = this.clone(data);
        this.saveToStorage(data);
      }),
      map((data) => this.clone(data))
    );
  }

  updatePortfolioData(data: PortfolioData): void {
    this.currentData = this.clone(data);
    this.saveToStorage(data);
  }

  resetPortfolioData(): void {
    this.currentData = this.clone(PORTFOLIO_FALLBACK_DATA);
    this.saveToStorage(PORTFOLIO_FALLBACK_DATA);
  }

  private readFromStorage(): PortfolioData | null {
    const raw = localStorage.getItem(this.storageKey);
    if (!raw) {
      return null;
    }

    try {
      return JSON.parse(raw) as PortfolioData;
    } catch {
      return null;
    }
  }

  private saveToStorage(data: PortfolioData): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  private clone(data: PortfolioData): PortfolioData {
    return JSON.parse(JSON.stringify(data)) as PortfolioData;
  }
}
