async function signup() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch(
        "https://login-backend-ic0f.onrender.com/signup",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        }
    );

    const data = await response.json();

    alert(data.message);
}