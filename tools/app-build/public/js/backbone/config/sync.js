(function(e,t){var n=e.sync,r={beforeSend:function(){this.trigger("sync:start",this)},complete:function(){this.trigger("sync:stop",this)}};e.sync=function(e,i,s){s||(s={}),t.defaults(s,{beforeSend:t.bind(r.beforeSend,i),complete:t.bind(r.complete,i)});var o=n(e,i,s);return!i._fetch&&e==="read"&&(i._fetch=o),o}})(Backbone,_);