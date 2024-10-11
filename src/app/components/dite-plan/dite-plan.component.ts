import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUserInfoDiet } from '../../core/interfaces/iuser-info-diet';
import { NavbarComponent } from "../navbar/navbar.component";
import { DietplannerService } from '../../core/services/dietplanner.service';
import { Idietplan } from '../../core/interfaces/idietplan';

@Component({
  selector: 'app-dite-plan',
  standalone: true,
  imports: [ReactiveFormsModule, NavbarComponent],
  templateUrl: './dite-plan.component.html',
  styleUrl: './dite-plan.component.scss'
})
export class DitePlanComponent {
  _FormBuilder=inject(FormBuilder)
 Display!:boolean
  _DietplannerService=inject(DietplannerService)
  dietdataplan:Idietplan={}as Idietplan
  myObj:IUserInfoDiet={}as IUserInfoDiet
  dietplan:IUserInfoDiet={}as IUserInfoDiet
  dietplansave:Idietplan={}as Idietplan
DietPlanGroup:FormGroup=this._FormBuilder.group({
  dietry_prefs:['',[Validators.required]],
  goal:['',[Validators.required]],
  plan_type:['',[Validators.required]],
  caloric_intake:['',[Validators.required]],
  proteins:['',[Validators.required]],
  fats:['',[Validators.required]],
  carbohydrates:['',[Validators.required]],
  allergies_or_restrictions:['',[Validators.required]],
  meals_frequency:['',[Validators.required]]
})

submit(){
  this.Display=true
  this._DietplannerService.GetDietPlann(this.DietPlanGroup.value).subscribe({
    next:(res)=>{
      this.dietdataplan=res.response
      localStorage.setItem('Userdieplan',JSON.stringify(this.dietdataplan))
      this.dietplansave=JSON.parse(localStorage.getItem('Userdieplan')!)
    
    }
  })
  localStorage.setItem('UserPlan',JSON.stringify(this.DietPlanGroup.value))
  this.myObj=JSON.parse(localStorage.getItem('UserPlan')!)
  
  
}
}
