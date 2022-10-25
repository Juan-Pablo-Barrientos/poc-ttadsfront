import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestsComponent } from './views/quests/quests.component';
import { NpcsComponent } from './views/npcs/npcs.component';
import { MapsComponent } from './views/maps/maps.component';
import { HomeComponent } from './views/home/home.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { FooterComponent } from './views/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { EquipmentCardComponent } from './views/equipment-card/equipment-card.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestsComponent,
    NpcsComponent,
    MapsComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    EquipmentCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
