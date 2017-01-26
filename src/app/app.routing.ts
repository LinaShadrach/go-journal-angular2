import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { NewBackerComponent } from './new-backer/new-backer.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SplashComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent
  },
  {
    path: 'new-project',
    component: NewProjectComponent
  },
  {
    path: ':id/new-backer',
    component: NewBackerComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
