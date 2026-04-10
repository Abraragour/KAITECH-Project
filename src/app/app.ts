import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('kaitech-corporate');

  constructor(
    private titleService: Title,
    private translocoService: TranslocoService
  ) {}

  ngOnInit() {
    const isAr = this.translocoService.getActiveLang() === 'ar';
    this.titleService.setTitle(isAr ? 'كايتك | الأكاديمية الهندسية' : 'KAITECH | Engineering Academy');
  }
}