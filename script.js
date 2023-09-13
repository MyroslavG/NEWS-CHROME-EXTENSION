document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("submit");

    searchButton.addEventListener("click", function () {
        const searchInput = document.getElementById("fname").value;

        fetch('https://v74ez2mxa5npidfeyji345szfi0doufy.lambda-url.us-east-1.on.aws/', {
            method: "POST",
            /*headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },*/
            body: `input=${searchInput}`, 
        })
        .then(response => {
            console.log(response)
            return response.json();
        })
        .then(result => {
            const resultDiv = document.getElementById('text');
            resultDiv.innerHTML = result;
        })
        .catch(error => {
            console.error('API request failed:', error);
        });
    });    
});