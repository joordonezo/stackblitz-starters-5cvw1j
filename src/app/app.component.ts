import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-combobox-demo';
  public disabledInput: boolean = false;
  public currentForm: FormGroup = this.fb.group({
    inputText: [{ value: '', disabled: false }, []],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.currentForm.patchValue({
      inputText: 'No se aplicará si se encuentra <defaultSelected>',
    });
  }

  public returnProperties = {};

  public propertiesReturn = ['id', 'name', 'lastName'];

  public namesValue = ['name', 'lastName'];

  public print(valueOutput: any) {
    this.returnProperties = valueOutput;
    console.log(valueOutput);
  }

  public disabled() {
    if (this.disabledInput) {
      this.currentForm.disable();
    } else {
      this.currentForm.enable();
    }
    this.disabledInput = !this.disabledInput;
  }

  public dataList = [
    { id: 1, name: 'Luis', lastName: 'Perez', age: 25 },
    { id: 2, name: 'Maria', lastName: 'Gomez', age: 30 },
    { id: 3, name: 'Juan', lastName: 'Gonzalez', age: 35 },
    { id: 4, name: 'Juanico', lastName: 'Gonzalezisimo', age: 485 },
    { id: 5, name: 'Pedro', lastName: 'Jimenez', age: 40 },
    { id: 6, name: 'Jose', lastName: 'Hernandez', age: 45 },
    { id: 7, name: 'Luisa', lastName: 'Perez', age: 50 },
    { id: 8, name: 'Gerundia', lastName: 'Arcila', age: 55 },
    { id: 9, name: 'Carlos', lastName: 'Martinez', age: 27 },
    { id: 10, name: 'Ana', lastName: 'Sanchez', age: 32 },
    { id: 11, name: 'Miguel', lastName: 'Lopez', age: 37 },
    { id: 12, name: 'Rosa', lastName: 'Diaz', age: 42 },
    { id: 13, name: 'Eduardo', lastName: 'Fernandez', age: 47 },
    { id: 14, name: 'Susana', lastName: 'Ramirez', age: 52 },
    { id: 15, name: 'Julio', lastName: 'Garcia', age: 57 },
    { id: 16, name: 'Patricia', lastName: 'Alvarez', age: 27 },
    { id: 17, name: 'Roberto', lastName: 'Torres', age: 32 },
    { id: 18, name: 'Laura', lastName: 'Ruiz', age: 37 },
    { id: 19, name: 'Fernando', lastName: 'Vargas', age: 42 },
    { id: 20, name: 'Monica', lastName: 'Ortega', age: 47 },
    { id: 21, name: 'Manuel', lastName: 'Gutierrez', age: 52 },
    { id: 22, name: 'Diana', lastName: 'Castro', age: 57 },
    { id: 23, name: 'Sergio', lastName: 'Santos', age: 27 },
    { id: 24, name: 'Lorena', lastName: 'Reyes', age: 32 },
    { id: 25, name: 'Alberto', lastName: 'Mendoza', age: 37 },
    { id: 26, name: 'Carmen', lastName: 'Nunez', age: 42 },
    { id: 27, name: 'Pablo', lastName: 'Guerrero', age: 47 },
    { id: 28, name: 'Gabriela', lastName: 'Herrera', age: 52 },
    { id: 29, name: 'Diego', lastName: 'Rojas', age: 57 },
    { id: 30, name: 'Lucia', lastName: 'Flores', age: 27 },
    { id: 31, name: 'Ismael', lastName: 'Gomez', age: 32 },
    { id: 32, name: 'Adriana', lastName: 'Diaz', age: 37 },
    { id: 33, name: 'Antonio', lastName: 'Lopez', age: 42 },
    { id: 34, name: 'Natalia', lastName: 'Ramirez', age: 47 },
    { id: 35, name: 'Javier', lastName: 'Garcia', age: 52 },
    { id: 36, name: 'Valeria', lastName: 'Alvarez', age: 57 },
    { id: 37, name: 'Alejandro', lastName: 'Torres', age: 27 },
    { id: 38, name: 'Camila', lastName: 'Ruiz', age: 32 },
    { id: 39, name: 'Raul', lastName: 'Vargas', age: 37 },
    { id: 40, name: 'Sara', lastName: 'Ortega', age: 42 },
    { id: 41, name: 'Mario', lastName: 'Gutierrez', age: 47 },
    { id: 42, name: 'Daniela', lastName: 'Castro', age: 52 },
    { id: 43, name: 'Fernanda', lastName: 'Santos', age: 57 },
    { id: 44, name: 'Hector', lastName: 'Reyes', age: 27 },
    { id: 45, name: 'Valentina', lastName: 'Mendoza', age: 32 },
    { id: 46, name: 'Andres', lastName: 'Nunez', age: 37 },
    { id: 47, name: 'Marina', lastName: 'Guerrero', age: 42 },
    { id: 48, name: 'Carlos', lastName: 'Herrera', age: 47 },
    { id: 49, name: 'Ana', lastName: 'Rojas', age: 52 },
    { id: 50, name: 'Miguel', lastName: 'Flores', age: 57 },
    { id: 51, name: 'Rosa', lastName: 'Gomez', age: 27 },
    { id: 52, name: 'Eduardo', lastName: 'Diaz', age: 32 },
    { id: 53, name: 'Susana', lastName: 'Lopez', age: 37 },
    { id: 54, name: 'Julio', lastName: 'Ramirez', age: 42 },
    { id: 55, name: 'Patricia', lastName: 'Garcia', age: 47 },
    { id: 56, name: 'Roberto', lastName: 'Alvarez', age: 52 },
    { id: 57, name: 'Laura', lastName: 'Torres', age: 57 },
    { id: 58, name: 'Fernando', lastName: 'Vargas', age: 27 },
    { id: 59, name: 'Monica', lastName: 'Ortega', age: 32 },
    { id: 60, name: 'Manuel', lastName: 'Gutierrez', age: 37 },
    { id: 61, name: 'Diana', lastName: 'Castro', age: 42 },
    { id: 62, name: 'Sergio', lastName: 'Santos', age: 47 },
    { id: 63, name: 'Lorena', lastName: 'Reyes', age: 52 },
    { id: 64, name: 'Alberto', lastName: 'Mendoza', age: 57 },
    { id: 65, name: 'Carmen', lastName: 'Nunez', age: 27 },
    { id: 66, name: 'Pablo', lastName: 'Guerrero', age: 32 },
    { id: 67, name: 'Gabriela', lastName: 'Herrera', age: 37 },
    { id: 68, name: 'Diego', lastName: 'Rojas', age: 42 },
    { id: 69, name: 'Lucia', lastName: 'Flores', age: 47 },
    { id: 70, name: 'Ismael', lastName: 'Gomez', age: 52 },
    { id: 71, name: 'Adriana', lastName: 'Diaz', age: 57 },
    { id: 72, name: 'Antonio', lastName: 'Lopez', age: 27 },
    { id: 73, name: 'Natalia', lastName: 'Ramirez', age: 32 },
    { id: 74, name: 'Javier', lastName: 'Garcia', age: 37 },
    { id: 75, name: 'Valeria', lastName: 'Alvarez', age: 42 },
    { id: 76, name: 'Alejandro', lastName: 'Torres', age: 47 },
    { id: 77, name: 'Camila', lastName: 'Ruiz', age: 52 },
    { id: 78, name: 'Raul', lastName: 'Vargas', age: 57 },
    { id: 79, name: 'Sara', lastName: 'Ortega', age: 27 },
    { id: 80, name: 'Mario', lastName: 'Gutierrez', age: 32 },
    { id: 81, name: 'Daniela', lastName: 'Castro', age: 37 },
    { id: 82, name: 'Fernanda', lastName: 'Santos', age: 42 },
    { id: 83, name: 'Hector', lastName: 'Reyes', age: 47 },
    { id: 84, name: 'Valentina', lastName: 'Mendoza', age: 52 },
    { id: 85, name: 'Andres', lastName: 'Nunez', age: 57 },
    { id: 86, name: 'Marina', lastName: 'Guerrero', age: 27 },
    { id: 87, name: 'Carlos', lastName: 'Herrera', age: 32 },
    { id: 88, name: 'Ana', lastName: 'Rojas', age: 37 },
    { id: 89, name: 'Miguel', lastName: 'Flores', age: 42 },
    { id: 90, name: 'Rosa', lastName: 'Gomez', age: 47 },
    { id: 91, name: 'Eduardo', lastName: 'Diaz', age: 52 },
    { id: 92, name: 'Susana', lastName: 'Lopez', age: 57 },
    { id: 93, name: 'Julio', lastName: 'Ramirez', age: 27 },
    { id: 94, name: 'Patricia', lastName: 'Garcia', age: 32 },
    { id: 95, name: 'Roberto', lastName: 'Alvarez', age: 37 },
    { id: 96, name: 'Laura', lastName: 'Torres', age: 42 },
    { id: 97, name: 'Fernando', lastName: 'Vargas', age: 47 },
    { id: 98, name: 'Monica', lastName: 'Ortega', age: 52 },
    { id: 99, name: 'Manuel', lastName: 'Gutierrez', age: 57 },
    { id: 100, name: 'Diana', lastName: 'Castro', age: 27 },
    { id: 101, name: 'Sergio', lastName: 'Santos', age: 32 },
    { id: 102, name: 'Lorena', lastName: 'Reyes', age: 37 },
    { id: 103, name: 'Alberto', lastName: 'Mendoza', age: 42 },
    { id: 104, name: 'Carmen', lastName: 'Nunez', age: 47 },
    { id: 105, name: 'Pablo', lastName: 'Guerrero', age: 52 },
    { id: 106, name: 'Gabriela', lastName: 'Herrera', age: 57 },
    { id: 107, name: 'Diego', lastName: 'Rojas', age: 27 },
    { id: 108, name: 'Lucia', lastName: 'Flores', age: 32 },
    { id: 109, name: 'Ismael', lastName: 'Gomez', age: 37 },
    { id: 110, name: 'Adriana', lastName: 'Diaz', age: 42 },
  ];
}
