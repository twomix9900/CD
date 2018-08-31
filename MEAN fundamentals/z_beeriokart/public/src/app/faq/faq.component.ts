import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent implements OnInit {

  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  navigateToAddGroup() {
    this._router.navigateByUrl('/add-groups');
  }
}
