document.addEventListener("DOMContentLoaded", () => {
    // Get all navigation links
    const navLinks = document.querySelectorAll(".nav-link")
  
    // Get all content sections
    const contentSections = document.querySelectorAll(".content-section")
  
    // Get all inline links that should navigate between sections
    const inlineLinks = document.querySelectorAll(".inline-link")
  
    // Function to show a specific section
    function showSection(sectionId) {
      // Remove active class from all links
      navLinks.forEach((link) => {
        link.classList.remove("active")
      })
  
      // Add active class to the corresponding nav link
      document.querySelector(`.nav-link[data-section="${sectionId}"]`).classList.add("active")
  
      // Hide all content sections
      contentSections.forEach((section) => {
        section.classList.remove("active")
      })
  
      // Show the selected content section
      document.getElementById(sectionId).classList.add("active")
    }
  
    // Add click event listener to each navigation link
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()
  
        // Get the section id from the data attribute
        const sectionId = this.getAttribute("data-section")
  
        // Show the selected section
        showSection(sectionId)
  
        // Update URL hash without scrolling
        history.pushState(null, null, `#${sectionId}`)
      })
    })
  
    // Add click event listener to inline links
    inlineLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()
  
        // Get the section id from the data attribute
        const sectionId = this.getAttribute("data-section")
  
        // Show the selected section
        showSection(sectionId)
  
        // Update URL hash without scrolling
        history.pushState(null, null, `#${sectionId}`)
      })
    })
  
    // Check if URL has a hash on page load
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1)
      if (document.getElementById(sectionId)) {
        showSection(sectionId)
      }
    }
  })
  
  