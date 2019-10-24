import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSessaoComponent } from './update-sessao.component';

describe('UpdateSessaoComponent', () => {
  let component: UpdateSessaoComponent;
  let fixture: ComponentFixture<UpdateSessaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSessaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSessaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
