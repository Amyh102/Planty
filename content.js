//alert('Would you like to use Planty?')
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    //find every instance of egg, case sensitive
    const re = new RegExp('eggs', 'gi')
    const matches = document.documentElement.innerHTML.match(re)
    sendResponse({count: matches.length})

    
})