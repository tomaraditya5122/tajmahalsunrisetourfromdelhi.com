function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");

  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    // Close mobile menu if open
    document.querySelector(".nav-links").classList.remove("active");
    document.querySelector(".hamburger").classList.remove("active");
  });
});

// Form submission handler with EmailJS integration
const form = document.querySelector("#contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Add loading state to button
    const submitBtn = this.querySelector('button[type="submit"]');
    if (!submitBtn) return;

    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    // Prepare data for EmailJS
    const templateParams = {
      to_email: "adityatomar5122@gmail.com",
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      date: document.getElementById("date").value,
      guests: document.getElementById("guests").value,
      package: document.getElementById("package").value,
      message: document.getElementById("message").value,
    };

    // Send email using EmailJS
    emailjs
      .send("service_6zhqw9r", "template_ay8kpis", templateParams)
      .then(function (response) {
        console.log("SUCCESS!", response.status, response.text);

        submitBtn.textContent = "✓ Request Sent!";
        submitBtn.style.background =
          "linear-gradient(135deg, #48bb78, #38a169)";

        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background =
            "linear-gradient(135deg, #667eea, #764ba2)";
          form.reset();
        }, 2000);

        // Show success message
        const successMessage = document.createElement("div");
        successMessage.innerHTML = `
        <div style="
          position: fixed;
          top: 20px;
          right: 20px;
          background: linear-gradient(135deg, #48bb78, #38a169);
          color: white;
          padding: 1rem 2rem;
          border-radius: 10px;
          z-index: 10000;
          box-shadow: 0 10px 30px rgba(72, 187, 120, 0.3);
          animation: slideInRight 0.5s ease-out;
        ">
          <strong>✓ Sunrise Tour Request Sent!</strong><br>
          We'll contact you shortly to confirm your magical Taj Mahal Sunrise tour.
        </div>
      `;
        document.body.appendChild(successMessage);

        setTimeout(() => {
          successMessage.remove();
        }, 5000);
      })
      .catch(function (error) {
        console.log("FAILED...", error);

        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

        // Show error message
        const errorMessage = document.createElement("div");
        errorMessage.innerHTML = `
        <div style="
          position: fixed;
          top: 20px;
          right: 20px;
          background: linear-gradient(135deg, #e53e3e, #c53030);
          color: white;
          padding: 1rem 2rem;
          border-radius: 10px;
          z-index: 10000;
          box-shadow: 0 10px 30px rgba(229, 62, 62, 0.3);
          animation: slideInRight 0.5s ease-out;
        ">
          <strong>⚠️ Something went wrong!</strong><br>
          Please try again or contact us directly by phone.
        </div>
      `;
        document.body.appendChild(errorMessage);

        setTimeout(() => {
          errorMessage.remove();
        }, 5000);
      });
  });
}

// Enhanced scroll effects with throttling
let ticking = false;

function updateScrollEffects() {
  const header = document.querySelector("header");
  if (!header) return;

  const scrolled = window.scrollY;

  // Header background change
  if (scrolled > 100) {
    header.style.background = "rgba(255, 255, 255, 0.98)";
    header.style.borderBottom = "1px solid rgba(102, 126, 234, 0.2)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)";
    header.style.borderBottom = "1px solid rgba(255, 255, 255, 0.2)";
  }

  ticking = false;
}

window.addEventListener("scroll", function () {
  if (!ticking) {
    requestAnimationFrame(updateScrollEffects);
    ticking = true;
  }
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation =
        entry.target.dataset.animation || "fadeInUp 0.8s ease-out forwards";
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Add scroll animations to elements
document.addEventListener("DOMContentLoaded", function () {
  // Add CSS for animations
  const style = document.createElement("style");
  style.textContent = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(100px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fadeInLeft {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.8);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    .animate-element {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s ease-out;
    }

    .hamburger.active span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    .hamburger.active span:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }
  `;
  document.head.appendChild(style);

  // Apply animations to different elements
  const elementsToAnimate = [
    {
      selector: ".section-title",
      animation: "fadeInUp 0.8s ease-out forwards",
    },
    {
      selector: ".highlight-card",
      animation: "fadeInUp 0.8s ease-out forwards",
      delay: true,
    },
    {
      selector: ".feature-item",
      animation: "fadeInLeft 0.8s ease-out forwards",
      delay: true,
    },
    {
      selector: ".timeline-item",
      animation: "fadeInRight 0.8s ease-out forwards",
      delay: true,
    },

    {
      selector: ".overview-stats",
      animation: "scaleIn 0.8s ease-out forwards",
    },
    {
      selector: ".contact-info",
      animation: "fadeInLeft 0.8s ease-out forwards",
    },
    {
      selector: ".contact-form",
      animation: "fadeInRight 0.8s ease-out forwards",
    },
  ];

  elementsToAnimate.forEach((item) => {
    document.querySelectorAll(item.selector).forEach((element, index) => {
      element.classList.add("animate-element");
      element.dataset.animation = item.animation;

      if (item.delay) {
        element.style.animationDelay = `${index * 0.1}s`;
      }

      observer.observe(element);
    });
  });

  // Counter animation for stats
  const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent =
          target +
          (element.textContent.includes("+") ? "+" : "") +
          (element.textContent.includes("km") ? "km" : "");
        clearInterval(timer);
      } else {
        element.textContent =
          Math.ceil(current) +
          (element.textContent.includes("+") ? "+" : "") +
          (element.textContent.includes("km") ? "km" : "");
      }
    }, 20);
  };

  // Stats counter observer
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const statNumbers = entry.target.querySelectorAll(".stat-number");
          statNumbers.forEach((stat) => {
            const text = stat.textContent;
            const number = parseInt(text.replace(/\D/g, ""));
            if (number && !stat.dataset.animated) {
              stat.dataset.animated = "true";
              animateCounter(stat, number);
            }
          });
        }
      });
    },
    { threshold: 0.5 },
  );

  const statsSection = document.querySelector(".overview-stats");
  if (statsSection) {
    statsObserver.observe(statsSection);
  }

  // Parallax effect for hero section with throttling
  let parallaxTicking = false;

  function updateParallax() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero");
    if (hero && window.innerWidth > 768) {
      hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    parallaxTicking = false;
  }

  window.addEventListener("scroll", () => {
    if (!parallaxTicking) {
      requestAnimationFrame(updateParallax);
      parallaxTicking = true;
    }
  });

  // Add hover sound effect (optional)
  document
    .querySelectorAll(".cta-button, .highlight-card")
    .forEach((element) => {
      element.addEventListener("mouseenter", () => {
        // You can add a subtle sound effect here if desired
        element.style.transition =
          "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      });
    });

  // Loading screen control
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        loadingScreen.classList.add("hidden");
        setTimeout(() => {
          loadingScreen.style.display = "none";
        }, 500);
      }, 1500);
    });
  }

  // Back to top button with throttling
  const backToTopBtn = document.getElementById("back-to-top");
  let backToTopTicking = false;

  function updateBackToTop() {
    if (backToTopBtn) {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }
    backToTopTicking = false;
  }

  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (!backToTopTicking) {
        requestAnimationFrame(updateBackToTop);
        backToTopTicking = true;
      }
    });

    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Simple tilt effect for cards with performance optimization
  if (window.innerWidth > 768) {
    document.querySelectorAll("[data-tilt]").forEach((element) => {
      element.addEventListener("mousemove", (e) => {
        try {
          const rect = element.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = Math.max(-15, Math.min(15, (y - centerY) / 10));
          const rotateY = Math.max(-15, Math.min(15, (centerX - x) / 10));

          element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        } catch (error) {
          console.log("Tilt effect error:", error);
        }
      });

      element.addEventListener("mouseleave", () => {
        element.style.transform =
          "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
      });
    });
  }

  // Add sparkle effect on button clicks with error handling
  document.querySelectorAll(".cta-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      try {
        const sparkles = document.createElement("div");
        sparkles.style.cssText = `
          position: fixed;
          top: ${e.clientY}px;
          left: ${e.clientX}px;
          width: 4px;
          height: 4px;
          background: #667eea;
          border-radius: 50%;
          pointer-events: none;
          animation: sparkle 0.6s ease-out forwards;
          z-index: 10000;
        `;

        document.body.appendChild(sparkles);
        setTimeout(() => {
          if (sparkles.parentNode) {
            sparkles.remove();
          }
        }, 600);
      } catch (error) {
        console.log("Sparkle effect error:", error);
      }
    });
  });

  // Newsletter signup functionality
  const newsletterBtn = document.querySelector(".newsletter-btn");
  const newsletterInput = document.querySelector(".newsletter-input");

  if (newsletterBtn && newsletterInput) {
    newsletterBtn.addEventListener("click", () => {
      const email = newsletterInput.value.trim();

      if (!email) {
        showNotification("Please enter your email address", "error");
        return;
      }

      if (!isValidEmail(email)) {
        showNotification("Please enter a valid email address", "error");
        return;
      }

      // Show loading state
      const originalText = newsletterBtn.textContent;
      newsletterBtn.textContent = "Subscribing...";
      newsletterBtn.disabled = true;

      // Simulate API call
      setTimeout(() => {
        newsletterBtn.textContent = "✓ Subscribed!";
        newsletterBtn.style.background =
          "linear-gradient(135deg, #48bb78, #38a169)";
        newsletterInput.value = "";

        showNotification(
          "Thank you for subscribing to our sunrise tour newsletter!",
          "success",
        );

        setTimeout(() => {
          newsletterBtn.textContent = originalText;
          newsletterBtn.disabled = false;
          newsletterBtn.style.background =
            "linear-gradient(135deg, #667eea, #764ba2)";
        }, 2000);
      }, 1000);
    });

    // Allow Enter key to submit
    newsletterInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        newsletterBtn.click();
      }
    });
  }

  // Email validation function
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(String(email).toLowerCase());
  }

  // Notification system
  function showNotification(message, type = "info") {
    const notification = document.createElement("div");
    const backgroundColor =
      type === "success" ? "#48bb78" : type === "error" ? "#e53e3e" : "#667eea";

    notification.innerHTML = `
      <div style="
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${backgroundColor};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        z-index: 10000;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        animation: slideInRight 0.5s ease-out;
        max-width: 300px;
        font-size: 0.9rem;
      ">
        ${message}
      </div>
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = "slideOutRight 0.5s ease-out forwards";
      setTimeout(() => {
        if (notification.parentNode) {
          notification.remove();
        }
      }, 500);
    }, 4000);
  }

  // Footer social links hover effects
  document.querySelectorAll(".social-link").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "translateY(-2px) scale(1.05)";
    });

    link.addEventListener("mouseleave", () => {
      link.style.transform = "translateY(0) scale(1)";
    });
  });

  // Animate footer elements on scroll
  const footerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "fadeInUp 0.8s ease-out forwards";
          entry.target.style.opacity = "1";
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".footer-section").forEach((section) => {
    section.style.opacity = "0";
    footerObserver.observe(section);
  });

  // Add CSS for sparkle animation
  const sparkleStyle = document.createElement("style");
  sparkleStyle.textContent = `
    @keyframes sparkle {
      0% {
        transform: scale(0) rotate(0deg);
        opacity: 1;
      }
      100% {
        transform: scale(4) rotate(180deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(sparkleStyle);
});
