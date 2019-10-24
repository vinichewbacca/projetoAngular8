import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirClienteComponent } from './inserir-cliente.component';

describe('InserirClienteComponent', () => {
  let component: InserirClienteComponent;
  let fixture: ComponentFixture<InserirClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
