import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightComponentComponent } from './highlight-component.component';

describe('HighlightComponentComponent', () => {
  let component: HighlightComponentComponent;
  let fixture: ComponentFixture<HighlightComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighlightComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
