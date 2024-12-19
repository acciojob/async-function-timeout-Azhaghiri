//your JS code here. If required.
 document.addEventListener("DOMContentLoaded", () =>{
              const textInput = document.getElementById("text");
              const delayInput = document.getElementById("delay");
              const submitButton = document.getElementById("btn");
              const outputDiv = document.getElementById("output");

              const lodeContent = async(text, delay) =>{
                return new Promise((resolve) =>{
                    setTimeout(() =>{
                        resolve(text);
                    },delay);
                });
              };
                  
              submitButton.addEventListener("click", async (event) =>{
                event.preventDefault();

                const text = textInput.value.trim();
                const delay = parseInt(delayInput.value,10);

                if(!text || isNaN(delay) || delay < 0){
                    outputDiv.textContent = "Please enter valid text and delay (non-negative number).";
                    return;
                }else{
                    outputDiv.textContent = "Plz wait....";
                }
                const result = await lodeContent(text, delay);
                outputDiv.textContent = result
              })
            })