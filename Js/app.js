
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
        for(let section of sections){
            const SECTION_AREA = section.getBoundingClientRect();
            section.className = "";
            let allAnchor =document.querySelectorAll("a");
            if (SECTION_AREA.top <= 150 && SECTION_AREA.bottom >= 150) {
                section.classList.add("your-active-class");
                const id = section.getAttribute("id");   
                allAnchor.forEach(function(link){
                    if(link.classList.contains(id)){
                        link.classList.add("active")
                    }
            })
              } else {
            section.classList.remove("your-active-class");
            const id = section.getAttribute("id");  
            allAnchor.forEach(function(link){
                if(link.classList.contains(id)){
                    link.classList.remove("active")
                }
            })
           
            }
        }
    },
    animateScrolling(){
        let sections = document.querySelectorAll("section");
        let allAnchor = document.querySelectorAll("a"); 
        for(let section of sections){
            const id = section.getAttribute("id");
            const sectionArea = section.getBoundingClientRect().top;  
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