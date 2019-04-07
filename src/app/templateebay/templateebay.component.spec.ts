import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateebayComponent } from './templateebay.component';

describe('TemplateebayComponent', () => {
  let component: TemplateebayComponent;
  let fixture: ComponentFixture<TemplateebayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateebayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateebayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
