import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AuthService } from './auth.service';
import { User } from './users';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TopBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private authService: AuthService) {}

  user: User | undefined

  ngOnInit() {

    this.authService.getCurrentUser().subscribe(user => {
      this.user = user
    })
  }

}
