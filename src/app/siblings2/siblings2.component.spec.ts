import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Siblings2Component } from './siblings2.component';

describe('Siblings2Component', () => {
  let component: Siblings2Component;
  let fixture: ComponentFixture<Siblings2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Siblings2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Siblings2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
