#JSONP proxy

Small nodeJS script, to activate a request proxy, fetching JSON & serving it as a JSONP response.

##Why ?
In most contexts, client-side applications cannot use third-party JSON feeds, because of CORS [^1] security limitations.

To overturn this, you can:

* Alter the Allow-Access-Control-Origin HTTP header on the feed provider side
* Deactivate the CORS security on your browser
	* Google Chrome: run with the --disable-web-security flag. (On Mac OS : `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --disable-web-security`)
* Run your JSON queries through a proxy, that will make the calls, and redirects the response within a JSONP callback
##Why Not ?

Please note that there is ZERO security here.
This proxy just forward requests & spit out the response.

##Install

	$ npm install
	
##Run
	$ node app.js

##Use

POST to /
	* body.url : url to fetch
	* body.type : HTTP method. GET by default




[^1]: [Cross Origin Resource Sharing](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing)