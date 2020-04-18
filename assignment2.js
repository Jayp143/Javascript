// Ans 1

var myBooks = [
{
  Title : "My story : Albert Einstien",
  Author : "William Shakespaere",
  Read : true
},
{
    Title : "Inception",
    Author : "Micheal Berry",
    Read : false
},
{   Title : "Journey lies within",
    Author : "Ale Watson",
    Read : true
}
];
for (var i = 0; i < myBooks.length; i++) {
  console.log(myBooks[i].Title + " by " + myBooks[i].Author);
}

for(var i = 0; i < myBooks.length; i++)
{
    if (myBooks[i].Read == true) {
      console.log("You have already read " + myBooks[i].Title + " by " + myBooks[i].Author);
    } else {
      console.log("You still have to read " + myBooks[i].Title + " by " + myBooks[i].Author);
    }
}

// Ans 2

var	 cartForShop =	{
apple:	"2.50",
shorts:	"8.99",
pant:	"5.01",
watch: "60.77",
glasses:	"4.60",
trimmer:	"13.34",
vegetables:	"72.36"
};


// Ans 3

var favMovie = {
  Title : "Titanic",
  Duration : 125,
  Stars : ["5", "4", "3", "below 3"]
};

console.log(favMovie);
