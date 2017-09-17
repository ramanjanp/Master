var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

// Let's scrape Anchorman 2


for (var i = 0; j = 200, i < j; i++) {
    url = 'https://www.ebay.com/b/Supreme-Backpacks-Bags-Briefcases-for-Men/52357/bn_4357670?_pgn=' + i;
    request(url, function (error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);

            $('.s-item__info').each(function () {
                var data = $(this)

                var data2 = {
                    PageNumber: i,
                    title: (data).find(".s-item__title").text().trim(),
                    price: (data).find(".s-item__price").text().trim(),
                    TrendingPrice: (data).find(".s-item__trending - price").text().trim(),
                    Location: (data).find(".s-item__location").text().trim(),
                    Brand: (data).find(".s-item__dynamic").text().trim(),
                    Trend: (data).find(".NEGATIVE").text().trim(),
                    Rated: (data).find(".s-item__etrs-text").text().trim(),

                }
                fs.appendFile('D:\ebayoutput2.json', JSON.stringify(data2))
            })
        }
        else {
            i = 200
        }
    })
}