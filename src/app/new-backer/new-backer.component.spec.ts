/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewBackerComponent } from './new-backer.component';

describe('NewBackerComponent', () => {
  let component: NewBackerComponent;
  let fixture: ComponentFixture<NewBackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
