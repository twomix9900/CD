import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  _gold:number;
  _id:string;
  // _tasks: object;
  // _pokemon: object;
  // _pokemonAbilities: object;
  // _tasksArr:any[];
  // _showTasks:boolean = false;
  // _showTaskDetails:boolean = false;
  // _taskDetails:object;

  constructor(private _httpService: HttpService, private _http: HttpClient ){
    // generally constructor is reserved for dependency injections
  };

  ngOnInit() {
    // this runs right after constructor, you must import { OnInit } from @angular/core and also change export class to export class AppComponent implements OnInit
    this.reset();
  };

  reset() {
    let goldObservable = this._httpService.reset();
    goldObservable.subscribe((data) => {
      console.log("Got data back for reset", data);
      this._id = data._id;
      this._gold = data.gold;
    })
  };

  farm() {
    let goldObservable = this._httpService.farm(this._id);
    goldObservable.subscribe((data) => {
      console.log("Got data back for farm", data);
      this._id = data._id;
      this._gold = data.gold;
    })
  };

  // getTasksFromService() {
  //   this._showTasks = true;
  //   let tempTasksObservable = this._httpService.getTasks();
  //   tempTasksObservable.subscribe((data) => {
  //     console.log("Got our tasks from local DB!", data);
  //     this._tasks = data;
  //     this._tasksArr = data.tasks;
  //     console.log("Putting data into this.tasks ::: ", this._tasks)
  //   });
  // };

  // getPokemonFromService() {
  //   let tempPokemonObservable = this._httpService.getPokemon();
  //   tempPokemonObservable.subscribe((data) => {
  //     console.log("Bulbasaur = ", data);
  //     this._pokemon = data;
  //     console.log("Bulbasaur has this ability: ", this._pokemon.abilities[0].ability.name);
  //     let tempAbilityPokemanz = this._http.get('https://pokeapi.co/api/v2/ability/34/');
  //     tempAbilityPokemanz.subscribe((pokemanz) => {
  //       console.log("This many pokemanz also have chlorophyll: ", pokemanz.pokemon.length);
  //       this._pokemonAbilities = pokemanz;
  //     })
  //   });
  // };

  // showTaskDetails(task: object) {
  //   console.log('task from html = ', task);
  //   this._showTaskDetails = true;
  //   this._taskDetails = task;
  // }

}