import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsBannerComponent } from './stats-banner.component';

describe('StatsBannerComponent', () => {
  let component: StatsBannerComponent;
  let fixture: ComponentFixture<StatsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
