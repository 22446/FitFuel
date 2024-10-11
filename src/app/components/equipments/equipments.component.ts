import { Subscription } from 'rxjs';
import { EquipmentsService } from './../../core/services/equipments.service';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-equipments',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './equipments.component.html',
  styleUrl: './equipments.component.scss'
})
export class EquipmentsComponent implements OnInit,OnDestroy{
  
  _EquipmentsService=inject(EquipmentsService)
  EquepmentData=[]
  endSub!:Subscription
  ngOnInit(): void {
    this.getAllEquep()
  }
  getAllEquep(){
   this.endSub= this._EquipmentsService.getAllEquipments().subscribe({
      next:(res)=>{
        this.EquepmentData=res
        
      }
    })
  }
  ngOnDestroy(): void {
   return this.endSub.unsubscribe()
  }
}
