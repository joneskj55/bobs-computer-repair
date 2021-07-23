/*
============================================
; Title:  home.component.spec.ts
; Author: Angular CLI
; Modified by: Kevin Jones
; Date: 23 July 2021
; Description: Home component unit test
;===========================================
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test that servicesBtn routes to services page
  it('should route to services page', () => {
    component.servicesBtnClicked();
    expect(component.router.url).toEqual('/services');
  });
});
