/* src/js/index.js */
$(function()
{
	// HASHCHANGE EVENTS
	$( window ).hashchange( function()
	{
		var hash = window.location.hash;
		hash = ( hash.replace( /^#/, '' ) || 'blank' );

		document.title = hash;

		$('#header .menu a').removeClass('active');

		$('#header .menu a').each( function()
		{
			var that = $(this);
			var href = that.attr('href');
			if( href == '#' + hash )
			{
				that.addClass('active');
			}
		});

		var hiddenContents = ['sobre', 'contato', 'duvidas', 'login' ];

		if ( hiddenContents.indexOf(hash) >= 0 )
		{
			$("html, body").animate({ scrollTop: 0 }, "slow");
			$('.switcher').slideUp();
			$( '.' + hash ).slideDown();
		} else {
			$('.switcher').slideUp(0);
			$( '.home' ).slideDown(0);
		}


	});

	$( window ).hashchange();

	// GOOGLE  MAPS CONTROLS
	$( '.maps' ).on('click',function () {
        $('.maps iframe').css("pointer-events", "auto");
    });

    $( ".maps" ).on('mouseleave',function() {
        $('.maps iframe').css("pointer-events", "none");
    });

    // DÚVIDAS CONTROLS
    $( '.activity-item h5' ).each( function()
    {
    	var that = $(this);

    	that.on(
    		'click',
    		function()
    		{
    			$( '.activity-item' ).removeClass('active');
    			$( '.activity-item div' ).slideUp();
    			$( that.parent() ).addClass( 'active' );
    			$( 'div', that.parent() ).slideDown();
    		}
		);
    });

    // HEADER SHADOW
    $(window).scroll(function()
    {
	    if ($(this).scrollTop() == 0)
	    {
	        $('#header').css({
	            'box-shadow': 'none',
	            '-moz-box-shadow' : 'none',
	            '-webkit-box-shadow' : 'none'
	        });
	    }
	    else
	    {
	        $('#header').css({
	            'box-shadow': '0px 2px 5px rgba(0,0,0,0.3)',
	            '-moz-box-shadow' : '0px 2px 5px rgba(0,0,0,0.3)',
	            '-webkit-box-shadow' : '0px 2px 5px rgba(0,0,0,0.3)'
	        });
	    }
	});

	// SLIDER
	$( '.slider' ).unslider({
		autoplay: true,
		nav: false
	});
});