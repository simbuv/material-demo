import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { HeaderstyleComponent } from './headerstyle/headerstyle.component';
import { ButtonstyleComponent } from './buttonstyle/buttonstyle.component';
import { TogglebuttonComponent } from './togglebutton/togglebutton.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MaterialModuleModule } from './material-module/material-module.module';
import { StepperErrorsExampleComponent } from './stepper-errors-example/stepper-errors-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderstyleComponent,    
    ButtonstyleComponent, TogglebuttonComponent, StepperErrorsExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    MatStepperModule,
    MaterialModuleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
