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
			$('.switcher').slideUp();
			$( '.' + hash ).slideDown();
		} else {
			$('.switcher').slideUp();
			$( '.home' ).slideDown();
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
});