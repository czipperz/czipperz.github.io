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
});
