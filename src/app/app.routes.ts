import { Routes } from '@angular/router';
import {MatchCardsComponent} from "./components/match-cards/match-cards.component";
import {LatestNewsComponent} from "./components/latest-news/latest-news.component";

export const routes: Routes = [
  { path: "", component: MatchCardsComponent },
  {path:'latestNews' ,component:LatestNewsComponent}

];
