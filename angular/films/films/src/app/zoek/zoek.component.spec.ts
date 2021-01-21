import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoekComponent } from './zoek.component';

describe('ZoekComponent', () => {
  let component: ZoekComponent;
  let fixture: ComponentFixture<ZoekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
