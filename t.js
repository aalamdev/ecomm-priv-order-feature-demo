function set_comment_image(img) {
    $("#social-comments").children("img").attr("src", "images/" + img + "-comments.png");
}

function set_social_icon(img) {
    $("#social-icon").children("img").attr("src", "images/sm/" + img);
}

function step_1() {
    var icons = ['Facebook.png', 'Google+.png', 'Yelp.png', 'Pinterest.png', 'Snapchat.png',
                 'Twitter.png', 'Tumblr.png', 'WhatsApp.png', 'Stumbleupon.png', 'Instagram.png']
    for (let i = 0; i < icons.length; i++) {
        setTimeout(function() {set_social_icon(icons[i])}, i * 400);
    }
    var comments = [
        "facebook", "whatsapp", "random", "insta"]
    for (let i = 1; i < comments.length; i++) {
        setTimeout(function() {set_comment_image(comments[i])}, i * 1000)
    }
    setTimeout(step_2, 4200);
}

function step_2() {
    var par = $("#social-book-connector");
    var connector = $("#social-book-connector > div.connector");

    setTimeout(function() {
        $(connector).css("height", "20%")
    }, 200)
    setTimeout(function() {
        $(connector).css("height", "50%")
    }, 400)
    setTimeout(function() {
        $(connector).css("height", "75%")
    }, 600)
    setTimeout(function() {
        $(connector).css("height", "100%");
    }, 800)
    setTimeout(function() {
        $("#page1").addClass("hidden");
        step_3();
    }, 1000);
}

function step_3() {
    $("#page2").removeClass("hidden");
    var par = $("#social-book-connector2");
    var connector = $("#social-book-connector2 > div.connector");

    setTimeout(function() {
        $(connector).css("height", "20%")
    }, 200)
    setTimeout(function() {
        $(connector).css("height", "50%")
    }, 400)
    setTimeout(function() {
        $(connector).css("height", "75%")
    }, 600)
    setTimeout(function() {
        $(connector).css("height", "100%");
    }, 800)
    setTimeout(function() {
        $("#new-order-btn").removeClass("hidden").addClass("spring-animate");
        step_4();
    }, 1000);

}

function step_4() {
    setTimeout(function() {
        $("#new-order-btn > button").removeClass("btn-default").addClass("btn-primary");
        setTimeout(function() {
            $("#new-order-btn > button").removeClass("btn-primary").addClass("btn-default");
            setTimeout(function() {
                $("#page2").css("transform", "translateY(-50%)");
                setTimeout(function() {
                    $("#page2").addClass("hidden");
                    $("#page3").removeClass("hidden")
                    setTimeout(function() {
                        $("#page3").removeClass("scrolled_down");
                        step_5();
                    }, 10);
                }, 200);
            }, 400);
        }, 400);
    }, 1200);
}

function step_5() {
    setTimeout(function() {
        var share_btn = $("#share-button")
        $(share_btn).addClass("btn-success")
        setTimeout(function() {
            $(share_btn).removeClass("btn-success");
            $("#page3").css("transform", "translateX(-100%)");
            $("#page4").removeClass("hidden");
            setTimeout(function() {
                $("#page4").removeClass("scrolled_right");
                step_5();
            }, 10);
        }, 400);
    }, 1200); //transition duration for transform animation + 1sec
}

$(document).ready(function() {
    setTimeout(function() {
        step_2();
    }, 1000)
})
