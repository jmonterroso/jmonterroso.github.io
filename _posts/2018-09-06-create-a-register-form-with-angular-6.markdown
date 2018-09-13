---
layout: post
title:  "How to Create a Register Form with Angular 6"
description: In this post you will learn How to Create a Register Form with Angular 6 in minutes and pretty straightforward.
image: '/img/blog/create-simple-register-form-angular-6.jpg'
date:   2018-09-06 08:46:02 -0600
categories: frontend angular forms
# image: hyperapp-fundamentals.png
reading_time: 5 min
comments: true
slug: create-a-register-form-with-angular-6
---

In this post I share with you How to Create a Register Form with Angular 6 easy using bootstrap 4, it includes a simple validation but it helps you to understand how to validate forms with Angular


### 1. Create the Registration Component
In order to create our component let's use ng cli to create the scaffold of the component using the following component


`ng generate component Register`


It will generate the files we need to create the form layout and validation.

### 2. Add HTML Markup

Let's add the markup to support the form in order to do this check this code below:

{% highlight html linenos%}
<div class="row">
  <div class="col-lg-6 col-12 mx-auto my-5">
    <fieldset class="form-group">
      <legend class="text-center mb-5">Registro de Usuario</legend>
      <form [formGroup]="registerForm" (ngSubmit)="onSubmit()" >
        <div class="form-group" [ngClass]="{'form-group-error': submitted && f.username.errors }">
          <label for="username">Nombre de Usuario</label>
          <input type="text" formControlName="username" class="form-control" id="username"
          placeholder="Nombre de Usuario" >
          <small class="form-control-feedback" >El nombre de usuario es requerido</small>
        </div>
        <div class="form-group" [ngClass]="{'form-group-error': submitted && f.email.errors }">
          <label for="email">Correo Electrónico</label>
          <input  formControlName="email" type="email" class="form-control" id="email"  placeholder="Correo Electrónico">
          <small class="form-control-feedback" >El correo electrónico es requerido</small>
        </div>
        <div class="form-group" [ngClass]="{'form-group-error': submitted && f.password.errors }">
          <label for="password">Password</label>
          <input formControlName="password" type="password" class="form-control" id="password" placeholder="Password">
          <small class="form-control-feedback">El password es requerido</small>
        </div>
        <div class="form-group" [ngClass]="{'form-group-error': submitted && f.passwordConfirm.errors }">
          <label for="passwordConfirm">Confirmar Password</label>
          <input formControlName="passwordConfirm" type="password" class="form-control" id="passwordConfirm" placeholder="Confirmar Password">
          <small class="form-control-feedback" *ngIf="f.passwordConfirm.errors?.required">La confirmación del password es requerido</small>
          <small class="form-control-feedback d-block" *ngIf="f.passwordConfirm.errors?.MatchPassword">Passwords no son iguales</small>
        </div>
        <button type="submit" class="btn btn-block btn-primary">Submit</button>
      </form>
    </fieldset>
  </div>
</div>
{% endhighlight %}

#### Code Explanation

In this code we use `f` as a getter to return the `form.controls` variables for easy use.

The ng-class is used to display if the form has an error and we add the class `.form-group-error` to the entire group so we can control using css

### Match Passwords Custom Validation
To Validate the pasword and password confirmation are equals we want to create a new class in order to do that we run the command:

{%highlight zsh linenos %}
ng generate class PasswordValidation
{%endhighlight%}

And then we use this code to validate the password using the same values as the fields defined in the html markup

{%highlight ts linenos %}
import { AbstractControl } from '@angular/forms';
export class PasswordValidation {
    static MatchPassword(ac: AbstractControl) {
        let password = ac.get('password').value; // to get value in input tag
        let passwordConfirm = ac.get('passwordConfirm').value; // to get value in input tag
        if (password != passwordConfirm) {
            ac.get('passwordConfirm').setErrors({ MatchPassword: true })
        } else {
            return null
        }
    }
}

{%endhighlight %}

### Form validation using Angular

First We're going to copy the validation class in the generated `register.component.js` file as follows:

{%highlight ts linenos %}
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// this is the custom validation for password match
import { PasswordValidation } from './../password-validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted:boolean = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required]

    }, {validator:PasswordValidation.MatchPassword})
  }
  get f(){
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    if(!this.registerForm.valid){
      console.log('not valid');
      return;
    }
    alert('Success');
  }

}
{%endhighlight%}

#### Code explanation

1. We imported the required modules provided by angular/core which will help us to define the group builder.
2. We imported also `PasswordValidation` class, this class will help us to validate the password confirmation (it will be provided next)
3. We defined two private variables `registerForm` (of type FormGroup), `submitted`(flag to be set when the form is submitted)
4. On `ngOnInit()` we assign to the private variable defined registerForm and provide the rules of each field by name defined in the markup as `formControlName`
5. We define a custom validator it helps us to validate that the passwords matches.
6. Definition of `onSubmit` method that will check if the form is valid or not and is also added to the markup `(ngSubmit)="onSubmit()"`. It mark flag is submitted to true and then verify if the registerForm (created on ngOnInit method) is valid if not will show the errors already defined in the markup. On each `<small>` tags.


And that's it it will generate a form like this

#### Form validation
<div class="row">
<div class="col-12 col-md-8 mx-lg-auto">
<img src="/img/blog/validation-angular-form.png" class="img-fluid"/>
</div>
</div>


Thanks for reading this post hope it help you a bit to understand forms in angular. Have an amazing day!

Jayson