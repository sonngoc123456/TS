class Staff {
    name : string;
    email : string;
    age : number;
    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getName(): string {
        return this.name
    }
    getEmail() : string {
        return this.email
    }
    getAge() : number {
        return this.age
    }
    setName(name : string) : void {
        this.name = name;
    }
    setEmail(email : string) :void {
        this.email = email;
    }
    setAge(age:number) : void {
        this.age = age;
    }
}
let staff = new Staff('son','sondepzai@gmail.com',18);
console.log(staff.email);
staff.setEmail('sonpro@vn.com');
console.log(staff.email);