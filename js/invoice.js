//variable
const services =[
    {
        id : 1,
        title : "Domain Service",
        price : 15,
    },
    {
        id : 2,
        title : "Hosting Service",
        price : 29,
    },
    {
        id : 3,
        title : "Web Design Service",
        price : 39,
    },
    {
        id : 4,
        title : "maintenance Service",
        price : 40,
    },
 ];

 //selector
 const app = document.querySelector("#app");
 const invoiceForm = document.querySelector("#invoiceForm");
 const selectService = document.querySelector("#selectService");
 const quantity = document.querySelector("#quantity");
 const lists = document.querySelector("#lists");
 const subTotal = document.querySelector("#subTotal");
 const tax  = document.querySelector("#tax");
 const Total = document.querySelector("#Total");
 const listTable = document.querySelector("#listTable");
 const addServiceOpenBtn = document.querySelector("#addServiceOpenBtn");
//  const AddServiceModal = document.querySelector("#AddServiceModal");
 const AddServiceForm = document.querySelector("#AddServiceForm"); 
 const CloseServiceModalBtn =document.querySelector("#CloseServiceModalBtn");
 const menu = document.querySelectorAll(".menu");
 const sideBar = document.querySelector("#sideBar");
 const AddServiceModal = new bootstrap.Modal("#AddServiceModal");


 //function
 function createTr(service, quantity) {
    const tr = document.createElement("tr");
    tr.classList.add("list");
    tr.setAttribute("service-id", service.id);
    const total = service.price * quantity;
    tr.innerHTML = `
    <td class="d-flex justify-content-between">
        ${service.title} 
        <div class="dropdown ">
            <i class="bi bi-three-dots-vertical dropdown-icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">               
            </i>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item del-btn" href="#">Delete</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
    </td>
    <td class="text-end list-quantity">${quantity}</td>
    <td class="text-end">${service.price}</td>
    <td class="text-end list-total">${total}</td>
    `;
    return tr;
}

const calculateTax = (amount, percentage = 5) => {
    return amount * (percentage / 100);
};

const findTotal = () => {
    const listTotal = document.querySelectorAll(".list-total");
    let subTotalCalculated = [...listTotal].reduce(
        (pv,cv) => pv + parseFloat(cv.innerText),0);

    // listTotal.forEach((el) => (subTotal += parseFloat(el.innerText)));
    subTotal.innerText = subTotalCalculated;
    tax.innerText = calculateTax(subTotalCalculated);
    Total.innerText = subTotalCalculated + calculateTax(subTotalCalculated);
    // console.log(Total);
    // console.log(tax)
};

const showTable = () => {
    if (lists.children.length) {
      listTable.classList.remove("d-none");
    } else {
      listTable.classList.add("d-none");
    }
  };

 //process (tasks)
//service option loop
services.forEach(( {title,id}) => {
    selectService.append(new Option(title,id))
});


//data collect from form
invoiceForm.addEventListener("submit",event => {
    event.preventDefault();
    // console.log(
    //     selectService.value,
    //     selectService.options[selectService.selectedIndex].innerText,
    //     quantity.valueAsNumber,
    // );
    // console.log(
    //     selectService.value,
    //     quantity.value,
    //     services.find(service => service.id == selectService.value)
    // )

    const selectedService = services.find(service => service.id == selectService.value);
    
    const isExistedService = [...lists.children].find(
        (el) => el.getAttribute("service-id") == selectedService.id);

    if (isExistedService) {
        const existQuantity = isExistedService.querySelector(".list-quantity");
        existQuantity.innerText = 
        parseFloat(existQuantity.innerText) + quantity.valueAsNumber;
        isExistedService.querySelector(".list-total").innerText = 
        existQuantity.innerText * selectedService.price;
        } else {
            lists.append(createTr(selectedService, quantity.valueAsNumber));
        }

    findTotal();
    invoiceForm.reset();
    showTable();
});

app.addEventListener("click", event => {
    const currentElement = event.target;
    // console.log(currentElement)
    if (currentElement.classList.contains("del-btn")) {
        currentElement.closest("tr").remove();
        findTotal();
        showTable();
    };
});

addServiceOpenBtn.addEventListener("dblclick", () => {
    // AddServiceModal.classList.remove("d-none")
    AddServiceModal.show();
});

// CloseServiceModalBtn.addEventListener("click", () => {
//     AddServiceModal.classList.add("d-none")
// });

AddServiceForm.addEventListener("submit",(event) => {
    event.preventDefault();
     
    const formData = new FormData(event.target);

    const id =Date.now();
    //add data
    services.push({
        id,
        title : formData.get("serviceTitle"),
        price : formData.get("servicePrice"),
    });

    //add to dom
    selectService.append(new Option(formData.get("serviceTitle"),id));

    //close modal
    event.target.reset();
    // AddServiceModal.classList.add("d-none");
    AddServiceModal.hide();
});

menu.forEach((el) => {
      el.addEventListener("click", () => {
        sideBar.classList.toggle("active");
      });
});