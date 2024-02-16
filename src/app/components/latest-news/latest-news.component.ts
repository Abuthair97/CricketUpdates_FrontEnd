import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {ApiCallService} from "../../service/api-call.service";

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.css'
})
export class LatestNewsComponent  implements OnInit{
 latestNews:any;
  constructor(private _apiCall:ApiCallService) {
  }

  ngOnInit(): void {
    this._apiCall.getLatestNews().subscribe({
      next:data =>{
        console.log(data);
        this.latestNews=data;
      }
      ,
      error:err =>{
        console.log(err);
      }
    })
  }
}
