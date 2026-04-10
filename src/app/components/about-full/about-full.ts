import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-full',
  standalone: true, 
  imports: [CommonModule, TranslocoModule], 
  templateUrl: './about-full.html',
  styleUrl: './about-full.css',
})
export class AboutFullComponent implements OnInit {

  constructor(
    private titleService: Title,
    private translocoService: TranslocoService
  ) {}

  ngOnInit() {
    const isAr = this.translocoService.getActiveLang() === 'ar';
    
    this.titleService.setTitle(isAr ? 'كايتك | من نحن' : 'KAITECH | About Us');
  }
}