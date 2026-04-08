import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter,withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@ngneat/transloco';


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes,
      withInMemoryScrolling({ 
        anchorScrolling: 'enabled', // 👈 دي اللي بتخلي الـ #projects تشتغل
        scrollPositionRestoration: 'enabled' 
      })
    ),
    provideTransloco({
      config: {
        availableLangs: ['ar', 'en'],
        defaultLang: 'ar', // ✅ تم تصحيح القوس هنا
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
};