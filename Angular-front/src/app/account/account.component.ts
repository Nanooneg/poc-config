import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AccountService} from './account.service';
import {ResultModel} from './Result.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  result: ResultModel;

  constructor(private router: Router, private accountService: AccountService) {
  }

  ngOnInit(): void {
    console.log(this.router.url);
    if (this.router.url === '/public'){
      this.accountService.getPublic().subscribe(
        response => {
          this.result = response;
        },
        (error) => {
          console.log('erreur : ' + error.message);
        }
      );
    }else if (this.router.url === '/userOrAdmin') {
      this.accountService.getUser().subscribe(
        response => {
          this.result = response;
        },
        (error) => {
          console.log('erreur : ' + error.message);
        }
      );
    }else if (this.router.url === '/admin'){
      this.accountService.getAdmin().subscribe(
        response => {
          this.result = response;
        },
        (error) => {
          console.log('erreur : ' + error.message);
        }
      );
    }

  }

}
