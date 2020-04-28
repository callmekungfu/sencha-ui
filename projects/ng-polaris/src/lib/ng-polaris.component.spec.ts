import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPolarisComponent } from './ng-polaris.component';

describe('NgPolarisComponent', () => {
  let component: NgPolarisComponent;
  let fixture: ComponentFixture<NgPolarisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgPolarisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPolarisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
