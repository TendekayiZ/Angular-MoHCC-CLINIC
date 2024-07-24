import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'clinica',loadChildren:()=> import ('./clinica/clinica.module').then(m=> m.ClinicaModule)
    }
];
