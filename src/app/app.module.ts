import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { DeletedComponent } from './components/deleted/deleted.component';

const appRoutes: Routes = [
  {path: '', component: TodoFormComponent},
  {path: 'deleted', component: DeletedComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    DeletedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
