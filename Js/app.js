let navigation = {
    links: ["Checkered", "Polka dots", "Gingham", "Chevron"],
    displayLinks(){
        let ul = document.querySelector("ul");
        for(let i = 0; i < this.links.length; i++){
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.textContent = this.links[i];
            ul.appendChild(li);
            a.setAttribute("href", "#"+ i);
            a.className = "links " + i;
            li.appendChild(a);
        }
    },
    makeActive(){
        const sections = document.querySelectorAll("section");
        for(let section of sections){
            const SECTION_AREA = section.getBoundingClientRect();
            const allAnchor =document.querySelectorAll("a");
            const id = section.getAttribute("id");   
            if (SECTION_AREA.top <= 150 && SECTION_AREA.bottom >= 150) {
                allAnchor.forEach(function(link){
                    if(link.classList.contains(id)){
                        link.classList.add("active")
                    }
                })
            } else {
                allAnchor.forEach(function(link){
                    if(link.classList.contains(id)){
                        link.classList.remove("active")
              
                    }
                })
            }
        }
    },
    animateScrolling() {
        let sections = document.querySelectorAll("section");
        let allAnchor = document.querySelectorAll("a"); 
        for(let section of sections){
            const id = section.getAttribute("id");
            allAnchor.forEach(function(link){
            link.addEventListener("click", function(e){
                e.preventDefault()
                if(link.classList.contains(id)){
                    section.scrollIntoView({behavior: "smooth"})
                }
              
            })
        })
    }    
  }
}
// INVOCATION
navigation.displayLinks();
navigation.animateScrolling();
document.addEventListener("scroll", function(){
    navigation.makeActive();
})

// SECOND SOLUTION :)
let navigation = {
    links: ["Checkered", "Polka dots", "Gingham", "Chevron"],
    displayLinks(){
        let ul = document.querySelector("ul");
        for(let i = 0; i < this.links.length; i++){
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.textContent = this.links[i];
        ul.appendChild(li);
        a.setAttribute("href", "#"+ i);
        a.className = "links " + i;
        li.appendChild(a);
       }
    },
    makeActive(){
        let sections = document.querySelectorAll("section");
        const options = {
            root: null,
            threshold: 0.25,
            rootMargin: '-150px'
        }
        const observer = new IntersectionObserver(function (entries, observer){
             entries.forEach(function(entry) {
                if(!entry.isIntersecting){
                   return;
                }    
                const allAnchor =document.querySelectorAll("a");
                const id = entry.target.id;
                if(id){
                    allAnchor.forEach(link => {
                        if(link.classList.contains(id)){
                            link.classList.add("active")     
                        } else{
                            link.classList.remove("active")
                        }
                   })
                }  
            }) 
        },options);
    sections.forEach(section => observer.observe(section))
},
    
    animateScrolling(){
        let sections = document.querySelectorAll("section");
        let allAnchor = document.querySelectorAll("a"); 
        for(let section of sections){
            const id = section.getAttribute("id");
            allAnchor.forEach(function(link){
            link.addEventListener("click", function(e){
                e.preventDefault()
                if(link.classList.contains(id)){
                    section.scrollIntoView({behavior: "smooth"})
                }
              
            })
        })
    }    
  }
}
// INVOCATION
navigation.displayLinks();
navigation.animateScrolling();
document.addEventListener("scroll", function(){
    navigation.makeActive();
})