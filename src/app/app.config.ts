import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { headerInterceptor } from './core/interceptors/header.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { loaderInterceptor } from './core/interceptors/loader.interceptor';
import { provideToastr } from 'ngx-toastr';
import { toastrInterceptor } from './core/interceptors/toastr.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top' })
    ),
    provideAnimations(),
    provideClientHydration(),
    importProvidersFrom([NgxSpinnerModule]),
    provideToastr(),
    provideHttpClient(
      withFetch(),
      withInterceptors([headerInterceptor,loaderInterceptor,toastrInterceptor])
    )
  ]
};
