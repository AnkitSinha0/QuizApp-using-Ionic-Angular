import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  ]
})
export class AboutusPage implements OnInit {

  aboutText: string = `
    Welcome to QuizzyApp! 🎉
    
    QuizzyApp is your go-to platform for interactive and fun quizzes designed to challenge your mind and boost your knowledge. 
    Our mission is to make learning engaging, exciting, and visually delightful, bringing the comic-style fun right to your fingertips.
    
    Whether you’re a student aiming to improve your skills, a trivia enthusiast, or someone who loves testing their brain, QuizzyApp has something for everyone. 
    Our platform features a wide variety of quiz topics, ranging from science, history, and technology, to pop culture, anime, and general knowledge.
    
    We believe that learning should never be boring! That’s why every quiz is crafted with colorful comic-style designs, playful animations, and instant feedback to make your experience as enjoyable as possible.

  `;

  constructor() { }

  ngOnInit() { }
}
