from django.shortcuts import render, redirect
from .forms import CreateUserForm

from django.contrib import messages


def registerView(request):
    form = CreateUserForm()

    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
            user = form.cleaned_data.get('username')
            messages.success(request, 'Account Was Created For ' + user)
            return redirect('login')

    context = {'form':form}
    return render(request, 'registration/signup.html', context)