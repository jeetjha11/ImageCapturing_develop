import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-portal',
  standalone: false,
  templateUrl: './user-portal.component.html',
  styleUrls: ['./user-portal.component.css']
})
export class UserPortalComponent implements OnInit {
  user: any;
  selectedFile: File | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
   
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    } else {
      console.error('User data not found in sessionStorage.');
    }
  }

  
  onFileSelect(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  
  uploadPhoto(): void {
    if (!this.selectedFile) {
      alert('Please select a photo to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('photo', this.selectedFile, this.selectedFile.name);

    
    const userEmail = this.user?.email;

    if (!userEmail) {
      alert('User email not found.');
      return;
    }

    const headers = {
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`, // Add the token if required
      'User-Email': userEmail  // Add email in the header
    };

    
    this.http.put<any>('http://localhost:5000/upload-photo', formData, { headers }).subscribe(
      (response) => {
       
        this.user.photo = response.user.photo;
        sessionStorage.setItem('user', JSON.stringify(this.user));

       
        alert('Profile photo uploaded successfully.');
      },
      (error) => {
        console.error('Error uploading photo:', error);
        alert('Failed to upload profile photo. Please try again.');
      }
    );
  }
}
