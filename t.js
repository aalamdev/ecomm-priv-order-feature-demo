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
            setTimeout(function() {
                $("#page3").css("transform", "translateX(-100%)");
                $("#page4").removeClass("hidden");
                setTimeout(function() {
                    $("#page3").addClass("hidden");
                    setTimeout(function() {
                        $("#page4").removeClass("scrolled_right");
                        step_6();
                    }, 10);
                }, 200);
            }, 200);
        }, 400);
    }, 1200); //transition duration for transform animation + 1sec
}

function step_6() {
    setTimeout(function() {
        $("#whatsapp-chat").attr("src", "images/whatsapp-chat-link-selected.png");
        setTimeout(function() {
            $("#whatsapp-chat").attr("src", "images/whatsapp-chat.png");
            setTimeout(function() {
                $("#page4").css("transform", "translateX(-100%)");
                $("#page5").removeClass("hidden");
                setTimeout(function() {
                    $("#page4").addClass("hidden");
                    setTimeout(function() {
                        $("#page5").removeClass("scrolled_right");
                        step_7();
                    }, 10);
                }, 200);
            }, 400)
        }, 400);
    }, 800);
}

function step_7() {
    setTimeout(function() {
        $("#pay-button").addClass("btn-danger");
        setTimeout(function() {
            $("#pay-button").removeClass("btn-danger");
            setTimeout(function() {
                $("#page5").css("transform", "translateX(-100%)");
                $("#page6").removeClass("hidden");
                setTimeout(function() {
                    $("#page5").addClass("hidden");
                    setTimeout(function() {
                        $("#page6").removeClass("scrolled_right");
                        step_8();
                    }, 10);
                }, 200);
            }, 200);
        }, 400);
    }, 800);
}

function step_8() {

}

$(document).ready(function() {
    setTimeout(function() {
        step_2();
    }, 1000)
})
