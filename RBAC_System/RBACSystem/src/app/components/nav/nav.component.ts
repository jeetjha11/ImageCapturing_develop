import { Component } from '@angular/core';
import { SessionService } from './session.service'; // Import your session service

@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private sessionService: SessionService) {}

  
  get isLoggedIn(): boolean {
    return !!this.sessionService.getSessionData(); 
  }

 
  logout(): void {
    this.sessionService.clearSession(); 
  
  }
}
