import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  errorMessage = ''
  invalid = true;
  profileForm = new FormGroup('')
  name = new FormControl('');
  password = new FormControl('');

  constructor(
    private authService: AuthService,
    private router: Router,
  ){}

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => {
      if(user) {
        this.router.navigate(['/profile']);
      }
    })
  }

  LogIn() {

    let isLogged = false
    this.name.value && this.password.value ?
    isLogged = this.authService.login(this.name.value, this.password.value) 
    :
    null

    if(isLogged)
      this.router.navigate(['/profile']);
    else
      this.errorMessage = 'ERROR'

  }

  change() {
    if(this.name.valid && this.password.valid)
      this.invalid = false;
    else
      this.invalid = true;

    this.errorMessage = ''
  }

}
