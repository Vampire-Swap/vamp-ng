import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolBannerComponent } from './pool-banner.component';

describe('PoolBannerComponent', () => {
  let component: PoolBannerComponent;
  let fixture: ComponentFixture<PoolBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
