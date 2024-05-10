import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionadoComponent } from './condicionado.component';

describe('CondicionadoComponent', () => {
  let component: CondicionadoComponent;
  let fixture: ComponentFixture<CondicionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CondicionadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CondicionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
