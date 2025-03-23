import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../service.service';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-sub-services-detail',
  templateUrl: './sub-services-detail.component.html',
  styleUrls: ['./sub-services-detail.component.css'],
})
export class SubServicesDetailComponent {
  service?: Service;

  constructor(
    private route: ActivatedRoute,
    private serviceService: ServiceService
  ) {
    this.route.params.subscribe((params) => {
      const serviceId = +params['serviceId'];
      this.service = this.serviceService.getServiceDetails(serviceId);
    });
  }
}
