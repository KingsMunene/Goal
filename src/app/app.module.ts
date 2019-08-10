import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalsComponent } from './goals/goals.component';
import { GoalsdetailsComponent } from './goalsdetails/goalsdetails.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { TimecountPipe } from './timecount.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    GoalsdetailsComponent,
    StrikethroughDirective,
    TimecountPipe,
    GoalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
