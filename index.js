const getFirstSelector = function (selector){
    return document.querySelector(selector)
}

const nestedTarget = function (){
    return document.querySelector("#nested .target")
}

const increaseRankBy = function(n){
    const rankElements = document.querySelectorAll(".ranked-list li")
    for(let i = 0; i < rankElements.length; i++){
        rankElements[i].innerHTML = (parseInt(rankElements[i].innerHTML) + n).toString()
    }
}

const deepestChild = function (){
    const grandNode = document.querySelector("div#grand-node")
    let currentNodes = []
    currentNodes.push(grandNode)
    while(currentNodes.length > 1 || currentNodes[0].childElementCount > 0){
        for (const node of currentNodes) {
            for(let i = 0; i < node.children.length; i++){
                currentNodes.push(node.children[0])
            }
            currentNodes.shift()
        }

    }

    return currentNodes[0]
}