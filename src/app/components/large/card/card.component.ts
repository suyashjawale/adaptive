import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

}
