import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Comp2Component {
 public check() {
  console.log('componente 2');
 }
}
