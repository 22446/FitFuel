import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpersonaldataComponent } from './userpersonaldata.component';

describe('UserpersonaldataComponent', () => {
  let component: UserpersonaldataComponent;
  let fixture: ComponentFixture<UserpersonaldataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserpersonaldataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserpersonaldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
