import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="wrapper" [ngStyle]="{'max-height': isExpanded ? 'none' : '212px'}" [ngClass]="{'collapsed': !isExpanded}">
      <div class="element" *ngFor="let item of items">
      {{item}}
      </div>
    </div>
    <button (click)="isExpanded = !isExpanded">{{isExpanded ? 'Zwiń' : 'Rozwiń'}}</button>
  `,
})
export class App {
  name = 'Angular';
  isExpanded = false;
  items = Array.from({length: 16}, (_, i) => i + 1);
}

bootstrapApplication(App);
