
document.addEventListener('DOMContentLoaded', function() {
    const volumeSlider = document.getElementById('volumeSlider');
    const announcement = document.getElementById('announcement');
    const specialButton = document.getElementById('specialButton');
    const videoModal = document.getElementById('videoModal');
    const specialVideo = document.getElementById('specialVideo');
    const closeVideo = document.getElementById('closeVideo');

    // Set initial volume to full for video
    volumeSlider.value = 100;
    
    // Show special button by default
    if (specialButton) {
        specialButton.style.display = 'block';
    }

    // Auto-play video on page load (video contains the music)
    setTimeout(() => {
        if (videoModal && specialVideo) {
            videoModal.style.display = 'flex';
            specialVideo.src = 'attached_assets/8d4ceb1e7d0f966af09d2c35292be535_720w_1753838085400.mp4';
            specialVideo.volume = 1;
            specialVideo.muted = false;
            
            // Try to play the video
            const playPromise = specialVideo.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log('Video started playing');
                }).catch(error => {
                    console.log('Autoplay prevented:', error);
                    // If autoplay fails, show the modal but don't play automatically
                    videoModal.style.display = 'flex';
                });
            }
            document.body.style.overflow = 'hidden';
        }
    }, 2000);

    // Volume control for video
    if (volumeSlider && specialVideo) {
        volumeSlider.addEventListener('input', function() {
            specialVideo.volume = this.value / 100;
        });
    }

    // Volume icon click to control video volume
    const volumeIcon = document.querySelector('.volume-control i');
    let isMuted = false;
    let previousVolume = 1;

    if (volumeIcon && specialVideo) {
        volumeIcon.addEventListener('click', function() {
            // Toggle video mute
            if (isMuted) {
                specialVideo.volume = previousVolume;
                specialVideo.muted = false;
                volumeSlider.value = previousVolume * 100;
                this.className = 'fas fa-volume-up';
                isMuted = false;
            } else {
                previousVolume = specialVideo.volume;
                specialVideo.volume = 0;
                specialVideo.muted = true;
                volumeSlider.value = 0;
                this.className = 'fas fa-volume-mute';
                isMuted = true;
            }
        });
    }

    // Special button functionality - pause/resume video
    if (specialButton && specialVideo && videoModal) {
        specialButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Special button clicked');
            
            if (specialVideo.paused) {
                // Resume video
                videoModal.style.display = 'flex';
                const playPromise = specialVideo.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        console.log('Video resumed');
                    }).catch(error => {
                        console.log('Play failed:', error);
                    });
                }
                document.body.style.overflow = 'hidden';
            } else {
                // Pause video and hide modal
                specialVideo.pause();
                videoModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Close video modal
    if (closeVideo && videoModal && specialVideo) {
        closeVideo.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            videoModal.style.display = 'none';
            specialVideo.pause();
            specialVideo.currentTime = 0;
            document.body.style.overflow = 'auto';
        });
    }

    // Close video when clicking outside
    if (videoModal && closeVideo) {
        videoModal.addEventListener('click', function(e) {
            if (e.target === videoModal) {
                closeVideo.click();
            }
        });
    }

    // Keyboard controls for video
    document.addEventListener('keydown', function(e) {
        if (videoModal && videoModal.style.display === 'flex') {
            if (e.key === 'Escape' && closeVideo) {
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
    if (profileImage) {
        profileImage.addEventListener('click', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 200);
        });
    }

    // Animated text effect
    const username = document.querySelector('.username');
    if (username) {
        username.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 30px rgba(255, 20, 147, 0.8)';
        });

        username.addEventListener('mouseleave', function() {
            this.style.textShadow = '0 0 20px rgba(255, 20, 147, 0.3)';
        });
    }

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
