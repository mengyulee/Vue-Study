(function(win, doc){
    var docEl = doc.documentElement,
    resizeEvt = 'orientionchang' in window ? 'orientationchange' : 'resize',
    recalc = function () {
        var clientWidth = docEl.clientWidth;
        if(!clientWidth) return;
        docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
    };
    if(!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(window, document)
