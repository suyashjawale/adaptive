import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent {

  constructor(private router: Router) { }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
        this.search();
    }
  }

  search() {
    this.router.navigate(['/search']);    
  }

}

