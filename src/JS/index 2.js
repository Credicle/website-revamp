$( document ).ready(function() {
    console.log( "ready!" );
    $(".hamburger").click(function(){
            //Toggle icon 
            $(".hamburger").toggleClass("bi-list");
            $(".hamburger").toggleClass("bi-x-lg");

            //Toggle for icon
            $(".hamburger").toggleClass("icon-open");

            $(".hamb-content").toggleClass("hamb-content-open");
    });
});