import { Component, OnInit } from '@angular/core';
import { IService } from '../service.interface';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  services: Array<IService>;

  constructor(private servicesService: ServicesService) {
    this.services = servicesService.getServices();
  }

  ngOnInit(): void {}
}
