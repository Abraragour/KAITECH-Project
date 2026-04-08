import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { LucideAngularModule, Globe, Menu, X } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    TranslocoModule, 
    LucideAngularModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent implements OnInit {
  readonly GlobeIcon = Globe;
  readonly MenuIcon = Menu;
  readonly XIcon = X;

  isOpen = signal(false);
  currentLang = 'ar';

  constructor(private translocoService: TranslocoService) {}

  ngOnInit() {
    const lang = this.translocoService.getActiveLang() || 'ar';
    this.currentLang = lang;
    this.translocoService.setActiveLang(lang);
    this.updateLayout(lang);
  }

  toggleLanguage() {
    const newLang = this.currentLang === 'ar' ? 'en' : 'ar';
    this.currentLang = newLang;
    this.translocoService.setActiveLang(newLang);
    localStorage.setItem('lang', newLang); 
    this.updateLayout(newLang);
  }

  updateLayout(lang: string) {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }

  toggleMenu() {
    this.isOpen.set(!this.isOpen());
  }
}