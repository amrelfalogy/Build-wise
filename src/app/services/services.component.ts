import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../models/service.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  mainServices: MainService[] = [];

  constructor(private serviceService: ServiceService, private router: Router) {
    this.mainServices = this.serviceService.getServices();
  }

  navigateToService(service: MainService) {
    if (service.subServices && service.subServices.length > 0) {
      this.router.navigate(['/services', service.id, 'sub-services']);
    } else {
      this.router.navigate(['/services', service.id, 'services']);
    }
  }
}
