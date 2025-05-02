function generateCard() {
    const name = document.getElementById('name').value;
    const job = document.getElementById('job').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const linkedin = document.getElementById('linkedin').value;
    const image = document.getElementById('image').files[0];

    document.getElementById('card-name').innerText = name || 'Your Name';
    document.getElementById('card-job').innerText = job || 'Your Job Title';
    document.getElementById('card-email').innerText = email || 'Email Address';
    document.getElementById('card-phone').innerText = phone || 'Phone Number';
    document.getElementById('card-linkedin').innerText = linkedin || 'LinkedIn Profile';

    if (image) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('card-image').src = e.target.result;
        };
        reader.readAsDataURL(image);
    } else {
        document.getElementById('card-image').src = '';
    }
}

function downloadCard() {
    const card = document.getElementById('card');
    html2canvas(card).then(function(canvas) {
        const link = document.createElement('a');
        link.download = 'business-card.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}
