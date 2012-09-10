var redis_info = {
	'host' : '118.26.232.96',
	'port' : 6379,
	'password' : '12\\#\\$chinablog'	
}

var server_info = {
	'host' : '118.26.232.96',
	'port' : '8888'
}

//定义允许传送的参数，安全性相关
var type_info = {
	'click' : 'click',
	'support' : 'support',
	'oppose' : 'oppose',
	'cmtart' : 'cmtart',
	'comment' : 'comment',
	'collection' : 'collection',
	'article':'article'
}
exports.redisinfo  = redis_info;
exports.serverinfo = server_info;
exports.typeinfo   = type_info;
