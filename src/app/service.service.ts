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
      img: 'assets/imgs/eng.webp',
      subServices: [
        {
          id: 1.1,
          name: 'Post Tensioning',
          img: 'assets/imgs/icons/PTicon.jpg',
          bgImg: 'assets/imgs/bg/PT.jpg',
          
          details: [
            {
              title: 'What Is Post-Tensioning?',
              content:
                'The mechanics of materials is a term used to describe how different types of materials behave under stress. <br /> ' +
                'Standard concrete responds well to compressive stress but poorly to tensile stress; therefore, reinforcement is used to improve the strength of the material. The concrete resists compressive stress, and the reinforcement provides strength against the tensile stress. <br /> ' +
        'The term post- tensioned concrete is used when a compressive stress is applied to the concrete through the use of prestressing steel.',
            },
          ],

          components: [
            {
              name: 'Anchorages',
              description: 'Flat and Round',
              images: ['anchorages1.jpeg', 'anchorages2.jpeg'],
            },
            {
              name: 'Steel Strands, Uncoated Seven-Wire for Post Tensioning ',
              description:
                'Common nominal diameters: 12.7mm, 15.24mm, and 5.7mm. <br />' +
                'Specifications: We comply with the international standard ASTM International – A416 and British Standard.',
              images: ['steelStand1.jpeg', 'steelStand2.jpeg'],
            },
            {
              name: 'Galvanized/Plastic Ducts',
              images: ['galvanized.jpeg', 'plastic.jpeg'],
            },
            {
              name: 'Grouting',
              description:
                'Cementitious grout for post-tensioning applications is usually a combination of cement and water, along with admix tures necessary to obtain required properties such as fluidity, low permeability, bleed resistance, and stability. <br /> <br />' +
                'Function of the grout: <br />' +
                '-	Provide a continuous bond between the strand and the duct. <br />' +
                '-	Increase protection against corrosion. <br />' +
                '-	Provide a non-conductive environment for corrosion.',
              images: [],
            },
          ],

          types: [
            {
              name: 'Bonded Post-Tensioning',
              description:
                'Tendon is bonded to the concrete (Common in Middle East). <br />' +
                'Bond is achieved throughout the length of the tendon by a cementitious matrix called grout. <br /> ' +
                'Bond between the strand and the concrete is achieved through the duct after Grouting. <br />' +
                'PT force at every section is a function of the deformation of the concrete (strain compatibility). <br />' +
                'Various systems, components and equipment. <br />',
            },
            {
              name: 'Unbonded Post-Tensioning',
              description:
                'Tendon is not bonded to the surrounding concrete. <br />' +
                'PT force is transmitted to the structure by means of the anchorages. <br /> ' +
                'Systems and equipment. <br />' +
                'Function of the coated tendon. <br />' +
                'Construction. <br />',
            },
          ],
          applications: [
            {
              description:
                '•	Buildings <br />' +
                '•	Bridges <br />' +
                '•	Slab on Ground <br />' +
                '•	Containments <br />' ,
            },
          ],
          services: [
            {
              id: 1,
              name: 'for Buildings',
              description:
                'Post-tensioned concrete provides a light, structurally efficient, durable solution for the construction of commercial office buildings, residential apartments, high-rise condominiums, and mixed-use facilities such as hotels. Longer, thinner slabs result in greater design flexibility and require less reinforcing steel to achieve the same strength as other methods of construction. <br /> <br /> ' +
                'The Post Tensioning technology can be used in almost all types of buildings and offers many advantages. <br />' +
                ' •	Cost efficiency <br/> •	Efficient Construction Timelines <br/> •	Crack Control <br/> •	A Sustainable Approach to Building <br/> •	Better Performance <br/>',
              scope:
                '- Design and Shop Drawings with elongation calculations  for the Post Tensioning structure.<br/>' +
                '- Supply of Post Tensioning components (Strands, Anchorages, and Ducts).<br/>' +
                '- Provision of Post Tensioning Equipment.<br/>' +
                '- Provision of Specialist team for Supervision.',
              dataSheet: '1.1 Data Sheet',
              img: 'assets/imgs/bg/PT4buildings.jpeg',
              bgImg: 'assets/imgs/bg/PT4buildings.jpeg',
            },
            {
              id: 2,
              name: 'for Bridges',
              description:
                'Post-tensioning makes possible the cost-effective construction of high-quality bridges over a wide range of conditions and span lengths including highway alignment. Bridge structures constructed using post-tensioning have high intrinsic durability and are able to be built quickly with minimal impact on the human and natural environment. <br /> Further, structures constructed using post-tensioning also benefit from ability of the methods to limit cracking, reduced structural depth, ease of accommodating curved roadway alignment and low maintenance costs. And, these benefits do not come at the expense of aesthetic expression. <br /> <br />' ,
              scope:
                ' Shop Drawings and elongation calculations for the Post Tensioning Structure.<br/>' +
                ' Supply of Post Tensioning components (Strands, Anchorages, and Ducts).<br/>' +
                ' Provision of Post Tensioning Equipment.<br/>' +
                ' Provision of Specialist team for Supervision.',
              dataSheet: '2.1 Data Sheet',
              img: 'assets/imgs/bg/PT4bridges.jpeg',
              bgImg: 'assets/imgs/bg/PT4bridges.jpeg',
            },
          ],
        },
        {
          id: 2,
          name: 'Retained Earth',
          description:
            'Solutions for reinforced soil walls, modular block walls, and gabion structures.',
          img: 'assets/imgs/icons/Retained.jpg',
          bgImg: 'assets/imgs/bw.webp',
          services: [
            {
              id: 3,
              name: 'MSE Walls',
              description:
                'MSE Retaining Walls are also known as Mechanically Stabilised Earth (MSE) retaining walls. Commonly referred to as RE walls, they are a popular choice in modern construction due to their durability and cost-effectiveness. MSE retaining walls consist of layers of soil. The soil is reinforced with materials like geogrids or steel strips. This reinforcement provides essential stability against earth pressures. <br /> <br /> ' +
                'MSE retaining walls means mechanically stabilised earth or reinforced earth. This is an earth retaining system where compacted granular soil is reinforced with horizontal layers of steel strips or geo-synthetic materials. This compacted earth is held together with thin facing elements made of Precast concrete, shotcrete or weld mesh reinforced panels. They are used extensively for constructing retaining walls, bridge abutments, highway wall systems, dykes, etc. MSE retaining walls cost almost half what a concrete structure would have cost for similar uses. <br /> <br /> <br /> '+
                '<strong> Design basis of RE walls/MSE walls </strong> <br /> ' +
                'When designing an MSE retaining wall, consider soil properties, such as bearing capacity and drainage, to ensure stability. Select appropriate reinforcement materials like geogrids or strips based on load requirements. Proper wall height and slope must be determined to manage earth pressures. Additionally, incorporate effective drainage systems to prevent water buildup behind the RE wall. <br /> <br/>'+
                '<strong>Advantages of MSE Wall: </strong> <br />'+
                '•	Cost effectiveness <br /> •	Rapid Construction <br /> •	Reliability <br /> •	Adaptability <br />' ,
              scope:
                '• Design and Shop Drawings.<br/>' +
                '• Supply of MSE Wall materials.<br/>' +
                '• Casting of Panels with labor and equipment.<br/>' +
                '• Installation of Panels with labor and equipment.',
              dataSheet: '3.1 Data Sheet',
              img: 'assets/imgs/bg/MSE-Wall.jpg',
              bgImg: 'assets/imgs/bg/MSE-Wall.jpg',
              imgs: [ // Additional images
                'assets/imgs/bg/MSE-Wall2.jpg',
                'assets/imgs/bg/MSE-Wall3.jpg',                
              ]
            },
            {
              id: 4,
              name: 'Modular Block',
              description:
                'Modular Block Wall System is a proven solution in making retaining walls and bridge abutments. This wall system is built by reinforcing soil mass with uniaxial geogrids. The high efficiency connection between the facing and the geogrids is the best feature of this system. With this feature, it can allow rapid and economical construction, reduction of conventional construction time, avoidance of the need for specialist skills and often the utilization of site-won materials. Hence, cost of constructing this kind of wall system is surely cheaper than the conventional wall systems.',
              scope:
                '- Design and Shop Drawings.<br/>' +
                '- Supply of Modular Block Wall System materials.<br/>' +
                '- Installation of Modular Block Wall System.',
              dataSheet: '4.1 Data Sheet',
              img: 'assets/imgs/bg/Moduler-Block.jpg',
              bgImg: 'assets/imgs/bg/Moduler-Block.jpg',
              imgs: [ // Additional images
                'assets/imgs/bg/Moduler-Block1.jpg',
                'assets/imgs/bg/Moduler-Block2.jpg',                
              ] 
            },
            {
              id: 5,
              name: 'Gabion Walls',
              description:
                'Gabion walls are executed mainly in the purpose of soil stabilization behind the wall, but it can also be executed as a cover wall. The wall si made from gabion baskets that are stacked in one or more rows, depending on the height of the wall. Baskets have a cage shape and are closed on all sides. They are made from a galvanized hexagonal meshes and brocken rock that are placed in the baskets. Retaining structures are formed by stacking gabion baskets in a proper schedule and present an alternative solution for concrete structures in the area of soil stabilization.',
              scope:
                '- Design and Shop Drawings.<br/>' +
                '- Supply of Modular Block Wall System materials.<br/>' +
                '- Installation of Modular Block Wall System.',
              dataSheet: '4.1 Data Sheet',
              img: 'assets/imgs/bg/Gabion-Walls1.jpg',
              bgImg: 'assets/imgs/bg/Gabion-Walls1.jpg',
              imgs: [ // Additional images
                'assets/imgs/bg/Gabion-Walls2.jpg',
                'assets/imgs/bg/Gabion-Walls3.png',                
              ]
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
      img: 'assets/imgs/bg/Expansion-Joints.png',
      services: [
        {
          id: 6,
          name: 'Rockfall Barrier',
          description:
            'Structures designed to protect the areas around a slope from falling rocks include mesh or cable nets, barriers and fences, and catchment areas (ditches at the toe of a slope, designed to prevent rockfall from reaching the highway).',
          scope:
            ' Design of Rockfall Barriers.<br/>' +
            ' Supply of Rockfall Barrier Systems.',
          dataSheet: '2.1 Data Sheet (To be uploaded later)',
          img: 'assets/imgs/icons/Rockfall.jpg',
          bgImg: 'assets/imgs/bg/Rockfall-barrier.jpg',
          imgs: [ // Additional images
            'assets/imgs/bg/Rockfall-barrier.jpg'
          ]
        },
        {
          id: 7,
          name: 'Bridge Bearings',
          description:
            'A bridge bearing is a component of a bridge which typically provides a resting surface between bridge piers and the bridge deck. The purpose of a bearing is to allow controlled movement and thereby reduce the stresses involved. Possible causes of movement are thermal expansion and contraction, creep, shrinkage, or fatigue due to the properties of the material used for the bearing. External sources of movement include the settlement of the ground below, thermal expansion, and seismic activity. There are several different types of bridge bearings which are used depending on a number of different factors including the bridge span, loading conditions, and performance specifications. The oldest form of bridge bearing is simply two plates resting on top of each other. A common form of modern bridge bearing is the elastomeric bridge bearing. Another type of bridge bearing is the mechanical bridge bearing. There are several types of mechanical bridge bearing, such as the pinned bearing, which in turn includes specific types such as the rocker bearing, and the roller bearing. Another type of mechanical bearing is the fixed bearing, which allows rotation, but not other forms of movement.',
          scope:
            ' Design of Bearings.<br/>' +
            ' Supply of Elastomeric and Pot Bearings.',
          dataSheet: '2.2 Data Sheet (To be uploaded later)',
          img: 'assets/imgs/icons/Bearing.jpg',
          bgImg: 'assets/imgs/bg/Bridge-Bearing.jpg',
          imgs: [ // Additional images
            'assets/imgs/bg/Bridge-Bearing.jpg',
            'assets/imgs/icons/Bearing.jpg',
          ]
        },
        {
          id: 8,
          name: 'Expansion Joints',
          description:
            'Bridge expansion joints are designed to allow for continuous traffic between structures while accommodating movement, shrinkage, and temperature variations on reinforced and prestressed concrete, composite, and steel structures. They stop the bridge from bending out of place in extreme conditions, and also allow enough vertical movement to permit bearing replacement [1] without the need to dismantle the bridge expansion joint. There are various types, which can accommodate movement from 30 to 1,000 millimetres.',
          scope:
            ' Design of Expansion Joints.<br/>' +
            ' Supply of Expansion Joints.',
          dataSheet: '2.3 Data Sheet (To be uploaded later)',
          img: 'assets/imgs/bg/Expansion-Joints.png',
          bgImg: 'assets/imgs/bg/Expansion-Joints.png',
          imgs: [ // Additional images
            'assets/imgs/bg/Expansion-Joints.png'
          ]
        },
      ],
    },
    {
      id: 3,
      name: 'Engineering Services',
      description:
        'Offering expert engineering solutions tailored to your specific project requirements, from initial design to completion.',
      img: 'assets/imgs/s4.webp',
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
