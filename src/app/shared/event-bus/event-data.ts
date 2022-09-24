export class EventData {
  name: string;
  context: any;
  action: {};

  constructor(name: string, context: any, action: {}) {
    this.name = name;
    this.context = context;
    this.action = action;
  }
}
