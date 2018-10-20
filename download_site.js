var scrape = require('website-scraper');

var options_arr = [{
    urls: ["https://www.tagsis.com/"],
    directory: 'tagsis_test',
    request: {
        headers: {
            'content-type': 'charset=UTF-8',
        }
    }
}, {
    urls: ["https://www.tagsis.com/"],
    directory: 'tagsis_test2',
    request: {
        headers: {
            'content-type': 'charset=UTF-8',
        }
    },
}]

// var options = {
//     urls: ["https://www.tagsis.com/"],
//     directory: 'tagsis_test',
//     request: {
//         headers: {
//             'content-type': 'charset=UTF-8',
//         }
//     },
// };


for(var i=0;i<options_arr.length;i++){
    scrape(options_arr[i]).then((result) => {
        console.log(result);
    
    }).catch(console.log);
}
