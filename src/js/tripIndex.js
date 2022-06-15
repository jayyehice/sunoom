window.addEventListener('load',function(){
    let seaPage = document.getElementsByClassName('SeaItinerary')[0];
    let landPage = document.getElementsByClassName('LandItinerary')[0];
    let packPage = document.getElementsByClassName('packageTour')[0];
    
    seaPage.addEventListener('click',function(){
        window.location.href = './sea.html';
    })
    landPage.addEventListener('click',function(){
        window.location.href = './land_tour.html';
    })
    packPage.addEventListener('click',function(){
        window.location.href = './set.html';
    })
})