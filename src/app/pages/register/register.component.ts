import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [],
  template: '<p>جاري التحويل...</p>',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/contact']);
  }
}
