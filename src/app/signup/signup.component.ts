import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

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

  errorMessage = ''
  invalid = true;
  profileForm = new FormGroup('')
  name = new FormControl('');
  password = new FormControl('');
  passwordCopy = new FormControl('');
  photo = new FormControl();

  change() {
    if(this.name.valid && this.password.valid && this.passwordCopy && this.photo)
      this.invalid = false;
    else
      this.invalid = true;

    this.errorMessage = ''
  }

  signup() {
    let isLogged = false

    if(this.password.value === this.passwordCopy.value){

      this.name.value && this.password.value && this.passwordCopy.value && this.photo.value ?
      isLogged = this.authService.signup(this.name.value, this.password.value, this.photo.value)
      :
      null

    }

    if(isLogged)
      this.router.navigate(['/profile'])
    else
      this.errorMessage = 'ERROR'
  }

}
