import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversText',
})
export class ReversTextPipe implements PipeTransform {
  transform(value: string): unknown {
    const reverse = value.trim().split('').reverse().join('');
    return reverse[0].toUpperCase() + reverse.slice(1).toLocaleLowerCase();
  }
}
