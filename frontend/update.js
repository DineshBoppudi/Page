async function updatePassword() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    const response = await fetch(
        "https://login-backend-ic0f.onrender.com/update",
        {
            method: "PUT",
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