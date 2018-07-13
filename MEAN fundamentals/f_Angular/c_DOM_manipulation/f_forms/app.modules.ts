...
import { FormsModule } from '@angular/forms'; // <-- import FormsModule.
@NgModule({ 
	...
	imports: [
		BrowserModule,
		FormsModule, // <-- register FormsModule with our app.
	], 
	...
}) 
export class AppModule { }
