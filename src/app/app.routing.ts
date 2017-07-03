import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { EmpleadosListComponent } from './components/empleados-list.component';
import { EmpleadoAddComponent} from './components/empleado-add.component';
import { EmpleadoDetailComponent } from './components/empleado-detail.component';
import { EmpleadoEditComponent } from './components/empleado-edit.component';



const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'empleados', component: EmpleadosListComponent},
  {path: 'crear-empleado', component: EmpleadoAddComponent},
  {path: 'empleado/:id', component: EmpleadoDetailComponent},
  {path: 'editar-empleado/:id', component: EmpleadoEditComponent},
  {path:'**', component: ErrorComponent}
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
