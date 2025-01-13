// Gestion du formulaire principal de capture de leads
document.addEventListener('DOMContentLoaded', () => {
    const leadForm = document.getElementById('lead-form');
    const newsletterForm = document.querySelector('.newsletter-form');

    if (leadForm) {
        leadForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(leadForm);
            const data = Object.fromEntries(formData.entries());
            
            try {
                // Simulation d'envoi à une API (à remplacer par votre endpoint réel)
                console.log('Données du formulaire:', data);
                
                // Affichage d'un message de succès
                alert('Merci ! Votre guide gratuit va vous être envoyé par email.');
                leadForm.reset();
                
            } catch (error) {
                console.error('Erreur lors de l\'envoi du formulaire:', error);
                alert('Une erreur est survenue. Veuillez réessayer plus tard.');
            }
        });
    }

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            try {
                // Simulation d'envoi à une API (à remplacer par votre endpoint réel)
                console.log('Email newsletter:', email);
                
                // Affichage d'un message de succès
                alert('Merci de votre inscription à notre newsletter !');
                newsletterForm.reset();
                
            } catch (error) {
                console.error('Erreur lors de l\'inscription à la newsletter:', error);
                alert('Une erreur est survenue. Veuillez réessayer plus tard.');
            }
        });
    }

    // Animation smooth scroll pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Gestion du menu mobile (à implémenter selon vos besoins)
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.classList.add('mobile-menu-button');
    mobileMenuButton.innerHTML = `
        <span class="sr-only">Menu</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-16 6h16"></path>
        </svg>
    `;

    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.insertBefore(mobileMenuButton, navbar.firstChild);

        mobileMenuButton.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('show');
        });
    }

    // Ajout de la classe active au scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.main-header');
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
}); 