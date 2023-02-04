import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { } from '@angular/material/icon'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  background:ThemePalette=undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
