import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-control-flow',
  imports: [CommonModule],
  templateUrl: './template-control-flow.html',
  styleUrl: './template-control-flow.css'
})
export class TemplateControlFlow {

  public isVerify() {
    return false
  }

  // public message = ""

  // public Sum(v1: number, v2: number): number {
  //   let soma = (v1 + v2)

  //   if (soma > 10) {
  //     this.message = `O resultado foi ${soma}, foi maior que 10`
  //   } else {
  //     this.message = `O resultado ${soma} é menor que 10`
  //   }

  //   return soma


  // }

  // constructor() {
  //   this.Sum(4, 3);
  // }


  public men = ""

  public Message(num: number): string {
    if (num > 10) {
      return `A soma deu ${num}, maior qu e10`
    } else {
      return `A soma deu ${num}, menor que 10`
    }

  }


  public Sum(n1: number, n2: number): number {

    const soma = (n1 + n2)
    this.men = this.Message(soma)

    return soma

  }

  constructor() {
    this.Sum(4, 9);
  }


}

