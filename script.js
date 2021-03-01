"use strict";
const reviews =[{
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

}, {
    id: 3,
    name: 'Priyanka',
    job: 'Graphics designer', 
    img: 'https://res.cloudinary.com/dhqxln7zi/image/upload/v1614596241/five_yg17mi.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nihil quo dolores ipsa praesentium, tempore tenetur aspernatur iusto dolore incidunt?',

}, 
{
    id: 4,
    name: 'Steve',
    job: 'Super hero', 
    img: 'https://pyxis.nymag.com/v1/imgs/338/9c1/462cbd8aec032b6e7648a2ba76314afdd1-25-captain-america-chris-evans.rsquare.w330.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nihil quo dolores ipsa praesentium, tempore tenetur aspernatur iusto dolore incidunt?',

},
{
    id: 5,
    name: 'Pritam',
    job: 'Web developer', 
    img: 'https://media-exp1.licdn.com/dms/image/C5603AQG_vzBP7WgsKw/profile-displayphoto-shrink_400_400/0/1609342872838?e=1620259200&v=beta&t=lu4X-oEat5SfejhvUpzPOk_TUK-ba8yX1niA-S2tBi4',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nihil quo dolores ipsa praesentium, tempore tenetur aspernatur iusto dolore incidunt?',

}]

//seclecting items
const personImg = document.querySelector('#pepole-img');
const personName = document.querySelector('#person-name');
const personJob = document.querySelector('#job');
const personText = document.querySelector('#text');
const preBtn = document.querySelector('#pre-btn');
const nextBtn = document.querySelector('#next-btn');

//current testimonial show when page load

var currentTestimonial = 0;

window.addEventListener('DOMContentLoaded', function() {
    showTestimonial(currentTestimonial);
});

 function showTestimonial(personReview){
    const firstItem = reviews[personReview];
    personImg.src = firstItem.img;
    personName.textContent = firstItem.name;
    personJob.textContent = firstItem.job;
    personText.textContent = firstItem.text;
 }

 //add envent listener to buttons

 preBtn.addEventListener('click', function(){
     currentTestimonial--;
     if(currentTestimonial < 0){
        currentTestimonial = reviews.length-1;
    }
     showTestimonial(currentTestimonial);
 })

 nextBtn.addEventListener('click', function(){
     currentTestimonial++;
     if(currentTestimonial > reviews.length-1){
         currentTestimonial = 0;
     }
     showTestimonial(currentTestimonial);
 })