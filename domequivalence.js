
var htmlStrings = ['<div id="one">Some<span>node <em>contents</em> for</span>comparison</div>', '<div id="two">Some<span>node contents for</span>comparison</div>', '<div id="one">Some<span>node <strong>contents</strong> for</span>comparison</div>', '<div id="four">Some<span>node <em>contents</em> for</span>comparison</div>'];

var div1 = document.createElement('div');
div1.innerHTML = htmlStrings[0];
document.body.appendChild(div1);

var div2 = document.createElement('div');
div2.innerHTML = htmlStrings[1];
document.body.appendChild(div2);

var div3 = document.createElement('div');
div3.innerHTML = htmlStrings[2];
document.body.appendChild(div3);

var div4 = document.createElement('div');
div4.innerHTML = htmlStrings[3];
document.body.appendChild(div4);


function nodeEquivalence(node1, node2) {
    //better to assume is true, prove false, more scalable. better to return true/false than have a mutable variable.  
    //base case:
    if (node1.nodeType !== node2.nodeType || node1.tagName !== node2.tagName || node1.nodeValue !== node2.nodeValue) {
        return false;
    }
    //part of the same base case, separated for logic
    if (node1.childNodes.length !== node2.childNodes.length) {
        return false;
    }
    //if you've already done the above and there are no more children, be lazy and don't look anymore :)
    if (node1.childNodes.length === 0 && node2.childNodes.length === 0) {
        return true;
    }

    //now you are traversing the kids.
    
    for (var i = 0; i < node1.childNodes.length; i++) {
        if (!nodeEquivalence(node1.childNodes[i], node2.childNodes[i])) {
            return false;
        }
    }

    //if we haven't hit any of the other returns- bubble up to the parent. haven't been able to prove anything false/hit any base cases.
    return true;
}


console.log(nodeEquivalence(div1, div2));
console.log(nodeEquivalence(div1, div4));
