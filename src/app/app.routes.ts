import { Routes } from '@angular/router';
// import other comp for routing
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    // Each route in this array is a JavaScript object that contains two properties.
    // path, defines the URL path for the route. The second property, component, defines the component Angular should use.
    
    // redirect route - if the path matches fully with the localhost-- then we get redirected to home page
    // {path: '', redirectTo: '/App', pathMatch: 'full'},
    // {path: "App", component: AppComponent},

    // { path: '', component: AppComponent },
    {path: "first-component", component: FirstComponent},
    {path: "second-component", component: SecondComponent},

    // wildcard route - Used to catch undefined routes or routes that don’t match any predefined route in the application.
    // must be placed at the last of routes array
    // {path: "**", component: PageNotFoundComponent},
];


// Angular evaluates routes in the order they are defined, from top to bottom in routes array.
// The wildcard route (path: '**') matches any path that doesn't match a route already processed.
// If placed at the top, it will always match first, preventing Angular from evaluating subsequent routes.

