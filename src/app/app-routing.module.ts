import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonstyleComponent } from './buttonstyle/buttonstyle.component';
import { HeaderstyleComponent } from './headerstyle/headerstyle.component';
import { StepperErrorsExampleComponent } from './stepper-errors-example/stepper-errors-example.component';
import { TogglebuttonComponent } from './togglebutton/togglebutton.component';


const routes: Routes = [
  {
    path: "header",
  component: HeaderstyleComponent
  },
  {
    path: "button", component:ButtonstyleComponent
  },
  {
    path: "toggle", component:TogglebuttonComponent
  },
  {
    path: "stepper", component:StepperErrorsExampleComponent
  },
  { path: "", component: HeaderstyleComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
