import { Component, EnvironmentInjector, inject, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, createAnimation } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { earthSharp, planetSharp, moonSharp } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon],
})
export class TabsPage implements AfterViewInit {
  public environmentInjector = inject(EnvironmentInjector);

  @ViewChild('tab1Button', { read: ElementRef }) tab1Button!: ElementRef;
  @ViewChild('tab2Button', { read: ElementRef }) tab2Button!: ElementRef;
  @ViewChild('tab3Button', { read: ElementRef }) tab3Button!: ElementRef;

  private currentAnimation: any;

  constructor() {
    addIcons({ earthSharp, planetSharp, moonSharp });
  }

  ngAfterViewInit() {
    // Start with tab1 selected wiggle
    this.wiggleIcon('tab1');
  }

  // Call this on tab change
  wiggleIcon(tab: string) {
    // Stop previous animation
    if (this.currentAnimation) {
      this.currentAnimation.stop();
    }

    let el: HTMLElement;
    switch(tab) {
      case 'tab1': el = this.tab1Button.nativeElement.querySelector('ion-icon'); break;
      case 'tab2': el = this.tab2Button.nativeElement.querySelector('ion-icon'); break;
      case 'tab3': el = this.tab3Button.nativeElement.querySelector('ion-icon'); break;
      default: return;
    }

    this.currentAnimation = createAnimation()
      .addElement(el)
      .duration(600)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, transform: 'rotate(0deg)' },
        { offset: 0.25, transform: 'rotate(10deg)' },
        { offset: 0.5, transform: 'rotate(-10deg)' },
        { offset: 0.75, transform: 'rotate(6deg)' },
        { offset: 1, transform: 'rotate(0deg)' }
      ]);

    this.currentAnimation.play();
  }
}
