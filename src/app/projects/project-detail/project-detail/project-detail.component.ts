import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageDialogComponent } from 'src/app/image-dialog/image-dialog.component';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  project: any;
  selectedImage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    const projectId = this.route.snapshot.params['id'];
    // Mock project data (Replace with API call)
    this.project = {
      id: 1,
      title: 'Al Shaya Tower',
      images: [
        'assets/imgs/projects/alshaya.jpeg',
        'assets/imgs/projects/alshaya1.jpeg',
        'assets/imgs/projects/alshaya2.jpeg',
        'assets/imgs/projects/alshaya3.jpeg',
        'assets/imgs/projects/alshaya4.jpeg',
        'assets/imgs/projects/alshaya5.jpeg',
        'assets/imgs/projects/alshaya6.jpeg',
        'assets/imgs/projects/alshaya7.jpeg',
        'assets/imgs/projects/alshaya8.jpeg',
        'assets/imgs/projects/alshaya9.jpeg',
        'assets/imgs/projects/alshaya10.jpeg',
        'assets/imgs/projects/alshaya11.jpeg',
        'assets/imgs/projects/alshaya12.jpeg',
        'assets/imgs/projects/alshaya13.jpeg',
        'assets/imgs/projects/alshaya14.jpeg',
        // Add other images
      ],
      location: 'Al Mirqab District, Kuwait City, Kuwait',
      description:
        'The Al Shaya Tower, also known as Burj Alshaya, is a landmark development in Kuwait City, Kuwait. This iconic complex comprises two main towers: West Tower with 45 floors and East Tower with 22 floors.',
      completionYear: '2017',
      constructionMaterials: [
        {
          name: 'Post-Tensioning Concrete',
          description:
            'Used to enhance the structural strength of both towers.',
        },
        {
          name: 'Elastomeric Bearings',
          description:
            'Applied for movement control and load distribution in buildings.',
        },
        {
          name: 'Expansion Joints',
          description:
            'Implemented for thermal movement management, ensuring longevity and durability.',
        },
      ],
    };
    this.selectedImage = this.project.images[0];
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }

  slideImage(direction: number) {
    const currentIndex = this.project.images.indexOf(this.selectedImage);
    const newIndex =
      (currentIndex + direction + this.project.images.length) %
      this.project.images.length;
    this.selectedImage = this.project.images[newIndex];
  }

  openDialog() {
    this.dialog.open(ImageDialogComponent, {
      data: {
        image: this.selectedImage,
        title: this.project.title,
      },
      panelClass: 'custom-dialog',
    });
  }

  goBack() {
    this.router.navigate(['./projects']);
  }
}
