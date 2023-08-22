/*

// EXAMINE THE DOCUMENT OBJECT

console.dir(document); //Gives all properties and attachde to the document
console.log(document.domain); //Gives domain
console.log(document.URL); //Gives entire url of the doc
console.log(document.title); //Gives title of the page
document.title='kuldeep'; //Changed title of page to entered value
console.log(document.doctype); //Gives <!DOCTYPE>
console.log(document.head); //Gives entire head element
console.log(document.body); //Gives entire body element
console.log(document.all); //Gives everything that is in the dom
console.log(document.all[10]); //Gives item present at index specified form document.all 
console.log(document.forms); //Gives collection of all the forms on the page
console.log(document.links); //Gives all the links on the page
console.log(document.images); //Gives iamges on page

// ELEMENTS SELECTORS

// getElementById
console.log(document.getElementById('header-title')); //we get header title <h1> element by its id
let headerTitle = document.getElementById('header-title'); // creating a variable which has the header title
headerTitle.textContent='Hello'; //We changed the text content form 'item listner' to 'hello' (this ignores style)
headerTitle.innerText='Good Bye'; //Another way to change text content (this pays attention to the style)
headerTitle.innerHTML='<h3>Hi</h3>'; //Another way to do the same thing (puts html inside parent element)
headerTitle.style.border='2px solid red'; //We can change css this way. 


// getElementsByClassName
let items = document.getElementsByClassName('list-group-item'); //getting element by class name and initiating a variable for the same
console.log(items); //Gives a collection of all items associated with the specific class, have indexing
console.log(items[0]); //displaying first.
items[2].innerHTML='<h2>index[2] Item<h2>' //Changing inner HTML
items[0].innerHTML='<p style="font-weight:bold">Item 1</p>' // made item 1 bold
items[3].style.fontWeight='bold' //another way to perform previous task
items[1].style.backgroundColor='yellow' //changing nackground color

    //to change background color of all items, we have to iterate through them
    //because below gives error
    //items.style.backgroundColor='#f4f4f4';

    for (let i = 0; i < items.length; i++) {
        items[i].style.backgroundColor='#f4f4f4';
    }


//getElementsByTagName
let li=document.getElementsByTagName('li'); //gets all <li> items and returns a HTML collection
console.log(li) //individual items can be accessed by index
li[1].innerText='innerText' //changed inner text of li[1]
li[0].style.fontWeight='Bold' //made li[0] text bold
//changing background color of all items
for (let index = 0; index < li.length; index++) {
    li[index].style.backgroundColor='purple';   
}
*/


//making ADD ITEM bold and green
let titles=document.getElementsByClassName('title');
console.log(titles)

titles[0].style.fontWeight='bold';
titles[0].style.color='green';


//Adding border in header
document.getElementById('main-header').style.borderBottom='3px solid black';