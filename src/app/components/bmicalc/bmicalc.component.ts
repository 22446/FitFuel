import { BmicalcService } from './../../core/services/bmicalc.service';
import { Component, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Ibmi, IWeightCategory } from '../../core/interfaces/ibmi';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-bmicalc',
  standalone: true,
  imports: [FormsModule, RouterLink, NavbarComponent],
  templateUrl: './bmicalc.component.html',
  styleUrl: './bmicalc.component.scss'
})
export class BmicalcComponent {
 _BmicalcService =inject(BmicalcService)
 weight!:number
 height!:number
 Display!:boolean
 bmiData:Ibmi={} as Ibmi
 IWeightCategoryData:IWeightCategory={} as IWeightCategory
 
  sumbitToGetBmi(){
    if(this.weight!==undefined&&this.weight>0&&this.height!==undefined&&this.height>0){
    this.Display=true
    this._BmicalcService.confirmTogetBmi(this.weight,this.height/100).subscribe({
      next:(res)=>{
        this.bmiData=res
        this.WeightCategory()
        
      }
  
    })
  }
  }
  WeightCategory(){
    this._BmicalcService.WeightCategory(this.bmiData.bmi).subscribe({
      next:(res)=>{
        this.IWeightCategoryData=res
        
      }
    })
  }


}
