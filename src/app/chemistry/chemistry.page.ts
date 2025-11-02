import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonIcon, IonButton, IonContent, IonHeader, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBackCircleOutline } from 'ionicons/icons';

interface Level {
  number: number;
  attempted: boolean;
  accuracy?: number;
}

@Component({
  selector: 'app-chemistry',
  templateUrl: './chemistry.page.html',
  styleUrls: ['./chemistry.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonContent, IonHeader, IonToolbar, CommonModule, FormsModule]
})
export class ChemistryPage {
  constructor(private router: Router) {
    addIcons({ arrowBackCircleOutline });
    this.loadScores();
  }

  filter: 'all' | 'attempted' | 'nonAttempted' = 'all';

  levels: Level[] = [
    { number: 1, attempted: false },
    { number: 2, attempted: false },
    { number: 3, attempted: false }
  ];

  selectedLevel: Level | null = null;
  showModal: boolean = false;

  // Load accuracy from localStorage
  loadScores() {
    this.levels.forEach(level => {
      const key = `chemistry-level-${level.number}`;
      const data = localStorage.getItem(key);
      if (data) {
        const parsed = JSON.parse(data);
        if (parsed.accuracy !== undefined) {
          level.attempted = true;
          level.accuracy = parsed.accuracy;
        }
      }
    });
  }

  filteredLevels(): Level[] {
    switch (this.filter) {
      case 'attempted':
        return this.levels.filter(l => l.attempted);
      case 'nonAttempted':
        return this.levels.filter(l => !l.attempted);
      case 'all':
      default:
        return this.levels;
    }
  }

  openLevelModal(level: Level) {
    this.selectedLevel = level;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedLevel = null;
  }

  takeTest(level: Level) {
    this.router.navigate(['/quiz', 'chemistry', level.number]);
    this.closeModal();
  }

  goToTabs2() {
    this.router.navigate(['/tabs/tab2']);
  }
}
