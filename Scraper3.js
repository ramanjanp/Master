const scrapeIt = require("scrape-it");


// Promise interface
scrapeIt("https://www.ebay.com/b/Supreme-Backpacks-Bags-Briefcases-for-Men/52357/bn_4357670", {   
            itemnum:".w6-items[0]"
            title:".s-item__title",               
            Price: ".s-item__price",
            Location: ".s - item__location",
            NEGATIVE: ".NEGATIVE",
            shipping: ".s-item__shipping",
            Brand: ".s-item__dynamic"
}).then(page => {
    console.log(page);
});
