import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawchartComponent } from './drawchart.component';

describe('DrawchartComponent', () => {
  let component: DrawchartComponent;
  let fixture: ComponentFixture<DrawchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
