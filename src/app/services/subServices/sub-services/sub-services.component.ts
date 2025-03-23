import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../../service.service';
import { MainService, SubService } from '../../../models/service.model';

@Component({
  selector: 'app-sub-services',
  templateUrl: './sub-services.component.html',
  styleUrls: ['./sub-services.component.css'],
})
export class SubServicesComponent {
  subServices?: SubService[] = [];
  mainServiceId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceService: ServiceService
  ) {
    this.route.params.subscribe((params) => {
      this.mainServiceId = +params['id'];
      this.subServices = this.serviceService.getSubServices(this.mainServiceId);
    });
  }

  navigateToServices(subService: SubService) {
    this.router.navigate([
      '/services',
      this.mainServiceId,
      'sub-services',
      subService.id,
      'services',
    ]);
  }
}
