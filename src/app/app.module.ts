import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { HeroParentsComponent } from './hero-parents/hero-parents.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { VoterComponent } from './voter/voter.component';
import { VotetakerComponent } from './votetaker/votetaker.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    HeroParentsComponent,
    HeroChildComponent,
    VoterComponent,
    VotetakerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
