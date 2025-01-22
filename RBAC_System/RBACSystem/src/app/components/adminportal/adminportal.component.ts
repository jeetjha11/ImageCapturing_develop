import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminportal',
  standalone: false,
  templateUrl: './adminportal.component.html',
  styleUrls: ['./adminportal.component.css']
})
export class AdminportalComponent implements OnInit {

  users: { username: string; email: string; role: string }[] = [];
  newUser: { username: string; email: string; password: string; role: string } = {
    username: '',
    email: '',
    password: '',
    role: ''
  };

  constructor(private router: Router) { }

  ngOnInit() {
    this.fetchUsers();
  }

  addUser() {
    if (this.newUser.username && this.newUser.email && this.newUser.role && this.newUser.password) {
      fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.newUser.username,
          email: this.newUser.email,
          password: this.newUser.password,
          role: this.newUser.role,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            this.users.push({ ...this.newUser });
            this.newUser = { username: '', email: '', password: '', role: '' };
            alert('User registered successfully');
            this.navigateToUser();
            this.fetchUsers(); 
            
          } else {
            alert(data.message);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('An error occurred while registering the user');
        });
    } else {
      alert('Please fill in all fields');
    }
  }

  
  navigateToUser() {
    this.router.navigate(['/admin']);
  }

  fetchUsers() {
    fetch('http://localhost:5000/users')
      .then((response) => response.json())
      .then((data) => {
        if (data.users) {
          this.users = data.users;
        } else {
          alert('Failed to fetch users');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while fetching users');
      });
  }
}
