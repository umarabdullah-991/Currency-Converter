const dropList = document.querySelectorAll(".drop-list select"),
getButton = document.querySelector("form button"),
fromCurrency = document.querySelector(".from select"),
toCurrency = document.querySelector(".to select");

for (let i=0; i< dropList.length; i++){
    for (currency_code in country_code){
        //select USD as from currency and PKR as a to currency
    let selected;
    if (i == 0){
        selected = currency_code == "USD" ? "selected" : "";
    } else if (i == 1){
        selected = currency_code = "PKR" ? "selected" : "";
    }
        //creating option tag with passing currency code as a text and value
        let optionTag = `
        <option value ="${currency_code}" ${selected}>${currency_code}</option>
        `;
        dropList[i].addAdjacentHTML("beforeend, optionTag");
    }
    dropList[i].addEventListener("change", e =>{
        //calling loadFlag with passing target element as an argument
        loadFlag(e.target);
    })
}
function loadFlag(element){
    for(code in country_code){
        // if currency code of country list is equal to the option value
        if(code == element.value){
            //selecting the img tag of default drop list
            let imgTag = element.parentElement.querySelector("img");
            //passing country code of a selected currency code in a image url
            imgTag.src = `https://flagsapi.com/${country_code[code]}/flat/64.png`;
        }
    }
}
