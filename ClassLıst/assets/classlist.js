function openModal() {
    const modal = document.querySelector(".window");
    modal.classList.remove("d-none")
}
function closeModal(){
    const modal = document.querySelector(".window");
    modal.classList.add("d-none");
}
// function createStudent(){
//     let nameInp = document.querySelector("input[name='ad']");
//     let surnameInp = document.querySelector("input[name='soyad']");
//     const tbody = document.querySelector("tbody");
//     // elavem inshAllah isleyer
//      tbody.innerHTML += `<tr><td>1</td><td>${nameInp.value}</td><td>${surnameInp.value}</td><td><p class="p-0" ind="">x</p></td></tr>`;
//     nameInp.value = '';
//     surnameInp.value = '';
//     closeModal();
// }
function createMaleStudent(){
    let nameInp = document.querySelector("input[name='ad']");
    let surnameInp = document.querySelector("input[name='soyad']");
    const tbody = document.querySelector("tbody");

    tbody.innerHTML += `<tr><td>1</td><td style="color: rgb(13, 132, 192)">${nameInp.value}</td><td style="color: rgb(13, 132, 192)">${surnameInp.value}</td><td><p class="p-0" ind="">x</p></td></tr>`;
    nameInp.value = '';
    surnameInp.value = '';
    closeModal();
}

function createFemaleStudent(){
    let nameInp = document.querySelector("input[name='ad']");
    let surnameInp = document.querySelector("input[name='soyad']");
    const tbody = document.querySelector("tbody");

    tbody.innerHTML += `<tr><td>1</td><td style="color: rgb(255, 0, 208)"">${nameInp.value}</td><td style="color:  rgb(255, 0, 208)">${surnameInp.value}</td><td><p class="p-0" ind="">x</p></td></tr>`;
    nameInp.value = '';
    surnameInp.value = '';
    closeModal();
}
