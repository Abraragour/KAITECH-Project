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
      { 
        path: 'about-full', 
        component: AboutFullComponent, 
        title: 'KAITECH | About' 
      }, 
      { 
        path: '', 
        component: HomeComponent, 
        title: 'KAITECH | Home' 
      },
      { 
        path: 'service/:id', 
        component: ServiceDetailsComponent, 
        title: 'KAITECH | Service' 
      },
      { 
        path: 'project/:id', 
        component: ProjectDetailsComponent, 
        title: 'KAITECH | Project' 
      },
      { 
        path: 'contact', 
        component: ContactComponent, 
        title: 'KAITECH | Contact' 
      }
    ]
  },
  { path: '**', redirectTo: '' }
];
