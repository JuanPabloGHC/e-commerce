import { Injectable } from '@angular/core';
import { User, users } from './users';
import { Cart } from './cart.service';
import { ranks } from './ranks';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);
  private currentUserO$: Observable<User | undefined> = this.currentUserSubject.asObservable();

  users: User[] = users;

  signup(name: string, password: string, photo: string): boolean {

    if(this.userExists(name))
      return false;
    
    const temp: User = {
      id: this.users.length,
      name: name,
      password: password,
      money: 0,
      photo: photo,
      nOrders: 0,
      rank: 0
    }

    this.users.push(temp);

    this.currentUserSubject.next(temp)

    return true;
  }

  login(name: string, password: string): boolean {
    for(var user of this.users){
      if(user.name === name && user.password === password){
        this.currentUserSubject.next(user)
        return true;
      }
    }
    return false;
  }

  userExists(name: string): boolean {
    for(var user of this.users) {
      if(user.name === name) {
        return true;
      }
    }
    return false;
  }

  updateUser(cart: Cart) {
    let tempUser: User | undefined
    this.currentUserO$.subscribe(user => {
      tempUser = user
    })
    tempUser ? tempUser.nOrders += 1 : null;
    tempUser ? tempUser.money -= cart.total : null;
    for(var rank of ranks) {
      if (tempUser && tempUser.nOrders < rank.limit && tempUser.nOrders >= rank.minimum) {
        tempUser.rank = rank.id
      }
    }
    this.currentUserSubject.next(tempUser)
  }

  logout() {
    this.currentUserSubject.next(undefined)
  }

  getCurrentUser(): Observable<User | undefined> {
    return this.currentUserO$
  }

  constructor() { }
}
