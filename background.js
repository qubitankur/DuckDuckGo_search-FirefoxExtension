browser.contextMenus.create({ 
    id: "tenma",
    tittle:"Search on DuckDuckGo",
    contexts: ["selection"]
});
browser.contextMenus.onClicked.addListener(contextMenusAction);

function contextMenusAction(info, tab){
    const url = "http://duckduckgo.com/?q="+info.selectionText;
    browser.tabs.create({url: url});
}