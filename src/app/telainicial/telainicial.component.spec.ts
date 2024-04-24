import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelainicialComponent } from './telainicial.component';

describe('TelainicialComponent', () => {
  let component: TelainicialComponent;
  let fixture: ComponentFixture<TelainicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelainicialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelainicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
