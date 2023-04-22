import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullsModuleChartComponent } from './pulls-module-chart.component';

describe('PullsModuleChartComponent', () => {
  let component: PullsModuleChartComponent;
  let fixture: ComponentFixture<PullsModuleChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PullsModuleChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PullsModuleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
