YUI().use('node','event', function(Y) {
	function scrolledPast(){
		Y.one('#headerNav').addClass('show');
	}

	function scrolledTop(){
		Y.one('#headerNav').removeClass('show');
	}

	Y.on('scroll', function(){
		document.documentElement.scrollTop || document.body.scrollTop < 666 ?
			scrolledTop()
		:   scrolledPast();
	});

});