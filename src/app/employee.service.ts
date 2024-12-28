import { Injectable } from '@angular/core';
// import http client to make a get request and receive an observable as a response from db, api etc.
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';


// it means the service is registered in the root injector of the application.
// Any service registered in the root injector is a singleton, meaning there will
// be only one instance of that service throughout the entire application.
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url: string = "data/employees.json";

  constructor(private http: HttpClient) { }

  // Services or functions return Observables. In Angular, a service (like an HTTP service) often returns
  // an Observable to indicate a task is in progress and will emit data in the future.

  getEmployees(): Observable<IEmployee[]> {
    // return [
    //   {"id": 1, "name": "shubham", "age": 23},
    //   {"id": 2, "name": "seth", "age": 24},
    //   {"id": 3, "name": "nigam", "age": 21},
    //   {"id": 4, "name": "pelu", "age": 22}
    // ];

    // Using http to fetch the data
    // add a type to get request which tells it that data received will be an array of IEmployee type format.
    // this func will return a observable.
    // pipe func is used to process the emitted data such as modifying, handling errors etc.
    // In pipe func we pass a operator, catchError is an operator
    return this.http.get<IEmployee[]>(this.url).pipe(
      catchError((error) => {
        console.log("error occured: ", error.status);
        console.log("error occured: ", error.message);
        return throwError(() => new Error('Something went wrong!'));
      })
    );
    // pass errorHandler as a callback func.
    
  }

  
  
}

// when we genereate a service using angular CLI 2 files are created :
// name.service.ts: Contains the service logic.
// name.service.spec.ts: For unit testing the service.