document.getElementById('submit').addEventListener('click', function() {
    fetch('/get_url')
        .then(response => {
            console.log(response)
            return response.json();
        })
        .then(result => {
            // Get the 'result' div element
            const resultDiv = document.getElementById('result');
            // Create an anchor tag to make the URL clickable
            const anchorTag = document.createElement('a');
            anchorTag.textContent = 'Result: ' + result.result;
            anchorTag.href = result.result; // Set the URL as the href attribute
            // Add the anchor tag to the 'result' div
            resultDiv.appendChild(anchorTag);
        })
        .catch(error => {
            console.error('API request failed:', error);
        });
});