import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from 'src/app/components/home-component/home-component.component';
import { TableComponentComponent } from 'src/app/components/table-component/table-component.component';


    const routes: Routes = [
        { path: '', component: HomeComponentComponent },
        { path: 'contactList', component: TableComponentComponent },
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
