'use strict';
const request = require('request');
const MD5 = require('../lib/md5.js');
require('dotenv').config();

const url = 'https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&noVariants=true'
const ts = '1'
const apiKey =  process.env.PUBLIC_KEY
const apiSecret =  process.env.SECRET_KEY
const hash = 'c9f0a3b6b5e790b89d4c4c965a993afd'

var marvelResponse = function(title = '', callback){
const options = url + '&title=' + title + '&ts=' + ts + '&apikey=' + apiKey + '&hash=' + MD5((ts + apiSecret+ apiKey))
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      return body
    }
  })
}

module.exports = marvelResponse;
