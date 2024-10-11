import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ExcerisesService } from './../../core/services/excerises.service';
import { IexcercisesDetails } from './../../core/interfaces/iexcercises-details';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExcerisDetailsService } from '../../core/services/exceris-details.service';
import { Subscription } from 'rxjs';
import { NavbarComponent } from "../navbar/navbar.component";
import { Iexcercises } from '../../core/interfaces/iexcercises';

@Component({
  selector: 'app-exercise-details',
  standalone: true,
  imports: [NavbarComponent,CarouselModule],
  templateUrl: './exercise-details.component.html',
  styleUrl: './exercise-details.component.scss'
})
export class ExerciseDetailsComponent implements OnInit,OnDestroy {
  _ActivatedRoute=inject(ActivatedRoute)
  ExcersisesDetailsServ=inject(ExcerisDetailsService)
  _ExcerisesService=inject(ExcerisesService)
  endSub!:Subscription
  ExcerData:Iexcercises[]=[]
  excesrData:IexcercisesDetails={}as IexcercisesDetails
  id!:string|null
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    rtl:true,
    navSpeed: 700,
    autoplaySpeed:800,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
 ngOnInit(): void {
  this.displayExcercise()
  this.getall()
 }


 displayExcercise(){
 this.endSub= this._ActivatedRoute.paramMap.subscribe({
    next:(p)=>{
      this.id=p.get("id")
    }
  })
 this.endSub= this.ExcersisesDetailsServ.getExcerDetails(this.id).subscribe({
    next:(res)=>{
      this.excesrData=res
      
    }
  })
}
displayExcerciseDetails(id:string){
  this.endSub= this.ExcersisesDetailsServ.getExcerDetails(id).subscribe({
    next:(res)=>{
      this.excesrData=res
      
  }})
}
TopFuction(){
  window.scrollTo({top:0,behavior:'smooth'})
}
getall(){
  this.endSub=this._ExcerisesService.GetAllExcerises().subscribe({
      next:(res)=>{
        this.ExcerData=res
      }
    })
  }

ngOnDestroy(): void {
 return this.endSub.unsubscribe()
}
}
