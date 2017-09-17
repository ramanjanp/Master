var scrape = require('scrapeit')

scrape("https://www.ebay.com/b/Supreme-Backpacks-Bags-Briefcases-for-Men/52357/bn_4357670", function (err, o, dom) {
    o("s-item").forEach(function (p) {
        // scrape all p tags 
        console.log(p)
    });
});
