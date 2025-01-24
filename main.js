// зареждам си дом дървото 
document.addEventListener('DOMContentLoaded', function () {
    fetchPosts();
});

async function fetchPosts() {
    try {
    
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
       

        const data = await response.json();


        console.log("Данните са заредени:");
        let firstFive = data.slice(0,5);
        console.log(firstFive);

        return data; 
    } catch (error) {
        console.error('Грешка при зареждането на данните:', error);
    }
}

