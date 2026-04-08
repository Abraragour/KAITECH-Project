import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router'; 
import { RouterLink } from '@angular/router'; 
import { AboutComponent } from '../about/about';
import { ServicesComponent } from '../services/services';
import { ProjectsComponent } from '../projects/projects';

register();

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule, 
    TranslocoModule,
    AboutComponent,    
    ServicesComponent, 
    ProjectsComponent, 
    
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit {
  
  @Input() contactComponent!: any;

  constructor(
    private router: Router, 
    public translocoService: TranslocoService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.translocoService.langChanges$.subscribe(lang => {
      const isAr = lang === 'ar';
      this.titleService.setTitle(isAr ? 'كايتك | الرئيسية - تميز هندسي' : 'KAITECH | Home - Engineering Excellence');
      
      const desc = isAr ? 'حلول هندسية رائدة' : 'Leading construction solutions';
      this.metaService.updateTag({ name: 'description', content: desc });
    });
  }

  openContactModal() {
    if (this.contactComponent && typeof this.contactComponent.openModal === 'function') {
      this.contactComponent.openModal();
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navigateToService(id: string) {
    this.router.navigate(['/service', id]);
  }
}