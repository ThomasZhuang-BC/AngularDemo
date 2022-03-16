import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalOutPutComponent } from './cal-out-put.component';

describe('CalOutPutComponent', () => {
  let component: CalOutPutComponent;
  let fixture: ComponentFixture<CalOutPutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalOutPutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalOutPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
