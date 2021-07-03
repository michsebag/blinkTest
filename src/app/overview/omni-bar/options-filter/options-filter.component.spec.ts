import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsFilterComponent } from './options-filter.component';

describe('OptionsFilterComponent', () => {
  let component: OptionsFilterComponent;
  let fixture: ComponentFixture<OptionsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
