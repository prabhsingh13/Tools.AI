console.log("Script File Connected Successfully!!");

function onPageLoad() {
    setTimeout(() => {
        // Get the loader element
        const loader = document.getElementById('loader');
        
        // Hide the loader
        loader.style.display = 'none';
    }, 1000);
}

// ----------------------------------------------------------------------------
