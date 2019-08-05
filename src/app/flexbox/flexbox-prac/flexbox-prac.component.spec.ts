import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxPracComponent } from './flexbox-prac.component';

describe('FlexboxPracComponent', () => {
  let component: FlexboxPracComponent;
  let fixture: ComponentFixture<FlexboxPracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexboxPracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexboxPracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
