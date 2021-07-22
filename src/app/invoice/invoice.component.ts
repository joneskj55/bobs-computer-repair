/*
============================================
; Title:  invoice.component.ts
; Author: Kevin Jones
; Date: 22 July 2021
; Description: Invoice dialog component TS file
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IService } from '../service.interface';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  services: Array<IService>;
  parts: number;
  hours: number;
  total: number;
  totalWithService: number;

  constructor(
    private dialogRef: MatDialogRef<InvoiceComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    // make payload available for the invoice dialog component
    const { services, parts, hours, total, totalWithService } = data;
    this.services = services;
    this.parts = parseFloat(parts);
    this.hours = parseFloat(hours);
    this.total = parseFloat(total);
    this.totalWithService = parseFloat(totalWithService);
  }

  ngOnInit(): void {}
}
