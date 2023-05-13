import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    SobreMiComponent,
    FormacionComponent,
    SkillsComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      "percent": 70,
      "backgroundStrokeWidth": 0,
      "backgroundPadding": 0,
      "radius": 40,
      "space": -13,
      "toFixed": 0,
      "maxPercent": 100,
      "outerStrokeWidth": 13,
      "outerStrokeColor": '#00ff47',
      "outerStrokeLinecap": 'inherit',
      "innerStrokeColor": '#ffffff',
      "backgroundColor": '#0000004d',
      "innerStrokeWidth": 13,
      "imageHeight": 40,
      "imageWidth": 40,
      "animation": true,
      "animateTitle": false,
      "animationDuration": 800,
      "showTitle": false,
      "showSubtitle": false,
      "showUnits": false,
      "showImage": true,
      "showBackground": true,
      "showInnerStroke": true,
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

