export class User {
    id: number=0;
    name: string='';
    dateOfBirth: string='';
    gender: string='';
    emailId: string='';
    password: string='';
    district: string='';
    state: string='';
    zipCode: string='';
    phoneNumber: string='';
    role: string='';
    constructor(
      id: number,
      name: string,
      dateOfBirth: string,
      gender: string,
      emailId: string,
      password: string,
      district: string,
      state: string,
      zipCode: string,
      phoneNumber: string,
      role: string
    ){
      this.id=id;
      this.dateOfBirth=dateOfBirth;
      this.name=name;
      this.emailId=emailId;
      this.password=password;
      this.district=district;
      this.state=state;
      this.zipCode=zipCode;
      this.phoneNumber=phoneNumber;
      this.role=role;
      this.gender=gender;
    }
  }
  