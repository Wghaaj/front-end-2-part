$(".nav-link").click(function(e) {
    const eventTarget =  e.target;
    const targetSelector = $(eventTarget).data('target')

    $('.tab-pane').removeClass("active");
    $('.tab-pane').addClass("fade");
    $(targetSelector).addClass("active");
    $(targetSelector).removeClass("fade");
    
})

