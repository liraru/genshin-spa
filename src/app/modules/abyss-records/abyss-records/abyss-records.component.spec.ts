import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbyssRecordsComponent } from './abyss-records.component';

describe('AbyssRecordsComponent', () => {
  let component: AbyssRecordsComponent;
  let fixture: ComponentFixture<AbyssRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbyssRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbyssRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
