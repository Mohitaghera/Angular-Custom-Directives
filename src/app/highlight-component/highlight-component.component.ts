import { Component } from '@angular/core';
import { HoverHighlightDirective } from '../../directive/hover-highlight.directive';
@Component({
  selector: 'app-highlight-component',
  standalone: true,
  imports: [HoverHighlightDirective],
  templateUrl: './highlight-component.component.html',
  styleUrl: './highlight-component.component.css',
})
export class HighlightComponentComponent {}
