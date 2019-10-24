import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirSessaoComponent } from './inserir-sessao.component';

describe('InserirSessaoComponent', () => {
  let component: InserirSessaoComponent;
  let fixture: ComponentFixture<InserirSessaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirSessaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirSessaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
