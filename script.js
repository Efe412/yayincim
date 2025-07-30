
document.addEventListener('DOMContentLoaded', function() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const toggleIcon = musicToggle.querySelector('i');
    
    let isPlaying = false;
    
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
            musicToggle.style.background = 'linear-gradient(45deg, #00ff88, #00ccff)';
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
        this.style.textShadow = '0 0 30px rgba(0, 255, 136, 0.8)';
    });
    
    username.addEventListener('mouseleave', function() {
        this.style.textShadow = '0 0 20px rgba(0, 255, 136, 0.3)';
    });
    
    // Random floating animation for shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        setInterval(() => {
            const randomX = Math.random() * 100;
            const randomY = Math.random() * 100;
            shape.style.left = randomX + '%';
            shape.style.top = randomY + '%';
        }, 5000 + (index * 1000));
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
        particle.style.width = '6px';
        particle.style.height = '6px';
        particle.style.background = '#00ff88';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.animation = 'particleFade 1s ease-out forwards';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            document.body.removeChild(particle);
        }, 1000);
    }
    
    // Add CSS for particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleFade {
            0% {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
            100% {
                opacity: 0;
                transform: scale(0) translateY(-50px);
            }
        }
    `;
    document.head.appendChild(style);
});
