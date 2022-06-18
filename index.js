//sidebar var
const menuItems = document.querySelectorAll(".menu-item");

// Massage var
const massageNotification = document.querySelector("#massages-notifications");
const massages = document.querySelector(".massages");
const massage = massages.querySelectorAll(".massage");
const massageSearch = document.querySelector("#massage-search");

// Theme
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
const colorPallate = document.querySelectorAll(".choose-color span");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

// side bar

//hilang active class pas di klik
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".notification-popup").style.display = "none";
    } else {
      document.querySelector(".notification-popup").style.display = "block";
      document.querySelector("#notifications .notification-count").style.display = "none";
    }
  });
});

// Massage

// searches chats
const searchMassage = () => {
  const val = massageSearch.value.toLowerCase();
  massage.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

// this search massage mas bro
massageSearch.addEventListener("keyup", searchMassage);

//pas di klik ngasi shadow
massageNotification.addEventListener("click", () => {
  massages.style.boxShadow = "0 0 1rem var(--color-primary)";
  massageNotification.querySelector(".notification-count").style.display = "none";
  setTimeout(() => {
    massages.style.boxShadow = "none";
  }, 1000);
});

// Theme costum

// buat open
const openThemeModal = () => {
  themeModal.style.display = "grid";
};

// close
const closeThemeModal = (close) => {
  if (close.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};

// buat close
themeModal.addEventListener("click", closeThemeModal);

theme.addEventListener("click", openThemeModal);

// font

//remove class active di font
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");

    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("----sticky-top-left", "-5rem");
      root.style.setProperty("----sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("----sticky-top-left", "-5rem");
      root.style.setProperty("----sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("----sticky-top-left", "-12rem");
      root.style.setProperty("----sticky-top-right", "-35rem");
    }
    // ubah font
    document.querySelector("html").style.fontSize = fontSize;
  });
});

// hilangkan active class change primary
const changeActiveColorClass = () => {
  colorPallate.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};

// Change primary
colorPallate.forEach((color) => {
  color.addEventListener("click", () => {
    let primary;
    changeActiveColorClass();
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    color.classList.add("active");

    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

// dakrmode
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// change bg
const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};

Bg1.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "35%";

  // add active
  Bg1.classList.add("active");
  //remove
  Bg2.classList.remove("active");
  Bg3.classList.remove("active");
  window.location.reload();
});

Bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "35%";

  // add active
  Bg2.classList.add("active");
  //remove
  Bg1.classList.remove("active");
  Bg3.classList.remove("active");
  changeBG();
});

Bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  // add active
  Bg2.classList.add("active");
  //remove
  Bg1.classList.remove("active");
  Bg2.classList.remove("active");
  changeBG();
});
