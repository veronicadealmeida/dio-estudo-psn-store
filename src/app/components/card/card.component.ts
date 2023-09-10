import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent {
  @Input()
  gameCover: string = '';

  @Input()
  gameLabel: string = '';

  @Input()
  gameText: string = '';

  @Input()
  gameType: string = '';

  @Input()
  gamePrice: string = '';
}
