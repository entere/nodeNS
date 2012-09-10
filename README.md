## GitHub nodeNS项目

欢迎访问nodeNS项目 [nodeNS](https://github.com/entere/nodeNS.git)


## 版本库地址

支持三种访问协议：

* HTTP协议: https://github.com/entere/nodeNS.git
* Git协议 : git://github.com/entere/nodeNS.git
* SSH协议 : git@github.com:entere/nodeNS.git


## nodeNS项目说明：
	
	nodeNS是基于nodejs和redis开发的点击服务器，目前支持put get,post操作

	get示例：curl:http://localhost:8888/get?key=aid:20&type=click

	put示例：curl:http://localhost:8888/put?key=aid:20&type=click

	put操作压力测试:
	[entere@LZ-KD104-tbj ~]$ webbench -c 100 -t 10 http://localhost:8888/put?key=aid:20\&type=click
	Webbench - Simple Web Benchmark 1.5
	Copyright (c) Radim Kolar 1997-2004, GPL Open Source Software.

	Benchmarking: GET http://localhost:8888/put?key=aid:20&type=click
	100 clients, running 10 sec.

	Speed=249192 pages/min, 419473 bytes/sec.
	Requests: 41532 susceed, 0 failed.


	get操作压力测试:
	[entere@LZ-KD104-tbj ~]$ webbench -c 100 -t 10 http://localhost:8888/put?key=aid:20\&type=click
	Webbench - Simple Web Benchmark 1.5
	Copyright (c) Radim Kolar 1997-2004, GPL Open Source Software.

	Benchmarking: GET http://localhost:8888/get?key=hashkey&type=click
	100 clients, running 10 sec.

	Speed=224670 pages/min, 396927 bytes/sec.
	Requests: 37445 susceed, 0 failed.