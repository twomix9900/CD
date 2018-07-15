import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerTransactionDetailsComponent } from './ledger-transaction-details.component';

describe('LedgerTransactionDetailsComponent', () => {
  let component: LedgerTransactionDetailsComponent;
  let fixture: ComponentFixture<LedgerTransactionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedgerTransactionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerTransactionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
