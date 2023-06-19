let btn= document.querySelector('#new-quote');
let qote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes= [{ qote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
person: "Nelson Mandela"},
{ qote:"The way to get started is to quit talking and begin doing.",
person: "Walt Disney"},{qote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
person: "Mother Teresa"},{ qote: "When you reach the end of your rope, tie a knot in it and hang on.",
person: "Franklin D. Roosevelt"},{ qote: "Always remember that you are absolutely unique. Just like everyone else.",
person: "Margaret Mead"},{qote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
person: "Robert Louis Stevenson"},
{qote:"The future belongs to those who believe in the beauty of their dreams.",
person: "Eleanor Roosevelt"}];


btn.addEventListener('click',function(){
    let random= Math.floor(Math.random() * quotes.length);
    qote.innerText= quotes[random].qote;
    person.innerText= quotes[random].person;
})
