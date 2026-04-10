import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco'; 
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser'; 

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslocoModule], 
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private titleService: Title,
    private translocoService: TranslocoService
  ) {}

  ngOnInit() {
    const isAr = this.translocoService.getActiveLang() === 'ar';
    
    this.titleService.setTitle(isAr ? 'كايتك | من نحن' : 'KAITECH | About Us');
  }
}