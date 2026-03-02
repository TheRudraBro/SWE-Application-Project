function openModal(title, description){
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDescription").innerText = description;
  document.getElementById("detailsModal").showModal();
}