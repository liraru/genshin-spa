import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResinPlanComponent } from './resin-plan.component';

describe('ResinPlanComponent', () => {
  let component: ResinPlanComponent;
  let fixture: ComponentFixture<ResinPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResinPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResinPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
