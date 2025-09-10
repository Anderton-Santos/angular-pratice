import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-binding',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-binding.html',
  styleUrl: './template-binding.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default

})
export class TemplateBinding {
  public name = "Dener Troquatte"
  public age = 32

  public Sun(val1: number, val2: number): number {
    let soma = val1 + val2
    return soma
  }

  public isDisabled = true

  public srcValue = "https://picsum.photos/400/300"

  constructor() {
    setTimeout(() => {
      this.name = "Jão e Maria"

    }, 1000)
  }

  public Soma() {
    return this.age++
  }
  public Sub() {
    return this.age--
  }

  public onKeyDown(event: Event) {
    return console.log(event)
  }

  public onMouseMove(event: MouseEvent) {
    return console.log({
      clientX: event.clientX,
      clientY: event.clientY,
    })
  }


}
