
document.addEventListener('DOMContentLoaded', function() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const toggleIcon = musicToggle.querySelector('i');
    const volumeSlider = document.getElementById('volumeSlider');
    const announcement = document.getElementById('announcement');
    const specialButton = document.getElementById('specialButton');
    const videoModal = document.getElementById('videoModal');
    const specialVideo = document.getElementById('specialVideo');
    const closeVideo = document.getElementById('closeVideo');
    
    let isPlaying = false;
    
    // Set initial volume
    bgMusic.volume = volumeSlider.value / 100;
    
    // Volume control
    volumeSlider.addEventListener('input', function() {
        bgMusic.volume = this.value / 100;
    });
    
    // Music toggle functionality
    musicToggle.addEventListener('click', function() {
        if (!isPlaying) {
            bgMusic.play().then(() => {
                isPlaying = true;
                toggleIcon.classList.remove('fa-play');
                toggleIcon.classList.add('fa-pause');
                musicToggle.style.background = 'linear-gradient(45deg, #ff0088, #ff8800)';
            }).catch(error => {
                console.log('Autoplay prevented:', error);
            });
        } else {
            bgMusic.pause();
            isPlaying = false;
            toggleIcon.classList.remove('fa-pause');
            toggleIcon.classList.add('fa-play');
            musicToggle.style.background = 'linear-gradient(45deg, #ff1493, #ff69b4)';
        }
    });
    
    // Special button functionality
    specialButton.addEventListener('click', function() {
        videoModal.style.display = 'flex';
        specialVideo.play();
        document.body.style.overflow = 'hidden';
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
    
    // Add CSS for particle animation
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
    `;
    document.head.appendChild(style);
    
    // Hello Kitty cursor trail effect
    let mouseTrail = [];
    document.addEventListener('mousemove', function(e) {
        mouseTrail.push({x: e.clientX, y: e.clientY, time: Date.now()});
        
        if (mouseTrail.length > 10) {
            mouseTrail.shift();
        }
        
        // Create trail particles
        if (Math.random() > 0.7) {
            createTrailParticle(e.clientX, e.clientY);
        }
    });
    
    function createTrailParticle(x, y) {
        const trail = document.createElement('div');
        trail.style.position = 'fixed';
        trail.style.left = x + 'px';
        trail.style.top = y + 'px';
        trail.style.width = '4px';
        trail.style.height = '4px';
        trail.style.background = '#ff69b4';
        trail.style.borderRadius = '50%';
        trail.style.pointerEvents = 'none';
        trail.style.zIndex = '999';
        trail.style.animation = 'trailFade 1s ease-out forwards';
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            if (document.body.contains(trail)) {
                document.body.removeChild(trail);
            }
        }, 1000);
    }
    
    // Add trail animation CSS
    const trailStyle = document.createElement('style');
    trailStyle.textContent = `
        @keyframes trailFade {
            0% {
                opacity: 0.8;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(0);
            }
        }
    `;
    document.head.appendChild(trailStyle);
});
