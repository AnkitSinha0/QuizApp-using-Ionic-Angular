import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonIcon , IonContent, IonHeader,  IonToolbar, IonButton, IonImg, IonInput, ToastController } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { homeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonIcon , IonContent, IonHeader,  IonToolbar, CommonModule, FormsModule, IonButton, IonImg, IonInput]
})
export class ProfilePage implements OnInit {

  username: string = '';
  selectedAvatar: string = '';
  avatars: string[] = [
    'assets/avatar1.png',
    'assets/avatar2.png',
    'assets/avatar3.png',
    'assets/avatar4.png',

  ];

  constructor(private toastCtrl: ToastController, private router: Router) {  addIcons({homeOutline}); }

  ngOnInit() {
    // Load saved values from localStorage if available
    const savedName = localStorage.getItem('username');
    const savedAvatar = localStorage.getItem('avatar');
    this.username = savedName || 'Ankit';
    this.selectedAvatar = savedAvatar || this.avatars[0];
  }

  selectAvatar(avatar: string) {
    this.selectedAvatar = avatar;
  }

  async saveProfile() {
    localStorage.setItem('username', this.username);
    localStorage.setItem('avatar', this.selectedAvatar);

    // Show toast confirmation
    const toast = await this.toastCtrl.create({
      message: 'Profile saved!',
      duration: 2000,
      color: 'tertiary',
      position: 'bottom'
    });
    toast.present();
  }

  goHome() {
    this.router.navigate(['/tabs/tab1']); // Adjust home route
  }
}
