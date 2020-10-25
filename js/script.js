const writeLink = document.querySelector(".contacts__button");
const writePopup = document.querySelector(".popup__writeus");

if (writePopup) {
  const writeClose = writePopup.querySelector(".popup__close");
  const writeForm = writePopup.querySelector(".writeus__form");
  const writeName = writePopup.querySelector(".input__name");
  const writeEmail = writePopup.querySelector(".input__email");
  const writeLetter = writePopup.querySelector(".input__letter");

  let isStorageSupport = true;
  let storage = "";
  
  try {
    storageName = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  }
  
  try {
    storageEmail = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }
  
  writeLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    writePopup.classList.add("active");
  
    if (storageName) {
      writeName.value = storageName;
      if (storageEmail) {
        writeEmail.value = storageEmail;
        writeLetter.focus();
      } else {
        writeEmail.focus();
      }
    } else {
      writeName.focus();
    }
  });
  
  writeClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    writePopup.classList.remove("active");
    writePopup.classList.remove("error");
  });
  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (writePopup.classList.contains("active")) {
        evt.preventDefault();
        writePopup.classList.remove("active");
        writePopup.classList.remove("error");
      }
    }
  });
  
  writeForm.addEventListener("submit", function (evt) {
    if (!writeName.value || !writeEmail.value) {
      evt.preventDefault();
      writePopup.classList.remove("error");
      writePopup.offsetWidth = writePopup.offsetWidth;
      writePopup.classList.add("error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", writeName.value);
      }
      if (isStorageSupport) {
        localStorage.setItem("email", writeEmail.value);
      }
    }
  });
}


const mapLink = document.querySelector(".contacts__map");
const mapPopup = document.querySelector(".popup__map");

if (mapPopup) {
  const mapClose = mapPopup.querySelector(".popup__close"); 
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("active");
  });
  
  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("active");
  });
  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("active")) {
        evt.preventDefault();
        mapPopup.classList.remove("active");
      }
    }
  });
}


const buyLink = document.querySelectorAll(".button__buy");
const buyPopup = document.querySelector(".popup__success");
const buyClose = buyPopup.querySelector(".popup__close");
const buyCloseButton = buyPopup.querySelector(".button__close");

for (var i = 0; i < buyLink.length; i++) {
  buyLink[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      buyPopup.classList.add("active");
    });
  }

  buyClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.remove("active");
});


buyCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove("active");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (buyPopup.classList.contains("active")) {
            evt.preventDefault();
            buyPopup.classList.remove("active");
        }
    }
});
