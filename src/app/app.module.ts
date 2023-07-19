import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { NzFormModule} from 'ng-zorro-antd/form'
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb'
import {FormsModule, FormControl, ReactiveFormsModule, FormBuilder} from '@angular/forms'
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    ProjectsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzBreadCrumbModule,
    NzMenuModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
