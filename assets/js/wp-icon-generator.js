console.log("WhatsApp Widget Generator File Connected Successfully!!");

var editor;

function generateCode() {
    var wpNumber = document.getElementById("getNumber2").value;
    var message = document.getElementById("getMessage2").value;
    var bgColor = document.getElementById("bgColor").value;
    var logoColor = document.getElementById("logoColor").value;

    var generatedCode = `
        <a href="https://wa.me/${wpNumber}?text=${encodeURIComponent(message)}" class="whatsapp_float" target="_blank" rel="noopener noreferrer" style="background: ${bgColor} !important;">
            <i class="fa fa-whatsapp whatsapp-icon" style="color: ${logoColor};"></i>
        </a>

        <style>
            /* Add your custom styles here */
            .whatsapp_float {
                position: fixed;
                width: 60px;
                height: 60px;
                bottom: 30px;
                right: 30px;
                background: ${bgColor} !important;
                color: ${logoColor};
                border-radius: 50px;
                text-align: center;
                font-size: 30px;
                box-shadow: 0px 0px 30px #000000b3;
                z-index: 100;
            }

            a.whatsapp_float {
                color: ${logoColor};
            }

            a.whatsapp_float:hover {
                color: ${logoColor};
            }

            .whatsapp-icon {
                margin-top: 16px;
            }

            /* for mobile */
            @media screen and (max-width: 767px) {
                .whatsapp-icon {
                    margin-top: 14px;
                }

                .whatsapp_float {
                    width: 50px;
                    height: 50px;
                    bottom: 20px;
                    right: 20px;
                    font-size: 22px;
                }
            }
        </style>`;

    document.getElementById("generatedCode").classList.remove("d-none");
    // Display the generated code in the CodeMirror box with a different theme
    editor = CodeMirror(document.getElementById("codeBox"), {
        value: generatedCode,
        mode: "htmlmixed",
        theme: "dracula", // Change this line to your desired theme
        lineNumbers: true,
        readOnly: true
    });

    document.getElementById("wpForm").classList.add("d-none");
    document.getElementById("codeBox").classList.remove("d-none");
}

function copyCodeBox() {
    // Get the CodeMirror editor instance
    if (editor) {
        // Get the code from the editor
        let code = editor.getValue();

        // Create a textarea element to temporarily hold the code
        let textarea = document.createElement('textarea');
        textarea.value = code;
        document.body.appendChild(textarea);

        // Select the text in the textarea
        textarea.select();
        textarea.setSelectionRange(0, 99999); // For mobile devices

        // Copy the selected text to the clipboard
        document.execCommand('copy');

        // Remove the temporary textarea
        document.body.removeChild(textarea);

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
            title: "Code Copied Successfully!"
        });
    }
}

function generateNew() {
    document.getElementById('wpForm').reset();

    // Reset additional elements or perform other actions as needed
    document.getElementById('generatedCode').classList.add('d-none');
    document.getElementById('wpForm').classList.remove('d-none');
    document.getElementById('codeBox').classList.add('d-none');

    // If you have CodeMirror, clear the editor value
    if (editor) {
        editor.setValue('');
    }
}


function editExistingCode() {
    // Reset additional elements or perform other actions as needed
    document.getElementById('generatedCode').classList.add('d-none');
    document.getElementById('wpForm').classList.remove('d-none');
    document.getElementById('codeBox').classList.add('d-none');

    // If you have CodeMirror, clear the editor value
    if (editor) {
        editor.setValue('');
    }
}

