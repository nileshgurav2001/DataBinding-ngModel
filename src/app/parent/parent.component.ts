import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentData = "";

  name: string = "";
  email: string = "";
  mobileno: string = "";
  datas: any = ""
  dataarry: any = [];
  fevtopic: string = "";
  gender: string = "";
  isOn= '';
  constructor() { }

  ngOnInit(): void {
  }

  submitdata() {

    this.datas = { name: this.name, email: this.email, mobileno: this.mobileno, fevtopic: this.fevtopic, gender: this.gender }
    // this.parentData = this.datas;
    console.log(this.datas);
     
  }
 

}
