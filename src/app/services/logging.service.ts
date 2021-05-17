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
}
