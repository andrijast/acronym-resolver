

function scrapeAllText() {
    const allVisibleText = [];

    function extractTextNodes(element) {
        const children = element.childNodes;

        for (const child of children) {
            if (child.nodeType === Node.TEXT_NODE) {
                // Exclude text nodes with only whitespaces
                if (/\S/.test(child.nodeValue)) {
                    allVisibleText.push(child.nodeValue.trim());
                }
            } else if (child.nodeType === Node.ELEMENT_NODE) {
                // Recursively traverse through child elements
                extractTextNodes(child);
            }
        }
    }

    // Get the root element (the entire HTML document in this case)
    const rootElement = document.documentElement;

    // Extract all visible text nodes from the root element
    extractTextNodes(rootElement);

    // Join and display the scraped text (for demonstration, we'll log it to the console)
    const allScrapedText = allVisibleText.join(' ');
    console.log(allScrapedText);
}


function doTheMagic() {


    // get all the text (target is all visible to find tool (Ctrl+F), any idea how?)
    const text = scrapeAllText();

    // extract all acronyms from the text
    

    // send prompt to superintelligence and receive info

    
    // format the stuff you got


    // add tooltips on frontend for fancy finish

}

