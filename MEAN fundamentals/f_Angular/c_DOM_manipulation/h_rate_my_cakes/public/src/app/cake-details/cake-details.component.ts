import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cake-details',
  templateUrl: './cake-details.component.html',
  styleUrls: ['./cake-details.component.css']
})
export class CakeDetailsComponent implements OnInit {
  @Input() cakeToShow: object;
  constructor() { }

  ngOnInit() {
  }

}
