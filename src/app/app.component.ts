import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NgOtpInputModule } from 'ng-otp-input';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports:[
    RouterOutlet, RouterLink,NgOtpInputModule,CommonModule,ReactiveFormsModule
  ]
})
export class AppComponent implements OnInit {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
}
