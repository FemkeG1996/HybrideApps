import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HondenComponent } from './honden.component';

describe('HondenComponent', () => {
  let component: HondenComponent;
  let fixture: ComponentFixture<HondenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HondenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HondenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
