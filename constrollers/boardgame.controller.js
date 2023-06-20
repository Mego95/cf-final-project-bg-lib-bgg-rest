const axios = require('axios')
const { XMLParser } = require('fast-xml-parser')
const Boardgame = require('../models/boardgame.model.js')

const BGG_API_URL = 'https://www.boardgamegeek.com/xmlapi2/thing?id=';

const options = {ignoreAttributes: false, attributeNamePrefix : ""}
const parser = new XMLParser(options)

exports.hello = function(req, res) {
    res.status(200).json({status: 'hello'});
}

exports.findboardgame = function(req, res) {
    const bggId = req.params.bggid;
    let url = `${BGG_API_URL}${bggId}&stats=1`

    axios({
      method: 'get',
      url: url,
      responseType: 'text'
    }).then(function (response) {
      let data = parser.parse(response.data)


      if (data.items.item) {
        let id = data.items.item.id
        let boardgameName = data.items.item.name[0].value
        let minPlayers = data.items.item.minplayers.value
        let maxPlayers = data.items.item.maxplayers.value
        let minPlayingTime = data.items.item.minplaytime.value
        let maxPlayingTime = data.items.item.maxplaytime.value
        let categories = []
        let weight = data.items.item.statistics.ratings.averageweight.value

        data.items.item.link.forEach(obj => {
          if (obj.type === 'boardgamecategory') {
            categories.push(obj.value)
          }
        })
        
        let boardgame = new Boardgame(id, boardgameName, minPlayers, maxPlayers, minPlayingTime, maxPlayingTime, categories, weight)
        res.send(boardgame) 
      } else {
        res.send(null);
      }

      
    })
}