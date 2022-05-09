
function display(message, arr) {
    // Caution: This function needs a <p id="display"></p> in the HTML page.
    let element = document.getElementById('display');
    element.innerHTML = prettyHTML(message, arr);
}

function prettyHTML(message, arr) {
    // If there are no details given, then just return the message.
    if (!arr || arr.length === 0) return message;

    // Add the message to the list first.
    let list = [];
    list.push('<b>' + message + '</b>');

    let indent = '&nbsp;&nbsp;&nbsp;';

    for (let i = 0; i < arr.length; i++) {
        let obj = arr[i];

        // Add a small header with the index number.
        list.push(`${i}:`);

        for (let key in obj) {
            let value = obj[key];

            // Add a key = value line.
            if (typeof value === 'string') {
                list.push(`${indent}${key} = "${value}"`);
            }
            else {
                list.push(`${indent}${key} = ${value}`);
            }
        }
    }

    return list.join('<br>');
}