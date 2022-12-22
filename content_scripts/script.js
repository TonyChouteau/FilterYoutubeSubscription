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

const yt_app_tag = "ytd-app";
const button_class = "yt_filter_button";
$(yt_app_tag).append(`<div class='${button_class}'><p>On</p></div>`);
const button = $("." + button_class);

let enabled = true;
setInterval(() => {
    window.location.href.includes("feed") ? button.show() : button.hide();
    handle(enabled);
}, 2000);
handle(true);

$(button).on("click", _ => {
    if (enabled) {
        enabled = false;
        $(button).addClass("disabled").children().text("Off");
    } else {
        enabled = true;
        $(button).removeClass("disabled").children().text("On");
    }
})