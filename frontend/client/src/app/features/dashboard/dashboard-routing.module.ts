import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardEditorComponent } from './components/dashboard-editor/dashboard-editor.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
