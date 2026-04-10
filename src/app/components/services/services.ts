import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, TranslocoModule, RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent {
  visibleServicesCount: number = 6;

  constructor(
    private transloco: TranslocoService,
    private cdr: ChangeDetectorRef 
  ) {}

  showMore() {
    this.visibleServicesCount += 3;
    this.cdr.detectChanges();
  }

  get filteredServices() {
    const allServices = this.transloco.translateObject('services.items');
    if (!allServices || !Array.isArray(allServices)) {
      return [];
    }
    return allServices.slice(0, this.visibleServicesCount);
  }

  get hasMoreServices(): boolean {
    const allServices = this.transloco.translateObject('services.items');
    return allServices && Array.isArray(allServices) && this.visibleServicesCount < allServices.length;
  }
}