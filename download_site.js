var scrape = require('website-scraper');
var fs = require('fs');
var path = require("path");
var cron = require('node-cron');


//儲存參數的陣列
var options_arr = [];


//指定下載的url和存放位置


// cron.schedule('* * * * *',set_option(options_arr, "https://www.thenewslens.com/", 'tagsis1'));
// cron.schedule('* * * * *',set_option(options_arr, "https://www.tagsis.com/", 'tagsis2'));
cron.schedule('* 30 * * *', () => {
    set_option(options_arr, "https://www.thenewslens.com/", 'tagsis1');
    set_option(options_arr, "https://www.tagsis.com/", 'tagsis2');
  });


//==================================================================
function set_option(options_arr, url, dir) {
    //如果該目錄已經存在，先將此目錄刪除
    if (fs.existsSync('public/DemoPage/site/' + dir)) {
        console.log("刪除");
        
        deleteDir('public/DemoPage/site/' + dir);
    }
    //呼叫此function 後 會將 options 參數push進options 陣列
    var a = {
        urls: [url],
        directory: 'public/DemoPage/site/' + dir,
        request: {
            headers: {
                'content-type': 'charset=UTF-8',
            }
        },
    };
    console.log("set push");
    scrape(a).then((result, options_arr) => {

    }).catch(console.log);
    // options_arr.push(a);
}

//用for迴圈判斷 要下載多少東西
// for (var i = 0; i < options_arr.length; i++) {
//     scrape(options_arr[i]).then((result, options_arr) => {

//     }).catch(console.log);
// }



function deleteDir(url) {
    var files = [];

    if (fs.existsSync(url)) {
        //判断给定的路径是否存在
        files = fs.readdirSync(url);
        //返回文件和子目录的数组
        files.forEach(function (file, index) {
            var curPath = path.join(url, file);

            if (fs.statSync(curPath).isDirectory()) {
                //同步读取文件夹文件，如果是文件夹，则函数回调
                deleteDir(curPath);
            } else {
                fs.unlinkSync(curPath);
                //是指定文件，则删除
            }

        });

        fs.rmdirSync(url); //清除文件夹
    } else {
        console.log("给定的路径不存在！");
    }

}