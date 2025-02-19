import { FormsModule } from "@angular/forms";
import { Component } from '@angular/core';
import { UserService } from "../../../../core/services/user.service";

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: string = "";
  password: string = "";

  constructor(public userService: UserService) {}

  login() {
    const user = { username: this.usuario, email: ' ', password: ' ' };
    this.userService.login(user).subscribe((data) => {
      console.log(data);
    });
  }
}
