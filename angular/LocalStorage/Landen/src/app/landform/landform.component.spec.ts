import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandformComponent } from './landform.component';

describe('LandformComponent', () => {
  let component: LandformComponent;
  let fixture: ComponentFixture<LandformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
