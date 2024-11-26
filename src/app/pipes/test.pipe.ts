import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    const before = args[0] || ''
    const after = args[1] || ''

    return before + value.toUpperCase() + after;
  }
}
