import { useParams } from "react-router-dom";
import Markdown from 'react-markdown'
import './OrgLandingPage.css';
import { createRoot } from 'react-dom/client'
import rehypeRaw from 'rehype-raw'

function APILandingPage() {
    const { apiId } = useParams();
    console.log(apiId);

    return (
        document.head.innerHTML = document.head.innerHTML + "<base href='https://raw.githubusercontent.com/DivyaPremanantha/sample-react-app/main/files" + window.location.pathname + "/'/>",

        console.log(document.querySelector("base")),

        // Load and render multiple Markdown files
        loadAndRenderHTML('template/api-landing-page.html', 'api-landing-page'),
        loadAndRenderMarkdown('content/api-landing-page-section-one.md', 'api-landing-page-section-one'),
        loadAndRenderMarkdown('content/api-landing-page-section-two.md', 'api-landing-page-section-two'),
        loadAndRenderMarkdown('content/api-landing-page-section-three.md', 'api-landing-page-section-three')
    );
}

function loadAndRenderMarkdown(filePath, targetElementId) {

    // Use fetch API to load the Markdown file
    fetch(filePath)
        .then(response => response.text())
        .then(markdownContent => {
            const ReactMarkdown = require('react-markdown')

            console.log(markdownContent);

            createRoot(document.getElementById(targetElementId)).render(<Markdown rehypePlugins={[rehypeRaw]}>{markdownContent}</Markdown>)

        })
        .catch(error => console.error('Error loading Markdown file:', error));
}

function loadAndRenderHTML(filePath, targetElementId) {
    // Use fetch API to load the Markdown file
    fetch(filePath)
        .then(response => response.text())
        .then(markdownContent => {
            console.log(targetElementId);
            console.log(document);

            // Insert the HTML content into the specified target element
            document.getElementById(targetElementId).innerHTML = markdownContent;
        })
        .catch(error => console.error('Error loading Markdown file:', error));
}

export default APILandingPage;