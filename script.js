import QRCode from 'qrcode';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('qr-canvas');
    const url = 'https://504sites.com';

    // Generate QR Code
    QRCode.toCanvas(canvas, url, {
        width: 200, // Resolution, CSS will scale it down
        margin: 0,
        color: {
            dark: '#000000',
            light: '#ffffff'
        }
    }, function (error) {
        if (error) console.error(error);
        console.log('QR code generated!');
    });
});

