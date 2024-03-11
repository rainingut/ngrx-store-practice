import { Reducers } from './stores/reducers';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './pages/counter/counter.module';
import { StoreModule } from '@ngrx/store';

const ngrxReducerConfig = {
  runtimeChecks: {
    strictStateImmutability: true,
    strictActionImmutability: true,
    strictStateSerializability: true,
    strictActionSerializability: true
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    StoreModule.forRoot(Reducers, ngrxReducerConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
