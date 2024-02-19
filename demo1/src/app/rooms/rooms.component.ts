import { Component, OnInit } from '@angular/core';
import { rooms } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})



export class RoomsComponent implements OnInit{
  hotelname=' Oyo';
  numberofrooms=9
   onstructor(){}
  ngOnInit(): void {}

  bool=false;

  aa() {
  this.bool=!this.bool;
  }
  room:rooms={
  totalrooms:20,
  avrooms:15,
  bookrooms:5

  }


}
