import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { IonHeader, IonToolbar, IonContent, IonAvatar, createAnimation } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface SubjectStat {
  name: string;
  icon: string;
  score: number;
  grade?: string;
  color?: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [CommonModule, IonHeader, IonToolbar, IonContent, IonAvatar],
})
export class Tab1Page implements AfterViewInit {
  username: string = '';
  avatarUrl: string = '';
  logoUrl = 'assets/logo.png';

  subjects: SubjectStat[] = [
    { name: 'Maths', icon: 'assets/math.png', score: 0 },
    { name: 'Chemistry', icon: 'assets/chem.png', score: 0 },
    { name: 'Biology', icon: 'assets/bio.png', score: 0 },
    { name: 'Physics', icon: 'assets/phy.png', score: 0 },
  ];

  @ViewChildren('subjectCard', { read: ElementRef }) subjectCards!: QueryList<ElementRef>;
  private animations: any[] = [];

  constructor(private router: Router) {}

  ionViewWillEnter() {
    this.loadUserData();
    this.loadScores();
  }

  ngAfterViewInit() {
    this.startWiggle();
  }

  loadUserData() {
    this.username = localStorage.getItem('username') || 'Ankit';
    this.avatarUrl = localStorage.getItem('avatar') || 'assets/avatar.png';
  }

loadScores() {
  this.subjects.forEach(subject => {
    let totalScore = 0;
    let totalQuestions = 0;

   
    for (let i = 1; i <= 7; i++) {
      const key = `${subject.name.toLowerCase()}-level-${i}`;
      const data = localStorage.getItem(key);
      if (data) {
        const parsed = JSON.parse(data);
        if (parsed.accuracy !== undefined) {
          totalScore += parsed.accuracy;
          totalQuestions++;
        }
      }
    }

 
    if (totalQuestions > 0) {
      subject.score = Math.round(totalScore / totalQuestions);
    }

    subject.grade = this.calculateGrade(subject.score);
    subject.color = this.gradeColor(subject.grade);
  });
}


  calculateGrade(score: number): string {
    if (score >= 90) return 'O';
    if (score >= 80) return 'A';
    if (score >= 70) return 'B';
    if (score >= 60) return 'C';
    return 'D';
  }

  gradeColor(grade: string): string {
    switch (grade) {
      case 'O': return '#00ff44';
      case 'A': return '#4CAF50';
      case 'B': return '#00c8ff';
      case 'C': return '#ffd000';
      case 'D': return '#ff0000';
      default: return '#ccc';
    }
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  startQuiz() {
    this.router.navigate(['/tabs/tab2']);
  }


  startWiggle() {
    this.subjectCards.forEach(card => {
      const anim = createAnimation()
        .addElement(card.nativeElement)
        .duration(800)
        .iterations(Infinity)
        .keyframes([
          { offset: 0, transform: 'rotate(0deg)' },
          { offset: 0.25, transform: 'rotate(1deg)' },
          { offset: 0.5, transform: 'rotate(-1deg)' },
          { offset: 0.75, transform: 'rotate(1deg)' },
          { offset: 1, transform: 'rotate(0deg)' },
        ]);
      anim.play();
      this.animations.push(anim);
    });
  }
}
