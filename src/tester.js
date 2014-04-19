$(function () {
    var hash;
    var slowCnt = 0;
    var fastCnt = 0;
    $('#sandbox').on('scroll', function (event) {
        fastCnt += 1;
        $('#fast .log').append(fastCnt + '<br>');
        if (!hash) {
            hash = window.setTimeout(function () {
                slowCnt += 1;
                $('#slow .log').append(slowCnt + '<br>');
                hash = false;
            }, 80);
        }
        if (slowCnt % 30 === 0) {
            $('#slow .log').text('');
        }
        if (fastCnt % 30 === 0) {
            $('#fast .log').text('');
        }
    });
});
