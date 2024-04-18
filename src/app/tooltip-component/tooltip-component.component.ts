import { Component, Output } from '@angular/core';
import { CustomTooltipDirective } from '../../directive/custom-tooltip.directive';
@Component({
  selector: 'app-tooltip-component',
  standalone: true,
  imports: [CustomTooltipDirective],
  templateUrl: './tooltip-component.component.html',
  styleUrl: './tooltip-component.component.css',
})
export class TooltipComponentComponent {
  position: any = 'bottom';
}
