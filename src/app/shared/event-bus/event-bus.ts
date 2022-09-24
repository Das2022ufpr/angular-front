import { Injectable } from "@angular/core";
import { Subject, Subscription, BehaviorSubject } from "rxjs";
import { filter, map } from "rxjs/operators";
import { EventData } from "./event-data";

@Injectable({
  providedIn: 'root'
})

export class EventBus {
  private subject = new BehaviorSubject<EventData>(new EventData("", "", {}));

  emit(event: EventData) {
    this.subject.next(event);
  }

  on(eventName: string, action: {}): Subscription {
    return this.subject
           .pipe(filter((e: EventData) => e.name == eventName),
              map((e: EventData) => e.context )).subscribe(action);
  }

  close() {
    this.subject.unsubscribe();
  }
}
