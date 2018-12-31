import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  notesArray:any=[];
  title:string;
  desc:string;
  updateid:any;
  updateState:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  add(title : string,desc: string){
    this.notesArray.push({"id":this.notesArray.length + 1,"title":title,"desc":desc});
    this.title ="";
    this.desc ="";
  }
  updateNotes(title:string,desc:string){
    this.notesArray[this.updateid-1].title = title;
    this.notesArray[this.updateid-1].desc = desc;
    this.updateState = false;
  }
  delete(id){
    this.notesArray.splice(id-1, 1);
  }
  update(id: number,title:string,desc:string){
    this.updateState=true;
    this.updateid = id;
    this.title = title;
    this.desc = desc;
    
  }

}
