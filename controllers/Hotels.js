const fs = require('fs');
var express = require('express');
const hotelsModel = require('../models/Hotels');
const dotenv = require('dotenv');
dotenv.config({ path: 'config.env' });

function createHotel(hotel) {
  return hotelsModel.create(hotel);
}

function getHotel(id) {
  console.log('Asmaa');
  return hotelsModel.find(id);
}

function deleteHotel(id) {
  return hotelsModel.findByIdAndDelete(id);
}

function updateHotel(id, hotel) {
  return hotelsModel.findByIdAndUpdate(id, hotel);
}

module.exports = { createHotel, getHotel, deleteHotel, updateHotel };
