function toggle_visibility(id) {
    if (id instanceof Array) {
        for (var i = 0; i < id.length; i++) {
            toggle_visibility(id[i]);
        }
    } else {
        var element = document.getElementById(id);
        element.style.display = (element.style.display === 'block' ?
                                'none' : 'block');
    }
}
