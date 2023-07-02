import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,CardComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  productName: string = "";
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.productName = params['q'];
    })
  }
}
