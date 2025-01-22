import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        role: ['user', Validators.required] 
      },
      {
        validators: this.passwordsMatch 
      }
    );
  }

  
  passwordsMatch(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      return { passwordMismatch: true }; 
    }
    return null; 
  }

  submit(): void {
    if (this.form.invalid) {
      alert('Please fill in all fields correctly.');
      return;
    }

    
    let user = this.form.getRawValue();
    console.log('User Data:', user);

    
    this.http.post('http://localhost:5000/register', user).subscribe(
      (response) => {
        console.log('User registered successfully', response);
        alert('Registration successful!');
        this.router.navigate(['/login']); 
      },
      (error) => {
        console.error('Error during registration:', error);
        alert('An error occurred during registration. Please try again later.');
      }
    );
  }
}
