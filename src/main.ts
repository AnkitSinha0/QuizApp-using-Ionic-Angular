import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { StatusBar, Style } from '@capacitor/status-bar';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
}).then(() => {
  // ✅ Ensure content does not go under status bar
  StatusBar.setOverlaysWebView({ overlay: false });

  // ✅ Make icons dark if your toolbar is light
  StatusBar.setStyle({ style: Style.Dark });

  // ✅ Optional: Set a specific background color for status bar
  StatusBar.setBackgroundColor({ color: '#ffffff' }); // Change this to your toolbar color
});
