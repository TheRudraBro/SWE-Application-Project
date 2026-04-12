  function openModal(title, description, price, duration, spot, highlights) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;
    document.getElementById("modalPrice").innerText = price;
    document.getElementById("modalDuration").innerText = duration;
    document.getElementById("modalSpot").innerText = spot;
    document.getElementById("modalHighlights").innerText = highlights;

    document.getElementById("detailsModal").showModal();
  }
  document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const bookingData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        guests: document.getElementById('guests').value,
        package: document.getElementById('bookingPackageName').innerText,
        details: document.getElementById('bookingPackageDetails').innerText,
        trxId: document.getElementById('transactionId').value,
        paymentStatus: "Pending"
    };

    // 🔥 Firebase এ save
    push(ref(db, 'bookings'), bookingData)
        .then(() => {
            alert("✅ Booking submitted! Waiting for verification.");
            closeBookingModal();
            document.getElementById('bookingForm').reset();
        })
        .catch((error) => {
            console.error(error);
            alert("❌ Error saving booking!");
        });
});
// Function to open booking modal and fill package info
function openBookingModal(packageName, packageDetails) {
    const modal = document.getElementById('bookingModal');
    document.getElementById('bookingPackageName').innerText = packageName;
    document.getElementById('bookingPackageDetails').innerText = packageDetails;
    modal.showModal();
}

// Function to close booking modal
function closeBookingModal() {
    document.getElementById('bookingModal').close();
}