@import "libs/jquery-1.11.1.min.js";
//@import "libs/bootstrap/_affix.js";
//@import "libs/bootstrap/_alert.js";
//@import "libs/bootstrap/_button.js";
//@import "libs/bootstrap/_carousel.js";
//@import "libs/bootstrap/_collapse.js";
//@import "libs/bootstrap/_dropdown.js";
//@import "libs/bootstrap/_modal.js";
//@import "libs/bootstrap/_popover.js";
//@import "libs/bootstrap/_scrollspy.js";
//@import "libs/bootstrap/_tab.js";
//@import "libs/bootstrap/_tooltip.js";
//@import "libs/bootstrap/_translation.js";
// Doc ready
$(function(){
	// Write your scripts here
});

// Windows 7/8 IE fix
if (navigator.userAgent.match(/Windows NT 6.2; ARM(.+)Touch/)) {
    var msViewportStyle = document.createElement("style");
    msViewportStyle.appendChild(
        document.createTextNode(
            "@-ms-viewport{width:device-width}"
        )
    );
    document.getElementsByTagName("head")[0].
        appendChild(msViewportStyle);
}