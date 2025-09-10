import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  imports: [CommonModule],
  templateUrl: './template-variables.html',
  styleUrl: './template-variables.css'
})
export class TemplateVariables implements AfterViewInit {

  @ViewChild('name') public nameInput!: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.nameInput.nativeElement.value)

  }

}
