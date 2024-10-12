import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { blankGuard } from './core/guards/blank.guard';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    { path: 'register',component:RegisterComponent, canActivate: [authGuard] },
    { path: 'login',component:LoginComponent, canActivate: [authGuard] },
    { path: 'navbar', loadComponent: () => import('./components/navbar/navbar.component').then(m => m.NavbarComponent), canActivate: [blankGuard] },
    { path: 'home', component:HomeComponent, canActivate: [blankGuard] },
    { path: 'exercises', loadComponent: () => import('./components/exercises/exercises.component').then(m => m.ExercisesComponent), canActivate: [blankGuard] },
    { path: 'cardio', loadComponent: () => import('./components/cardio/cardio.component').then(m => m.CardioComponent), canActivate: [blankGuard] },
    { path: 'equipment', loadComponent: () => import('./components/equipments/equipments.component').then(m => m.EquipmentsComponent), canActivate: [blankGuard] },
    { path: 'bmi', loadComponent: () => import('./components/bmicalc/bmicalc.component').then(m => m.BmicalcComponent), canActivate: [blankGuard] },
    { path: 'dietplan', loadComponent: () => import('./components/dite-plan/dite-plan.component').then(m => m.DitePlanComponent), canActivate: [blankGuard] },
    { path: 'ExcerDetails/:id', loadComponent: () => import('./components/exercise-details/exercise-details.component').then(m => m.ExerciseDetailsComponent), canActivate: [blankGuard] },
    { path: 'equipmentDetails/:name', loadComponent: () => import('./components/equipment-details/equipment-details.component').then(m => m.EquipmentDetailsComponent), canActivate: [blankGuard] },
    { path: 'personaldata', loadComponent: () => import('./components/userpersonaldata/userpersonaldata.component').then(m => m.UserpersonaldataComponent), canActivate: [blankGuard] }
];
