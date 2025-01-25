import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './app/components/nav/navbar.component';
import { HeroComponent } from './app/components/hero/hero.component';
import { AboutComponent } from './app/components/about/about.component';
import { ExperienceComponent } from './app/components/experience/experience.component';
import { ProjectsComponent } from './app/components/project/projects.component';
import { ContactComponent } from './app/components/contact/contact.component';
import { importProvidersFrom } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent
  ],
  template: `
    <main>
      <app-navbar></app-navbar>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-experience></app-experience>
      <app-projects></app-projects>
      <app-contact></app-contact>
    </main>
  `,
})
export class App {
  name = 'Portfolio';
}

bootstrapApplication(App, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
});