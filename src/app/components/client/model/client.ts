export class Client {
  id: number;
  cpf: string;
  name: string;
  lastName: string;

  constructor(
    private idParam: number,
    private cpfParam: string,
    private nameParam: string,
    private lastNameParam: string,) {
      this.id = idParam;
      this.cpf = cpfParam;
      this.name = nameParam;
      this.lastName = lastNameParam;
  }
}
