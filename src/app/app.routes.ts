import { Routes } from '@angular/router';
import { StudentsPageComponent } from './students/students-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'students' },
  { path: 'students', component: StudentsPageComponent },
];
