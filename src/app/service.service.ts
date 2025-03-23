import { Injectable } from '@angular/core';
import { MainService, SubService } from './models/service.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private services: MainService[] = [
    {
      id: 1,
      name: 'Specialized Construction',
      description:
        'Combining innovation and expertise, we deliver specialized construction services, including post-tensioning, elastomeric bearings, and expansion joints for optimal structural performance.',
      img: 'assets/imgs/s3.jpg',
      subServices: [
        {
          id: 1.1,
          name: 'Post Tensioning',
          img: 'assets/imgs/bg/PT.jpg',
          details: [
            {
              title: 'What Is Post-Tensioning?',
              content:
                'Post-tensioning enhances the tensile strength of concrete by applying compressive stress through prestressing steel.',
            },
          ],

          components: [
            {
              name: 'Anchorages',
              description: 'Flat and Round',
              images: ['anchorages1.jpeg', 'anchorages2.jpeg'],
            },
            {
              name: 'Steel Strands (Uncoated Seven-Wire for Post-Tensioning)',
              description:
                'Common nominal diameters: 12.7mm, 15.24mm, and 5.7mm.' +
                'Specifications: We comply with the international standard ASTM International – A416 and British Standard',
              images: ['steelStand1.jpeg', 'steelStand2.jpeg'],
            },
            {
              name: 'Galvanized/Plastic Ducts',
              images: ['galvanized.jpeg', 'plastic.jpeg'],
            },
            {
              name: 'Grouting',
              description:
                'Cementitious grout with properties for fluidity, corrosion resistance, and stability.',
              images: [],
            },
          ],

          types: [
            {
              name: 'Bonded Post-Tensioning',
              description:
                'Tendon is bonded to the concrete (Common in Middle East).' +
                'Bond is achieved throughout the length of the tendon by a cementitious matrix called grout ' +
                'Bond between the strand and the concrete is achieved through the duct after Grouting' +
                'PT force at every section is a function of the deformation of the concrete (strain compatibility).' +
                'Various systems, components and equipment',
            },
            {
              name: 'Unbonded Post-Tensioning',
              description:
                'Tendon is not bonded to the surrounding concrete.' +
                'PT force is transmitted to the structure by means of the anchorages. ' +
                'Systems and equipment' +
                'Function of the coated tendon' +
                'Construction',
            },
          ],
          applications: [
            {
              description:
                'Building – Slabs and Beams' +
                'Bridges' +
                'Slab on Ground' +
                'Containments',
            },
          ],
          services: [
            {
              id: 1,
              name: 'for Buildings',
              description:
                'Post-tensioned concrete provides a light, structurally efficient, and durable solution for commercial buildings, residential apartments, high-rises, and mixed-use facilities.',
              scope:
                '- Design and Shop Drawings with elongation calculations.<br/>' +
                '- Supply of Post Tensioning components (Strands, Anchorages, and Ducts).<br/>' +
                '- Provision of Post Tensioning Equipment.<br/>' +
                '- Provision of Specialist team for Supervision.',
              dataSheet: '1.1 Data Sheet',
              img: 'assets/imgs/bg/PT4buildings.jpeg',
            },
            {
              id: 2,
              name: 'for Bridges',
              description:
                'Post-tensioning enables cost-effective construction of high-quality bridges, ensuring durability and minimal environmental impact.',
              scope:
                ' Shop Drawings and elongation calculations.<br/>' +
                ' Supply of Post Tensioning components (Strands, Anchorages, and Ducts).<br/>' +
                ' Provision of Post Tensioning Equipment.<br/>' +
                ' Provision of Specialist team for Supervision.',
              dataSheet: '2.1 Data Sheet',
              img: 'assets/imgs/bg/PT4bridges.jpeg',
            },
          ],
        },
        {
          id: 2,
          name: 'Retained Earth',
          description:
            'Solutions for reinforced soil walls, modular block walls, and gabion structures.',
          img: 'assets/imgs/s3.jpg',
          services: [
            {
              id: 3,
              name: 'MSE Walls',
              description:
                'Mechanically Stabilized Earth (MSE) walls provide cost-effective and durable solutions for highway and infrastructure projects.',
              scope:
                ' Design and Shop Drawings.<br/>' +
                ' Supply of MSE Wall materials.<br/>' +
                ' Casting of Panels with labor and equipment.<br/>' +
                ' Installation of Panels with labor and equipment.',
              dataSheet: '3.1 Data Sheet',
              img: 'assets/imgs/bg/MSE-Walls.jpg',
            },
            {
              id: 4,
              name: 'Modular Block & Gabion Walls',
              description:
                'Modular Block and Gabion Walls offer aesthetic, durable, and environmentally friendly solutions for retaining structures.',
              scope:
                '- Design and Shop Drawings.<br/>' +
                '- Supply of Modular Block Wall System materials.<br/>' +
                '- Installation of Modular Block Wall System.',
              dataSheet: '4.1 Data Sheet',
              img: 'assets/imgs/bg/Modular-Block.jpg',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Supply of Construction Materials',
      description:
        'We provide top-quality construction materials to support your projects, ensuring durability, safety, and long-term value.',
      img: 'assets/imgs/s2.jpg',
      services: [
        {
          id: 5,
          name: 'Rockfall Barrier',
          description:
            'Rockfall barriers protect areas around slopes from falling rocks using mesh or cable nets, barriers, fences, and catchment areas.',
          scope:
            ' Design of Rockfall Barriers.<br/>' +
            ' Supply of Rockfall Barrier Systems.',
          dataSheet: '2.1 Data Sheet (To be uploaded later)',
          img: 'assets/imgs/bg/Rockfall-barrier.jpg',
        },
        {
          id: 6,
          name: 'Bridge Bearings',
          description:
            'Bridge bearings provide a resting surface between bridge piers and decks, allowing controlled movement and reducing stresses.',
          scope:
            ' Design of Bearings.<br/>' +
            ' Supply of Elastomeric and Pot Bearings.',
          dataSheet: '2.2 Data Sheet (To be uploaded later)',
          img: 'assets/imgs/bg/Bridge-Bearings.jpg',
        },
        {
          id: 7,
          name: 'Expansion Joints',
          description:
            'Bridge expansion joints accommodate structural movement due to temperature changes, shrinkage, and traffic loads.',
          scope:
            ' Design of Expansion Joints.<br/>' +
            ' Supply of Expansion Joints.',
          dataSheet: '2.3 Data Sheet (To be uploaded later)',
          img: 'assets/imgs/bg/Expansion-Joints.png',
        },
      ],
    },
    {
      id: 3,
      name: 'Engineering Services',
      description:
        'Offering expert engineering solutions tailored to your specific project requirements, from initial design to completion.',
      img: 'assets/imgs/s4.jpg',
    },
  ];

  getServices(): MainService[] {
    return this.services;
  }

  /**  Get a specific Main Service by ID */
  getMainServiceById(mainServiceId: number): MainService | undefined {
    return this.services.find((service) => service.id === mainServiceId);
  }

  /**  Get Sub-Services by Main Service ID */
  getSubServices(mainServiceId: number) {
    const mainService = this.services.find(
      (service) => service.id === mainServiceId
    );
    return mainService?.subServices || [];
  }

  /**  Get a specific Sub-Service by ID */
  getSubServiceById(mainServiceId: number, subServiceId: number) {
    const mainService = this.services.find(
      (service) => service.id === mainServiceId
    );
    return mainService?.subServices?.find((sub) => sub.id === subServiceId);
  }

  /** Get Services from a Sub-Service */
  getServicesFromSubService(mainServiceId: number, subServiceId: number) {
    const subService = this.getSubServiceById(mainServiceId, subServiceId);
    return subService?.services || [];
  }

  /** Get Services directly from a Main Service (without Sub-Services) */
  getServicesFromMainService(mainServiceId: number) {
    const mainService = this.services.find(
      (service) => service.id === mainServiceId
    );
    return mainService?.services || [];
  }

  /**  Get Service Details by ID */
  getServiceDetails(serviceId: number) {
    for (const mainService of this.services) {
      // Check in services directly under mainService
      const service = mainService.services?.find((s) => s.id === serviceId);
      if (service) return service;

      // Check inside sub-services
      for (const subService of mainService.subServices || []) {
        const subServiceItem = subService.services?.find(
          (s) => s.id === serviceId
        );
        if (subServiceItem) return subServiceItem;
      }
    }
    return undefined;
  }
}
