import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EquipmentsService } from '../../core/services/equipments.service';
import { Subscription } from 'rxjs';
import { IexcercisesDetails } from '../../core/interfaces/iexcercises-details';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-equipment-details',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './equipment-details.component.html',
  styleUrl: './equipment-details.component.scss'
})
export class EquipmentDetailsComponent {
  _ActivatedRoute=inject(ActivatedRoute)
  _EquipmentsService=inject(EquipmentsService)
  endSub!:Subscription
  excesrData:IexcercisesDetails[]=[]
  name!:string|null
 ngOnInit(): void {
  this.displayExcercise()
 }


 displayExcercise(){
 this.endSub= this._ActivatedRoute.paramMap.subscribe({
    next:(p)=>{
      this.name=p.get("name")
    }
  })
 this.endSub= this._EquipmentsService.getByqEquepmentName(this.name).subscribe({
    next:(res)=>{
      this.excesrData=res
     
    }
  })
}

ngOnDestroy(): void {
 return this.endSub.unsubscribe()
}
}
