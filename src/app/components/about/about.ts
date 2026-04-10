import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,RouterLink, TranslocoModule], 
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {
}