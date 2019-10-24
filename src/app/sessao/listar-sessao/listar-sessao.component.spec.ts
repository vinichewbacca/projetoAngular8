import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSessaoComponent } from './listar-sessao.component';

describe('ListarSessaoComponent', () => {
  let component: ListarSessaoComponent;
  let fixture: ComponentFixture<ListarSessaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSessaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSessaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
