import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterLink,RouterModule } from '@angular/router'; 


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, TranslocoModule, RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent {
}