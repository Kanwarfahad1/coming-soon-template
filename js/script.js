jQuery(function () {
    jQuery(".digits").countdown({
        image: "assets/images/digits.png",
        format: "dd:hh:mm:ss",
        endTime: new Date(2020, 12, 2)
    });
});


