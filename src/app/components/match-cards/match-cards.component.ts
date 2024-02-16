import {Component, OnInit} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {ApiCallService} from "../../service/api-call.service";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-match-cards',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatCardSubtitle,
    RouterOutlet
  ],
  templateUrl: './match-cards.component.html',
  styleUrl: './match-cards.component.css'
})
export class MatchCardsComponent implements OnInit{
  liveMatch:any
  constructor(private _ApiCall:ApiCallService) {
  }
    ngOnInit(): void {
       this._ApiCall.getLiveMatchScore().subscribe({
         next:data => {
           console.log(data)
           this.liveMatch=data;
         },
         error:err => {
           console.log(err)
         }
      })
    }

}
