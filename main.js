const faqToggles = document.querySelectorAll('.faq-toggle');

// let = faqToggles[0]

faqToggles.forEach(faqToggle => {
    
 
    faqToggle.addEventListener('click', () => {

        faqToggle.parentNode.classList.toggle('active');
        
    })
})

