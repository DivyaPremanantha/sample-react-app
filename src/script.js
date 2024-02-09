
// Function to load and render Markdown content
function loadAndRenderMarkdown(filePath, targetElementId) {
    console.log('Loading Markdown file:', filePath);
    // Use fetch API to load the Markdown file
    fetch(filePath)
        .then(response => response.text())
        .then(markdownContent => {
            console.log('Rendering Markdown content:', markdownContent);
            // Use marked library to convert Markdown to HTML
            const htmlContent = marked.parse(markdownContent);

            // Insert the HTML content into the specified target element
            document.getElementById(targetElementId).innerHTML = htmlContent;
        })
        .catch(error => console.error('Error loading Markdown file:', error));
}

// Load and render multiple Markdown files
loadAndRenderMarkdown('example1.md', 'markdown-container');
loadAndRenderMarkdown('example2.html', 'markdown-container2');

// Add more calls as needed for additional files

