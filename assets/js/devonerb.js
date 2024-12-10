(function($) {
    $(document).ready(function () {
        $('.contact-form').on('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission

            // Gather form data
            const formData = {
                name: $('#name').val(),
                email: $('#email').val(),
                message: $('#message').val(),
            };

            // Send POST request
            $.ajax({
                url: 'https://example.com/contact', // Replace with your server endpoint
                type: 'POST',
                data: JSON.stringify(formData),
                contentType: 'application/json',
                success: function (response) {
                    alert('Message sent successfully!');
                    // Optionally reset the form
                    $('.contact-form')[0].reset();
                },
                error: function (xhr, status, error) {
                    alert('Failed to send the message. Please try again.');
                    console.error('Error:', error);
                }
            });
        });
    });
})(jQuery);