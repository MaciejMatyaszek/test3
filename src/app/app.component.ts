import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-regex';
  form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control(null, [
        Validators.pattern(/(?=(?:^\w))([-A-Za-ząśćżńęłó]+)(?:[^ ])$/),
      ]),
    });
  }

  goTo() {
    console.log('aaaa');
    this.router.navigate(['test']);
  }
}
