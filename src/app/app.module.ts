import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CameraAnalysisComponent } from './camera-analysis/camera-analysis.component';
import { UserListComponent } from './user-list/user-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeatMapModule } from '@syncfusion/ej2-angular-heatmap';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CameraAnalysisComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    HeatMapModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
