import { Component } from '@angular/core';
import { CustomTooltipDirective } from '../../directive/custom-tooltip.directive';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tooltip-component',
  standalone: true,
  imports: [CustomTooltipDirective, FormsModule],
  templateUrl: './tooltip-component.component.html',
  styleUrl: './tooltip-component.component.css',
})
export class TooltipComponentComponent {
  tooltipText = 'This is custom tool-tip directive';
  position: 'left' | 'right' | 'top' | 'bottom' = 'top';
  fontColor = '#000000';
  fontSize = '14px';
}
