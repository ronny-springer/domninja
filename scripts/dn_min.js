(function(e){"use strict";e(function(){var t=e("html"),n=t.find("body"),r=n.find("head"),i=t.html(),s=0,o=0,u,a,f,l,c,h,p,d,v={documentTags:{elements:e("*").not('div.js_dn_panel, div.js_dn_panel *, link[href$="dn_min.css"], script[src$="dn_min.js"]'),description:"Document tags",amountNinja:750,amountTrainee:1500,amountNovice:2500},httpRequests:{elements:e("iframe[src], img[src], link[href], script[src], source[src], object[data]").not('link[href$="dn_min.css"], script[src$="dn_min.js"]'),description:"HTTP requests",amountNinja:10,amountTrainee:20,amountNovice:50},deprecatedTags:{elements:n.find("applet, basefont, center, dir, font, i, isindex, menu, s, strike, u, xmp"),description:"Deprecated tags",amountNinja:0,amountTrainee:50,amountNovice:100},deprecatedAttributes:{elements:n.find("[align], [alink], [background], [bgcolor], [border], [clear], [height], [hspace], [language], [link], [nowrap], [start], [text], [vlink], [vspace], [width]"),description:"Deprecated attributes",amountNinja:0,amountTrainee:100,amountNovice:200},iframeTags:{elements:n.find("iframe"),description:"Iframe tags",amountNinja:0,amountTrainee:5,amountNovice:10},embedTags:{elements:n.find("embed"),description:"Embed tags",amountNinja:0,amountTrainee:5,amountNovice:10},scaledImgTags:{elements:n.find("img[width], img[height]"),description:"Scaled img tags",amountNinja:5,amountTrainee:10,amountNovice:20},conditionalComments:{elements:i.match(/<!--\[.*?\]-->/g),description:"Conditional comments",amountNinja:20,amountTrainee:30,amountNovice:40},documentComments:{elements:i.match(/<!--.*?-->/g),description:"Document comments",amountNinja:10,amountTrainee:20,amountNovice:30},emptyTags:{elements:t.find(":empty").not("area, base, basefont, br, hr, iframe[src], img[src], input, link[rel], meta, param, script[src]"),description:"Empty tags",amountNinja:50,amountTrainee:100,amountNovice:250},emptyAltAttributes:{elements:n.find('img[alt=""]'),description:"Empty alt attributes",amountNinja:0,amountTrainee:10,amountNovice:20},emptyHrefAttributes:{elements:n.find('a[href=""]'),description:"Empty href attributes",amountNinja:0,amountTrainee:10,amountNovice:20},emptySrcAttributes:{elements:n.find('iframe[src=""], img[src=""]'),description:"Empty src attributes",amountNinja:0,amountTrainee:5,amountNovice:10},visibleTags:{elements:n.find(":visible"),description:"Visible tags",amountNinja:650,amountTrainee:1300,amountNovice:2e3},hiddenTags:{elements:n.find(":hidden"),description:"Hidden tags",amountNinja:100,amountTrainee:200,amountNovice:500},displayRatio:{elements:"",description:"Display ratio",amountNinja:20,amountTrainee:40,amountNovice:60},hasIDTags:{elements:n.find("[id]"),description:"Tags with ID",amountNinja:10,amountTrainee:20,amountNovice:50},duplicatedIDTags:{elements:[],description:"Tags with duplicated ID",amountNinja:0,amountTrainee:5,amountNovice:10},nestedIDTags:{elements:n.find("[id] > [id]"),description:"Tags with nested ID",amountNinja:5,amountTrainee:10,amountNovice:15},deepNestedTags:{elements:n.find("* > * > * > * > * > * > * > * > * > * > * > * > * > * > *"),description:"Deep nested tags",amountNinja:0,amountTrainee:20,amountNovice:50},styleTagsInBody:{elements:n.find("style"),description:"Style tag in body",amountNinja:5,amountTrainee:10,amountNovice:20},styleExternals:{elements:t.find('link[type="text/css"][rel="stylesheet"]').not('link[href$="dn_min.css"]'),description:"External style files",amountNinja:5,amountTrainee:10,amountNovice:20},styleInlineAttributes:{elements:t.find("[style]").not("div.js_dn_panel"),description:"Inline style attributes",amountNinja:0,amountTrainee:10,amountNovice:20},scriptTagsInHead:{elements:r.find("script"),description:"Script tags in head",amountNinja:5,amountTrainee:10,amountNovice:20},scriptExternals:{elements:r.find('script[type="text/javascript"][src]').not('script[src$="dn_min.js"]'),description:"External script files",amountNinja:5,amountTrainee:10,amountNovice:20},scriptInlineAttributes:{elements:t.find("[onabort], [onactivate], [onafterprint], [onafterupdate], [onbeforeactivate], [onbeforecopy], [onbeforecut], [onbeforedeactivate], [onbeforeeditfocus], [onbeforepaste], [onbeforeprint], [onbeforeunload], [onbeforeupdate], [onblur], [onbounce], [oncellchange], [onchange], [onclick], [oncontextmenu], [oncontrolselect], [oncopy], [oncut], [ondataavailable], [ondatasetchanged], [ondatasetcomplete], [ondblclick], [ondeactivate], [ondrag], [ondragend], [ondragenter], [ondragleave], [ondragover], [ondragstart], [ondrop], [onerror], [onerrorupdate], [onfilterchange], [onfinish], [onfocus], [onfocusin], [onfocusout], [onhelp], [onkeydown], [onkeypress], [onkeyup], [onlayoutcomplete], [onload], [onlosecapture], [onmousedown], [onmouseenter], [onmouseleave], [onmousemove], [onmouseout], [onmouseover], [onmouseup], [onmousewheel], [onmove], [onmoveend], [onmovestart], [onpaste], [onpropertychange], [onreadystatechange], [onreset], [onresize], [onresizeend], [onresizestart], [onrowenter], [onrowexit], [onrowsdelete], [onrowsinserted], [onscroll], [onselect], [onselectionchange], [onselectstart], [onstartonstop], [onsubmit], [onunload]"),description:"Inline script attributes",amountNinja:0,amountTrainee:10,amountNovice:20},scriptGlobals:{elements:[],description:"Script globals",amountNinja:20,amountTrainee:50,amountNovice:100}};for(f in v)v.hasOwnProperty(f)&&(v[f].elements?v[f].amount=v[f].elements.length:v[f].amount=0);v.conditionalComments.amount&&(v.documentComments.amount=v.documentComments.amount-v.conditionalComments.amount),v.visibleTags.amount&&v.hiddenTags.amount&&(v.displayRatio.amount=Math.round(v.hiddenTags.amount/v.visibleTags.amount*100)),v.hasIDTags.elements.each(function(){a=e("[id="+this.id+"]"),a.length>1&&a[0]===this&&(v.duplicatedIDTags.elements.push(a),v.duplicatedIDTags.amount+=a.length)});for(l in window)window.hasOwnProperty(l)&&(v.scriptGlobals.elements.push(l),v.scriptGlobals.amount++);e("div.js_dn_panel").remove(),c=e('<div class="js_dn_panel dn_panel dn_panel_left"></div>').appendTo(n).hide(),p='<h1 class="js_dn_title_panel dn_title_panel">DOM Ninja</h1><ul class="js_dn_list_panel dn_list_panel">';for(f in v)v.hasOwnProperty(f)&&(o++,v[f].amount===0?(s++,d="dn_amount_zero"):v[f].amount<=v[f].amountNinja?(s++,d="dn_amount_ninja"):v[f].amount<=v[f].amountTrainee?d="dn_amount_trainee":v[f].amount>=v[f].amountNovice?(s--,d="dn_amount_novice"):d="dn_amount",p+="<li class="+d+' title="Ninja: '+v[f].amountNinja+" | Trainee: "+v[f].amountTrainee+" | Novice: "+v[f].amountNovice+'">'+v[f].description+": "+v[f].amount+"</li>");p+="</ul>",c.html(p).fadeIn(500),s<0&&(s=0),s>=o-5?(u="dn_score_ninja",h="Ninja, you make me proud!"):s>=o-10?(u="dn_score_trainee",h="Trainee, room for improvement!"):(u="dn_score_novice",h="Novice, you are doing it wrong!"),c.addClass(u),c.children("ul").append('<li class="dn_strong" title="Check the Javascript console for detailed information.">'+h+" ("+s+"/"+o+")</li>"),t.add(n).animate({scrollTop:0},1e3),c.children("ul.js_dn_list_panel").click(function(){c.hide().toggleClass("dn_panel_left dn_panel_right").fadeIn(500)}),c.children("h1.js_dn_title_panel").hover(function(){e(this).text("Close")},function(){e(this).text("DOM Ninja")}),c.children("h1.js_dn_title_panel").click(function(){c.remove(),e('link[href$="dn_min.css"], script[src$="dn_min.js"]').remove()}),window.console&&window.console.log(v)})})(jQuery);