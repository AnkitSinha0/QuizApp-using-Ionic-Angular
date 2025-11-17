import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then(m => m.ProfilePage)
  },
  {
    path: 'maths',
    loadComponent: () => import('./maths/maths.page').then(m => m.MathsPage)
  },
  {
 
    path: 'quiz/:subject/:level',
    loadComponent: () => import('./quiz/quiz.page').then(m => m.QuizPage)
  },
  {
    path: 'physics',
    loadComponent: () => import('./physics/physics.page').then( m => m.PhysicsPage)
  },
  {
    path: 'chemistry',
    loadComponent: () => import('./chemistry/chemistry.page').then( m => m.ChemistryPage)
  },
  {
    path: 'biology',
    loadComponent: () => import('./biology/biology.page').then( m => m.BiologyPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'aboutus',
    loadComponent: () => import('./aboutus/aboutus.page').then( m => m.AboutusPage)
  },
  {
    path: 'terms',
    loadComponent: () => import('./terms/terms.page').then( m => m.TermsPage)
  },
];
