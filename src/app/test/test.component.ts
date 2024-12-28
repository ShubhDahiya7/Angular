import { Component, EventEmitter, input, output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../employee';

// this is a decorator which gives us metadata of the comp.
// it also verifies that the class created below is not just any class but is a angular class.
@Component({
  selector: 'app-test',
  imports: [CommonModule, FormsModule],
  // we can write the html for this comp even right here by replacing template url with just template
  // and our html code inside '' in front of it, same we can do for styleurl for changing css.
  // IMP - we do this to see class comp, html and css code at the same time.
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})

// when i created a comp named test then a testcomponent will be created
export class TestComponent {

  // services
  // declare empty array of employees
  public employees: { id: number; name: string; age: number }[] = [];

  public errMsg = "";

  // this creates an instance of EmployeeService class and store it in employeeService var for us.
  // constructors should only be used for dependency injection.
  constructor(private employeeService: EmployeeService) {}

  // ngOnInit() is a lifecycle hook in Angular
  // It is called by Angular when the component is initialized
  // It is used to perform any initialization tasks, such as setting up default values or fetching data needed for the component.
  // keeps the constructor clean by moving initialization logic out of it

  // ngOnInit() {
  //   this.employees = this.employeeService.getEmployees();
  // }

  // receive data from service using http - 
  ngOnInit() {
    // we need to subscribe to the observable returned by the getEmployee func.

    // IMP - The .subscribe() function can accept up to three optional callback functions as arguments:
    // Next Callback (data => ...) - Triggered whenever the Observable emits a value
    // Error Callback (error => ...) - Triggered if the Observable emits an error.
    // Completion Callback - Triggered when the Observable completes successfully without any errors.

    // the data argument in the next callback represents the value emitted by the Observable 
    // we can change this to whatever name we want, it just represents the value emitted by observable.
    this.employeeService.getEmployees()
    .subscribe((data) => this.employees = data,
               (error) => this.errMsg = error);
  }



  // the prop or func i defined here inside the class i can use it in my html to show dynamic data
  public title = "lets learn angular";
  public current_topic = "inter-polation";
  public isDisabled = true;

  public successClass = "text-green";
  public hasError = true;

  public multipleClasses = {
    "text-green": this.hasError,
    "text-danger": !this.hasError,
    "text-special": this.hasError
  }

  public colorName = "orange";

  public multipleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  public greeting1 = "";
  onClick() {
    console.log("welcome to angular learning process");
    // initially our greeting variable is empty string but when we click on button
    // onClick func is fired which then changes our string value and show that.
    this.greeting1 = "lets learn angular";
  }

  public greeting2 = "";

  public name = "start";

  // The model in Angular typically refers to the properties and logic within the component class. 
  // This class provides data to the view and defines behavior.

  public directiveValue = false;

  public colorSelected = "yellow";

  // array/list of degrees 
  public degrees = ["cse", "IT", "ece"];

  // we need to import input decorator to import the data send by parent comp.
  // IMP - but we don't add this input decorator in imports array, imports array only includes 
  // the angular modules that we are using.

  // This ? informs TypeScript that msgImported may or may not be set, avoiding the initialization error.
  @Input('parentData') public msgImported?: string;

  // Output decorator make use of events, which is an instance of event Emitter class to send data 
  // from child to parent comp.
  // 
  @Output() public childEvent = new EventEmitter();

  runClick() {
    this.childEvent.emit("data successfully send from child to parent");
  }

  public myName  = "Mr.Shubham Dahiya";

  public date = new Date();

  greet() {
    return "good morning"
  }

}
