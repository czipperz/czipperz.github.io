$(document).ready(function() {
    $(".showMore a").on("click", function() {
        var $this = $(this);
        var $content = $this.parent().next().next();
        var linkText = $this.text().toUpperCase();

        if (linkText === "SHOW LESS") {
            linkText = "Show more";
            //$content.switchClass("showContent", "hideContent", 400);
            $content.toggleClass("hideContent");
        } else {
            linkText = "Show less";
            //$content.switchClass("hideContent", "showContent", 400);
            $content.toggleClass("hideContent");
        };

        $this.text(linkText);
    });

    $(".answerShowMore a").on("click", function() {
        var $this = $(this);
        var $content = $this.parent().next();
        var linkText = $this.text().toUpperCase();

        if (linkText === "HIDE ANSWER") {
            linkText = "Show Answer";
            //$content.switchClass("showContent", "hideContent", 400);
            $content.toggleClass("hideContent");
        } else {
            linkText = "Hide Answer";
            //$content.switchClass("hideContent", "showContent", 400);
            $content.toggleClass("hideContent");
        };

        $this.text(linkText);
    });

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
        var prevScrollpos = window.pageYOffset;
        var top = 0;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            console.log(top);
            top += prevScrollpos - currentScrollPos;
            var min = -document.getElementById("topbar").offsetHeight;
            if (top <= min) {
                top = min;
                document.getElementById("topbar").style.visibility = "hidden";
            } else {
                document.getElementById("topbar").style.visibility = "visible";
            }
            top = Math.min(top, 0);
            document.getElementById("topbar").style.top = top + "px";
            prevScrollpos = currentScrollPos;
        }
    }
});
