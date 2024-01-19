console.log("Text Link Generator File Connected Successfully!!");

function generateLink() {
    let number = document.getElementById('getNumber1').value;
    let email = document.getElementById('getEmail1').value;
    let message = document.getElementById('getMessage1').value;
    let link = document.getElementById('showLink');
    let linkHref = document.getElementById('showLinkHref');

    // console.log('Number:', number);
    // console.log('Email:', email);
    // console.log('Message:', message);

    // Replace spaces with "+"
    let modifiedMessage = message.replace(/ /g, '+');
    // console.log('Modified Message:', modifiedMessage);

    let generatedLink;
    if (modifiedMessage) {
        generatedLink = 'https://wa.me/' + number + '?text=' + modifiedMessage;
        // console.log('Generated Link:', generatedLink);
    } else {
        generatedLink = 'https://wa.me/' + number;
        // console.log('Generated Link:', generatedLink);
    }
    link.value = generatedLink;
    linkHref.href = generatedLink;
    generateQRCode(generatedLink);

    document.getElementById('qrcode').classList.remove('d-none');
    document.getElementById('qrImage').style.display = 'none';

}
function copyToClipboard() {
    // Select the input field
    let linkInput = document.getElementById('showLink');

    // Select the text in the input field
    linkInput.select();
    linkInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Deselect the input field
    linkInput.setSelectionRange(0, 0);

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        title: "Link Copied Successfully!"
    });
}

function generateQRCode(text) {
    // Clear the existing QR code
    document.getElementById("qrcode").innerHTML = '';

    // Generate the new QR code
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: text,
        width: 142,
        height: 142
    });
}

function downloadQRCode() {
    // Get the QR code container
    var qrContainer = document.getElementById("qrcode");

    // Get the base64-encoded PNG data of the QR code
    var qrImage = qrContainer.querySelector("img");
    var qrImageData = qrImage.src.split(",")[1];

    // Convert the base64 data to a Blob
    var blob = b64toBlob(qrImageData, "image/png");

    // Create a download link
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "qrcode.png";

    // Append the link to the document and trigger the download
    document.body.appendChild(a);
    a.click();

    // Remove the link from the document
    document.body.removeChild(a);

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        title: "QR Code Dowloaded Successfully!"
    });
}

// Function to convert base64 data to Blob
function b64toBlob(b64Data, contentType = "", sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
}
