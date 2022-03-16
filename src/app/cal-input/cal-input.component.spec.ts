import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalInputComponent } from './cal-input.component';

describe('CalInputComponent', () => {
  let component: CalInputComponent;
  let fixture: ComponentFixture<CalInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
