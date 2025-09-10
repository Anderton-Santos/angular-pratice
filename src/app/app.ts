import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { TemplateBinding } from './components/template/template-binding/template-binding';
import { TemplateVariables } from './components/template/template-variables/template-variables';
import { TemplateControlFlow } from './components/template/template-control-flow/template-control-flow';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    Home, TemplateBinding,
    TemplateVariables,
    TemplateControlFlow],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('meu-primeiro-app');
}
