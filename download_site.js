var scrape = require('website-scraper');



var options_arr = [];

function set_option(options_arr,url,dir){
    var a = {
        urls: [url],
        directory: 'public/DemoPage/site/'+dir,
        request: {
            headers: {
                'content-type': 'charset=UTF-8',
            }
        },
    };
    options_arr.push(a);
}

set_option(options_arr,"https://www.tagsis.com/",'tagsis1');
set_option(options_arr,"https://www.tagsis.com/",'tagsis2');

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
