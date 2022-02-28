import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderstyleComponent } from './headerstyle.component';

describe('HeaderstyleComponent', () => {
  let component: HeaderstyleComponent;
  let fixture: ComponentFixture<HeaderstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
