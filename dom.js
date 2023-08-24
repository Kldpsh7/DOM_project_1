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



//EVENTS//


//adding event listner to button
let button=document.getElementById('button').addEventListener('click',buttonClick);

// this function gets called when click here the button is pressed
// we can use eventListner for the job or onClick=buttonClick()
function buttonClick(event){
    console.log('button is pressed')
    document.getElementById('header-title').textContent='Button Clicked';
    document.title='kuldeep'

        let newItem=document.createElement('li');
        newItem.className='list-group-item';
        newItem.appendChild(document.createTextNode('New Item'));
        document.getElementById('items').appendChild(newItem);

    console.log(event.target); //gives event target
    console.log(event.target.className); //gives class of target
    console.log(event.target.id); //Gives ID of event target
    console.log(event.target.classList); //Gives list of all the classes applied to event target

        //displaying any of the above methods output on the page
        let output=document.createElement('div');
        output.id='output';
        output.innerHTML='<h1>'+event.target.classList+'</h1>';
        document.getElementById('main').appendChild(output);

    //Event Type
    console.log(event.type); //Gives click as we are listning for click event

        //positon of mouse pionter
        console.log(event.clientX); //X-axis position wrt window
        console.log(event.clientY); //Y-axis position wrt window

        console.log(event.offsetX); //X-axis position wrt element itself
        console.log(event.offsetY); //Y-axis position wrt element itself


    //keypress status
    console.log(event.altKey); //returns true of alt key is pressed while the event occured else false
    console.log(event.ctrlKey); //returns true of ctrl key is pressed while the event occured else false
    console.log(event.shiftKey); //returns true of shift key is pressed while the event occured else false
}



// EVENTS TYPES //



let button=document.getElementById('button'); 

function runEvent(evnt){             //function gets called on event
    console.log(evnt.type);
}
    

    //click event
    button.addEventListener('click',runEvent);

    //double click
    button.addEventListener('dblclick',runEvent);

    //Mousedown => as soon as button is pressed, before even button lifts
    button.addEventListener('mousedown',runEvent);

    //Mouseup => waits for mose button to lift up
    button.addEventListener('mouseup',runEvent);

    //Mouseenter => triggered when mouse enters element
    button.addEventListener('mouseenter',runEvent);

    //Mouseleave => triggered when mouse leaves element
    button.addEventListener('mouseleave',runEvent);

    //Mouseover => when mouse is hovered over element
    button.addEventListener('mouseover',runEvent);

    //Mouseout => when mouse leaves element
    button.addEventListener('mouseout',runEvent);


            //Creating a box and changing its background color as mouse moves over it
            let box=document.createElement('div');
            box.style='width:500px; height:200px; background:#f4f4f4';
            document.getElementById('main').appendChild(box);

            box.addEventListener('mousemove',boxEvent);  //mousemove event constantly gracks movement of mouse pointer

            function boxEvent(e){
                box.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",126)";

                //adding mouse pointer location as text in the box itself

                box.innerHTML='<h3> x:'+e.offsetX+'</h3><h3> y:'+e.offsetY+'</h3';
            }


//input events

let itemInput=document.querySelector('input[type="text"]');
let form=document.querySelector('form');

itemInput.addEventListener('keydown',runEvent);  //anytime any key on itemInput form keyboard is pressed it triggers this event
itemInput.addEventListener('keyup',runEvent); 
itemInput.addEventListener('keypress',runEvent); 

itemInput.addEventListener('focus',runEvent); //when input field is in focus
itemInput.addEventListener('blur',runEvent); //opposite of focus

itemInput.addEventListener('cut',runEvent); //when entered text is cut
itemInput.addEventListener('copy',runEvent); //when entered text is copied
itemInput.addEventListener('paste',runEvent); //when entered text is pasted

itemInput.addEventListener('input',runEvent); //when anything is dne with input (key,cut,paste etc.)

            //inserting select item besides input field
            let select=document.createElement('select');
            let option4=document.createElement('option');
            option4.innerText='select';
            select.appendChild(option4);
            let option1=document.createElement('option');
            option1.innerText='Item 1';
            select.appendChild(option1);
            let option2=document.createElement('option');
            option2.innerText='Item 2';
            select.appendChild(option2);
            let option3=document.createElement('option');
            option3.innerText='Item 3';
            select.appendChild(option3);

            select.style.marginRight='5px';
            form.insertBefore(select,form.lastElementChild);

            //adding event listner for select element
            select.addEventListener('change',runEvent);


function runEvent(e){
    console.log(e.type)
    console.log(e.target.value);

}

//Submit event
form.addEventListener('submit',Submit);
function Submit(e){
    e.preventDefault();
    console.log(e.type);
}
*/


//ADDING DELETE BUTTON TO UL ITEMS //

let delBtn=document.createElement('button'); //creating button element
delBtn.className='btn btn-danger btn-sm float-right delete'; //giving bootstrap class to button
delBtn.innerText='X'; //value

let Ul=document.querySelector('ul'); //Grabbig UL

//adding button to each child of UL by looping
for (let index = 0; index < Ul.children.length; index++) {
    Ul.children[index].appendChild(delBtn.cloneNode(true));
}

//ADDING EDIT BUTTON//

let edit=document.createElement('button');
edit.className='btn btn-danger btn-sm float-right edit';
edit.innerText='Edit';
edit.style.marginRight='3px';

for (let index = 0; index < Ul.children.length; index++) {
    Ul.children[index].appendChild(edit.cloneNode(true));
    
}

//adding delete and edit fucntionality whren delete button is pressed

Ul.addEventListener('click',deleteitem); //add event listner to ul to listen for click and call deleteitem function
                                         //above event is called when we click anywhere on list items,
                                         //but we want that only on button click
                                         //so we add an if statement to event

function deleteitem(e){
 if (e.target.classList.contains('delete')){  //button has class delete
    if (confirm('You Really Want to Delete This?')){
        Ul.removeChild(e.target.parentElement);
    }
 }

 if (e.target.classList.contains('edit'))(   //button has edit class
    e.target.parentElement.firstChild.nodeValue=prompt('Enter new value')
 )
}

//ADDING ITEMS TO UL WHEN SUBMIT IS PRESSED

let form=document.querySelector('form'); //grabbing form

form.addEventListener('submit',addItem); //listening to submit event

function addItem(e){
    e.preventDefault()              //preventing default

    if (e.target.firstElementChild.value===''){
        alert('empty input')
    }
    else{
        let inp=e.target.firstElementChild.value; //getting input text
        li=document.createElement('li'); //creating new list item
        li.className='list-group-item'; //add class to it
        li.innerText=inp;                //adding entered text to it
        li.appendChild(delBtn.cloneNode(true)) //adding delete button to it
        li.appendChild(edit.cloneNode(true)) //adding edit button to it
        Ul.appendChild(li);               //Adding new item
        e.target.firstElementChild.value=''; //making input field clear
    }
}

