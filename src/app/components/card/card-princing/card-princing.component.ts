import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-princing',
  templateUrl: './card-princing.component.html',
  styleUrls: ['./card-princing.component.sass'],
})
export class CardPrincingComponent {
  @Input()
  gameText: string = '';

  @Input()
  gameType: string = '';

  @Input()
  gamePrice: string = '';
}
