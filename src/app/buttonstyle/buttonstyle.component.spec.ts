import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonstyleComponent } from './buttonstyle.component';

describe('ButtonstyleComponent', () => {
  let component: ButtonstyleComponent;
  let fixture: ComponentFixture<ButtonstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
