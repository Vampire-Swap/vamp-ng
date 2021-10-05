import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VampireNavbarComponent } from './vampire-navbar.component';

describe('VampireNavbarComponent', () => {
  let component: VampireNavbarComponent;
  let fixture: ComponentFixture<VampireNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VampireNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VampireNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
