function set_comment_image(img) {
    $("#social-comments").children("img").attr("src", "images/" + img + "-comments.png");
}

function set_social_icon(img) {
    $("#social-icon").children("img").attr("src", "images/sm/" + img);
}

function set_subtitle(val) {
    $("#subtitle").find("p").html(val);
}

function step_1() {
    $("#subtitle").removeClass("hidden");
    var icons = ['Facebook.png', 'Google+.png', 'Yelp.png', 'Pinterest.png', 'Snapchat.png',
                 'Twitter.png', 'Tumblr.png', 'WhatsApp.png', 'Stumbleupon.png', 'Instagram.png']
    for (let i = 0; i < icons.length; i++) {
        setTimeout(function() {set_social_icon(icons[i])}, i * 400);
    }
    setTimeout(function() {
        set_subtitle("from your social media pages");
    }, 2000);
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
        set_subtitle("Place an order for each request");
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
        set_subtitle("Share the order page to the customer");
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
    set_subtitle("where he/she can pay for the order");
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
    setTimeout(function() {
        $("#pay-msg").addClass("msg-nfy-top");
        setTimeout(function() {
            $("#pay-msg").removeClass("msg-nfy-top");
            setTimeout(function() {
                $("#page6-subdiv").css("transform", "scale(2.5)").css("opacity", "0").css("filter", "blur(1.23rem)");
                setTimeout(function() {
                    $("#page6").addClass("hidden");
                    $("#page7").removeClass("hidden");
                    step_9();
                }, 600);
            }, 1100);
        }, 3000);
    }, 800);
}

function step_9(sub_step=1) {
   set_subtitle("Notify customer on his/her order updates");
   $("#page7-sidediv").removeClass("scrolled_vleft");
   setTimeout(function() {
       var date1 = (sub_step == 1)?"16th June, 2018":"20th June, 2018";
       var side_div_id = (sub_step == 1)?"#p7-sd-s1":"#p7-sd-s2";
       var inp = $(side_div_id).find("input.updatable_input");
       for (let i = 0; i < date1.length; i++) {
           setTimeout(function() {$(inp).val(date1.substring(0, i+1));}, 20*i);
       }
       setTimeout(function() {
           var btn = $(side_div_id).find("button");
           $(btn).removeClass("btn-default").addClass("btn-primary");
           setTimeout(function() {
                $(btn).removeClass("btn-primary").addClass("btn-default");
                setTimeout(function() {
                    $("#page7-sidediv").addClass("scrolled_vleft");
                    setTimeout(function() {
                        var img_sel = (sub_step == 1)?"img:nth-child(2)":"img:nth-child(3)";
                        $("#p7-main-img").find(img_sel).removeClass("scrolled_vdown");
                        if (sub_step == 1) {
                            $("#p7-sd-s1").addClass("hidden");
                            $("#p7-sd-s2").removeClass("hidden");
                            setTimeout(function() {
                                step_9(2);
                            },1000);
                        } else {
                            $("#subtitle").addClass("hidden");
                            setTimeout(function() {
                                $("#page7").addClass("hidden");
                                step_10();
                            }, 1500);
                        }
                    }, 200)
                }, 400);
           }, 400)
       }, 20*date1.length + 500);
   }, 500)
}

function step_10() {
    $("#page8").removeClass("hidden");
    setTimeout(function() {
        $("#page8").find("big").css("font-size", "3em");
    }, 500)
}

$(document).ready(function() {
    setTimeout(function() {
        step_1();
    }, 1000)
})
