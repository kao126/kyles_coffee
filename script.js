$(function() {
    $('#form').submit(function() {
        var textValue = $('#text-message').val();

        if(textValue == '') {
            $('#error-message').text('※メッセージを記入してください');
        } else {
        $('#error-message').text('');
        }
    });
});