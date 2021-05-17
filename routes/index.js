var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {data:[
    {title: "products", img: "maldita1.jpg", content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed interdum risus. Cras ultricies vitae arcu sed hendrerit. Integer faucibus fermentum dapibus. Nunc quis arcu lacus. Mauris luctus neque quis maximus lobortis. Praesent ut mollis dui, sit amet imperdiet felis. Vestibulum ullamcorper turpis a felis ullamcorper tempor. Duis imperdiet nisl in diam hendrerit porta. Morbi et est varius diam ultricies mollis. Ut ullamcorper urna quam, in varius metus aliquam sed. Aliquam erat volutpat. '},
    {title: "about", img: "maldita1.jpg", content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed interdum risus. Cras ultricies vitae arcu sed hendrerit. Integer faucibus fermentum dapibus. Nunc quis arcu lacus. Mauris luctus neque quis maximus lobortis. Praesent ut mollis dui, sit amet imperdiet felis. Vestibulum ullamcorper turpis a felis ullamcorper tempor. Duis imperdiet nisl in diam hendrerit porta. Morbi et est varius diam ultricies mollis. Ut ullamcorper urna quam, in varius metus aliquam sed. Aliquam erat volutpat. '},
    {title: "beautiful things", img: "maldita1.jpg", content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed interdum risus. Cras ultricies vitae arcu sed hendrerit. Integer faucibus fermentum dapibus. Nunc quis arcu lacus. Mauris luctus neque quis maximus lobortis. Praesent ut mollis dui, sit amet imperdiet felis. Vestibulum ullamcorper turpis a felis ullamcorper tempor. Duis imperdiet nisl in diam hendrerit porta. Morbi et est varius diam ultricies mollis. Ut ullamcorper urna quam, in varius metus aliquam sed. Aliquam erat volutpat. '}
  ]});
});

module.exports = router;
