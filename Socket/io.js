function socketio(server) {
    var io = require('socket.io')(server);

    io.on('connection', function (socket) {
        
        //等待client 回傳 url 版位大小 網站名稱 
        socket.on('CtoS Url zonesize', function (data) {
            var connect_id = socket.id
            var options = {
                urls: [data.url],
                directory: data.name+"/"+data.zone_size +"/"+ connect_id,
                request: {
                    headers: {
                        'content-type': 'charset=UTF-8',
                    }
                },
            };

        })
        
    })
}

module.exports = socketio;