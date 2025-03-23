import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../service.service';
import { Service } from '../../models/service.model';
import { SubService } from '../../models/service.model';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css'],
})
export class ServicesListComponent {
  services: Service[] = [];
  subServiceDetails?: SubService; // Store details of the sub-service
  mainServiceId: number = 0;
  subServiceId?: number;
  selectedComponent: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceService: ServiceService
  ) {
    this.route.params.subscribe((params) => {
      this.mainServiceId = +params['id'];
      this.subServiceId = params['subServiceId']
        ? +params['subServiceId']
        : undefined;

      console.log('🔵 Route Params:', params); // Log route parameters

      if (this.subServiceId) {
        this.subServiceDetails = this.serviceService.getSubServiceById(
          this.mainServiceId,
          this.subServiceId
        );
        console.log('🟡 SubService Details:', this.subServiceDetails); // Log subService details

        this.services = this.subServiceDetails?.services || [];
        console.log('🟢 Services from SubService:', this.services); // Log retrieved services
      } else {
        this.services = this.serviceService.getServicesFromMainService(
          this.mainServiceId
        );
        console.log('🟣 Services from MainService:', this.services); // Log retrieved services
      }
    });
  }

  navigateToServiceDetail(service: Service) {
    if (this.subServiceId) {
      this.router.navigate([
        '/services',
        this.mainServiceId,
        'sub-services',
        this.subServiceId,
        'services',
        service.id,
      ]);
    } else {
      this.router.navigate([
        '/services',
        this.mainServiceId,
        'services',
        service.id,
      ]);
    }
  }
  toggleComponentImages(component: any) {
    if (this.selectedComponent === component) {
      this.selectedComponent = null; // Hide images if clicking again
    } else {
      this.selectedComponent = component;
    }
  }
}
