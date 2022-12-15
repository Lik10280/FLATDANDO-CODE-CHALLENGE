fetch("http://localhost:3000/films")
.then((response)=>response.json())
.then((data)=>{
    const myMovies=data.find((object)=>object.id==1);
    const myPoster=document.getElementById("Lik");
    let movieImage=document.createElement("img");
    movieImage.src=myMovies.poster;
    movieImage.alt="movie poster";
    movieImage.width="300";
    movieImage.height="400";
    myPoster.appendChild(movieImage);
    //display tittle and movie details of id 1
    const firstMovieDetails=document.getElementById("zuat");
    let myTitle=document.createElement("p");
    let runTime=document.createElement("p");
    myTitle.innerText=myMovies.title;
    runTime.innerText=`the show runs for ${myMovies.runtime} minutes`;
   
    firstMovieDetails.appendChild(myTitle);
    firstMovieDetails.appendChild(runTime);

    const movieDetails=document.getElementById("zuat");
    let movieDesc=document.createElement("P");
    let movieTime=document.createElement("button");
    //remaining tickets
    let remainingTickets=myMovies.capacity-myMovies.tickets_sold;
    let ticketsLeft=document.createElement("span");
    let myTickets=document.createElement("button");
    let mySpacing= document.createElement("br");

    ticketsLeft.innerText=`${remainingTickets}remaining tickets`;
    movieDesc.innerText=myMovies.description;
    myTickets.innerText="Buy Tickets";
   

    
    firstMovieDetails.appendChild(movieDesc);
    firstMovieDetails.appendChild(myTickets);
    firstMovieDetails.appendChild(mySpacing);
    firstMovieDetails.appendChild(ticketsLeft);

    myTickets.addEventListener('click', ()=>{
    if (remainingTickets===1){
        alert("tickets used up!");
        remainingTickets.innerText="sold out";
    }else{
        --remainingTickets;
        ticketsLeft.innerText=`${remainingTickets}tickets left.`;
    }
});
});

function display(){
    fetch ("http://localhost:3000/films")
    .then((response)=>response.json())
    .then(renderFilms);
}
 display();
 function renderFilms(myFilms){
    myFilms.forEach(filmDetails);
 }

 function filmDetails(details){
    const filmTitles =document.getElementById("Lukas");
    let myfilmList=document.createElement("li");
    myfilmList.innerText=details.title;
    filmTitles.appendChild(myfilmList);
}