$(function() {
    /*fixed-header*/
        let header = $("#header");
        let intro = $("#intro");
        let introH = intro.innerHeight();
        let scrollPos = $(window).scrollTop();        
        checkScroll(scrollPos, introH);
        $(window).on("scroll resize", function(){
            introH = intro.innerHeight();
            scrollPos = $(this).scrollTop();
            checkScroll(scrollPos, introH);
        });
        function checkScroll(scrollPos, introH) {
            if(scrollPos > introH) {
                header.addClass("fixed");
                header.removeClass("absolute");
            } else {
                header.removeClass("fixed");
                header.addClass("absolute");
            }        
        } 
})

$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});
    

document.querySelector("#btn1").onmouseover = () => {
    document.querySelector("#img1").classList.add("development_img--opacity");
}
document.querySelector("#btn1").onmouseout = () => {
    document.querySelector("#img1").classList.remove("development_img--opacity");
}

document.querySelector("#btn2").onmouseover = () => {
    document.querySelector("#img2").classList.add("development_img--opacity");
}
document.querySelector("#btn2").onmouseout = () => {
    document.querySelector("#img2").classList.remove("development_img--opacity");
}

document.querySelector("#btn3").onmouseover = () => {
    document.querySelector("#img3").classList.add("development_img--opacity");
}
document.querySelector("#btn3").onmouseout = () => {
    document.querySelector("#img3").classList.remove("development_img--opacity");
}

document.querySelector("#btn4").onmouseover = () => {
    document.querySelector("#img4").classList.add("development_img--opacity");
}
document.querySelector("#btn4").onmouseout = () => {
    document.querySelector("#img4").classList.remove("development_img--opacity");
}

document.querySelector("#btn5").onmouseover = () => {
    document.querySelector("#img5").classList.add("development_img--opacity");
}
document.querySelector("#btn5").onmouseout = () => {
    document.querySelector("#img5").classList.remove("development_img--opacity");
}

function getDateTime() {
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds(); 
    if(month.toString().length == 1) {
         month = '0'+month;
    }
    if(day.toString().length == 1) {
         day = '0'+day;
    }   
    if(hour.toString().length == 1) {
         hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
         minute = '0'+minute;
    }
    if(second.toString().length == 1) {
         second = '0'+second;
    }   
    var dateTime = day+'/'+month+'/'+year+' '+hour+':'+minute+':'+second;   
     return dateTime;
}

// example usage: realtime clock
setInterval(function(){
    currentTime = getDateTime();
    document.getElementById("digital-clock").innerHTML = currentTime;
}, 1000);


$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});


