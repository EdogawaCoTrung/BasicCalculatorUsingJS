const display_calculation = document.querySelector(".displaychild1");
const display_result = document.querySelector(".displaychild2");
const buttons = document.querySelectorAll("button");
const specialChars = [".", "*", "/", "-", "+", "="];
let output = "";
let checkfocus = true;

const calculate = (BtnValue) => {
    if (BtnValue === "=" && output !== "") {
        checkfocus = false;
        output = eval(output);
        if (checkfocus == false)
        {
            display_calculation.value = "";
        }
        display_result.value = output;
    }
    else if (BtnValue === "CE" || checkfocus == false) {
        output = "";
        checkfocus = true;
        display_result.value = "";
  } else if (BtnValue === "Del") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(BtnValue)) return;
    output += BtnValue;
    }
    if (checkfocus)
    {
        display_calculation.value = output;
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) =>
    {
        calculate(e.target.dataset.value);
        }
    );
});
