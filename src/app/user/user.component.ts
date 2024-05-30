import { Component } from '@angular/core';
import { User } from '../users';
import { Rank, ranks } from '../ranks';
import { CurrencyPipe } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  user: User | undefined;
  rank: Rank = ranks[0]
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  
  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => {
      this.user = user
      if(user === undefined) {
        this.router.navigate(['/login']);
      }
      
      this.rank = ranks[user ? user.rank : 0]
    })
  }
  
}
