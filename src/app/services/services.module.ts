// home.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { RouterModule, Routes } from '@angular/router';
import { SubServicesComponent } from './subServices/sub-services/sub-services.component';
import { SubServicesDetailComponent } from './sub-services-detail/sub-services-detail.component';
import { ServicesListComponent } from './services-list/services-list.component';

const routes: Routes = [
  { path: '', component: ServicesComponent }, // Main Services Page
  { path: ':id/sub-services', component: SubServicesComponent }, // Sub-Services Page
  {
    path: ':id/sub-services/:subServiceId/services',
    component: ServicesListComponent,
  }, // Services from Sub-Service
  { path: ':id/services', component: ServicesListComponent }, // Services from Main Service (if no sub-services)
  {
    path: ':id/sub-services/:subServiceId/services/:serviceId',
    component: SubServicesDetailComponent,
  }, // Service Details
  {
    path: ':id/services/:serviceId',
    component: SubServicesDetailComponent,
  }, // Service Details
];

@NgModule({
  declarations: [
    ServicesComponent,
    SubServicesComponent,
    SubServicesDetailComponent,
    ServicesListComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ServicesModule {}
