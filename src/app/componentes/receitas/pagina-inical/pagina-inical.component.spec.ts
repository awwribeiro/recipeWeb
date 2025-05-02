import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInicalComponent } from './pagina-inical.component';

describe('PaginaInicalComponent', () => {
  let component: PaginaInicalComponent;
  let fixture: ComponentFixture<PaginaInicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaInicalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaInicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
