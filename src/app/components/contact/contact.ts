import { Component,Input,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterLink } from '@angular/router'; // 
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslocoModule,RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactComponent {
isModalOpen = true;  

  openModal() {
    console.log('Opening Modal...'); 
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    document.body.style.overflow = 'auto';
  }
}