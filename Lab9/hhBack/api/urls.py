
from django.contrib import admin
from django.urls import path
from api import views_with_serializers , views_without_serializers 
urlpatterns = [
   path('companies/' , views_without_serializers.companies_list), 
   path('companies/<int:company_id>/', views_without_serializers.company_detail),
   path('companies/<int:company_id>/vacancies/', views_without_serializers.company_vacancies),
   path('vacancies/', views_without_serializers.vacancies_list), 
   path('vacancies/<int:vacancy_id>/', views_without_serializers.vacancy_details),
   path('vacancies/top10/' , views_without_serializers.top10_vacancies), 
   path('applications/', views_without_serializers.applications_list), 
   path('applications/<int:application_id>', views_without_serializers.application_detail), 
]
