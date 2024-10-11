import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { ExerciseDetailsComponent } from './components/exercise-details/exercise-details.component';
import { CardioComponent } from './components/cardio/cardio.component';
import { EquipmentsComponent } from './components/equipments/equipments.component';
import { EquipmentDetailsComponent } from './components/equipment-details/equipment-details.component';
import { BmicalcComponent } from './components/bmicalc/bmicalc.component';
import { DitePlanComponent } from './components/dite-plan/dite-plan.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { blankGuard } from './core/guards/blank.guard';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserpersonaldataComponent } from './components/userpersonaldata/userpersonaldata.component';

export const routes: Routes = [
    {path:'',redirectTo:'register',pathMatch:'full'},
    {path:'register',component:RegisterComponent,canActivate:[authGuard]},
    {path:'login',component:LoginComponent,canActivate:[authGuard]},
    {path:'navbar',component:NavbarComponent,canActivate:[blankGuard]},
    {path:'home',component:HomeComponent,canActivate:[blankGuard]},
    {path:'excerises',component:ExercisesComponent,canActivate:[blankGuard]},
    {path:'cardio',component:CardioComponent,canActivate:[blankGuard]},
    {path:'equipment',component:EquipmentsComponent,canActivate:[blankGuard]},
    {path:'bmi',component:BmicalcComponent,canActivate:[blankGuard]},
    {path:'dietplan',component:DitePlanComponent,canActivate:[blankGuard]},
    {path:'ExcerDetails/:id',component:ExerciseDetailsComponent,canActivate:[blankGuard]},
    {path:'equipmentDetails/:name',component:EquipmentDetailsComponent,canActivate:[blankGuard]},
    {path:'personaldata',component:UserpersonaldataComponent,canActivate:[blankGuard]}
];
