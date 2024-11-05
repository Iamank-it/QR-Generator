function generateQRCode() {
  const text = document.getElementById("textInput").value;
  const qrContainer = document.getElementById("qrcode");

  // Clear previous QR code if it exists
  qrContainer.innerHTML = "";

  // Generate new QR code
  if (text.trim() !== "") {
    new QRCode(qrContainer, {
      text: text,
      width: 200,
      height: 200,
    });
  } else {
    alert("Please enter some text or a URL to generate a QR code.");
  }
}
