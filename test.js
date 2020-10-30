const chai = require('chai');
const {addressbook, showAddress, removeContact} = require('./addressbk2')

describe('show  contact address', function(){
    it('displays the addressbook', function(){
        assert.equal(showAddress({firstName:'Eva', lastName: 'Mirembe', phoneNumber: '+25670363016'}));
    })
    it('remove a contact in addressbook', function(){
        assert.equal(removeContact({firstName:'Eva', lastName: 'Mirembe', phoneNumber: '+25670363016'}));
    })
})