import { NgModule } from '@angular/core';
import { SenchaTextModule } from './Text/sencha-text.module';
import { SenchaTitleModule } from './Title/sencha-title.module';
import { SenchaParagraphModule } from './Paragraph/sencha-paragraph.module';

@NgModule({
  imports: [SenchaTextModule, SenchaTitleModule, SenchaParagraphModule],
  exports: [SenchaTextModule, SenchaTitleModule, SenchaParagraphModule],
  declarations: [],
  providers: [],
})
export class SenchaTypographyModule {}
