var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var json2csv = require('json2csv');
var callback = require('callback')
var async = require("async");


var app = express();
var PageCount = 0
var details = [];

url = 'https://www.ebay.com/b/Supreme-Backpacks-Bags-Briefcases-for-Men/52357/bn_4357670?_pgn=1';
request(url, function (error, response, html) {

    if (!error) {
        var $ = cheerio.load(html);
        Result = $('.srp-controls__row-cell').text()
        var res = Result.split(" ");
        PageCount = Math.round(parseInt(res[2].replace(',', '')) / parseInt(res[0].split("-")[1]))
        scrapwebpage(PageCount);
    }
})

function scrapwebpage(pagecount,callback)
{
    for (var i = 0; j = PageCount, i < j; i++) {
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
                    details = []
                    details.push(data2)
                    fs.appendFile('D:\ebayoutput2.json', JSON.stringify(data2));
                    write2csv()
                })
            }
        })
    }
}

function write2csv(callback) {
    var csv = json2csv({ data: details });
    fs.appendFile("D:\ebay.csv", csv)
}


async.series([scrapwebpage, write2csv], function (err, results) {
    // results is an array of the value returned from each function
    // Handling errors here
    if (err) {
        console.log(err);
    }
});