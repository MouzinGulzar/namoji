const printBtn = document.querySelector(".printBtn");
const resetBtn = document.querySelector(".resetBtn");
const copyBtn = document.querySelector(".copyBtn");
let text = document.querySelector(".text");
let char = document.querySelector(".characters");

copyBtn.addEventListener('click', function() {

        let range = document.createRange();
        range.selectNode(document.querySelector(".res"));
        window.getSelection().removeAllRanges(); // clear current selection
        window.getSelection().addRange(range); // to select text
        document.execCommand("copy");
        window.getSelection().removeAllRanges();// to deselect
    
    document.querySelector('.modal').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.modal').style.display = 'none';
    }, 2000);
});

resetBtn.addEventListener("click", function() {
    document.querySelector(".result")?.remove();
    text.value = "";
    char.value = "";
});

printBtn.addEventListener("click", function() {
    
    let textField = text.value;
    let charField = char.value;
    let textArr = textField.split("");
    let charArr = charField.split("");
    let charType = true;
    let check = charType;

    for(let i = 0; i < charArr.length; i++) {
        check = Boolean ((charField[i] >= ':' && charField[i] <= '@') || (charField[i] >= '[' && charField[i] <= '`') || (charField[i] >= '{' && charField[i] <= '~') || (charField[i] >= '!' && charField[i] <= '9') || (charField[i] >= 'A' && charField[i] <= '[') || (charField[i] >= 'a' && charField[i] <= '{'));

        charType &&= check;
    }
    

    console.log(textField, textArr, textArr.length, charField, charArr,  charArr.length);

    document.querySelector(".result")?.remove();
    document.querySelector(".main").insertAdjacentHTML("afterend", 
    `
    <div class="res result">
    </div>
    `);
    let temp = 0;

    for(i = 0; i < textArr.length; i++){

        if(charArr.length > 1){
            if(!charType) {
                charArr.splice(2, charArr.length - 1);
                charField = charArr[0] + charArr[1];
            }

            if(charType) {
                if(textArr.length > charArr.length) {
                    let diff = textArr.length - charArr.length;
                    let charArrLength = charArr.length
                    
                    for(j = 0; j < diff; j++) {
                        for(k = 0; k < charArrLength; k++) {
                            charArr.push(charArr[k]);
                            charField = charArr[i];
                        }
                    }
                } else {
                    charField = charArr[i];
                }
            }
        }

        if(textArr[i] == " ") {
            document.querySelector(".result").insertAdjacentHTML("beforeend", 
            `
            <br>
            <br>
            <br>
            <br>
            <br>
            `);
        }
        
        if(textArr[i] == 'a' || textArr[i] == 'A')
        {
            if(charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                 ${charField}${charField}${charField}${charField}
                ${charField}    ${charField}
                ${charField}    ${charField}
                ${charField}${charField}${charField}${charField}${charField}${charField}
                ${charField}    ${charField}
                ${charField}    ${charField}
                ${charField}    ${charField}
                </pre>
                `)
            } else if (!charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                 ${charField}${charField}${charField}${charField}
                ${charField}       ${charField}
                ${charField}       ${charField}
                ${charField}${charField}${charField}${charField}${charField}
                ${charField}       ${charField}
                ${charField}       ${charField}
                ${charField}       ${charField}
                </pre>
                `)
            }
        } else if(textArr[i] == 'b' || textArr[i] == 'B'){
            if(charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}${charField}${charField}${charField} 
                ${charField}   ${charField}
                ${charField}   ${charField}  
                ${charField}${charField}${charField}${charField}
                ${charField}   ${charField}
                ${charField}   ${charField}
                ${charField}${charField}${charField}${charField}
                </pre>
                `)
            } else if (!charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}${charField}${charField}${charField} 
                ${charField}      ${charField}
                ${charField}      ${charField}  
                ${charField}${charField}${charField}${charField}
                ${charField}      ${charField}
                ${charField}      ${charField}
                ${charField}${charField}${charField}${charField}
                </pre>
                `)
            }
        } else if(textArr[i] == 'c' || textArr[i] == 'C'){
            if(charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                 ${charField}${charField}${charField}${charField}
                ${charField}    ${charField}
                ${charField}
                ${charField}
                ${charField}
                ${charField}    ${charField}
                 ${charField}${charField}${charField}${charField}
                </pre>
                `)
            } else if (!charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                 ${charField}${charField}${charField}${charField}
                ${charField}       ${charField}
                ${charField}
                ${charField}
                ${charField}
                ${charField}       ${charField}
                 ${charField}${charField}${charField}${charField}
                </pre>
                `)
            }
        } else if(textArr[i] == 'd' || textArr[i] == 'D'){
            if(charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}${charField}${charField}${charField}
                ${charField}    ${charField}
                ${charField}     ${charField}
                ${charField}      ${charField}
                ${charField}      ${charField}
                ${charField}     ${charField}
                ${charField}    ${charField} 
                ${charField}${charField}${charField}${charField}
                </pre>
                `)
            } else if (!charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}${charField}${charField}
                ${charField}    ${charField}
                ${charField}     ${charField}
                ${charField}      ${charField}
                ${charField}      ${charField}
                ${charField}     ${charField}
                ${charField}    ${charField} 
                ${charField}${charField}${charField}
                </pre>
                `)
            }
        } else if(textArr[i] == 'e' || textArr[i] == 'E'){
            if(charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}${charField}${charField}${charField}${charField}
                ${charField}
                ${charField}
                ${charField}${charField}${charField}${charField}${charField}
                ${charField}
                ${charField}
                ${charField}${charField}${charField}${charField}${charField}
                </pre>
                `)
            } else if (!charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}${charField}${charField}${charField}${charField}
                ${charField}
                ${charField}
                ${charField}${charField}${charField}${charField}${charField}
                ${charField}
                ${charField}
                ${charField}${charField}${charField}${charField}${charField}
                </pre>
                `)
            }
        } else if(textArr[i] == 'f' || textArr[i] == 'F'){
            if(charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}${charField}${charField}${charField}${charField}
                ${charField}
                ${charField}
                ${charField}${charField}${charField}${charField}
                ${charField}
                ${charField}
                ${charField}
                </pre>
                `)
            } else if (!charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}${charField}${charField}${charField}${charField}
                ${charField}
                ${charField}
                ${charField}${charField}${charField}${charField}
                ${charField}
                ${charField}
                ${charField}
                </pre>
                `)
            }
        } else if(textArr[i] == 'g' || textArr[i] == 'G'){
            if(charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                 ${charField}${charField}${charField}${charField}
                ${charField}    ${charField}
                ${charField}
                ${charField} ${charField}${charField}${charField}
                ${charField}    ${charField}
                ${charField}    ${charField}
                 ${charField}${charField}${charField}${charField}
                </pre>
                `)
            } else if (!charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                 ${charField}${charField}${charField}${charField}
                ${charField}       ${charField}
                ${charField}
                ${charField}   ${charField}${charField}
                ${charField}       ${charField}
                ${charField}       ${charField}
                 ${charField}${charField}${charField}${charField}
                </pre>
                `)
            }
        } else if(textArr[i] == 'h' || textArr[i] == 'H'){
            if(charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}    ${charField}
                ${charField}    ${charField}
                ${charField}    ${charField}
                ${charField}${charField}${charField}${charField}${charField}${charField}
                ${charField}    ${charField}
                ${charField}    ${charField}
                ${charField}    ${charField}
                </pre>
                `)
            } else if (!charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}       ${charField}
                ${charField}       ${charField}
                ${charField}       ${charField}
                ${charField}${charField}${charField}${charField}${charField}
                ${charField}       ${charField}
                ${charField}       ${charField}
                ${charField}       ${charField}
                </pre>
                `)
            }
        } else if(textArr[i] == 'i' || textArr[i] == 'I'){
            if(charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}${charField}${charField}${charField}${charField}
                  ${charField}
                  ${charField}
                  ${charField}
                  ${charField}
                  ${charField}
                ${charField}${charField}${charField}${charField}${charField}
                </pre>
                `)
            } else if (!charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}${charField}${charField}${charField}${charField}
                     ${charField}
                     ${charField}
                     ${charField}
                     ${charField}
                     ${charField}
                ${charField}${charField}${charField}${charField}${charField}
                </pre>
                `)
            }
        } else if(textArr[i] == 'j' || textArr[i] == 'J'){
            if(charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}${charField}${charField}${charField}${charField}
                  ${charField}
                  ${charField}
                  ${charField}
               ${charField}  ${charField}
               ${charField}  ${charField}
               ${charField}${charField}
                </pre>
                `)
            } else if (!charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}${charField}${charField}${charField}${charField}
                     ${charField}
                     ${charField}
                     ${charField}
                ${charField}   ${charField}
                ${charField}   ${charField}
                  ${charField}${charField}
                </pre>
                `)
            }
        } else if(textArr[i] == 'k' || textArr[i] == 'K'){
            if(charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}   ${charField}
                ${charField}  ${charField}
                ${charField} ${charField}
                ${charField}${charField}
                ${charField} ${charField}
                ${charField}  ${charField}
                ${charField}   ${charField}
                </pre>
                `)
            } else if (!charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}      ${charField}
                ${charField}    ${charField}
                ${charField}  ${charField}
                ${charField}${charField}
                ${charField}  ${charField}
                ${charField}    ${charField}
                ${charField}      ${charField}
                </pre>
                `)
            }
        } else if(textArr[i] == 'l' || textArr[i] == 'L'){
            if(charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}
                ${charField}
                ${charField}
                ${charField}
                ${charField}
                ${charField}
                ${charField}${charField}${charField}${charField}${charField}${charField}
                </pre>
                `)
            } else if (!charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}
                ${charField}
                ${charField}
                ${charField}
                ${charField}
                ${charField}
                ${charField}${charField}${charField}${charField}
                </pre>
                `)
            }
        } else if(textArr[i] == 'm' || textArr[i] == 'M'){
            if(charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}        ${charField}
                ${charField} ${charField}    ${charField} ${charField}
                ${charField}  ${charField}  ${charField}  ${charField}
                ${charField}   ${charField}${charField}   ${charField}
                ${charField}        ${charField}
                ${charField}        ${charField}
                ${charField}        ${charField}
                </pre>
                `)
            } else if (!charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}${charField}    ${charField}${charField}
                ${charField} ${charField}  ${charField} ${charField}
                ${charField}  ${charField}${charField}  ${charField}
                ${charField}   ${charField}    ${charField}
                ${charField}         ${charField}
                ${charField}         ${charField}
                ${charField}         ${charField}
                </pre>
                `)
            }
        } else if(textArr[i] == 'n' || textArr[i] == 'N'){
            if(charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}${charField}      ${charField}
                ${charField} ${charField}     ${charField}
                ${charField}  ${charField}    ${charField}
                ${charField}   ${charField}   ${charField}
                ${charField}    ${charField}  ${charField}
                ${charField}     ${charField} ${charField}
                ${charField}      ${charField}${charField}
                </pre>
                `)
            } else if (!charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}${charField}      ${charField}
                ${charField} ${charField}     ${charField}
                ${charField}  ${charField}    ${charField}
                ${charField}   ${charField}   ${charField}
                ${charField}    ${charField}  ${charField}
                ${charField}     ${charField} ${charField}
                ${charField}      ${charField}${charField}
                </pre>
                </pre>
                `)
            }
        } else if(textArr[i] == 'o' || textArr[i] == 'O'){
            if(charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                  ${charField}${charField}${charField}
                ${charField}     ${charField}
               ${charField}       ${charField}
               ${charField}       ${charField}
               ${charField}       ${charField}
                ${charField}     ${charField}
                  ${charField}${charField}${charField}
                </pre>
                `)
            } else if (!charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                 ${charField}${charField}${charField}
                ${charField}     ${charField}
               ${charField}       ${charField}
               ${charField}       ${charField}
               ${charField}       ${charField}
                ${charField}     ${charField}
                 ${charField}${charField}${charField}
                </pre>
                </pre>
                `)
            }
        } else if(textArr[i] == 'p' || textArr[i] == 'P'){
            if(charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}${charField}${charField}${charField}
                ${charField}   ${charField}
                ${charField}   ${charField}
                ${charField}${charField}${charField}${charField}
                ${charField}
                ${charField}
                ${charField}
                </pre>
                `)
            } else if (!charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}${charField}${charField}${charField}
                ${charField}      ${charField}
                ${charField}      ${charField}
                ${charField}${charField}${charField}${charField}
                ${charField}
                ${charField}
                ${charField}
                </pre>
                </pre>
                `)
            }
        } else if(textArr[i] == 'q' || textArr[i] == 'Q'){
            if(charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                  ${charField}${charField}${charField}
                ${charField}     ${charField}
               ${charField}       ${charField}
               ${charField}       ${charField}
               ${charField}    ${charField}  ${charField}
                ${charField}     ${charField}
                  ${charField}${charField}${charField}   ${charField}
                </pre>
                `)
            } else if (!charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                 ${charField}${charField}${charField}
                ${charField}     ${charField}
               ${charField}       ${charField}
               ${charField}       ${charField}
               ${charField}    ${charField} ${charField}
                ${charField}      ${charField}
                  ${charField}${charField}${charField} ${charField}
                </pre>
                </pre>
                `)
            }
        } else if(textArr[i] == 'r' || textArr[i] == 'R'){
            if(charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}${charField}${charField}${charField}
                ${charField}   ${charField}
                ${charField}   ${charField}
                ${charField}${charField}${charField}${charField}
                ${charField} ${charField}
                ${charField}  ${charField}
                ${charField}   ${charField}
                </pre>
                `)
            } else if (!charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}${charField}${charField}${charField}
                ${charField}      ${charField}
                ${charField}      ${charField}
                ${charField}${charField}${charField}${charField}
                ${charField}  ${charField}
                ${charField}    ${charField}
                ${charField}      ${charField}
                </pre>
                </pre>
                `)
            }
        } else if(textArr[i] == 's' || textArr[i] == 'S'){
            if(charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                 ${charField}${charField}${charField}${charField}
                ${charField}    ${charField}
                ${charField}
                 ${charField}${charField}${charField}${charField}
                     ${charField}
                ${charField}    ${charField}
                 ${charField}${charField}${charField}${charField} 
                </pre>
                `)
            } else if (!charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                 ${charField}${charField}${charField}${charField}
                ${charField}       ${charField}
                ${charField}
                 ${charField}${charField}${charField}${charField}
                          ${charField}
                ${charField}       ${charField}
                 ${charField}${charField}${charField}${charField} 
                </pre>
                </pre>
                `)
            }
        } else if(textArr[i] == 't' || textArr[i] == 'T'){
            if(charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}${charField}${charField}${charField}${charField}
                  ${charField}
                  ${charField}
                  ${charField}
                  ${charField}
                  ${charField}
                  ${charField}
                </pre>
                `)
            } else if (!charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}${charField}${charField}${charField}${charField}
                     ${charField}
                     ${charField}
                     ${charField}
                     ${charField}
                     ${charField}
                     ${charField}
                </pre>
                </pre>
                `)
            }
        } else if(textArr[i] == 'u' || textArr[i] == 'U'){
            if(charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}      ${charField}
                ${charField}      ${charField}
                ${charField}      ${charField}
                ${charField}      ${charField}
                ${charField}      ${charField}
                 ${charField}${charField}${charField}${charField}${charField}${charField}
                </pre>
                `)
            } else if (!charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}       ${charField}
                ${charField}       ${charField}
                ${charField}       ${charField}
                ${charField}       ${charField}
                ${charField}       ${charField}
                 ${charField}${charField}${charField}${charField}
                </pre>
                </pre>
                `)
            }
        } else if(textArr[i] == 'v' || textArr[i] == 'V'){
            if(charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}     ${charField}
                ${charField}     ${charField}
                 ${charField}   ${charField}
                  ${charField} ${charField}
                   ${charField}
                </pre>
                `)
            } else if (!charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}      ${charField}
                ${charField}      ${charField}
                 ${charField}    ${charField}
                  ${charField}  ${charField}
                   ${charField}${charField}
                    ${charField}
                </pre>
                </pre>
                `)
            }
        } else if(textArr[i] == 'w' || textArr[i] == 'W'){
            if(charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}       ${charField}
                ${charField}       ${charField}
                ${charField}   ${charField}   ${charField}
                ${charField}   ${charField}   ${charField}
                ${charField}  ${charField} ${charField}  ${charField}
                ${charField}${charField}     ${charField}${charField}
                </pre>
                `)
            } else if (!charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}         ${charField}
                ${charField}         ${charField}   
                ${charField}   ${charField}    ${charField}  
                ${charField}   ${charField}    ${charField}  
                ${charField} ${charField} ${charField}  ${charField}
                ${charField}${charField}    ${charField}${charField}
                </pre>
                </pre>
                `)
            }
        } else if(textArr[i] == 'x' || textArr[i] == 'X'){
            if(charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}      ${charField}
                 ${charField}    ${charField}
                  ${charField}  ${charField}
                   ${charField}${charField}
                  ${charField}  ${charField}
                 ${charField}    ${charField}
                ${charField}      ${charField}
                </pre>
                `)
            } else if (!charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}      ${charField}
                 ${charField}    ${charField}
                  ${charField}  ${charField}
                    ${charField}
                  ${charField}  ${charField}
                 ${charField}    ${charField}
                ${charField}      ${charField}
                </pre>
                `)
            }
        } else if(textArr[i] == 'y' || textArr[i] == 'Y'){
            if(charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}       ${charField}
                 ${charField}     ${charField}
                  ${charField}   ${charField}
                    ${charField}
                    ${charField}
                    ${charField}
                    ${charField}
                </pre>
                `)
            } else if (!charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}       ${charField}
                 ${charField}     ${charField}
                  ${charField}   ${charField}
                     ${charField}
                     ${charField}
                     ${charField}
                     ${charField}
                </pre>
                `)
            }
        } else if(textArr[i] == 'z' || textArr[i] == 'Z'){
            if(charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}${charField}${charField}${charField}${charField}${charField}
                    ${charField}
                   ${charField}
                  ${charField}
                 ${charField}
                ${charField}${charField}${charField}${charField}${charField}${charField}
                </pre>
                `)
            } else if (!charType) {
                document.querySelector(".result").insertAdjacentHTML("beforeend", 
                `
                <pre>
                ${charField}${charField}${charField}${charField}${charField}
                         ${charField}
                       ${charField}
                     ${charField}
                   ${charField}
                 ${charField}
                ${charField}${charField}${charField}${charField}${charField}
                </pre>
                `)
            }
        } 
    }
});





