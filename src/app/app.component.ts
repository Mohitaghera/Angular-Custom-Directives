import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HoverHighlightDirective } from '../directive/hover-highlight.directive';
import { TrimWhitespaceDirective } from '../directive/trim-whitespace.directive';
import { CustomTooltipDirective } from '../directive/custom-tooltip.directive';

import { HighlightComponentComponent } from './highlight-component/highlight-component.component';
import { TrimComponentComponent } from './trim-component/trim-component.component';
import { TooltipComponentComponent } from './tooltip-component/tooltip-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HoverHighlightDirective,
    TrimWhitespaceDirective,
    HighlightComponentComponent,
    TrimComponentComponent,
    CustomTooltipDirective,
    TooltipComponentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
