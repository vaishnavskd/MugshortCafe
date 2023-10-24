function openPopup() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;

    if (name === "" || phone === "" || email === "" || msg === "") {
        alert("Fields cannot be empty");
        return false;
    }
    
    var popupContent = `

            <div style="text-align:center;">
                <p>Name: ${name}</p>
                <p>Phone: ${phone}</p>
                <p>Email: ${email}</p>
                <p>Message: ${msg}</p>
                <h3>Submitted Successfully</h3>
            </div>
    `;

    var popupWindow = window.open('', '_blank', 'width=600,height=400');
        popupWindow.document.write(popupContent);

        document.getElementById("form").reset();
    return false;
}
