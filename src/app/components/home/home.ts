import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { Title, Meta } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router'; 
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
  
  @ViewChild('swiperEl') swiperEl!: ElementRef;

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
this.titleService.setTitle(isAr ? 'كايتك | الصفحة الرئيسية' : 'KAITECH | Home Page');      
      const desc = isAr ? 'حلول هندسية رائدة' : 'Leading construction solutions';
      this.metaService.updateTag({ name: 'description', content: desc });
      
      setTimeout(() => {
        const swiper = this.swiperEl?.nativeElement?.swiper;
        if (swiper) {
          swiper.update();
        }
      }, 100);
    });
  }

nextSlide() {
    const swiper = this.swiperEl?.nativeElement?.swiper;
    if (swiper) {
      swiper.slideNext(500); 
    }
  }

  prevSlide() {
    const swiper = this.swiperEl?.nativeElement?.swiper;
    if (swiper) {
      swiper.slidePrev(500);
    }
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