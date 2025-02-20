import { Component } from '@angular/core';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-navbar-main',
  imports: [],
  templateUrl: './navbar-main.component.html',
  styleUrl: './navbar-main.component.css'
})
export class NavbarMainComponent {
  constructor(public userService: UserService) {}

  ngOnInit() {
    this.getUserLogged();
  }
  getUserLogged() {
    this.userService.getUser().subscribe((user) => {
      console.log(user);
    });
  }
}
