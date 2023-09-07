
const textInput = document.querySelector("#textInput");
const lists = document.querySelector("#lists");
const createButton = document.querySelector("#createButton");
const total = document.querySelector("#total");
const doneTotal = document.querySelector("#doneTotal");

const data = [
    "sar pe pe lar",
    "morning",
    "good night",
    "read book",
    "learn JavaScript",
];

const creatLi = (text) => {
    const dynamicId = "flexCheck" +  Math.random();
    const li = document.createElement("li");
    // li.addEventListener("dblclick", edit);

    li.className = "list-group-list d-flex justify-content-between align-items-center p-1";
    li.innerHTML = `
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id=" ${dynamicId}" onchange="done(event)">
        <label class="form-check-label" for="${dynamicId}" >
        ${text}
        </label>
    </div>
    <div class=" btn-group">
    <button class="btn btn-sm btn-outline-dark edit-btn" >
        <i class=" bi bi-pencil pe-none"></i>
    </button>
    <button class="btn btn-sm btn-outline-dark del-btn" >
        <i class=" bi bi-trash3 pe-none"></i>
    </button>
    </div>
    `;
    return li;
}

const counter = () => {
    const totalCount = lists.children.length;
    const doneTotalCount = [...lists.children].filter(
        (el) => el.querySelector(".form-check-input").checked ===true
    ).length;
    total.innerText = totalCount;
    doneTotal.innerText = doneTotalCount;
};

// lists.append(creatLi("apple"))

const addList = () => {
    if(textInput.value.trim()){
        lists.append(creatLi(textInput.value));
        textInput.value = null;
        counter ();
    }else{
        alert("Input text is empty...")
    }
};

const del = (event) => {
if(confirm("Are you sure?")){
    // event.target.closest("li").remove();
    event.target.closest(".list-group-list").remove();
    // event.target.parentElement.remove();
}
counter();
};

const done = (event) => {
    event.target.nextElementSibling.classList.toggle("text-decoration-line-through");
    counter();
};

const edit = (event) => {
    // console.log(event)
    const old = event.target.closest(".list-group-list").querySelector(".form-check-label");
    const newText = prompt("Input new text", old.innerText);
   if(newText && newText.trim()) {
    old.innerText = newText;
   }
    // console.log( event.target.querySelector(".form-check-label") )
};

 data.forEach((d) => lists.append(creatLi(d)));

//  [...lists.children].forEach((li) => {
//     li.querySelector(".edit-btn").addEventListener("click", edit);
//     li.querySelector(".del-btn").addEventListener("click", del);

//  })

lists,addEventListener("click",(event) => {
    // console.log(event.target)
    if(event.target.classList.contains("del-btn")){
        // if(confirm("Are you sure?")){
        //     // event.target.closest("li").remove();
        //     event.target.closest(".list-group-list").remove();
        //     // event.target.parentElement.remove();
        // }
        // counter(); 
        del(event);
    }else if (event.target.classList.contains("edit-btn")) {
        // const old = event.target.closest(".list-group-list").querySelector(".form-check-label");
        // const newText = prompt("Input new text", old.innerText);
        // if(newText && newText.trim()) {
        // old.innerText = newText;
        // }
        edit(event);
    }
})

// createButton.addEventListener("click", addList);
createButton.addEventListener("click", addList);

textInput.addEventListener("keyup", (event) => {
    if(event.keyCode === 13) {
        addList();
    }
});