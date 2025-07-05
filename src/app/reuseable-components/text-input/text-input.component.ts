import {
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { noop } from 'rxjs';
import { IconComponent } from '../icon/icon.component';

export enum TextSize {
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
}

@Component({
  selector: 'beat22-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  standalone: true,
  imports: [FormsModule, IconComponent, CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() id!: string;
  @Input() name!: string;
  @Input() value!: string;
  @Input() label!: string;
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() invalid: boolean = false;
  @Input() error: boolean = false;
  @Input() errorMessage!: string;
  @Input() iconRight!: string;
  @Input() iconLeft!: string;
  @Input() hint!: string;
  @Input() iconColor: string = '#5C6878';
  @Output()
  changeValue = new EventEmitter<string>();
  @Output() onblur = new EventEmitter<any>();
  @Output() onfocus = new EventEmitter<any>();
  @Input() readOnly: boolean = false;

  public emitValueChange(event: any) {
    if (!this.disabled) {
      this.changeValue.emit(event.target.value);
    }
  }

  public inputClickHandler($event: any) {
    if (this.disabled) {
      $event.stopPropagation();
      $event.preventDefault();
    }
  }

  // ControlValueAccessor methods
  public onChange: (value: string) => void = noop;
  public onTouch: () => void = noop;

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public writeValue(value: string): void {
    this.value = value;
  }
}
