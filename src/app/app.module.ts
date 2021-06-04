import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselCardComponent } from './carousel/carousel-card/carousel-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { ToReadableDurationPipe } from './carousel/to-readable-duration.pipe';
import { ToReadableContentTypePipe } from './carousel/to-readable-content-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselCardComponent,
    ToReadableDurationPipe,
    ToReadableContentTypePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
