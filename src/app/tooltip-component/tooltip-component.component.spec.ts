import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipComponentComponent } from './tooltip-component.component';

describe('TooltipComponentComponent', () => {
  let component: TooltipComponentComponent;
  let fixture: ComponentFixture<TooltipComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooltipComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TooltipComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
