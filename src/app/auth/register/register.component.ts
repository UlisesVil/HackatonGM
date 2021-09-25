import { Component, OnInit } from '@angular/core';
import { Perfil } from '../../models/perfil'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public register:Perfil;
  public member={};

  constructor() {

  }

  ngOnInit(): void {
  }


  onSubmit(form){
    console.log();

    this.register=this.member;
    console.log(this.register);

  }

}
