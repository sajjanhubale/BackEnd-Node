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
        }).catch((err)=>{
            console.log(err)
            res.json({flag:"error"})
        })
    } catch (error) {
        res.json({flag:"error"})
    }
});
router.post('/deletecontact', function(req, res, next) {
    try {
        let name = req.body.name;
        console.log(name)
        contacts.deleteContact(name)
        .then(()=>{
            res.json({flag:"success"})
        }).catch((err)=>{
            console.log(err)
            res.json({flag:"error"})
        })
    } catch (error) {
        res.json({flag:"error"})
    }
});
router.post('/getlistofcontacts', function(req, res, next) {
    try {
        contacts.listContacts()
        .then((data)=>{
            res.json({flag:"success",data:data})
        }).catch((err)=>{
            console.log(err)
            res.json({flag:"error"})
        })
    } catch (error) {
        res.json({flag:"error"})
    }
});
module.exports = router;
