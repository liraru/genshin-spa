import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnedCharactersComponent } from './owned-characters.component';

describe('OwnedCharactersComponent', () => {
  let component: OwnedCharactersComponent;
  let fixture: ComponentFixture<OwnedCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnedCharactersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnedCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
