var scrape = require('website-scraper');
var fs = require('fs');
var path = require("path");

var options_arr = [];

function set_option(options_arr,url,dir){
    
    if (fs.existsSync('public/DemoPage/site/'+dir)) {
        deleteDir('public/DemoPage/site/'+dir);
    }
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


//指定下載的url和存放位置
set_option(options_arr,"https://www.tagsis.com/",'tagsis1');
set_option(options_arr,"https://www.tagsis.com/",'tagsis2');


for(var i=0;i<options_arr.length;i++){
    scrape(options_arr[i]).then((result,options_arr) => {
        console.log(options_arr[i]);
    
    }).catch(console.log);
}



function deleteDir(url){
    var files = [];
        
    if( fs.existsSync(url) ) {  //判断给定的路径是否存在
           
        files = fs.readdirSync(url);   //返回文件和子目录的数组
        files.forEach(function(file,index){
            var curPath = path.join(url,file);
                
            if(fs.statSync(curPath).isDirectory()) { //同步读取文件夹文件，如果是文件夹，则函数回调
                deleteDir(curPath);
            } else {    
                fs.unlinkSync(curPath);    //是指定文件，则删除
            }
                
        });
           
        fs.rmdirSync(url); //清除文件夹
    }else{
        console.log("给定的路径不存在！");
    }

}