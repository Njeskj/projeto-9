const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("myModal");
const budgetForm = document.getElementById("budgetForm");

openModalBtn.addEventListener("click", function() {
    modal.style.display = "block";
});

closeModalBtn.addEventListener("click", function() {
    modal.style display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

budgetForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const additionalInfo = document.getElementById("additionalInfo").value;

    // Prepare the email data
    const emailData = {
        to: email,
        subject: "Orçamento",
        text: `Nome: ${name}\nTelefone/WhatsApp: ${phone}\nEmail: ${email}\nInformações Adicionais: ${additionalInfo}`
    };

    // Use Email.js or a similar service to send the email
    Email.send(emailData);

    // Inform the user that the email has been sent (this is a simple alert, not recommended for production use)
    alert("O email foi enviado para " + email + " e contatogmsistemas2023@gmail.com.");
});
