function sendForm(event) {
event.preventDefault(); // Empêche la redirection

var formData = new FormData(document.getElementById("send-form"));

fetch("https://script.google.com/macros/s/AKfycbwri6OldgyR1lLXUI8wOcysCx2opMttYRHUfLU25GBoyf9Q1NsGh2thuBhrpos71NTR9g/exec", {
	method: "POST",
	body: new URLSearchParams(formData) // Convertir les données
})
.then(response => response.json())
.then(data => {
	if (data.status === "success") {
	document.getElementById("popup").style.display = "block";
	document.getElementById("send-form").reset(); // Réinitialiser le formulaire
	} else {
	alert("Erreur lors de l'envoi");
	}
})
.catch(error => {
	console.error("Erreur :", error);
});
}

function fermerPopup() {
document.getElementById("popup").style.display = "none"; // Ferme la pop-up
}
