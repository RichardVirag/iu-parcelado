import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { SharedFooter } from './components/shared-footer/shared-footer.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SharedFooter,
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
      { selector: 'app-contratacao-parcelada', component: AppComponent },
      { selector: 'shared-footer', component: SharedFooter }
    ];

    components.forEach((c) => {
      const element = createCustomElement(c.component, {
        injector: this.injector,
      });
      customElements.define(c.selector, element);
    });
  }
}
