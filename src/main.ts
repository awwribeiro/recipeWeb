import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

  const config2 = {
  ...appConfig, //Faz uma cópia do objeto appConfig, que já contém a configuração original da aplicação.
  providers: [...appConfig.providers, //inclui os providers que o app ja tinha
  provideRouter(routes)] //add o forneciento de rotas
}

bootstrapApplication(AppComponent, config2)
  .catch((err) => console.error(err));

