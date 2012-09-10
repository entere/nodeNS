var config      = require('../config');
var redis       = require('redis');
var redisdb     = redis.createClient(config.redisinfo.port, config.redisinfo.host); redisdb.auth(config.redisinfo.password);
var url         = require('url');
var querystring = require('querystring');

function start(request, response) {
	response.end('welcome to nodeNS');
}

function get(request, response) {
	var data = url.parse(request.url, true).query; //得到url后全部参数如{'key':'u:23','type':'click'}
	redisdb.hgetall(data.key, function(err, obj){
		//console.dir(obj);
		response.end(obj[data.type]);	
	});
}

function put(request, response) {
	var data = url.parse(request.url, true).query;

	//如果type为click 入库一个1-3的随机数
	var incrNum = (data.type == 'click') ? parseInt(Math.random()*3+1) : 1;

	//只有在config中定义的type 才能写入，防一些非法操作
	if(config.typeinfo.hasOwnProperty(data.type)) {
		
		redisdb.hincrby(data.key, data.type, incrNum, function(){});
	}
		
	response.end();
}

function post(request, response) {
	var postData = '';

	// 设置接收数据编码格式为 UTF-8
	request.setEncoding('utf8');

	// 接收数据块并将其赋值给 postData
	request.addListener('data', function(postDataChunk){
		postData += postDataChunk;
	});

	request.addListener('end', function(){
		// 数据接收完毕，执行回调函数
		postData = querystring.parse(postData);
		redisdb.hincrby(postData.key, postData.type, 1, function(){});
	});
	response.end('ok');

}


exports.start = start;
exports.get   = get;
exports.put   = put;
exports.post  = post;
