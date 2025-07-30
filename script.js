
document.addEventListener('DOMContentLoaded', function() {
    const bgMusic = document.getElementById('bgMusic');
    const volumeSlider = document.getElementById('volumeSlider');
    const announcement = document.getElementById('announcement');
    const specialButton = document.getElementById('specialButton');
    const videoModal = document.getElementById('videoModal');
    const specialVideo = document.getElementById('specialVideo');
    const closeVideo = document.getElementById('closeVideo');
    const secretButton = document.getElementById('secretButton');
    
    let secretCode = '';
    const targetCode = 'Yağmurun-moduefe';
    
    // Set initial volume to full and auto-play music
    bgMusic.volume = 1;
    volumeSlider.value = 100;
    
    // Auto-play music on page load
    setTimeout(() => {
        bgMusic.play().catch(error => {
            console.log('Autoplay prevented:', error);
        });
        
        // Stop music after 1 minute
        setTimeout(() => {
            bgMusic.pause();
        }, 60000);
    }, 500);
    
    // Volume control
    volumeSlider.addEventListener('input', function() {
        bgMusic.volume = this.value / 100;
    });
    
    // Secret code detection
    document.addEventListener('keydown', function(e) {
        secretCode += e.key;
        
        // Keep only the last characters that could match
        if (secretCode.length > targetCode.length) {
            secretCode = secretCode.substring(secretCode.length - targetCode.length);
        }
        
        // Check if secret code matches
        if (secretCode === targetCode) {
            specialButton.style.display = 'block';
            secretCode = ''; // Reset
        }
    });
    
    // Special button functionality (when secret code is entered)
    specialButton.addEventListener('click', function() {
        // Open new window with video
        const newWindow = window.open('', '_blank', 'width=1200,height=800');
        newWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Secret Video</title>
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        background: #000;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                    }
                    video {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                </style>
            </head>
            <body>
                <video controls autoplay>
                    <source src="attached_assets/520236675_17846210166524016_158644689553333331_n_1753837005502.jpg" type="video/mp4">
                </video>
            </body>
            </html>
        `);
        specialButton.style.display = 'none';
    });
    
    
    
    // Close video modal
    closeVideo.addEventListener('click', function() {
        videoModal.style.display = 'none';
        specialVideo.pause();
        specialVideo.currentTime = 0;
        document.body.style.overflow = 'auto';
    });
    
    // Close video when clicking outside
    videoModal.addEventListener('click', function(e) {
        if (e.target === videoModal) {
            closeVideo.click();
        }
    });
    
    // Keyboard controls for video
    document.addEventListener('keydown', function(e) {
        if (videoModal.style.display === 'flex') {
            if (e.key === 'Escape') {
                closeVideo.click();
            }
        }
    });
    
    // Add hover effects to social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effects
    const profileImage = document.querySelector('.profile-image img');
    profileImage.addEventListener('click', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
        setTimeout(() => {
            this.style.transform = 'scale(1) rotate(0deg)';
        }, 200);
    });
    
    // Animated text effect
    const username = document.querySelector('.username');
    username.addEventListener('mouseenter', function() {
        this.style.textShadow = '0 0 30px rgba(255, 20, 147, 0.8)';
    });
    
    username.addEventListener('mouseleave', function() {
        this.style.textShadow = '0 0 20px rgba(255, 20, 147, 0.3)';
    });
    
    // Random floating animation for Hello Kitty shapes
    const kittyShapes = document.querySelectorAll('.kitty-shape');
    kittyShapes.forEach((shape, index) => {
        setInterval(() => {
            const randomX = Math.random() * 80 + 10;
            const randomY = Math.random() * 80 + 10;
            shape.style.left = randomX + '%';
            shape.style.top = randomY + '%';
        }, 8000 + (index * 1000));
    });
    
    // Hello Kitty cursor trail effect
    let mouseTrail = [];
    document.addEventListener('mousemove', function(e) {
        mouseTrail.push({x: e.clientX, y: e.clientY, time: Date.now()});
        
        if (mouseTrail.length > 15) {
            mouseTrail.shift();
        }
        
        // Create Hello Kitty trail particles
        if (Math.random() > 0.8) {
            createKittyTrail(e.clientX, e.clientY);
        }
    });
    
    function createKittyTrail(x, y) {
        const trail = document.createElement('img');
        const kittyImages = [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZF0yOLZCoV_IpQz9DyzpdcwPDBH2M6cU5AzwwipKJZ5LWCVjTJQGjBwdvbKFMyU03MKU&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgNMKMMd8HEYGioMT5Yn68yKaLxDrqwKaAeSbajT9ik2mLEUcVoEntuPVGTdWeyE1KQow&usqp=CAU',
            'https://logowiki.net/wp-content/uploads/imgp/Sanrio---Hello-Kitty-Logo-1-9912.jpg',
            'https://cdn.worldvectorlogo.com/logos/hello-kitty-svg-1.svg'
        ];
        
        trail.src = kittyImages[Math.floor(Math.random() * kittyImages.length)];
        trail.style.position = 'fixed';
        trail.style.left = x + 'px';
        trail.style.top = y + 'px';
        trail.style.width = '30px';
        trail.style.height = '30px';
        trail.style.pointerEvents = 'none';
        trail.style.zIndex = '999';
        trail.style.animation = 'kittyTrailFade 2s ease-out forwards';
        trail.style.objectFit = 'contain';
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            if (document.body.contains(trail)) {
                document.body.removeChild(trail);
            }
        }, 2000);
    }
    
    // Add particle effect on click
    document.addEventListener('click', function(e) {
        createParticle(e.clientX, e.clientY);
    });
    
    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.background = '#ff1493';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.animation = 'particleFade 1.5s ease-out forwards';
        particle.innerHTML = '💖';
        particle.style.fontSize = '12px';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (document.body.contains(particle)) {
                document.body.removeChild(particle);
            }
        }, 1500);
    }
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleFade {
            0% {
                opacity: 1;
                transform: scale(1) translateY(0) rotate(0deg);
            }
            100% {
                opacity: 0;
                transform: scale(0) translateY(-60px) rotate(360deg);
            }
        }
        @keyframes kittyTrailFade {
            0% {
                opacity: 0.8;
                transform: scale(1) rotate(0deg);
            }
            100% {
                opacity: 0;
                transform: scale(0.3) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
});
