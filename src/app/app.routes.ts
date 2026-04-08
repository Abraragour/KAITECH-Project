import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout';
import { HomeComponent } from './components/home/home';
import { ServiceDetailsComponent } from './components/service-details/service-details';
import { ProjectDetailsComponent } from './components/project-details/project-details';
import { ContactComponent } from './components/contact/contact';

import { AboutFullComponent } from './components/about-full/about-full';
export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'about-full', component: AboutFullComponent }, // 👈 الصفحة الجديدة هنا
      { path: '', component: HomeComponent },
      { path: 'service/:id', component: ServiceDetailsComponent },
      { path: 'project/:id', component: ProjectDetailsComponent },
      { path: 'contact', component: ContactComponent }
    ]
  },
  
  { path: '**', redirectTo: '' }
];
