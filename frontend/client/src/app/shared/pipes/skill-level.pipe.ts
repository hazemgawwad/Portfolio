import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skillLevel',
  standalone: true
})
export class SkillLevelPipe implements PipeTransform {
  transform(value: number): string {
    return `${value}%`;
  }
}
