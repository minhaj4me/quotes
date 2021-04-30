var arrayOfQuotes = [
{
    "author": "J.K.Rowling",
    "quote": "It is our choices that show what we truly are, far more than our abilities."
},

{
    "author": "Mohandas K. Gandhi",
    "quote": "The best way to find yourself is to lose yourself in the service of others."
},

{
    "author": "Carl Sandburg",
     "quote": "Nothing happens unless first a dream."
},

{
    "author" : "Emerson",
    "quote" : "Circumstance does not make the man. Circumstance reveals man to himself."
},

{
    "author": "Ken Hudgins",
    "quote": "The meaning of life is to give life meaning."
},

{
    "author": "Carl Gustav Jung",
    "quote": "Your vision will become clear only when you can look into your own heart. Who looks outside, dreams, who looks inside awakes."
},

{
    "author": "George Elliot",
    "quote": "It is never too late to become what you might have been."
},

{
    "author": "George Bernard",
    "quote": "Life isn’t about finding yourself. Life is about creating yourself."
},

{
    "author": "Josh Billings",
    "quote": "Be like a postage stamp. Stick to one thing until you get there."
},

{
    "author": "Jonathon Winters",
    "quote": "I couldn’t wait for success....so I went ahead without it."
},

{
    "author": "Frank A. Clark",
    "quote": "If you can find a path with no obstacles, it probably doesn’t lead anywhere."
},

{
    "author": "Ralph Waldo Emerson",
    "quote": "As we grow old, the beauty steals inward."
},

{
    "author": "Frank Tyger",
    "quote": "Doing what you like is freedom. Liking what you do is happiness."
},

{
    "author": "Alan Cohen",
    "quote": "Be happy with what you have. Be excited about what you want."
},

{
    "author": "Nicole Shepherd",
    "quote": "You never regret being kind."
},

{
    "author": "Marcus Aurelius",
    "quote": "He who lives in harmony with himself lives in harmony with the universe."
},

{
    "author": "David Augsburger",
    "quote": "An open ear is the only believable sign of an open heart."
},

{
    "author": "Plato",
    "quote": "At the touch of love, everyone becomes a poet."
},

{
    "author": "Eleanor Roosevelt",
    "quote": "No one can make you feel inferior without your consent."
},

{
    "author": "Lillian Hellman",
    "quote": "People change and forget to tell each other."
},

{
    "author": "Kahlil Gibran",
    "quote": "If you love somebody, let them go, for if they return, they were always yours. And if they don’t, they never were"
},

{
    "author": "Joseph Chilton Pearce",
    "quote": "To live a creative life, we must lose our fear of being wrong."
},

{
    "author": "African Proverb",
    "quote": "If you’re not living on the edge... you’re taking up too much room."
},

{
    "author": "Henry Ford",
    "quote": "Whether you think you can or think you can’t, you are right."
}

] 

function randomSelector(arrayLength){
    return Math.floor(Math.random() * arrayLength);
}

function generateQuote() {
    var randomNumber = randomSelector(arrayOfQuotes.length);
    document.getElementById("quoteOutput").innerHTML = '"' + arrayOfQuotes[randomNumber].quote + '"'; 
    document.getElementById("authorOutput").innerHTML = "- " + arrayOfQuotes[randomNumber].author;
}

