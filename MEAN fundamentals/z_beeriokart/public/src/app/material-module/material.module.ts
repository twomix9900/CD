import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatIconModule,
  MatTabsModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatListModule,
  MatExpansionModule,
  MatSelectModule,
  MatStepperModule,
  MatSliderModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatSelectModule,
    MatStepperModule,
    MatSliderModule,
  ],

  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatSelectModule,
    MatStepperModule,
    MatSliderModule,
  ],
})

export class MaterialModule { }
