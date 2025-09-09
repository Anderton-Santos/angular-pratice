import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  imports: [],
  templateUrl: './template-binding.html',
  styleUrl: './template-binding.css',
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


}
