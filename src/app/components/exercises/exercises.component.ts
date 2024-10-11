import { Subscription } from 'rxjs';
import { ExcerisesService } from './../../core/services/excerises.service';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Iexcercises } from '../../core/interfaces/iexcercises';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { TargetService } from '../../core/services/target.service';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [RouterLink, CarouselModule,NavbarComponent],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.scss'
})
export class ExercisesComponent implements OnInit,OnDestroy {
   _ExcerisesService =inject(ExcerisesService)
   _TargetService=inject(TargetService)
   ExcerData:Iexcercises[]=[]
   targetListData=[]
   unsubscripe!:Subscription
   endsub!:Subscription
   customOptionsCategory: OwlOptions = {
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
   this.getall()
  }
  getall(){
  this.unsubscripe=this._ExcerisesService.GetAllExcerises().subscribe({
      next:(res)=>{
        this.ExcerData=res
        
        this.getAlltargetParts()
      }
    })
  }
  getAlltargetParts(){
    this.endsub=  this._TargetService.getAlltargetList().subscribe({
      next:(res)=>{
        this.targetListData=res
        
      }
    })
  }
  getBynameOFtargetPart(name:string|null){
    this.endsub= this._TargetService.getExcByNameOFTarget(name).subscribe({
      next:(res)=>{
        this.ExcerData=res
        

      }
    })
  }
  ngOnDestroy(): void {
   return this.unsubscripe.unsubscribe()
  }
}
