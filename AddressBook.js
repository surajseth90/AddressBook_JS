const NAME_REGEX = RegExp('^[A-Z]{1}[a-z]{2,}$');
const ADDRESS_REGEX = RegExp('^[a-zA-z]{3,}$');
const STATE_REGEX = RegExp('^[a-zA-z]{2,}$');
const ZIP_REGEX = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
const PHONE_NUMBER = RegExp('[0-9]{10}$');
const EMAIL_REGEX = RegExp('^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$');

class AddressBook {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        if (!NAME_REGEX.test(firstName)) {
            console.log('Please enter valid firstname.');
        } else {
            this.firstName = firstName;
        }
        if (!NAME_REGEX.test(lastName)) {
            console.log('Please enter valid lastname.');
        } else {
            this.lastName = lastName;
        }
        if (!ADDRESS_REGEX.test(address)) {
            console.log('Please enter valid address.');
        } else {
            this.address = address;
        }
        if (!ADDRESS_REGEX.test(city)) {
            console.log('Please enter valid city.');
        } else {
            this.city = city;
        }
        if (!STATE_REGEX.test(state)) {
            console.log('Please enter valid state.');
        }else {
            this.state = state;
        }
        if (!ZIP_REGEX.test(zip)) {
            console.log('Please enter valid pincode.');
        }else {
            this.zip = zip;
        }
        if (!PHONE_NUMBER.test(phoneNumber)) {
            console.log('Please enter valid phone number.');
        }else {
            this.phoneNumber = phoneNumber;
        }
        if (!EMAIL_REGEX.test(email)) {
            console.log('Please enter valid email ID.');
        }else {
            this.email = email;
        }
    }
}
let addressBookArrays = new Array();
try{
     addressBookArrays.push(new AddressBook("Suraj", "Gupta", "Badoni", "Datia", "MP", 475686, "8962921962", "suraj@gmaill.com"));
     addressBookArrays.push(new AddressBook("Sonali","Rathore","Padhar","Betul","MP",280001,"1234560789","sonali@gmail.com"));
     console.log(addressBookArrays);
}catch(e){
    console.log(e);
}