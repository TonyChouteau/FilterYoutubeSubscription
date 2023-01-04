const libs = [{
    name: "jQuery",
    test: window.jQuery,
    node: `<script 
        src="https://code.jquery.com/jquery-3.6.3.min.js" 
        integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" 
        crossorigin="anonymous">
    </script>`
}, {
    name: "moment.js",
    test: window.moment,
    node: `<script 
        src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js" 
        integrity="sha512-CryKbMe7sjSCDPl18jtJI5DR5jtkUWxPXWaLCst6QjH8wxDexfRJic2WRmRXmstr2Y8SxDDWuBO6CQC6IE4KTA==" 
        crossorigin="anonymous" 
        referrerpolicy="no-referrer">
    </script>`
}];

$("body").append(...libs.filter(lib => !lib.test).map(lib => lib.node));

console.log(`================ NEW LIBS ENABLED ================\n
${libs.map(lib => lib.name + (lib.test ? "*" : "")).join(", ")}\n
==================================================
`);