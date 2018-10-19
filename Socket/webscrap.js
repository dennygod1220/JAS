function Mylog() {
    scrape(options).then((result) => {
        //發送下載完成事件
        io.sockets.connected[socket.id].emit('downloadOK');
    }).catch(console.log);
}