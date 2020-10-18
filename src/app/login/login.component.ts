import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
  }

  home(){
    alert("hello")
    this.router.navigateByUrl('home')
  }


}
