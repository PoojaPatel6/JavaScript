document.addEventListener('DOMContentLoaded', function() {
    // Change Content
    document.getElementById('changeContentButton').addEventListener('click', function() {
        var title = document.getElementById('title');
        title.innerHTML = 'New Title';
        
        var paragraphs = document.querySelectorAll('.text');
        paragraphs.forEach(function(paragraph) {
            paragraph.textContent = 'Updated paragraph text.';
        });
        
        var image = document.getElementById('image');
        image.setAttribute('src', 'https://via.placeholder.com/200');
    });

    // Toggle Highlight
    document.getElementById('toggleHighlightButton').addEventListener('click', function() {
        var title = document.getElementById('title');
        title.classList.toggle('highlight');
    });

    // Add Element
    document.getElementById('addElementButton').addEventListener('click', function() {
        var newElement = document.createElement('p');
        newElement.textContent = 'This is a new paragraph.';
        document.getElementById('container').appendChild(newElement);
    });

    // Remove Last Element
    document.getElementById('removeElementButton').addEventListener('click', function() {
        var container = document.getElementById('container');
        if (container.lastChild) {
            container.removeChild(container.lastChild);
        }
    });
});
