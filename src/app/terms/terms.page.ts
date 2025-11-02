import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
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
    IonCardContent,
    IonButton
  ]
})
export class TermsPage implements OnInit {

  termsText: string = `
Welcome to QuizzyApp! 🎉

By using QuizzyApp, you agree to the following terms and conditions:

1. **Content Usage:** All quizzes, images, and text are the property of QuizzyApp and are meant for personal, non-commercial use only.

2. **Account Responsibility:** Users are responsible for maintaining the confidentiality of their account and password. Any activity under your account is your responsibility.

3. **Prohibited Actions:** Users must not attempt to hack, duplicate, or redistribute QuizzyApp content. Misuse may lead to account suspension.

4. **Data Privacy:** We respect your privacy. Personal information is stored securely and not shared with third parties without consent.

5. **Modifications:** QuizzyApp may update or modify these terms at any time. Continued use implies acceptance of new terms.

Enjoy learning, have fun, and challenge yourself responsibly! 🚀
  `;

  constructor(private router: Router) { }

  ngOnInit() { }

  goHome() {
    this.router.navigate(['/tabs/tab1']);
  }
}
