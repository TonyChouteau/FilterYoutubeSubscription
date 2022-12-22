const grid_item = '.ytd-grid-renderer';

const shorts_icon = 'span[aria-label="Shorts"]';
const get_author_name = name => `.ytd-channel-name>a:contains(${name})`;

const toggle = ($elt, hide) => hide ? $elt.hide() : $elt.show();

const handle = (hide) => {
    // Remove shorts
    toggle($(shorts_icon).closest(grid_item), hide);

    // Remove blacklisted
    author_to_hide.forEach(name => {
        toggle($(get_author_name(name)).closest(grid_item), hide);
    });
}

let interval = null;
const makeInterval = _ => {
    handle(true);
    interval = setInterval(() => {
        handle(true);
    }, 2000);
}
const removeInterval = _ => {
    clearInterval(interval);
    handle(false);
    interval = null;
}

makeInterval();

const yt_app_tag = "ytd-app";
const button_class = "yt_filter_button";
$(yt_app_tag).append(`<div class='${button_class}'><p>On</p></div>`);
const button = $("." + button_class);
$(button).on("click", _ => {
    if (interval) {
        removeInterval();
        $(button).addClass("disabled").children().text("Off");
    } else {
        makeInterval();
        $(button).removeClass("disabled").children().text("On");
    }
})