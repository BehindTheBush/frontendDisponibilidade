import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisponibilidadeHomeComponent } from './components/disponibilidade-home/disponibilidade-home.component';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PanelModule} from 'primeng-lts/panel';
import {CardModule} from 'primeng-lts/card';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng-lts/table';
import {DialogModule} from 'primeng-lts/dialog';
import {FieldsetModule} from 'primeng-lts/fieldset';
import {CheckboxModule} from 'primeng-lts/checkbox';
import {DropdownModule} from 'primeng-lts/dropdown';
import {CalendarModule} from 'primeng-lts/calendar';






@NgModule({
  declarations: [
    AppComponent,
    DisponibilidadeHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    AccordionModule,
    BrowserAnimationsModule,
    PanelModule,
    CardModule,
    HttpClientModule,
    TableModule,
    DialogModule,
    FieldsetModule,
    CheckboxModule,
    DropdownModule,
    CalendarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
