import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarReceitaComponent } from './buscar-receita.component';

describe('BuscarReceitaComponent', () => {
  let component: BuscarReceitaComponent;
  let fixture: ComponentFixture<BuscarReceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarReceitaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
