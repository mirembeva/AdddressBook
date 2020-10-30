//create address book
function addressbook(firstName, lastName, phoneNumber){
    this.firstName=firstName;
    this.lastName=lastName;
    this.phoneNumber=phoneNumber;
}
//array to store the contacts
var addcontacts =[]

//update addressbook
var contact1 = new addressbook ('Eva', 'Mirembe', '+256703630016')
var contact2 = new addressbook ('Victor', 'Matsiko', '+2567036999')

//push contacts to the array
addcontacts.push(contact1, contact2)
//console.log(addcontacts)
//read from addressbook
function showAddress(){
   for (var n in addcontacts){
    console.log(addcontacts)
   }
}
//showAddress()

//delete from address book
function removeContact() {
addcontacts.splice([1], 1)
}
removeContact()

//show updated addressbook
showAddress()


