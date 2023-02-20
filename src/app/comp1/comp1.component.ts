import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Comp1Component {
 public check() {
  console.log('componente 8');
 }
}
