import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './MyComponent/profile/profile.component';
import { EducationComponent } from './MyComponent/education/education.component';
import { ProjectComponent } from './MyComponent/project/project.component';
import { AbilitiesComponent } from './MyComponent/abilities/abilities.component';
import { ContactComponent } from './MyComponent/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    EducationComponent,
    ProjectComponent,
    AbilitiesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
