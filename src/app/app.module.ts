import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RootNodeComponent } from './root-node/root-node.component';
import { FactoryNodeComponent } from './factory-node/factory-node.component';
import { ChildNodeComponent } from './child-node/child-node.component';

@NgModule({
  declarations: [
    AppComponent,
    RootNodeComponent,
    FactoryNodeComponent,
    ChildNodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
