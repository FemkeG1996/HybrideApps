import { Injectable } from '@angular/core';
import { ToDoitem } from '../to-doitem';
import { SQLiteService } from './sqlite.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  db:any;
  
  constructor(private _sqlite: SQLiteService) { 
    this.initDb();
  }

  async initDb() {
  //  ... db aanmaken ... schema maken ...
  this.db = await this._sqlite.createConnection("todo", false, "no-encryption", 1);
  let ret: any = await this.db.open();
  const createTable= "CREATE TABLE IF NOT EXISTS todo (id INTEGER PRIMARY KEY,description TEXT NOT NULL)";
  ret = await this.db.execute(createTable);
  }

  async addItem(td: ToDoitem){
    // ... een item toevoegen aan de databank ...
    let sqlcmd: string = "INSERT INTO todo (description) VALUES (?)";
    let values: Array<any> = [td.description];
    await this.db.run(sqlcmd, values);
  }

  async getItems(): Promise<ToDoitem[]> {
    // ... query uitvoeren om alles op te halen...
   let ret = await this.db.query("SELECT * FROM todo;");
   return ret.values;
  }

  async deleteItems(id:number){
    let sqlcmd: string = "DELETE FROM todo WHERE id = (?)"
    let values: Array<any> = [id];
    await this.db.run(sqlcmd, values);
  }
}