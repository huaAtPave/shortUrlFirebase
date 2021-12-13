var express = require('express');
var router = express.Router();


const { collection, doc, getDoc, setDoc } = require('firebase/firestore/lite');
const db = require('../fb.js');

const urlCollection = 'urls';
const REMOTE_URL = 'https://shorturlfirebase-334920.wl.r.appspot.com/'

const URL_TABEL_REF = collection(db, 'url');


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index');
});

router.post('/addUrl', async (req, res) => {
  const name = req.body.name;
  const url = req.body.url;

  const docRef = doc(URL_TABEL_REF, name);

  getDoc(docRef)
    .then(u => {
      if (u.exists()) {
        console.log("non exists");
        res.send("link already exists, please change to a different name.");
      } else {
        setDoc(docRef, {'redirectUrl': url});
        res.send(`Your new handy link pv/${name} created`);
      }
    });
});

router.get('/get_redirect/:url', async (req,res) => {
  const url = req.params.url; 

  getDoc(doc(URL_TABEL_REF, url)).then(u => {

    let redirectUrl = '';
    if(!u.exists()) {
      console.log("non exists");

      redirectUrl = REMOTE_URL;
    } else {
      redirectUrl = u.data().redirectUrl;
    }
    
    res.status(200).json({url:redirectUrl})})
    .catch(error => res.status(500).send(error));;
});

module.exports = router;
