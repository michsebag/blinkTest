import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiValueInputComponent } from './multi-value-input.component';

describe('MultiValueInputComponent', () => {
  let component: MultiValueInputComponent;
  let fixture: ComponentFixture<MultiValueInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiValueInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiValueInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
