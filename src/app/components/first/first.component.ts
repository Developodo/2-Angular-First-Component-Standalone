import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
