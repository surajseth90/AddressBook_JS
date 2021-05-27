const NAME_REGEX = RegExp('^[A-Z]{1}[a-z]{2,}$');
const ADDRESS_REGEX = RegExp('^[a-zA-z]{3,}$');
const STATE_REGEX = RegExp('^[a-zA-z]{2,}$');
const ZIP_REGEX = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
const PHONE_NUMBER = RegExp('[0-9]{10}$');
const EMAIL_REGEX = RegExp('^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$');


let addressBookArray = new Array();
var read = require("readline-sync");

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
        } else {
            this.state = state;
        }
        if (!ZIP_REGEX.test(zip)) {
            console.log('Please enter valid pincode.');
        } else {
            this.zip = zip;
        }
        if (!PHONE_NUMBER.test(phoneNumber)) {
            console.log('Please enter valid phone number.');
        } else {
            this.phoneNumber = phoneNumber;
        }
        if (!EMAIL_REGEX.test(email)) {
            console.log('Please enter valid email ID.');
        } else {
            this.email = email;
        }
    }
}
let booleanValue;
do {
    let action = read.questionInt("What do you want to do : \n1. Show Contacts - Press 1  \n2. Add Contact - Press 2 \n2. Edit Contact - Press 3 \n ");
    switch (action) {
        case 1:
            console.log(addressBookArray);
            break;

        case 2:
            addContact();
            break;

        case 3:
            editContact();
            break;
    }
    booleanValue = read.question("Do you want to execute again , press true/false : ")
} while (booleanValue)

function editContact() {
    let editByFirstName = read.question("Enter First Name to be edited : ");
    for (let i = 0; i < addressBookArray.length; i++) {
        if (addressBookArray[i].firstName == editByFirstName) {
            console.log("Name to be edited found");
            addContact().firstName = addressBookArray[i].firstName;
            addContact().lastName = addressBookArray[i].lastName;
            addContact().address = addressBookArray[i].address;
            addContact().city = addressBookArray[i].city;
            addContact().state = addressBookArray[i].state;
            addContact().zip = addressBookArray[i].zip;
            addContact().phoneNumber = addressBookArray[i].phoneNumber;
            addContact().email = addressBookArray[i].email;
            console.log(addressBookArray)
        } else console.log("Please Enter a valid First Name")
    }
}

function addContact() {
    let firstName = read.question("Enter First Name of the person : ");
    let lastName = read.question("Enter last Name of the person : ");
    let address = read.question("Enter address of the person : ");
    let city = read.question("Enter city name : ");
    let state = read.question("Enter state name of the person : ");
    let zip = read.question("Enter zip : ");
    let phoneNumber = read.question("Enter phone number of the person : ");
    let email = read.question("Enter email ID of the person : ");
    try {
        let person = new AddressBook(firstName, lastName, address, city, state, zip, phoneNumber, email);
        addressBookArray.push(person);
        console.log("Contact is added. ");
        console.log(addressBookArray);
    } catch (e) {
        console.log(e);
    }
}