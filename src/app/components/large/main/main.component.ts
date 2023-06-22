import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,NavbarComponent,RouterOutlet],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {

}
