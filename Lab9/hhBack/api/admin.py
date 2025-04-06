from django.contrib import admin

from api.models import Company , Vacancy , Application

# Register your models here.
@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
   search_field = ("name" , ...)

@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
   ...

@admin.register(Application) 
class VacancyApplication(admin.ModelAdmin):
   ...


   