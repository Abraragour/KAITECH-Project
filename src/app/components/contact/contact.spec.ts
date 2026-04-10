import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true, 
  imports: [CommonModule, TranslocoModule], 
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent implements OnInit {

  constructor(
    private titleService: Title,
    private translocoService: TranslocoService
  ) {}

  ngOnInit() {
    const isAr = this.translocoService.getActiveLang() === 'ar';
    this.titleService.setTitle(isAr ? 'كايتك | اتصل بنا' : 'KAITECH | Contact Us');
  }
}