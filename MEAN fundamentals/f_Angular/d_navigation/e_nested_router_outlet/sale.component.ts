export class SaleComponent implements OnInit {
  constructor(private _route: ActivatedRoute){}
  ngOnInit(){
      // note the use of .parent
      this._route.parent.params.subscribe(params => console.log(`The parent params: ${params}`))
  }
}