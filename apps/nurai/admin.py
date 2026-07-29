from django.contrib import admin
from .models import Student


@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'age', 'city', 'email', 'created_at')
    search_fields = ('name', 'city', 'email')
    list_filter = ('city', 'created_at')

