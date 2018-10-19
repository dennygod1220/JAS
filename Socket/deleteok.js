var scrape = require('website-scraper');

function deleteok(io, socket, options) {

    socket.on('delete ok', Mylog);

    function Mylog() {
        //下載目前三立網頁資料包
        scrape(options).then((result) => {
            //發送下載完成事件
            io.sockets.connected[socket.id].emit('downloadOK');
        }).catch(console.log);
    }
}