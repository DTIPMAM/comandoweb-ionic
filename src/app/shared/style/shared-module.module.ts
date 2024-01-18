import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatStepperModule } from "@angular/material/stepper";
import {MatDividerModule} from '@angular/material/divider';
import {MatTreeModule} from '@angular/material/tree';
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from '@angular/material/grid-list'
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatChipsModule } from "@angular/material/chips"
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        MatProgressBarModule,
        MatStepperModule,
        MatDividerModule,
        MatTreeModule,
        MatTableModule,
        MatIconModule,
        MatPaginatorModule,
        MatChipsModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatTabsModule,
        MatGridListModule,
        MatTooltipModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSnackBarModule
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        MatProgressBarModule,
        MatStepperModule,
        MatDividerModule,
        MatTreeModule,
        MatTableModule,
        MatIconModule,
        MatPaginatorModule,
        MatChipsModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatTabsModule,
        MatGridListModule,
        MatTooltipModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSnackBarModule
    ]
})
export class SharedModule {}
