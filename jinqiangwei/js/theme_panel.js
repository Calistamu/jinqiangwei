$(window).load(function(){

	'use strict';

	// Theme Panel Open/Close
	$( "#theme_panel #theme_panel_button" ).click(function(){
		$( "#theme_panel" ).toggleClass( "close_panel", "open_panel" );
		$( "#theme_panel" ).toggleClass( "open_panel", "close_panel" );
		return false;
	});

	// Color Skins
	$('.color_link').click(function(){
		var title = jQuery(this).attr('title');		
		jQuery('#changeable_color').attr('href', 'css/colors/' + title + '.css');				
	  	return false;
    });	


    // Color Skins
	$('#black_menu').click(function(){
		$('header').addClass('dark-nav').removeClass('white-nav');
		jQuery('img.site_logo').attr('src', 'images/logo' + '.png');				
    });	

    // Color Skins
	$('#white_menu').click(function(){
		$('header').addClass('white-nav').removeClass('dark-nav');	
		jQuery('img.site_logo').attr('src', 'images/logo-dark' + '.png');		
    });	


    // Normal Nav - For only Fulscreen Versions
	$('#nav_normal').click(function(){
		$('#navigation').removeClass('nav-from-top');			
    });	

    // Nav From Top - For only Fulscreen Versions
	$('#nav_from_top').click(function(){
		$('#navigation').addClass('nav-from-top');			
    });


    // Nav From Top - For only Fulscreen Versions
	$('.layout_tone').click(function(){
		var title = jQuery(this).attr('title');		
		jQuery('#changeable_tone').attr('href', 'css/' + title + '.css');				
	  	return false;	
    });

});
