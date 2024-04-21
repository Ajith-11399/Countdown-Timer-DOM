const container = document.createElement("div");
container.className = 'container';

const row1 =  document.createElement("div");
row1.className = 'row align-items-center justify-content-center m-3 mt-5 p-3';

const col =  document.createElement("div");
col.className = 'col-lg-12 col-md-12 col-sm-12';

const row2 =  document.createElement("div");
row2.className = 'row';

const input =  document.createElement("input");
input.id = 'display';
input.className = 'pt-2 pb-2 mt-4';
input.readOnly = true;

const button =  document.createElement("button");
button.id = 'click';
button.className = 'btn btn-primary mt-5 p-2';
button.innerText = 'CLICK!';

container.appendChild(row1);
row1.appendChild(col);
col.appendChild(row2);
row2.appendChild(input);
row1.appendChild(button);

document.body.appendChild(container);



//Script for countdown timer//

const display = document.getElementById("display");
const buton = document.getElementById("click");

buton.addEventListener("click", () => {
    setTimeout(() => {
        display.value = "10";
        setTimeout(() => {
            display.value = "9";
            setTimeout(() => {
                display.value = "8";
                setTimeout(() => {
                    display.value = "7";
                    setTimeout(() => {
                        display.value = "6";
                        setTimeout(() => {
                            display.value = "5";
                            setTimeout(() => {
                                display.value = "4";
                                setTimeout(() => {
                                    display.value = "3";
                                    setTimeout(() => {
                                        display.value = "2";
                                        setTimeout(() => {
                                            display.value = "1";
                                            setTimeout(() => {
                                                display.value = "Happy Independence Day 🎉🎆";
                                                setTimeout(() => {
                                                    alert("Now you can close this window")
                                                }, 4000);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
})