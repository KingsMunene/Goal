import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsdetailsComponent } from './goalsdetails.component';

describe('GoalsdetailsComponent', () => {
  let component: GoalsdetailsComponent;
  let fixture: ComponentFixture<GoalsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
