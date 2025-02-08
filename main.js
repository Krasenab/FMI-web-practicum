    // зареждам си дом дървото 
    document.addEventListener('DOMContentLoaded', function () {
        fetchPosts();
        returnAllIds();
        getTitileNam();
        printPostsFormat();
        myFunk();
        getIdSum();
    });
   
    
    

    async function fetchPosts() {
        try {
        
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            return data; 
        } catch (error) {
            console.error("Neshto se oburka", error);
        }
    }

    async function returnAllIds()
    {
        
        const posts = await fetchPosts();
        const getAllIds = posts.map(x=>x.id);
        console.log("This is my function")
        console.log(getAllIds);
        return getAllIds;
    
    }
    async function getTitileNam()
    {
        const response = await fetchPosts();
        const getNamTitle = await response.filter(title=>title.title.includes("nam"));
        console.log("NAM titles")
        console.log(getNamTitle);
        return getNamTitle;
    }

    async function printPostsFormat() 
    {
        const response = await fetchPosts();
        const getIdAndTitles = await response.map(s=>
        ({
            id : s.id,
            title: s.title

        }));
        console.log(getIdAndTitles);
        return getIdAndTitles;
    }
    async function getIdSum()
    {
        const response = await fetchPosts();
        const sumIds = await response.reduce((sum,item) => sum+(item.id||0),0);
        
        console.log("opit za funkciq ");
        console.log(sumIds);
        return sumIds;
    }
    function myFunk () {
        const maxWords = 5; 
        document.querySelectorAll("#myPar").forEach(el => {
            let words = el.innerText.split(" "); 
            if (words.length > maxWords) {
                el.innerText = words.slice(0, maxWords).join(" ") + "...";
            }
        });
    }
    
  
  