import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFuncionarioComponent } from './update-funcionario.component';

describe('UpdateFuncionarioComponent', () => {
  let component: UpdateFuncionarioComponent;
  let fixture: ComponentFixture<UpdateFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
