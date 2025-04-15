import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Vacancy } from '../models/vacancy';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,  // Keep this
  imports: [CommonModule, RouterLink],  // Add these
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
  vacancies: Vacancy[] = [];
  companyId!: number;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.companyId = +this.route.snapshot.params['id'];
    this.apiService.getCompanyVacancies(this.companyId).subscribe({
      next: (data) => {
        this.vacancies = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading vacancies', err);
        this.loading = false;
      }
    });
  }
}