/*\
title: $:/core/modules/filters/format/json.js
type: application/javascript
module-type: formatfilteroperator
\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Export our filter function
*/
exports.json = function(source,operand,options) {
	var results = [],
		spaces = null;
	if(operand) {
		spaces = /^\d+$/.test(operand) ? parseInt(operand,10) : operand;
	}
	source(function(tiddler,title) {
		var data = $tw.utils.parseJSONSafe(title);
		results.push(JSON.stringify(data,null,spaces));
	});
	return results;
};

})();