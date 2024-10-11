import { RouterLink, RouterLinkActive } from '@angular/router';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Iuser } from '../../core/interfaces/iuser';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  UserInfo:Iuser={}as Iuser 
  ngOnInit(): void {
    this.getUserInfo()
  }
_AuthService=inject(AuthService)

logoutsubmit(){
  this._AuthService.logout()
}

getUserInfo(){
  this._AuthService.UserInfo().subscribe({
    next:(res)=>{
      this.UserInfo=res.user
      
    }
  })
}

}