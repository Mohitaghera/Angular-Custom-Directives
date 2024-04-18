import { Component } from '@angular/core';
import { TrimWhitespaceDirective } from '../../directive/trim-whitespace.directive';

@Component({
  selector: 'app-trim-component',
  standalone: true,
  imports: [TrimWhitespaceDirective],
  templateUrl: './trim-component.component.html',
  styleUrl: './trim-component.component.css',
})
export class TrimComponentComponent {}
