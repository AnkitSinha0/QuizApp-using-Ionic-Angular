import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent],
})
export class Tab3Page {
  services = [
    { name: 'Login', route: '/login' },
    { name: 'Signup', route: '/register' },
    { name: 'Terms and Conditions', route: '/terms' },
    { name: 'About Us', route: '/aboutus' },

  ];

  constructor(private router: Router) {}

  navigateTo(service: any) {
    if(service.route) {
      this.router.navigate([service.route]);
    }
  }
}
