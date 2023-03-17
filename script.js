let nums = []
for (let i = 0; i < 30; i++){
  nums.push(Math.floor(Math.random() * 100))
}

function getNumber(a = 101, b = 0) {
    return Math.floor(Math.random() * (a - b) + b);
}

let table = document.createElement('table')
document.body.appendChild(table)

for (let i = 0; i < 5; i++){
    let tr = document.createElement('tr')
    for (let j = 0; j < 6; j++){
        let td = document.createElement('td')
        if (nums[i * 6 + j] >= 50){
            td.style.backgroundColor = '#FF6600'
        }
        td.innerHTML = nums[i * 6 + j]
        tr.appendChild(td)
    }

  table.appendChild(tr)
}

function addNum(){
    tbl = document.body.firstChild.nextElementSibling.nextElementSibling
    lastRow = tbl.lastElementChild.children.length
    console.log(tbl, lastRow)
    if (lastRow !== 6){
        td = tr.insertCell()
        td.appendChild(document.createTextNode(getNumber(100)))
    } else {
        tr = tbl.insertRow(-1)
        td = tr.insertCell()
        td.appendChild(document.createTextNode(getNumber(100)))
    }
    if (td.textContent >= 50) {
        td.style.background = '#FF6600'
    }
}

