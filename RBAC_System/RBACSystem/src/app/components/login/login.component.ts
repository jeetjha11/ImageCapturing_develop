import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Define the LoginResponse interface outside the class
interface LoginResponse {
  message: string;
  token: string;
  role: string;
  user:any;
}

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submit(): void {
    if (this.form.invalid) {
      alert('Please fill in all fields correctly.');
      return;
    }

    const credentials = this.form.getRawValue(); 
    console.log('Form data:', credentials);

   
    this.http.post<LoginResponse>('http://localhost:5000/login', credentials).subscribe(
      (response) => {
       

        // Store the token and role separately in session storage
sessionStorage.setItem('token', response.token);
sessionStorage.setItem('role', response.role);
sessionStorage.setItem('user', JSON.stringify(response.user)); 
console.log(response)


       
        switch (response.role) {
          case 'admin':
            this.router.navigate(['/admin']);
            
            break;
          case 'manager':
            this.router.navigate(['/manager']);
            break;
          case 'user':
            this.router.navigate(['/user']);
            break;
          default:
            alert('Unknown role. Please contact the administrator.');
            break;
        }
      },
      (error) => {
        console.error('Login failed:', error);

        // Handle errors appropriately
        if (error.status === 401) {
          alert('Invalid email or password. Please try again.');
        } else {
          alert('An unexpected error occurred. Please try again later.');
        }
      }
    );
  }
}
