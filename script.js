/* Unconditionally add the CSS rules to the first stylesheet which is
 * available in the page. */
document.styleSheets[0].insertRule('.travis-ci{display:inline-block;margin-left:8px;line-height:1em;position:relative;top:3px;opacity:.85;}', 1);
document.styleSheets[0].insertRule('.travis-ci:hover{opacity:1}', 1);
document.styleSheets[0].insertRule('.travis-ci img{display:block;}', 1);


/* We first check whether the required elements exist on the webpage. If they
 * do not, it means that either the user is looking at something other than
 * a project page, or that github changed their layout and we need to adapt
 * this code. Either way, this ensures that no errors are generated by this
 * extension due to missing DOM elements. */
var actionBar = window.document.querySelector(".file-navigation");
if (actionBar) {
    var btnGroup = actionBar.getElementsByClassName("BtnGroup");
    var link = insertLink();
    if (btnGroup && btnGroup.length > 0 && btnGroup[0].classList.contains('float-right')) {
        actionBar.insertBefore(link, btnGroup[0]);
    }
    else {
        actionBar.appendChild(link);
    }
}

/* The status icon may not exist, if the project is not registered on
 * travis-ci.org. So we first create the img element and see if an error
 * happens while loading this image. Only if the image exists, we insert the
 * icon into the DOM. */
function insertLink(el) {
    var project = window.location.pathname;

    var link = window.document.createElement('a');
    link.href = "https://che.openshift.io/f?url=https://github.com" + project;
    link.target = '_blank';
    link.className = "btn btn-sm btn-primary"
    link.appendChild(window.document.createTextNode('Open in Che'));
    return link;
}