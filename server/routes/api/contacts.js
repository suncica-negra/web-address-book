const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

// Get
router.get('/:username', async(req, res) => {
  var username = req.params.username;
  const contacts = await loadContactsCollection();
  res.send(await contacts.find({
    createdBy: username
  }).sort({
    firstName: 1,
    lastName: 1
  }).toArray());
});

router.get('/:id/edit', async(req, res) => {
  const contacts = await loadContactsCollection();
  res.send(await contacts.find({
    _id: new mongodb.ObjectID(req.params.id)
  }).toArray());
});

// Add
router.post('/:username', async(req, res) => {
  var username = req.params.username;
  const contacts = await loadContactsCollection();
  await contacts.insertOne({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    homeAddress: req.body.homeAddress,
    email: req.body.email,
    birthday: req.body.birthday,
    phone1: req.body.phone1,
    phone2: req.body.phone2,
    Network1: req.body.Network1,
    socialNetwork1: req.body.socialNetwork1,
    Network2: req.body.Network2,
    socialNetwork2: req.body.socialNetwork2,
    Network3: req.body.Network3,
    socialNetwork3: req.body.socialNetwork3,
    Network4: req.body.Network4,
    socialNetwork5: req.body.socialNetwork5,
    Network5: req.body.Network5,
    socialNetwork6: req.body.socialNetwork6,
    Network6: req.body.Network6,
    socialNetwork7: req.body.socialNetwork7,
    hobbies: req.body.hobbies,
    businessAddress: req.body.businessAddress,
    businessPhoneNumber: req.body.businessPhoneNumber,
    businessMobilePhone: req.body.businessMobilePhone,
    Network7: req.body.Network7,
    socialNetwork: req.body.socialNetwork,
    Network8: req.body.Network8,
    socialNetwork4: req.body.socialNetwork4,
    Network9: req.body.Network9,
    socialNetwork8: req.body.socialNetwork8,
    businessEmail: req.body.businessEmail,
    createdBy: username
  });
  res.status(201).send();
});

//Put
router.put('/:username/:id', async(req, res) => {
  var username = req.params.username;
  var id = req.params.id;

  const contacts = await loadContactsCollection();
  await contacts.findOneAndUpdate({
      "_id": new mongodb.ObjectID(id)
    }, {
      $set: {
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "homeAddress": req.body.homeAddress,
        "email": req.body.email,
        "birthday": req.body.birthday,
        "phone1": req.body.phone1,
        "phone2": req.body.phone2,
        "Network1": req.body.Network1,
        "socialNetwork1": req.body.socialNetwork1,
        "Network2": req.body.Network2,
        "socialNetwork2": req.body.socialNetwork2,
        "Network3": req.body.Network3,
        "socialNetwork3": req.body.socialNetwork3,
        "Network4": req.body.Network4,
        "socialNetwork5": req.body.socialNetwork5,
        "Network5": req.body.Network5,
        "socialNetwork6": req.body.socialNetwork6,
        "Network6": req.body.Network6,
        "socialNetwork7": req.body.socialNetwork7,
        "hobbies": req.body.hobbies,
        "businessAddress": req.body.businessAddress,
        "businessPhoneNumber": req.body.businessPhoneNumber,
        "businessMobilePhone": req.body.businessMobilePhone,
        "Network7": req.body.Network7,
        "socialNetwork": req.body.socialNetwork,
        "Network8": req.body.Network8,
        "socialNetwork4": req.body.socialNetwork4,
        "Network9": req.body.Network9,
        "socialNetwork8": req.body.socialNetwork8,
        "businessEmail": req.body.businessEmail,
        "createdBy": username
      }
    }, {
      new: true
    },
    (err, res) => {

    }
  );
});

// Delete
router.delete('/:id', async(req, res) => {
  const contacts = await loadContactsCollection();
  await contacts.deleteOne({
    _id: new mongodb.ObjectID(req.params.id)
  });
  res.status(200).send({});
});

async function loadContactsCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb+srv://USER:PASSWORD@SOME_URL.mongodb.net/web_address_bookDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
  return client.db("web_address_bookDB").collection('contacts');
}

module.exports = router;