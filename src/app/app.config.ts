import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation, withRouterConfig } from '@angular/router';

import { getRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(getRoutes(), withHashLocation()) ]
};
