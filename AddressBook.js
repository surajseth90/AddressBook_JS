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

    toString() {
        return "Firstname: " + this.firstName + " Lastname: " + this.lastName + " Address: " + this.address + " City: " + this.city +
            " State: " + this.state + " Zip: " + this.zip + " Phone Number: " + this.phoneNumber + " Email: " + this.email;
    }
}
let booleanValue;
do {
    let action = read.questionInt("What do you want to do : \n1. Show Contacts - Press 1  \n2. Add Contact - Press 2 \n3. Edit Contact - Press 3 \n4. Delete Contact - Press 4\n5. Count Contacts - Press 5 \n6. Search Contact - Press 6 \n7. View sorted contacts by city or state or zip - Press 7\n");
    switch (action) {
        case 1:
            console.log(addressBookArray.sort());
            break;

        case 2:
            addContact();
            break;

        case 3:
            editContact();
            break;

        case 4:
            deleteContact();
            break;

        case 5:
            console.log("Number of Contacts in Address Book is : " + addressBookArray.reduce(person => person + 1, 0));
            break;

        case 6:
            searchAndViewContact();
            break;

        case 7:
            sortByCityOrState();
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
        } else console.log("Please Enter a valid First Name")
    }
}

function addContact() {
    let firstName = read.question("Enter First Name of the person : ");
    let lastName = read.question("Enter last Name of the person : ");
    if (addressBookArray.find((person) => (person.firstName + person.lastName) == (firstName + lastName))) {
        console.log("Name is already present in Address Book !!");
        return;
    }
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
    } catch (e) {
        console.log(e);
    }
}

function deleteContact() {
    let deleteByFirstName = read.question("Enter First Name to be deleted : ");
    for (let i = 0; i < addressBookArray.length; i++) {
        if (addressBookArray[i].firstName == deleteByFirstName) {
            addressBookArray.splice(i, 1);
        }
    }
}

function searchAndViewContact() {
    const cityCode = 1;
    const stateCode = 2;
    let contacts = new Array();
    let countByCity = 0;
    let countByState = 0;
    let searchBy = read.questionInt("From Which you want to search ,\nBy city - Press 1\nBy State - Press 2\n");
    if (searchBy == cityCode) {
        let city = read.question("Enter the name of City : ")
        contacts = addressBookArray.filter(contact => contact.city === city);
        countByCity = contacts.reduce(person => person + 1, 0);
        console.log("Total number of contacts in " + city + " is : " + countByCity)
        console.log(contacts.sort())

    } else if (searchBy == stateCode) {
        let state = read.question("Enter the name of City : ")
        contacts = addressBookArray.filter(contact => contact.state === state);
        countByState = contacts.reduce(person => person + 1, 0);
        console.log("Total number of contacts in " + state + " is : " + countByState)
        console.log(contacts.sort())

    } else {
        console.log("Please enter a valid Input")
        searchAndViewContact();
    }
}

function sortByCityOrState() {
    const cityCode = 1;
    const stateCode = 2;
    const zip = 3;
    let sortBy = read.question("By Which you want to view Sorted Contacts ,\nBy city - Press 1\nBy State - Press 2\nBy Zip - Press 3\n")
    if (sortBy == cityCode) {
        addressBookArray.sort(function (a, b) { return a.city.localeCompare(b.city) });
        for (let i = 0; i < addressBookArray.length; i++)
            console.log(addressBookArray[i].toString(), "\n");
    } else if (sortBy == stateCode) {
        addressBookArray.sort(function (a, b) { return a.state.localeCompare(b.state) });
        for (let i = 0; i < addressBookArray.length; i++)
            console.log(addressBookArray[i].toString(), "\n");
    } else if (sortBy == zip) {
        addressBookArray.sort(function (a, b) { return parseInt(a.zip) - parseInt(b.zip) });
        for (let i = 0; i < addressBookArray.length; i++)
            console.log(addressBookArray[i].toString(), "\n");
    } else {
        console.log("Please enter a valid Input")
        sortByCityOrState();
    }
}