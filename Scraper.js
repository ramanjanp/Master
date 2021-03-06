var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();



    // Let's scrape Anchorman 2
    url = 'http://www.imdb.com/title/tt1229340/';


    request(url, function (error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);
            var title, release, rating;
            var json = { title: "", release: "", rating: "" };

            $('.star-rating-button').filter(function () {
                var data = $(this);
                rating = data.text().trim();
            })
            
            $('.title_wrapper').filter(function () {
                var data = $(this);
                title = data.children().first().text().trim();
                release = data.children().last().children().last().text().trim();                
                json.title = title;
                json.release = release;
            })
            
            $('.ratingValue').filter(function () {
                var data = $(this);
                rating = data.text().trim();
                json.rating = rating;
            })           
        }
        
        fs.writeFile('D:\output.json', JSON.stringify(json, null, 4), function (err) {
            if (err)
            {
                console.lag(err);
            }
            console.log('File successfully written! - Check your project directory for the output.json file');
        })
    })