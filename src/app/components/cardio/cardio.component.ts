import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { BodypartsService } from '../../core/services/bodyparts.service';
import { Iexcercises } from '../../core/interfaces/iexcercises';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cardio',
  standalone: true,
  imports: [RouterLink,CarouselModule,NavbarComponent],
  templateUrl: './cardio.component.html',
  styleUrl: './cardio.component.scss'
})
export class CardioComponent implements OnInit,OnDestroy{
  
  _CardiServices=inject(BodypartsService)
  cardioData:Iexcercises[]=[]
  BodyListData=[]
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
   this.getCardio()
  }
  getCardio(){
  this.endsub= this._CardiServices.getExcByNameOFequepment('cardio').subscribe({
    next:(res)=>{
      this.cardioData=res
      
     this.getAllBodyParts()
    },error:(err) =>{
      
    }
  })
}
  getAllBodyParts(){
    this.endsub=  this._CardiServices.getAllBodyPartList().subscribe({
      next:(res)=>{
        this.BodyListData=res
        
      }
    })
  }
  getBynameOFBodyPart(name:string|null){
    this.endsub= this._CardiServices.getExcByNameOFequepment(name).subscribe({
      next:(res)=>{
        this.cardioData=res
        

      }
    })
  }


  ngOnDestroy(): void {
   return this.endsub.unsubscribe()
  }
}
