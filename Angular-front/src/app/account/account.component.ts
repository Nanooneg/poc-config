import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {AccountService} from "./account.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  result: string;

  constructor(private router: Router, private accountService: AccountService) {
  }

  ngOnInit(): void {
    console.log(this.router.url);
    if (this.router.url === '/public'){
      this.accountService.getPublic().subscribe(
        response => {
          this.result = response;
          console.log(response.toString());
        }/*,
        (error) => {
          console.log('erreur : ' + error.message);
        }*/
      );
    }else if (this.router.url === '/userOrAdmin') {
      this.accountService.getUser().subscribe(
        response => {
          this.result = response;
          console.log(response);
        }
      );
    }else if (this.router.url === '/admin'){
      this.accountService.getAdmin().subscribe(
        response => {
          this.result = response;
          console.log(response);
        }
      );
    }
  }

}
