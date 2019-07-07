import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TitleComponent } from './title/title.component';
import { HomeComponent } from './home/home.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { ItemComponent } from './item/item.component';
import { HttpClientModule } from '@angular/common/http';

var routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'items', component: ItemlistComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleComponent,
    HomeComponent,
    ItemlistComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
