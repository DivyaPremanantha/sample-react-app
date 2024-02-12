import Markdown from 'react-markdown'
import './OrgLandingPage.css';
import { createRoot } from 'react-dom/client'
import rehypeRaw from 'rehype-raw'


function OrgLandingPage() {
  return (
    document.head.innerHTML = document.head.innerHTML + "<base href='https://raw.githubusercontent.com/DivyaPremanantha/sample-react-app/main/files" + window.location.pathname + "/OrgLandingPage/'/>",
    console.log(document.querySelector("base")),
    <div id="org-landing-page" style="display: flex;"> </div>,

  // Load and render multiple Markdown files
  loadAndRenderHTML('template/org-landing-page.html', 'org-landing-page'),
  loadAndRenderMarkdown('content/org-landing-page-section-one.md', 'org-landing-page-section-one'),
  loadAndRenderMarkdown('content/org-landing-page-section-two.md', 'org-landing-page-section-two'),
  loadAndRenderMarkdown('content/org-landing-page-section-three.md', 'org-landing-page-section-three')
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

export default OrgLandingPage;
