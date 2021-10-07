import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VampireFooterComponent } from './vampire-footer.component';

describe('VampireFooterComponent', () => {
  let component: VampireFooterComponent;
  let fixture: ComponentFixture<VampireFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VampireFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VampireFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
