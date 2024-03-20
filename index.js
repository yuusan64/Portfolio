document.addEventListener('DOMContentLoaded', function(){
  
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("fade-in-section");
              }
            });
          }, {
            // triggers the callback when at least 10% of the target is visible
            threshold: 0.1 
        });

        // Target all sections you want to apply the fade-in effect to
        document.querySelectorAll('section').forEach(section => {
          observer.observe(section);
        });
      });