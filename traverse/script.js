// Selecting the parent element
const parentElement = document.getElementById('parent');

// Traversing child nodes
const children = parentElement.children; // or parentElement.childNodes

for (let i = 0; i < children.length; i++) {
    console.log(children[i].textContent);
}

// Accessing a specific child
const firstChild = parentElement.firstElementChild;
console.log('First Child:', firstChild.textContent);

const lastChild = parentElement.lastElementChild;
console.log('Last Child:', lastChild.textContent);

// Traversing sibling nodes
const secondChild = firstChild.nextElementSibling;
console.log('Second Child:', secondChild.textContent);

const previousSibling = lastChild.previousElementSibling;
console.log('Previous Sibling of Last Child:', previousSibling.textContent);

// Traversing up to the parent
const parentOfFirstChild = firstChild.parentElement;
console.log('Parent of First Child:', parentOfFirstChild.id);

// Using querySelector for traversal
const specificChild = document.querySelector('#parent .child:nth-child(2)');
console.log('Specific Child:', specificChild.textContent);

// Using querySelectorAll for multiple elements
const allChildren = document.querySelectorAll('#parent .child');
allChildren.forEach(child => {
    console.log('Child:', child.textContent);
});
