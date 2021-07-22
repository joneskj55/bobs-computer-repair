/*
============================================
; Title:  services.service.ts
; Author: Kevin Jones
; Date: 21 July 2021
; Description: Services service file
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { IService } from '../service.interface';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  services: Array<IService>; // services array
  parts: number;
  hours: number;

  // get services from services.service
  constructor(private servicesService: ServicesService) {
    this.services = servicesService.getServices();
  }

  // clear checkboxes
  clearCheckboxes(): void {
    this.services.forEach((service: IService) => {
      service.checked = false;
    });
  }

  // clear inputs
  clearInputs(): void {
    this.parts = 0;
    this.hours = 0;
  }

  // calculate total cost
  calculateTotalCost(): number {
    let totalCost = 0;
    this.services.forEach((service: IService) => {
      if (service.checked) {
        totalCost += service.price;
      }
    });
    return totalCost;
  }

  ngOnInit(): void {}
}
