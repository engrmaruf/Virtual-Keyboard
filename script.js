const keyboard = document.querySelector(".keyboard");
const textarea = keyboard.querySelector(".textarea");
const keys = keyboard.querySelector(".keys");
const capsLock = keyboard.querySelector(".caps-lock");
const shift = keyboard.querySelector(".shift");
const numberKeys = document.querySelectorAll('.number');
const hideKeyboard = document.querySelectorAll('.hideKeyboard');





// hide keyboard by default
keys.style.display = 'none';

// show keyboard when textarea is clicked
textarea.addEventListener('click', () => {
  keys.style.display = 'block';
  keys.classList.add('slide-up');
});
// hide keyboard
function hidekeys(){
  keys.style.display = 'none';

}




numberKeys.forEach((key) => {
  key.addEventListener('click', () => {
    textarea.value += key.innerText;
  });
});




function toggleCapsLock() {
  capsLock.classList.toggle("active");

  for (let key of keys.querySelectorAll(".letter")) {
    if (capsLock.classList.contains("active")) {
      key.textContent = key.textContent.toUpperCase();
    } else {
      key.textContent = key.textContent.toLowerCase();
    }
  }
}

function toggleShift() {
  shift.classList.toggle("active");

  for (let key of keys.querySelectorAll(".letter")) {
    if (shift.classList.contains("active")) {
      key.textContent = key.textContent.toUpperCase();
    } else {
      key.textContent = key.textContent.toLowerCase();
    }
  }
}

function handleBackspace() {
  textarea.value = textarea.value.substring(0, textarea.value.length - 1);
}

function handleClear() {
  textarea.value = "";
}

function handleKeyPress(event) {
  const key = event.target;

  if (key.classList.contains("letter")) {
    textarea.value += key.textContent;
  }

  if (key.classList.contains("space")) {
    textarea.value += " ";
  }

  if (key.classList.contains("enter")) {
    textarea.value += "\n";
  }

  if (key.classList.contains("tab")) {
    textarea.value += "\t";
  }
}

capsLock.addEventListener("click", toggleCapsLock);
shift.addEventListener("click", toggleShift);

for (let key of keys.querySelectorAll(".key")) {
  key.addEventListener("click", function (event) {
    const key = event.target;

    if (key.classList.contains("backspace")) {
      handleBackspace();
    } else if (key.classList.contains("clear")) {
      handleClear();
    } else {
      handleKeyPress(event);
    }
  });
}
