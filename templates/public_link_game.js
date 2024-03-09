// public_link_game.js

$(document).ready(function() {
    // ... (c�c s? ki?n v� x? l? kh�c)

    // X? l? s? ki?n click cho n�t Share on Facebook
    $('.share-fb').on('click', function() {
        // L?y th�ng tin t? c�c � input
        var link = $('.link-input').val();
        var gameId = $('.gameId-input').val();
        var poster = $('.poster-input').val();
        var description = $('.description-input').val();

        // T?o URL chia s? tr�n Facebook v?i c�c th�ng tin ��?c l?y
        var shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(link);

        // M? c?a s? m?i �? chia s?
        window.open(shareUrl, '_blank');
    });

    // X? l? s? ki?n click cho n�t Share on Instagram
    $('.share-ig').on('click', function() {
        // L?y th�ng tin t? c�c � input
        var link = $('.link-input').val();
        var gameId = $('.gameId-input').val();
        var poster = $('.poster-input').val();
        var description = $('.description-input').val();

        // T?o n?i dung cho vi?c chia s? tr�n Instagram
        var shareText = description + ' - ' + link;

        // M? c?a s? m?i �? chia s?
        window.open('https://www.instagram.com/?url=' + encodeURIComponent(shareText), '_blank');
    });

    // X? l? s? ki?n click cho n�t Copy Link
    $('.copy-link').on('click', function() {
        // L?y gi� tr? c?a � input ch?a link
        var linkToCopy = $('.link-input').val();

        // T?o �?i t�?ng Clipboard m?i
        var clipboard = new ClipboardJS('.copy-link', {
            text: function() {
                return linkToCopy;
            }
        });

        // Sao ch�p v�o clipboard v� hi?n th? th�ng b�o
        clipboard.on('success', function(e) {
            console.log(e);
            alert('�? sao ch�p li�n k?t v�o Clipboard!');
        });

        // X? l? l?i khi sao ch�p
        clipboard.on('error', function(e) {
            console.log(e);
            alert('Sao ch�p th?t b?i. H?y th? l?i.');
        });
    });
});
