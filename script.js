//what will show in the browser
const  personReviews = [
    {id: 0, img: "https://media-exp1.licdn.com/dms/image/C5603AQG_vzBP7WgsKw/profile-displayphoto-shrink_400_400/0/1609342872838?e=1620259200&v=beta&t=lu4X-oEat5SfejhvUpzPOk_TUK-ba8yX1niA-S2tBi4", name: "Pritam Kumar", job: "Web developer", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nihil quo dolores ipsa praesentium, tempore tenetur aspernatur iusto dolore incidunt?"},
{
    id: 1,
    name: 'Julee Roman',
    job: 'Paineter', 
    img: 'https://res.cloudinary.com/dhqxln7zi/image/upload/v1614596182/one_kvx2ef.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nihil quo dolores ipsa praesentium, tempore tenetur aspernatur iusto dolore incidunt?',

},
{
    id: 2,
    name: 'Puja',
    job: 'Teacher', 
    img: 'https://res.cloudinary.com/dhqxln7zi/image/upload/v1614596205/two_ed2n3y.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nihil quo dolores ipsa praesentium, tempore tenetur aspernatur iusto dolore incidunt?',

},{
    id: 3,
    name: 'Priyanka',
    job: 'Graphics designer', 
    img: 'https://res.cloudinary.com/dhqxln7zi/image/upload/v1614596241/five_yg17mi.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nihil quo dolores ipsa praesentium, tempore tenetur aspernatur iusto dolore incidunt?',

},{
    id: 4,
    name: 'Steve',
    job: 'Super hero', 
    img: 'https://pyxis.nymag.com/v1/imgs/338/9c1/462cbd8aec032b6e7648a2ba76314afdd1-25-captain-america-chris-evans.rsquare.w330.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nihil quo dolores ipsa praesentium, tempore tenetur aspernatur iusto dolore incidunt?',

}];

//Selecting items
const personImg = document.querySelector('#pepole-img');
const personName = document.querySelector('#person-name');
const personJob = document.querySelector('#job');
const personText = document.querySelector('#text');

//selecting buttons
const preBtn = document.querySelector('#pre-btn');
const nextBtn = document.querySelector('#next-btn');
const randomBtn = document.querySelector('#random');

let firstReview = 0 ;

window.addEventListener('DOMContentLoaded', function(){
    showFirstReview();
})

function showFirstReview(){
    var showTestimonial = personReviews[firstReview];
    personImg.src = showTestimonial.img
    personName.textContent = showTestimonial.name;
    personJob.textContent = showTestimonial.job;
    personText.textContent = showTestimonial.text;
}
preBtn.addEventListener('click', function(){
    firstReview--;
    if(firstReview < 0){
        firstReview = personReviews.length-1;
    }
    showFirstReview();
});
 nextBtn.addEventListener('click', function(){
     firstReview++;
     if(firstReview > personReviews.length-1){
         firstReview = 0;
     }
     showFirstReview();
 })
randomBtn.addEventListener('click', function(){
    firstReview = Math.floor(Math.random()*personReviews.length)
    showFirstReview()
})

/*let firstReview = 0;
window.addEventListener('DOMContentLoaded', function(){
    showPersonReview();
})


function showPersonReview(){
    var showTestimonial = personReviews[firstReview];
    console.log(showTestimonial);
    personImg.src = showTestimonial.img
    personName.textContent = showTestimonial.name;
    personJob.textContent = showTestimonial.job;
    personText.textContent = showTestimonial.text;
}


preBtn.addEventListener('click', function(){
    firstReview--;
    if(firstReview < 0){
        firstReview = personReviews.length-1;
    }
    showPersonReview()
});
 nextBtn.addEventListener('click', function(){
     firstReview++;
     if(firstReview > personReviews.length-1){
         firstReview = 0;
     }
     showPersonReview()
 })*/