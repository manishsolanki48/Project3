
$(".topheaderNavigation").show();

$(".show-btn").click(function(){
    $(".topheaderNavigation").fadeToggle();
});

$(".blogsection").waypoint(function(direction){
    $(".blog-box").addClass("animated fadeInLeft")
});
$(".servisesetion").waypoint(function(direction){
    $(".left").addClass("animated zoomIn")
});
$(".servisesetion").waypoint(function(direction){
    $(".right").addClass("animated fadeInRight")
})
$(".Statisticssection").waypoint(function(direction){
    $(".counterBox").addClass("animated flipInX")
});
$(".bannerSection").waypoint(function(direction){
    $(".bannerTextSection h2").addClass("animated fadeInRight")
})
$(".bannerSection").waypoint(function(direction){
    $(".bannerTextSection p").addClass("animated fadeInUp")
})
$(".bannerSection").waypoint(function(direction){
    $(".order-now").addClass("animated flipInX")
})
$(".contenarsection").waypoint(function(direction){
    $(".contenar-left").addClass("animated fadeInUp")
});
$(".contenarsection").waypoint(function(direction){
    $(".contenar-right").addClass("animated zoomIn")
});


