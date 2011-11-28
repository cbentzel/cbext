function findActiveUrl() {
    var cursorOnList = document.getElementsByClassName('cursor_on');
    // TODO(cbentzel): Handle multiple cursor elements?
    if (cursorOnList.length != 1) {
        return None;
    }
    var cursorOn = cursorOnList[0];
    var idList = cursorOn.getElementsByClassName('id');
    if (idList.length != 1) {
        return None;
    }
    var id = idList[0];
    var anchorList = id.getElementsByTagName('a');
    if (anchorList.length != 1) {
        return None;
    }
    return anchorList[0].href;
}


