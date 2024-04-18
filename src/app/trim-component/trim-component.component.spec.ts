import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimComponentComponent } from './trim-component.component';

describe('TrimComponentComponent', () => {
  let component: TrimComponentComponent;
  let fixture: ComponentFixture<TrimComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrimComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrimComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
