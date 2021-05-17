import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoggingService {
  constructor() {
    console.log("instantiating Logging service");
  }

  logItemCreated(itemName: string) {
    console.log("item created: " + itemName);
  }

  logItemRemoved(itemName: string) {
    console.log("item removed: " + itemName);
  }
}
