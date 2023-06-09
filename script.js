function calculate() {
    var input1 = parseFloat(document.getElementById("input1").value);
    var input2 = parseFloat(document.getElementById("input2").value);
    var operator = document.getElementById("operator").value;
    var result;

    switch (operator) {
        case "+":
            result = input1 + input2;
            break;
        case "-":
            result = input1 - input2;
            break;
        case "*":
            result = input1 * input2;
            break;
        case "/":
            result = input1 / input2;
            break;
        default:
            result = "Invalid operator";
    }

    document.getElementById("result").textContent = result;
}

function clearInputs() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("operator").value = "";
    document.getElementById("result").textContent = "";
}
