import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Company } from '../models/company';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2>Companies</h2>
    
    @if (loading) {
      <p>Loading companies...</p>
    } @else {
      <ul>
        @for (company of companies; track company.id) {
          <li>
            <a [routerLink]="['/companies', company.id, 'vacancies']">
              {{ company.name }}
            </a>
          </li>
        }
      </ul>
    }
  `,
  styles: `ul { list-style-type: none; padding: 0; }`
})
export class CompaniesComponent {
  companies: Company[] = [];
  loading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCompanies().subscribe({
      next: (data) => {
        this.companies = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading companies', err);
        this.loading = false;
      }
    });
  }
}