import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DitePlanComponent } from './dite-plan.component';

describe('DitePlanComponent', () => {
  let component: DitePlanComponent;
  let fixture: ComponentFixture<DitePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DitePlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DitePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
