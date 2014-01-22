/*!
 * socket.io-node
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function(e,t,n){e.exports={"client version number":function(){t.version.should().match(/([0-9]+)\.([0-9]+)\.([0-9]+)/)},"socket.io protocol version":function(){t.protocol.should().be.a("number"),t.protocol.toString().should().match(/^\d+$/)},"socket.io available transports":function(){(t.transports.length>0).should().be_true}}})("undefined"==typeof module?module={}:module,"undefined"==typeof io?require("socket.io-client"):io,"undefined"==typeof should?require("should"):should);