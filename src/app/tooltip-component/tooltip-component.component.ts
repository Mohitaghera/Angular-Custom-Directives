import { Component } from '@angular/core';
import { CustomTooltipDirective } from '../../directive/custom-tooltip.directive';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tooltip-component',
  standalone: true,
  imports: [CustomTooltipDirective, FormsModule,CommonModule],
  templateUrl: './tooltip-component.component.html',
  styleUrls: ['./tooltip-component.component.css'],
})
export class TooltipComponentComponent {
  tooltipText = 'This is custom tool-tip directive';
  position: 'left' | 'right' | 'top' | 'bottom' = 'top';
  fontColor = '#000000';
  fontSize = '14px';

  positions = [
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' }
  ];


  fontSizes = [
    { label: '12', value: '12px' },
    { label: '14', value: '14px' },
    { label: '16', value: '16px' },
    { label: '20', value: '20px' },
    { label: '24', value: '24px' },
    { label: '28', value: '28px' },
    { label: '36', value: '36px' }
  ];
}
