// Initialize Iconify Icons (if using iconify)
if (typeof Iconify !== 'undefined') {
  Iconify.scan();
}

// Age Verification Logic
document.addEventListener('DOMContentLoaded', function() {
  const ageGate = document.getElementById('age-gate');
  const ageYesBtn = document.getElementById('btn-age-yes');
  
  if (ageGate && ageYesBtn) {
    // Check if already verified
    if (localStorage.getItem('albino_age_verified') === 'true') {
      ageGate.style.display = 'none';
    } else {
      ageGate.style.display = 'flex';
    }
    
    // Handle age verification
    ageYesBtn.addEventListener('click', function() {
      localStorage.setItem('albino_age_verified', 'true');
      ageGate.style.opacity = '0';
      setTimeout(function() {
        ageGate.style.display = 'none';
      }, 500);
    });
  }
});

// Intersection Observer for fade-in animations
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.fade-in-up').forEach((el) => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.querySelector('[onclick*="mobile-menu"]');
  const mobileMenu = document.getElementById('mobile-menu');
  
  // Also handle programmatic toggle
  if (mobileMenu) {
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (window.innerWidth < 1024 && mobileMenu && !mobileMenu.classList.contains('hidden')) {
        if (!mobileMenu.contains(e.target) && !e.target.closest('button[onclick*="mobile-menu"]')) {
          mobileMenu.classList.add('hidden');
        }
      }
    });
  }
});

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
      }
    });
  });
});

// Re-initialize icons after dynamic content loads
document.addEventListener('DOMContentLoaded', function() {
  // Re-scan for iconify icons after AJAX loads
  if (typeof Iconify !== 'undefined') {
    setTimeout(function() {
      Iconify.scan();
    }, 100);
  }
});

// Product Pack Configurator Logic (for product detail page)
document.addEventListener('DOMContentLoaded', function() {
  // Pack selection microcopy updates
  const packs = {
    1: {
      title: "Pack Solitario",
      microcopy: "Para cuando te quieres querer a ti mismx. Una botella, una manta y cero dramas.",
      cta: "Beberme solx",
    },
    3: {
      title: "Pack Trío",
      microcopy: "La santísima trinidad del desastre. Una para ti, dos para compartir, o tres para olvidar que es martes.",
      cta: "Compartir el pecado",
    },
    6: {
      title: "Pack Orgía",
      microcopy: "Para borrar cinta o empezar una nueva religión. Si sobra, es que sois gente aburrida.",
      cta: "Inaugurar poliamor",
    }
  };

  function updateProductPack(packId) {
    const data = packs[packId];
    if (!data) return;
    
    const microcopyEl = document.getElementById('dynamic-microcopy');
    const ctaBtn = document.getElementById('cta-button');
    
    if (microcopyEl) {
      microcopyEl.style.opacity = '0.5';
      setTimeout(() => {
        microcopyEl.textContent = data.microcopy;
        microcopyEl.style.opacity = '1';
      }, 150);
    }
    
    if (ctaBtn) {
      const iconifySpan = ctaBtn.querySelector('.iconify');
      const iconHtml = iconifySpan ? iconifySpan.outerHTML : '<span class="iconify" data-icon="lucide:arrow-right" data-width="16"></span>';
      ctaBtn.innerHTML = `<span>${data.cta}</span> ${iconHtml}`;
      
      // Re-initialize iconify if needed
      if (typeof Iconify !== 'undefined') {
        Iconify.scan(ctaBtn);
      }
    }
  }

  function updatePackImages(selectedPack) {
    const images = {
      '1': document.getElementById('pack-img-1'),
      '3': document.getElementById('pack-img-3'),
      '6': document.getElementById('pack-img-6')
    };

    Object.keys(images).forEach(key => {
      const img = images[key];
      if (!img) return;
      
      if (key === selectedPack) {
        img.style.opacity = '1';
        img.style.zIndex = '20';
      } else {
        img.style.opacity = '0';
        img.style.zIndex = '10';
      }
    });
  }

  // Set up variant radio buttons for pack selection
  const variantRadios = document.querySelectorAll('.variant-radio');
  
  variantRadios.forEach(radio => {
    radio.addEventListener('change', function() {
      const packId = this.getAttribute('data-pack');
      if (packId) {
        updateProductPack(packId);
        updatePackImages(packId);
      }
    });
    
    // Initialize with checked variant
    if (radio.checked) {
      const packId = radio.getAttribute('data-pack');
      if (packId) {
        updateProductPack(packId);
        updatePackImages(packId);
      }
    }
  });
  
  // Initialize default if no checked radio found
  const checkedRadio = document.querySelector('.variant-radio:checked');
  if (checkedRadio) {
    const packId = checkedRadio.getAttribute('data-pack');
    if (packId) {
      updateProductPack(packId);
      updatePackImages(packId);
    }
  } else if (variantRadios.length > 0) {
    // Default to first pack
    const firstRadio = variantRadios[0];
    const packId = firstRadio.getAttribute('data-pack');
    if (packId) {
      updateProductPack(packId);
      updatePackImages(packId);
    }
  }
});

// Handle form submissions with better UX
document.addEventListener('DOMContentLoaded', function() {
  const forms = document.querySelectorAll('form[action*="/contact"]');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
      }
    });
  });
});
