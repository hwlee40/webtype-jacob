$(document).ready(function(){

    const wghtmax = 100;
	const shrpmax = 100;
    //HERO MOUSE INTERACTIONS
    $('#intro').mousemove(function(event) {
        //TEXT VARIATION ON CURSOR
        let cursorX = event.pageX / $(this).width();
        let cursorY = 1 - (event.pageY) / $(this).height();
        let settingX = Math.floor(cursorX * wghtmax);
		let settingY = Math.floor(cursorY * shrpmax);
        // console.log(cursorX, cursorY);
        // console.log(settingX, settingY);

        $(".hero-text").css({
			"--shrp": settingX,
			"--wght": settingY
		});

        //INDICATORS MOVE
        if (event.pageY > $(this).height() - 90) {
            $('.hero-wght-indicator').css("top", $(this).height() - 90 + 'px');
        } else if (event.pageY < 40) {
            $('.hero-wght-indicator').css("top", 40);
        } else {
            $('.hero-wght-indicator').css("top", event.pageY +'px');
        };

        if (event.pageX > $(this).width() - 110) {
            $('.hero-shrp-indicator').css("left", $(this).width() - 110 + 'px');
        } else if (event.pageX < 103) {
            $('.hero-shrp-indicator').css("left", 103);
        } else {
            $('.hero-shrp-indicator').css("left", event.pageX +'px');
        }

        //INDICATORS CHANGE TEXT VALUES
        document.getElementById("wght-indicator").innerHTML = "Weight:&nbsp" + settingY;
        document.getElementById("shrp-indicator").innerHTML = "Sharpness:&nbsp" + settingX;

    })

    //HERO CURSOR TEXT VARIATION ON CURSOR
    $('body').mousemove(function(event){
        $('#cursor-custom').css("left", event.pageX +'px');
        $('#cursor-custom').css("top", event.pageY +'px');
    })

    //1st Scroll Interaction Section
    let scrollPosition;
    let windowHeight;
    let offsetSection3;
    let offsetSection4;
    let offsetSection5;
    let ofsetSection6;

    $(window).scroll(function(){
        scrollPosition = $(document).scrollTop();
        windowHeight = $('.section-3-sticky').height();
        offsetSection3 = $('.section-3-outer').offset().top;
        offsetSection4 = $('.section-4-outer').offset().top;
        offsetSection5 = $('.section-5-outer').offset().top;
        offsetSection6 = $('.section-6-outer').offset().top;

        // let cursorX = event.pageX / $(this).width();
        // let settingX = Math.floor(cursorX * wghtmax);

        let scrollPercentage1 = (scrollPosition - offsetSection3) / (offsetSection4 - offsetSection3 - windowHeight);
        let settingX1 = Math.floor(scrollPercentage1 * wghtmax)
        if (settingX1 < 0) {
            settingX1 = 0
        } else if (settingX1 > 100) {
            settingX1 = 100
        }
        // console.log (settingX1);

        document.getElementById("ss1-number").innerHTML = settingX1;

        $(".ss1-text").css({
			"--wght-1": settingX1
		});
        $(".ss1-text-2").css({
			"--wght-1": settingX1
		});
        $(".ss1-text-3").css({
			"--wght-1": settingX1
		});

        //Scroll 2
        let scrollPercentage2 = (scrollPosition - offsetSection5) / (offsetSection6 - offsetSection5 - windowHeight);
        let settingX2 = Math.floor(scrollPercentage2 * wghtmax)
        if (settingX2 < 0) {
            settingX2 = 0
        } else if (settingX2 > 100) {
            settingX2 = 100
        }
        document.getElementById("ss2-number").innerHTML = settingX2;
        $(".ss2-text").css({
			"--shrp-2": settingX2
		});
    });



});