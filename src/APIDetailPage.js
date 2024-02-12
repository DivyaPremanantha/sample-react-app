import { useParams } from "react-router-dom";
import Markdown from 'react-markdown'
import './OrgLandingPage.css';
import { createRoot } from 'react-dom/client'
import rehypeRaw from 'rehype-raw'

function APIDetailPage() {
    const { apiId } = useParams();
    console.log(apiId);

    return (
        document.head.innerHTML = document.head.innerHTML + "<base href='https://raw.githubusercontent.com/DivyaPremanantha/sample-react-app/main/files" + window.location.pathname + "/OrgLandingPage/'/>",

        console.log(document.querySelector("base")),
        <div id="api-detail-page" style="display: flex;"> </div>,

        // Load and render multiple Markdown files
        loadAndRenderHTML('template/api-detail-page.html', 'api-detail-page'),
        loadAndRenderMarkdown('content/api-detail-page-section-one.md', 'api-detail-page-section-one'),
        loadAndRenderMarkdown('content/api-detail-page-section-two.md', 'api-detail-page-section-two')
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
            console.log(markdownContent);

            // Insert the HTML content into the specified target element
            document.getElementById(targetElementId).innerHTML = markdownContent;
        })
        .catch(error => console.error('Error loading Markdown file:', error));
}

export default APIDetailPage;