// const filterEnabled = true;

// chrome.storage.local.get(["filterEnabled"]).then((result) => {
//     console.log("Value currently is " + result.key);
// });

// $(document).ready(_ => {
//     $(".onoff").on("change", e => {
//         const $node = $(e.target);
//         const val = $node.is(':checked');
//         chrome.storage.local.set({ "filterEnabled": val }).then(() => {
//             console.log("Filter enabled : " + val);
//         });
//     });
// });