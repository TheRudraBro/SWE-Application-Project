  function openModal(title, description, price, duration, spot, highlights) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;
    document.getElementById("modalPrice").innerText = price;
    document.getElementById("modalDuration").innerText = duration;
    document.getElementById("modalSpot").innerText = spot;
    document.getElementById("modalHighlights").innerText = highlights;

    document.getElementById("detailsModal").showModal();
  }