const grid_item = '.ytd-grid-renderer';

const shorts_icon = 'span[aria-label="Shorts"]';
const get_author_name = name => `.ytd-channel-name>a:contains(${name})`;

const remove = _ => {
    // Remove shorts
    $(shorts_icon).closest(grid_item).hide();

    // Remove blacklisted
    author_to_hide.forEach(name => {
        $(get_author_name(name)).closest(grid_item).hide();
    });
}

setInterval(() => {
    remove();
}, 2000);