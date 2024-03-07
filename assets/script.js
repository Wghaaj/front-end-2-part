$(".nav-link").click(function(e) {
    const eventTarget =  e.target;
    const targetSelector = $(eventTarget).data('target')

    $('.nav-link').removeClass('active')
    $(eventTarget).addClass('active');

    $('.tab-pane').removeClass("active");
    $('.tab-pane').addClass("fade");
    $(targetSelector).addClass("active");
    $(targetSelector).removeClass("fade");
    
})

