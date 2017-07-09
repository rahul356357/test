import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SiblingComponent } from './sibling/sibling.component';
import {DataService } from './data.service';
import { Siblings2Component } from './siblings2/siblings2.component';
import { ViewComponent } from './view/view.component';
import { MergedComponent } from './merged/merged.component';
@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        LoginComponent,
        ParentComponent,
        ChildComponent,
        SiblingComponent,
        Siblings2Component,
        ViewComponent,
        MergedComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule.forRoot(),
        ROUTING
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
