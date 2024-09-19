import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-usage',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './usage.component.html',
  styleUrl: './usage.component.css'
})
export class UsageComponent {
  input : string = ""

}
