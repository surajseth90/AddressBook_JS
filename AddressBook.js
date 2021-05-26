class AddressBook {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email
    }
}
let addressBook = new AddressBook("Suraj","Gupta","Badoni","Datia","MP",475686,"896262921962","suraj@gmaill.com");
console.log(addressBook);