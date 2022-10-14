import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ ProfileComponent } from './MyComponent/profile/profile.component';
import { EducationComponent } from './MyComponent/education/education.component';
import{ AbilitiesComponent } from './MyComponent/abilities/abilities.component';
import{ ProjectComponent } from './MyComponent/project/project.component';
import{ ContactComponent } from './MyComponent/contact/contact.component';

const routes: Routes = [

  {path: 'profile', component: ProfileComponent},
  {path: 'education', component: EducationComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'abilities', component: AbilitiesComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
