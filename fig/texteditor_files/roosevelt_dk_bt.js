(function(d){var f=d.document,g=d.location;var c={isArray:function(j){return j&&"object"===typeof j&&j instanceof Array},isObject:function(j){return j&&"object"===typeof j&&!(j instanceof Array)},isString:function(j){return"string"===typeof j&&j.length>0}};function b(n){var o=[],m="",l="1.0.0",j=g.href,p=f.characterSet||f.charset||"",k=f.referrer||"";if(!c.isObject(n)||!c.isString(j)){return m}o.push("roo_channel_id="+n.channel_id);o.push("roo_channel_label="+n.channel_label);o.push("doc_url="+encodeURIComponent(j));o.push("doc_charset="+encodeURIComponent(p));o.push("doc_referer="+encodeURIComponent(k));o.push("jsver="+l);m="d="+encodeURIComponent(o.join("&"));return m}function e(j){if(j){j.onload=j.onerror=function(){j.onload=null;j.onerror=null}}}function i(n){var p=("https:"===g.protocol)?"https://":"http://",l=["wat.ad.daum.net"],o="/aac",m,j,k=[];if(!c.isString(n)){return}for(m=0,j=l.length;m<j;m++){k[m]=f.createElement("img");k[m].width=1;k[m].height=1;e(k[m]);k[m].src=p+l[m]+o+"?"+n}}function a(){var l=f.referrer||"",k,j=/(search.naver.com)|(search.yahoo.com)|(.google.)|(.bing.com)|(sc.gajai.com)|(search.zum.com)/,m=/([&?]|^)(q=|p=|query=|keyword=|query1=)([^&]*)&?.*/;if(c.isString(l)){k=f.createElement("a");k.href=l;if(k.hostname&&k.search){if(j.test(k.hostname)&&(m.test(k.search)||m.test(k.hash))){return true}}}return false}function h(){var n=d.roosevelt_params_queue||[],k,j,l,m;if(!c.isArray(n)){return}if(!a()){return}for(k=0,j=n.length;k<j;k++){l=n[k];m=b(l);i(m)}}h()}(window));