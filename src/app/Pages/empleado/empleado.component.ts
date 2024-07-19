import { Component, inject, Input, OnInit } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { EmpleadoService } from '../../Services/empleado.service';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})

export class EmpleadoComponent /* implements OnInit */{
/*   @Input('id') idEmpleado!: number;
  private empleadoServicio = inject(EmpleadoService);
  public formBuild = inject(FormBuilder) */
}
