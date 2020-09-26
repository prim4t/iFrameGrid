

    function reload_iframes() {
        var f_list = document.getElementsByTagName('iframe');
     
        for (var i = 0, f; f = f_list[i]; i++) {
            f.src = f.src;
        }
    }

