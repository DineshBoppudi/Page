async function deleteUser() {

    const email = document.getElementById("email").value;

    if (email === "") {
        alert("Please enter email");
        return;
    }

    const response = await fetch(
        "https://login-backend-ic0f.onrender.com/delete",
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email
            })
        }
    );

    const data = await response.json();

    alert(data.message);
}