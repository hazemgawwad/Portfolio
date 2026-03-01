import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioPageComponent } from './components/portfolio-page/portfolio-page.component';
import { HighlightCardDirective } from '../../shared/directives/highlight-card.directive';
import { SkillLevelPipe } from '../../shared/pipes/skill-level.pipe';

@NgModule({
  declarations: [PortfolioPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HighlightCardDirective,
    SkillLevelPipe,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule {}
