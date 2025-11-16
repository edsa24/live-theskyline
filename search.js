function searchSite(event) {
    
    // Prevent form reload
    event.preventDefault(); 

    // Assign searchInput from getElement to query variable
    const query = document.getElementById("searchInput").value.trim().toLowerCase();

    // Define keywords and their corresponding page links
    const pages = {
      "landing page": "index.html",
      "landing": "index.html",
      "home": "homepage.html",
      "homepage": "homepage.html",
      "about": "aboutus.html",
      "about us": "aboutus.html",
      "properties": "properties.html",
      "contact": "contactus.html",
      "contact us": "contactus.html",
      
    };

    // Check if query matches any page
    if (pages[query]) {
        // Redirect to matching page
      window.location.href = pages[query]; 
    } else {
      alert("No results found for: " + query);
    }
}