import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HighlightCardDirective } from './directives/highlight-card.directive';
import { SkillLevelPipe } from './pipes/skill-level.pipe';

@NgModule({
  declarations: [],
  imports: [CommonModule, HighlightCardDirective, SkillLevelPipe],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HighlightCardDirective,
    SkillLevelPipe
  ]
})
export class SharedModule {}
