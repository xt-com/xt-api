jQuery(function() {
	var $sidebar = $('#sidebar'),
		$nav = $('.nav'),
		$main = $('.main');

	var found = true;

	var $el;

	$sidebar.find('a').click(function() {
		$('body').removeClass('nav-open');
	});

	$("section > div.highlighter-rouge:first-of-type").each(function(i) {

		var $this = $(this).before("<ul class=\"languages\"></ul>"),
		$languages = $this.prev(),
		$notFirst = $this.nextUntil(":not(div.highlighter-rouge)"),
		$all = $this.add($notFirst);

		$all.add($languages).wrapAll("<div class=\"code-viewer\"></div>");


		listLanguages($all, $languages);

		$this.css('display', 'block');
		$notFirst.css('display', 'none');

		$languages.find('a').first().addClass('active');

		$languages.find('a').click(function() {
			$all.css('display', 'none');
			$all.eq($(this).parent().index()).css('display', 'block');

			$languages.find('a').removeClass('active');
			$(this).addClass('active');
			return false;
		});

		if ($languages.children().length === 0) {
			$languages.remove();
		}
	});

	function listLanguages($el, $insert) {
		$el.each(function(i) {
			var title = $(this).attr('title');
			if (title) {
				$insert.append("<li><a href=\"#\">" + title + "</a></li>");
			}
		});
	}

	var href = $('.sidebar a').first().attr("href");

	$('.sidebar a').click(function (){
		$('.sidebar a').removeClass('active');
		$(this).addClass('active');
		document.title = $(this).text();
	});

	if (href !== undefined && href.charAt(0) === "#") {
		setActiveSidebarLink();

		$(window).on("scroll", function(evt) {
			setActiveSidebarLink();
		});
	}

	function setActiveSidebarLink() {
			$('.sidebar a').removeClass('active');
				var $closest = getClosestHeader();
				$closest.addClass('active');
				document.title = $closest.text();

	}
});

function getClosestHeader() {
	var $links;
	var showSidebar = getShowSidebarNew();
	if (typeof(showSidebar) != "undefined" && showSidebar.val != '') {
		$links = showSidebar.find("a")
	}else {
		$links = $('.sidebar a');
	}
	var top = window.scrollY,
	$last = $links.first();

	if (top < 300) {
		return $last;
	}

	if (top + window.innerHeight >= $(".main").height()) {
		return $links.last();
	}

	for (var i = 0; i < $links.length; i++) {
		var $link = $links.eq(i),
		href = $link.attr("href");

		if (href !== undefined && href.charAt(0) === "#" && href.length > 1) {
			var $anchor = $(href);

			if ($anchor.length > 0) {
				var offset = $anchor.offset();

				if (top < offset.top - 300) {
					return $last;
				}

				$last = $link;
			}
		}
	}
	return $last;
}

function getShowSidebar(){
	//默认显示语言
	var lang = "en";
	//默认展示模块
	var model = "spot";

	var query = window.location.toString();
	//有锚点定位
	if(query.indexOf("#")>0){
		var anchorPoint = query.split("#")[1];
		if(anchorPoint.indexOf("_cn")>0){
			lang = "cn";
		}else {
			lang = "en";
		}

		//合约
		if(anchorPoint.indexOf("futures_")==0){
			model= "futures";
		}else if(anchorPoint.indexOf("margin_")==0) {//杠杆
			model= "margin";
		}else if(anchorPoint.indexOf("s_copy_trading_")==0) {//现货跟单
			model= "s_copy_trading";
		}else if(anchorPoint.indexOf("f_copy_trading_")==0) {//合约跟单
			model= "f_copy_trading";
		}else if(anchorPoint.indexOf("third_party_")==0) {//第三方
			model= "third_party";
		}else if(anchorPoint.indexOf("user_center_")==0) {//用户中心
			model= "user_center";
		}else {//现货
			model= "spot";
		}
		var firstDiv = model+"_sidebar";
		var secondDiv = "sidebar_"+lang;
		return $("#"+firstDiv).children("."+secondDiv);
	}
}

function getShowSidebarNew(){
	//默认显示语言
	var lang = "en";
	//默认展示模块
	var model = "index";

	var domId;
	$('.trade-type-select').each(function (index, domEle) {
		if(domEle.style.display!="none"){
			domId = domEle.id;
			lang = domId.split("_")[2];
		}
	});

	$("#"+domId).children("a").each(function (index, domEle) {
		if($(domEle).hasClass("active-type")){
			model = $(domEle).attr('class').replace("active-type","").replace("show_","").trim();
		}
	});

	var firstDiv = model+"_sidebar";
	var secondDiv = "sidebar_"+lang;
	return $("#"+firstDiv).children("."+secondDiv);
}
