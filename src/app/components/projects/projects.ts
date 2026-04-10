import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { take } from 'rxjs';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslocoModule, RouterModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent implements OnInit {
  currentFilter: string = 'all';
  visibleProjectsCount: number = 6; 

  constructor(
    private transloco: TranslocoService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit() {
    this.currentFilter = 'all';
    this.transloco.selectTranslation().pipe(take(1)).subscribe(() => {
      this.cdr.detectChanges();
    });
  }

  showMore() {
    this.visibleProjectsCount += 4;
    this.cdr.detectChanges();
  }

  get filters() {
    const res = this.transloco.translateObject('projects.filters');
    if (!res || typeof res !== 'object' || Array.isArray(res)) return {};
    return res;
  }

  get filteredProjects() {
    const allProjects = this.transloco.translateObject('projects.items');
    
    if (!allProjects || !Array.isArray(allProjects)) {
      return [];
    }

    let filtered = allProjects;
    if (this.currentFilter !== 'all') {
      filtered = allProjects.filter((item: any) => item.category === this.currentFilter);
    }
    
    return filtered.slice(0, this.visibleProjectsCount);
  }

  get hasMoreProjects(): boolean {
    const allProjects = this.transloco.translateObject('projects.items');
    if (!allProjects || !Array.isArray(allProjects)) return false;
    
    let totalInCurrentFilter = allProjects.length;
    if (this.currentFilter !== 'all') {
      totalInCurrentFilter = allProjects.filter((item: any) => item.category === this.currentFilter).length;
    }
    
    return this.visibleProjectsCount < totalInCurrentFilter;
  }

  setFilter(category: any) {
    this.currentFilter = String(category);
    this.visibleProjectsCount = 6; 
    this.cdr.detectChanges(); 
  }

  getCategoryLabel(key: any): string {
    const filters = this.filters;
    return filters[key] || key;
  }

  returnZero() { return 0; }
}