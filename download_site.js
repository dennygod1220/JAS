var scrape = require('website-scraper');

var options = {
    urls: ["https://www.tagsis.com/"],
    directory: 'tagsis_test',
    request: {
        headers: {
            'content-type': 'charset=UTF-8',
        }
    },
};

scrape(options).then((result) => {
    console.log(result);
    
}).catch(console.log);