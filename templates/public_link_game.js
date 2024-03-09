// public_link_game.js

$(document).ready(function() {
    // ... (các s? ki?n và x? l? khác)

    // X? l? s? ki?n click cho nút Share on Facebook
    $('.share-fb').on('click', function() {
        // L?y thông tin t? các ô input
        var link = $('.link-input').val();
        var gameId = $('.gameId-input').val();
        var poster = $('.poster-input').val();
        var description = $('.description-input').val();

        // T?o URL chia s? trên Facebook v?i các thông tin ðý?c l?y
        var shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(link);

        // M? c?a s? m?i ð? chia s?
        window.open(shareUrl, '_blank');
    });

    // X? l? s? ki?n click cho nút Share on Instagram
    $('.share-ig').on('click', function() {
        // L?y thông tin t? các ô input
        var link = $('.link-input').val();
        var gameId = $('.gameId-input').val();
        var poster = $('.poster-input').val();
        var description = $('.description-input').val();

        // T?o n?i dung cho vi?c chia s? trên Instagram
        var shareText = description + ' - ' + link;

        // M? c?a s? m?i ð? chia s?
        window.open('https://www.instagram.com/?url=' + encodeURIComponent(shareText), '_blank');
    });

    // X? l? s? ki?n click cho nút Copy Link
    $('.copy-link').on('click', function() {
        // L?y giá tr? c?a ô input ch?a link
        var linkToCopy = $('.link-input').val();

        // T?o ð?i tý?ng Clipboard m?i
        var clipboard = new ClipboardJS('.copy-link', {
            text: function() {
                return linkToCopy;
            }
        });

        // Sao chép vào clipboard và hi?n th? thông báo
        clipboard.on('success', function(e) {
            console.log(e);
            alert('Ð? sao chép liên k?t vào Clipboard!');
        });

        // X? l? l?i khi sao chép
        clipboard.on('error', function(e) {
            console.log(e);
            alert('Sao chép th?t b?i. H?y th? l?i.');
        });
    });
});
