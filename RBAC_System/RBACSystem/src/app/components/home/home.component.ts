import { Component } from '@angular/core';

@Component({
  selector: 'app-home',  
  standalone: false,
  host: { '[attr.id]': '"home-" + id' }, 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {
  id = Math.random().toString(36).substr(2, 9);  
}
