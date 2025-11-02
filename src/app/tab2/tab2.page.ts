import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonCard, IonCardHeader, IonCardTitle, IonAvatar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

interface Subject {
  name: string;
  icon: string;
  comingSoon?: boolean;
}

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonAvatar
  ],
})
export class Tab2Page implements OnInit {
  username: string = '';
  avatarUrl: string = '';
  logoUrl = 'assets/logo.png';

  searchText: string = '';

  subjects: Subject[] = [
    { name: 'Physics', icon: 'assets/phy.png' },
    { name: 'Chemistry', icon: 'assets/chem.png' },
    { name: 'Biology', icon: 'assets/bio.png' },
    { name: 'Math', icon: 'assets/math.png' },
    { name: 'General Knowledge', icon: 'assets/gk.png', comingSoon: true },
    { name: 'Geography', icon: 'assets/geo.png', comingSoon: true },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.username = localStorage.getItem('username') || 'Ankit';
    this.avatarUrl = localStorage.getItem('avatar') || 'assets/avatar.png';
  }

  filteredSubjects(): Subject[] {
    if (!this.searchText) return this.subjects;
    return this.subjects.filter(s =>
      s.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  navigateToSubject(subject: Subject) {
    if (subject.comingSoon) return;

    switch (subject.name.toLowerCase()) {
      case 'math':
        this.router.navigate(['/maths']);
        break;
      case 'physics':
        this.router.navigate(['/physics']);
        break;
      case 'chemistry':
        this.router.navigate(['/chemistry']);
        break;
      case 'biology':
        this.router.navigate(['/biology']);
        break;
      case 'general knowledge':
        this.router.navigate(['/gk']);
        break;
    }
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
