import { Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { VacanciesComponent } from './vacancies/vacancies.component';

export const routes: Routes = [
  { 
    path: '',
    component: CompaniesComponent,
    title: 'Companies List'
  },
  {
    path: 'companies/:id/vacancies',
    component: VacanciesComponent,
    title: 'Company Vacancies'
  },
  { path: '**', redirectTo: '' } // Перенаправление для несуществующих путей
];