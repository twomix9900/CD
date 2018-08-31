import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomRaceComponent } from './random-race.component';

describe('RandomRaceComponent', () => {
  let component: RandomRaceComponent;
  let fixture: ComponentFixture<RandomRaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomRaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
