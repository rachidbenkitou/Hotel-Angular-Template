import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutComponent} from "./developments/layout/components/layout/layout.component";
import {HttpClientModule} from "@angular/common/http";
import {provideToastr, ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule, provideAnimations} from "@angular/platform-browser/animations";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "./developments/shared/shared.module";
import { LandingPageComponent } from './developments/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimations(), // required animations providers
    provideToastr(), provideAnimationsAsync(), // Toastr providers
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

