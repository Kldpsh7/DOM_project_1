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



//making ADD ITEM bold and green
let titles=document.getElementsByClassName('title');
console.log(titles)

titles[0].style.fontWeight='bold';
titles[0].style.color='green';


//Adding border in header
document.getElementById('main-header').style.borderBottom='3px solid black';

//Make the 3 rd element in the list have green background color
let li=document.getElementsByTagName('li');
li[2].style.backgroundColor='green';

//Make all the elements in the list have bold color font
for (let index = 0; index < li.length; index++) {
    li[index].style.fontWeight='bold';
    
}

//Trying to get newly created list item by class name
let Class=document.getElementsByClassName('list-group-item');
console.log(Class);

//Newly created item is not is Class collection because the class name dont apply to it

//Trying to get newly created list item by Tag name
let Tag=document.getElementsByTagName('li');
console.log(Tag); //New item can be selected by tag name

//Changing its text
Tag[4].innerText='Newly created'; //Successfully done


//QUERYSELECTOR (selects only first element)
let header=document.querySelector('#main-header'); //selecting single item header
header.style.borderBottom='5px solid black'; //applying bottom border to it

let input=document.querySelector('input'); //selecting input field
input.value='Hello'; //changing value of input

// second input (button is not selected as querrySelector only selects first occurence of query)

// selecting submit button with querySekector
let submit=document.querySelector('input[type="submit"]');
submit.value='click'; //changing value of submit to click

//selecting list items with querySelector
let lstitem=document.querySelector('.list-group-item'); //selects first item
lstitem.style.color='green'; //changing its color



//selecting nth list item with querySelector
let seconditem=document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor='green'; //making background green for 2nd item

let thirditem=document.querySelector('.list-group-item:nth-child(3)');
//making this item invisible
thirditem.style.visibility='hidden';


//QUERRYSELECTORALL (selects all matching query)//
let title = document.querySelectorAll('.title');
console.log(titles)
title[0].textContent='Hello world!'

//change something in alternating items (color or style) of list of items
let odd=document.querySelectorAll('li:nth-child(odd)');
for (let index = 0; index < odd.length; index++) {
    odd[index].style.fontSize='32px';  
}


//making font color of 2nd item green
let allitems=document.querySelectorAll('.list-group-item');
allitems[1].style.color='green';

//making background of odd items green
for (let index = 0; index < allitems.length; index+=2) {
    allitems[index].style.backgroundColor='green';
}


//TRAVERSING THE DOM //


//Parent node
let itemlist = document.querySelector('#items');
console.log(itemlist.parentNode); //getting parend node of itemlist
itemlist.parentNode.style.backgroundColor='#000000'; //changing background color of parent node
console.log(itemlist.parentNode.parentNode); //getting parent node of parent node
itemlist.parentNode.parentNode.style.backgroundColor='green'; //changing its color
//we can keep chaining for parents and childs of nodes

//Parent element (similar to parent node)
console.log(itemlist.parentElement);
console.log(itemlist.parentElement.parentElement);

//childNodes
console.log(itemlist.childNodes); //getting childNodes (text nodes are here for white spaces such as line break in html code)
//childNodes is less appriciated due to its tendency to show white spaces, so we use

//children
console.log(itemlist.children); //gives HTML collection (childNodes gave node list) of all the children without any white spaces
console.log(itemlist.children[1]); //getting first child
itemlist.children[1].style.backgroundColor='red'; //changing child's color

//firstChild (gives first child, includes white spaces)
console.log(itemlist.firstChild); //gives text node

//firstElementChild (dont return white spaces)
console.log(itemlist.firstElementChild); //goves first list item
itemlist.firstElementChild.textContent='Hello first child'

//lastChild (same as firstChild for last child)
console.log(itemlist.lastChild); //gives text node

//lastElementChild (dont return white spaces)
console.log(itemlist.lastElementChild); //goves last list item
itemlist.lastElementChild.textContent='Hello last child'

//nextSibling (gives next sibling, considers white spaces)
console.log(itemlist.nextSibling); //gives text node
//previousSibling (gives previous sibling, considers white spaces)
console.log(itemlist.previousSibling); //gives text node

//nextElementSibling (gives next sibling, without white spaces)
console.log(itemlist.nextElementSibling); //gives null as there is no next sibling
//previousElementSibling (gives previous sibling, without white spaces)
console.log(itemlist.previousElementSibling); //gives previous sibling


//Creating Elements

//Creating a div
let newDiv = document.createElement('div'); //created a new div in doc

//adding class
newDiv.className='hello'; 
//add id
newDiv.id='helloId'
//add attr
newDiv.setAttribute('title','hello div');

//Adding text to newDiv
//creating text node
let newTextNode=document.createTextNode('This is the new text node');
//add text to newDiv
newDiv.appendChild(newTextNode);
console.log(newDiv);
//add newDiv to document
let container=document.querySelector('header .container'); //selecting container where newDiv will be inserted
let h1=document.querySelector('header h1'); //Selecting elemenst before/after which newDiv will be inserted inside container

container.insertBefore(newDiv,h1);
newDiv.style.fontSize='25px'; //peoperties of newDiv can be changed after its addition to document
*/

// adding hello word in header before item lister
// creating a div
let div1=document.createElement('div');
//creating a text node
let text1=document.createTextNode('Hello World');
//Adding text Node to div
div1.appendChild(text1);
//Creating object of header and h1
let header= document.querySelector('header .container'); //div will be inserted here
let itemLister=document.querySelector('header h1'); //div will be inserted before this
//inserting div
header.insertBefore(div1,itemLister);

//adding hello world befire item 1 in items
//creating new list item
let l1=document.createElement('li');
//we will add already created text node in previous step to l1
l1.appendChild(text1);
//adding same calss to l1 as other items
l1.className='list-group-item'
//grabbing ul and item 1
let List=document.querySelector('.list-group');
let item1=List.firstElementChild;
//inserting new item
List.insertBefore(l1,item1);