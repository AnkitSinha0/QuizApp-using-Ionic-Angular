import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, IonHeader, IonToolbar } from '@ionic/angular/standalone';
import { MATH_QUIZZES, Question, LevelQuiz } from '../data/math-quiz'; // Import both quizzes
import { PHYSICS_QUIZZES } from '../data/physics-quiz';
import { CHEMISTRY_QUIZZES } from '../data/chemistry-quiz';
import { BIOLOGY_QUIZZES } from '../data/biology-quiz';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule]
})
export class QuizPage implements OnInit {

  subject!: string;
  level!: number;
  questions: Question[] = [];
  currentIndex = 0;
  selectedOption: number | null = null;
  score = 0;

  showResultModal = false;
  showHintModal = false;
  timeLeft = 30;
  timerRunning = true;
  timerInterval: any;
  userAnswers: (number | null)[] = [];

private quizDataMap: { [key: string]: LevelQuiz[] } = {
  maths: MATH_QUIZZES,
  physics: PHYSICS_QUIZZES,
  chemistry: CHEMISTRY_QUIZZES,
  biology: BIOLOGY_QUIZZES 
};

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.subject = this.route.snapshot.paramMap.get('subject')!.toLowerCase();
    this.level = Number(this.route.snapshot.paramMap.get('level'));

    const subjectQuizzes = this.quizDataMap[this.subject];
    if (!subjectQuizzes) {
      console.error(`No quiz data found for subject: ${this.subject}`);
      return;
    }

    const levelData = subjectQuizzes.find(l => l.level === this.level);
    if (levelData) {
      this.questions = levelData.questions;
      this.userAnswers = Array(this.questions.length).fill(null);
    }

    this.startTimer();
  }

  startTimer() {
    this.timerRunning = true;
    this.timeLeft = 30;
    this.timerInterval = setInterval(() => {
      if (this.timerRunning) {
        this.timeLeft--;
        if (this.timeLeft <= 0) this.submitQuiz();
      }
    }, 1000);
  }

  stopTimer() {
    this.timerRunning = false;
  }

  selectOption(index: number) {
    this.selectedOption = index;
    this.userAnswers[this.currentIndex] = index;
  }

  nextQuestion() {
    if (this.selectedOption === this.questions[this.currentIndex].answer) {
      this.score++;
    }
    this.selectedOption = null;
    this.currentIndex++;
    if (this.currentIndex >= this.questions.length) {
      this.submitQuiz();
    }
  }

  submitQuiz() {
    clearInterval(this.timerInterval);
    this.showResultModal = true;
    const accuracy = Math.round((this.score / this.questions.length) * 100);

    const key = `${this.subject}-level-${this.level}`;
    const data = { accuracy, answers: this.userAnswers };
    localStorage.setItem(key, JSON.stringify(data));
  }

  showHint() {
    this.showHintModal = true;
  }

  closeHintModal() {
    this.showHintModal = false;
  }

  closeResultModal() {
    this.showResultModal = false;
    this.router.navigate([`/${this.subject}`]); 
  }
}
