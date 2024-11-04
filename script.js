// შექმენით html და js ფაილები , html ში უნდა იყოს h1 თეგში ინფორმაციის დამატება ,
// ასევე უნდა იყოს ერთი ღილაკი სადაც დაჭერის შემთხვევაში ამოაგდებს prompt_ს რომელშიც შეიყვანთ ინფორმაციას ,
// თუ არ შეიყვან უნდა ამომიგდოს ალერტი , ინფორმაციის შეყვანის შემდეგ უნდა გამომიტანოს ul ლისთში li აითემებად
// ჩემი დამატებული ინფორმაცია , თითოეულ li აითემს უნდა ქონდეს საკუთარი წაშლის ღილაკი და დაჭერის შემთვევაში
// უნდა იშლებოდეს ის ინფორმაცია რომელსაც დავაჭერ.

let button = document.getElementById("mainbtn")

let ultag = document.getElementById("ultag")


button.addEventListener("click", () => {

    let info = prompt("შეიყვანეთ ინფორმაცია");
    

    if(info == false){
        alert("error");
    }else{
        let container = document.createElement("div");
        let litag = document.createElement("li");
        litag.innerText = info;
        ultag.appendChild(container);
        container.appendChild(litag);
        if(litag){
            let clearbut = document.createElement("button");
            clearbut.innerText = "clear";
            container.appendChild(clearbut);
            clearbut.addEventListener("click" ,  () => {
            container.remove(litag);
        })
    }
}})

// let button = document.getElementById("mainbtn")

// let ultag = document.getElementById("ultag")

// button.addEventListener("click", () => {
//     let info = prompt("შეიყვანეთ ინფორმაცია")
//         if(info == false){
//             alert("error")
//         }else{
//             let container = document.createElement("div");
//         let litag = document.createElement("li");
//         litag.innerText = info;
//         ultag.appendChild(container);
//         container.appendChild(litag);
//         if(litag){
//             let clearbut = document.createElement("button")
//         clearbut.innerText = "clear"
//         container.appendChild(clearbut);
//         clearbut.addEventListener("click" ,  () => {
//         container.remove(litag)
//         })
//         }
//         }
//         // if(litag){
//         //     let clearbut = document.createElement("button")
//         // clearbut.innerText = "clear"
//         // container.appendChild(clearbut);
//         // clearbut.addEventListener("click" ,  () => {
//         // ultag.remove(litag)
//         // })
//         // }
//     }
// )

