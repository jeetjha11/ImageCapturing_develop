import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  // Check if session data exists (e.g., user data in sessionStorage or localStorage)
  getSessionData(): any {
    const user = sessionStorage.getItem('user'); // Retrieve session data (user)
    return user ? JSON.parse(user) : null; // Parse JSON if available, else null
  }

  // Save session data (e.g., user data)
  setSessionData(user: any): void {
    sessionStorage.setItem('user', JSON.stringify(user)); // Store user data as a JSON string
  }

  // Clear all session data
  clearSession(): void {
    sessionStorage.clear(); // This clears all session data from sessionStorage
  }
}
