import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfluencerComponent } from './influencer/influencer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { AssistenzaComponent } from './assistenza/assistenza.component';

@NgModule({
  declarations: [
    AppComponent,
    InfluencerComponent,
    AboutComponent,
    CategoryComponent,
    AssistenzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
