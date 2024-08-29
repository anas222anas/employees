import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private router: Router, route: ActivatedRoute, @Inject(DOCUMENT) private document: Document) {
    router.navigate(['pages', 'employees', 'add'], { relativeTo: route })
    this.document.body.dir = 'ltr';
  }
  ngOnInit(): void {
  }
  title = 'employees';
}


