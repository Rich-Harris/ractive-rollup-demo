var App = (function (Ractive) {
	'use strict';

	Ractive = 'default' in Ractive ? Ractive['default'] : Ractive;

	var component$1 = { exports: {} };

	component$1.exports.template = {v:3,t:[{p:[1,1,0],t:7,e:"p",f:["The answer is ",{t:2,r:"answer",p:[1,18,17]}]}]};
	var __import0__ = Ractive.extend( component$1.exports );

	var component = { exports: {} };

	component.exports.template = {v:3,t:[{p:[3,1,53],t:7,e:"h1",f:["Hello ",{t:2,r:"name",p:[3,11,63]},"!"]}," ",{p:[4,1,78],t:7,e:"AnotherComponent",a:{answer:"42"}}]};
	component.exports.components = { AnotherComponent: __import0__ };
	var App = Ractive.extend( component.exports );

	return App;

}(Ractive));