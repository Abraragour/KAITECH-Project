import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './service-details.html',
  styleUrl: './service-details.css'
})
export class ServiceDetailsComponent implements OnInit {
  serviceId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.serviceId = this.route.snapshot.paramMap.get('id');
  }
}