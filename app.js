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
        dropList[i].addAdjecentHTML("beforeend, optionTag");
    }

}