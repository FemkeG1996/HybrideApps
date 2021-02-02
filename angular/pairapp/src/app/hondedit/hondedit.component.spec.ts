import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HondeditComponent } from './hondedit.component';

describe('HondeditComponent', () => {
  let component: HondeditComponent;
  let fixture: ComponentFixture<HondeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HondeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HondeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
