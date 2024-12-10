(function($) {
    $(document).ready(function () {
        //projects page interact with github 
        if (window.location.pathname.endsWith('projects.html')) {
            github_projects_api();
        }

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

    //generlization
    function github_projects_api(){
        const username = document.getElementById("github").href.split("https://github.com/")[1]; // Replace with your GitHub username
        const apiUrl = `https://api.github.com/users/${username}/repos`;

        $.get(apiUrl, function (data) {
            data.forEach(repo => {
                const repoItem = `
                    <li class="repo-item">
                        <h2><a href="${repo.html_url}" target="_blank">${repo.name}</a></h2>
                        <p>${repo.description || 'No description available.'}</p>
                    </li>
                `;
                $('.repo-list').append(repoItem);
            });
        }).fail(function () {
            alert('Failed to fetch GitHub repositories.');
        });
    }

})(jQuery);