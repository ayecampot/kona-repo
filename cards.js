$(document).ready(function() {
    var zindex = 10;

    $("div.card").click(function(e) {
        e.preventDefault();

        var isShowing = false;

        if ($(this).hasClass("d-card-show")) {
            isShowing = true
        }

        if ($("div.dashboard-cards").hasClass("showing")) {
            // a card is already in view
            var card = $("div.card.d-card-show");
            card.removeClass("d-card-show");

            toogle(document.getElementsByClassName("fa-angle-up")[0]);

            if (isShowing) {
                // this card was showing - reset the grid
                $("div.dashboard-cards")
                    .removeClass("showing");
            } else {
                // this card isn't showing - get in with it
                $(this)
                    .css({ zIndex: zindex })
                    .addClass("d-card-show");

                toogle(this.getElementsByClassName("fa-angle-down")[0]);
            }

            zindex++;

        } else {
            // no dashboard-cards in view
            $("div.dashboard-cards")
                .addClass("showing");
            $(this)
                .css({ zIndex: zindex })
                .addClass("d-card-show");

            toogle(this.getElementsByTagName("i")[0]);

            zindex++;
        }

    });
});

function selectOption(index) {
    document.getElementById("contacto").scrollIntoView({ behavior: 'smooth' });
    document.getElementById("inputState").options.selectedIndex = index;
}

function toogle(arrow) {
    if ($(arrow).hasClass("fa-angle-up")) {
        $(arrow).removeClass("fa-angle-up");
        $(arrow).addClass("fa-angle-down");
    } else {
        $(arrow).removeClass("fa-angle-down");
        $(arrow).addClass("fa-angle-up");
    }
}