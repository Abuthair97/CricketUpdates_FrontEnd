import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {NgOptimizedImage} from "@angular/common";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    MatToolbarRow,
    MatIcon,
    MatToolbar,
    NgOptimizedImage,
    MatButton
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
