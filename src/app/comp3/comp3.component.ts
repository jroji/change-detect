import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Comp3Component {

 @Input() value = 0;

 public check() {
  console.log('componente 3');
 }
}
