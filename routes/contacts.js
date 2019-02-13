var express = require('express');
var router = express.Router();
const contacts = require('../public/javascripts/contacts_operations');
/* GET users listing. */
router.post('/addnewcontact', function(req, res, next) {
    try {
        let name = req.body.name;
        let mobileNumber = req.body.mobileNumber;
        contacts.addNewContact(name,mobileNumber)
        .then(()=>{
            res.json({flag:"success"})
        }).catch(()=>{
            res.json({flag:"error"})
        })
    } catch (error) {
        res.json({flag:"error"})
    }
});

module.exports = router;
