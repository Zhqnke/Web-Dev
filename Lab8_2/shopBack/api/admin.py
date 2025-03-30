from django.contrib import admin

from api.models import Product , Category

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    search_fields = ("name" , "price" , "category")

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    ...
