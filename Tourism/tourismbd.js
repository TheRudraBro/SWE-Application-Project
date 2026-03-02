function openModal(packageName) {
  document.getElementById("bookingModal").classList.remove("hidden");
  document.getElementById("modalTitle").innerText = "Book " + packageName;
}

function closeModal() {
  document.getElementById("bookingModal").classList.add("hidden");
}