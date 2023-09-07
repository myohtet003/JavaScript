//select element

const result = document.getElementById("result");
const store = document.getElementById("store");
const clear = document.getElementById("clear");
const width = document.getElementById("width");
const breadth = document.getElementById("breadth");
const claculate = document.getElementById("calculate");
const records = document.getElementById("records");



claculate.onclick = function () {
    const area = width.valueAsNumber * breadth.valueAsNumber;

    result.innerText = `w:${width.value}ft * b:${breadth.value}ft = ${area}sqft`;
    console.log(result.innerText)
    //remove value
// width.value = breadth.value = null;
    width.valueAsNumber = breadth.valueAsNumber = 0
};

clear.onclick = () => (result.innerText = null);

//<li></li>
store.onclick = () => {
    records.innerHTML += `<li>${result.innerText}</li>`;
    result.innerText = null;
};


