import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-about-full',
  standalone: true, 
  imports: [CommonModule, TranslocoModule], 
  templateUrl: './about-full.html',
  styleUrl: './about-full.css',
})
export class AboutFullComponent { } 