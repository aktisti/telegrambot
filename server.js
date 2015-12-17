var bot = require('telegram-node-bot')('172385088:AAHO4-PI0JvWhEtuih_e9cAXJXEhOyJMf2k')

http = require('http');

server = http.createServer( function(req, res) {

    //console.dir(req.param);

    if (req.method == 'POST') {
        console.log("POST");
        
		req.on('data', function (chunk) {
			
			var obj = JSON.parse(decodeURIComponent(chunk.toString()))
            console.log(obj.device);
			bot.sendMessage('127252755',decodeURIComponent(chunk.toString()))
			bot.sendMessage('146203606',decodeURIComponent(chunk.toString()))
        });
        
		req.on('end', function() {
		// empty 200 OK response for now
			res.writeHead(200, "OK", {'Content-Type': 'text/html'});
			res.end();
		});
    }
    else
    {
		console.log('GET');
    }

});

server.listen(8010);
console.log('Listening');

bot.start({
    'ping': function(chatId, user, args){
		console.log(chatId)
		console.log(user)
		console.log(args)
        bot.sendMessage(chatId, 'pong')
    }
})