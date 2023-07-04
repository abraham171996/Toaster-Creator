const addBtn = document.querySelector("#add-button");
const clearBtn = document.querySelector("#clear-button");
const toasts = document.querySelector("#toasts");
const cancelable = document.querySelector("#cancelable");
const success = document.querySelector("#success");
const error = document.querySelector("#error");
const duration = document.querySelector("#duration");
const messageContent = document.querySelector("#message-content")

let resultArr = [];
success.checked = false;
error.checked = false;
cancelable.checked = false;

addBtn.addEventListener("click", () => {
  if (success.checked) {
    const successToast = document.createElement("p");
    toasts.append(successToast);
    if (messageContent.value.trim() !== "") {
        successToast.textContent = `${messageContent.value.trim()}!`;
      }
      else if(messageContent.value.trim() === ""){
        successToast.textContent =`${success.value}!`
      }
    // successToast.textContent = `${messageContent.value}!`;
    successToast.style.color = "#ffffff";
    successToast.style.textAlign = "center";
    successToast.style.width = "200px";
    successToast.style.height = "50px";
    successToast.style.display = "flex";
    successToast.style.padding = "10px";
    successToast.style.justifyContent = "space-between";
    successToast.style.alignItems = "center";
    successToast.style.borderRadius = "15px";
    successToast.classList.add("success-toast");
    successToast.classList.add("toast");
    resultArr.push(successToast);
    setTimeout(() => {
      successToast.remove();
    }, duration.value);

    if (cancelable.checked) {
      const cancelBtn = document.createElement("button");
      successToast.append(cancelBtn);
      cancelBtn.textContent = "X";
      cancelBtn.classList.add("cancel-button");
      cancelBtn.addEventListener("click", () => {
        const index = resultArr.indexOf(successToast);
        if (index !== -1) {
          resultArr.splice(index, 1);
        }
        successToast.remove();
        cancelBtn.remove();
      });
    }
  }

  if (error.checked) {
    const errorToast = document.createElement("p");
    toasts.append(errorToast);
    if (messageContent.value.trim() !== "") {
        errorToast.textContent = `${messageContent.value.trim()}!`;
      }
      else if(messageContent.value.trim() === ""){
        errorToast.textContent = `${error.value}!`;
      }
    
    errorToast.style.color = "#ffffff";
    errorToast.style.textAlign = "center";
    errorToast.style.width = "200px";
    errorToast.style.height = "50px";
    errorToast.style.display = "flex";
    errorToast.style.padding = "10px";
    errorToast.style.justifyContent = "space-between";
    errorToast.style.alignItems = "center";
    errorToast.style.borderRadius = "15px";
    errorToast.classList.add("error-toast");
    errorToast.classList.add("toast");
    resultArr.push(errorToast);
    setTimeout(() => {
      errorToast.remove();
    }, duration.value);

    if (cancelable.checked) {
      const cancelBtn = document.createElement("button");
      errorToast.append(cancelBtn);
      cancelBtn.textContent = "X";
      cancelBtn.classList.add("cancel-button");
      cancelBtn.addEventListener("click", () => {
        const index = resultArr.indexOf(errorToast);
        if (index !== -1) {
          resultArr.splice(index, 1);
        }
        errorToast.remove();
        cancelBtn.remove();
      });
    }
  }
});

clearBtn.addEventListener("click", () => {
  for (const toast of resultArr) {
    toast.remove();
  }
  resultArr = [];
});


console.log(resultArr);
