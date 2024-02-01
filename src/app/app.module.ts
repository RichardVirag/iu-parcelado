import { AnotherComponent } from './components/another/another.component';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AnotherComponent,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const components = [
      { selector: 'app-micro-fe', component: AppComponent },
      { selector: 'another-micro-fe', component: AnotherComponent }
    ];

    components.forEach((c) => {
      const element = createCustomElement(c.component, {
        injector: this.injector,
      });
      customElements.define(c.selector, element);
    });
  }
}
