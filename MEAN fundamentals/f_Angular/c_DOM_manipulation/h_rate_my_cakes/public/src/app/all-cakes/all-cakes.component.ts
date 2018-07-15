import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-all-cakes',
  templateUrl: './all-cakes.component.html',
  styleUrls: ['./all-cakes.component.css']
})
export class AllCakesComponent implements OnInit {
  @Input() allCakes:any[];
  @Output() sendCakeDetails = new EventEmitter();
  @Output() sendNewReview = new EventEmitter();
  _review:any;
  _reviewId:any;


  fireSendCakeDetailsEvent(cake) {
    this.sendCakeDetails.emit(cake);
  }

  fireSubmitNewReviewEvent(cake) {
    this._review['id'] = cake['_id']
    console.log(cake)
    console.log(this._review)
    this.sendNewReview.emit(this._review);
  }

  constructor() { 
    
  }

  ngOnInit() {
    this._review = { rating: "", review: "", id: "" };
  }

}
