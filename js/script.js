/*
* Quicksand + PrettyPhoto: Reorder and filter items, Initialize PrettyPhoto Plugin
* 
*/
	
$(document).ready(function(){

    //Thumbnail mouse over
    initThumbnailOver();
	
    // Initialize prettyPhoto plugin
    initPrettyPhoto();
    
    // Clone portfolio items 
    var $data = $(".portfolio").clone();
	
    // Attempt to call Quicksand on every click event handler
    $(".filter a").click(function(e){
		
        $(".filter li").removeClass("current");	
		
        // Get the class attribute value of the clicked link
        var $filterClass = $(this).parent().attr("class");
        var $filteredPortfolio = null
        
        if ( $filterClass == "all" ) {
            $filteredPortfolio = $data.find("li");
        } else {
            $filteredPortfolio = $data.find("li[data-type~=" + $filterClass + "]");
        }
		
        // Call quicksand
        $(".portfolio").quicksand( $filteredPortfolio, { 
            duration: 800, 
            easing: 'easeInOutQuad' 
        }, function(){
            initPrettyPhoto();
            initThumbnailOver();
        });


        $(this).parent().addClass("current");

        // Prevent the browser jump to the link anchor
        e.preventDefault();
    })
});

function initPrettyPhoto(){
    $(".portfolio a[data-gal='prettyPhoto[portfolio]']").prettyPhoto({
        theme:'light_square', 
        autoplay_slideshow: false, 
        overlay_gallery: false, 
        show_title: false
    });
}

function initThumbnailOver(){
    $(".portfolio a").hover( function(){ 
        $(this).children("img").animate({
            opacity: 0.25
        }, "fast"); 
    }, function(){ 
        $(this).children("img").animate({
            opacity: 1.0
        }, "slow"); 
    }); 
}