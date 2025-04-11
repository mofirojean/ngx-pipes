import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon } from '@ng-icons/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';

@Component({
  selector: 'app-word-editor-count',
  imports: [NgIcon, HlmIconDirective, HlmInputDirective, HlmButtonDirective, FormsModule],
  templateUrl: './word-editor-count.component.html',
  styles: ``
})
export class WordEditorCountComponent {
  message: string = 'Welcome to the world of angular pipes where everything that deals with transformation can be handled with pipes...';
}
