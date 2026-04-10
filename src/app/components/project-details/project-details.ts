import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslocoModule],
  templateUrl: './project-details.html'
})
export class ProjectDetailsComponent implements OnInit {
  projectId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private translocoService: TranslocoService
  ) {}

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('id');
    const isAr = this.translocoService.getActiveLang() === 'ar';
    this.titleService.setTitle(isAr ? 'كايتك | تفاصيل المشروع' : 'KAITECH | Project Details');
  }
}