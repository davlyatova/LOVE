from django.shortcuts import render, redirect
from .models import Student  
def index(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        phone = request.POST.get('phone')
        email = request.POST.get('email')
        comment = request.POST.get('comment')
        
        print(f"Новая заявка! Имя: {name}, Тел: {phone}, Email: {email}, Коммент: {comment}")

        return redirect('index') 

    students = Student.objects.all()
    return render(request, 'index.html', {'students': students})