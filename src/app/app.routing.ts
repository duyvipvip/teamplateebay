import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '../../node_modules/@angular/core';
import { AppComponent } from './app.component';
import { TemplateebayComponent } from './templateebay/templateebay.component';
const routes: Routes = [
    {
        path: '', component: AppComponent, children: [
            { path: '', redirectTo: 'templateebay', pathMatch: 'full' },
            {
                path: 'templateebay',
                component: TemplateebayComponent
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class RootRoutingModule { }