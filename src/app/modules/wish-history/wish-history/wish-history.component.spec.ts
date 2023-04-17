import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishHistoryComponent } from './wish-history.component';

describe('WishHistoryComponent', () => {
  let component: WishHistoryComponent;
  let fixture: ComponentFixture<WishHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
