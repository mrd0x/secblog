if (typeof window !== 'undefined') {
    var cursor = true;
    var speed = 600;

    setInterval(() => {
        if(cursor) {
            document.getElementsByTagName("span")[0].style.opacity = 0;
        cursor = false;
        }else {
            document.getElementsByTagName("span")[0].style.opacity = 1;
        cursor = true;
        }
    }, speed);
}