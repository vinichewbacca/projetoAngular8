import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirFuncionarioComponent } from './inserir-funcionario.component';

describe('InserirFuncionarioComponent', () => {
  let component: InserirFuncionarioComponent;
  let fixture: ComponentFixture<InserirFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
