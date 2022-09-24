export class Client {
  id: number;
  cpf: string;
  name: string;
  age: number;

  constructor(
    private idParam: number,
    private cpfParam: string,
    private nameParam: string,
    private ageParam: number,) {
      this.id = idParam;
      this.cpf = cpfParam;
      this.name = nameParam;
      this.age = ageParam;
  }
}
