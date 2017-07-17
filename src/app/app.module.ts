import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TestComponent } from './test.component';

@NgModule({
    imports: [
        CommonModule,
    ],       // module dependencies
    declarations: [TestComponent], // components and directives
    bootstrap: [TestComponent], // root component
    providers: [] // services
})
export class AppModule {
}
