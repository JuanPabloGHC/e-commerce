import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../users';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  @Input() user: User | undefined      

  logout() {
    this.authService.logout();
    
    this.router.navigate(['/products'])
  }

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

}
