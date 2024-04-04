export class Reader {
  reader_number: string = '';
  name: string = '';
  address: string = '';
  email: string = '';
  phone: string = '';
  books: string[] = [];

  constructor(
    reader_number: string,
    name: string,
    address: string,
    email: string,
    phone: string,
    books: string[] = []
  ) {
    this.reader_number = reader_number;
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.books = books;
  }
}
