let step;

const stepOptions = {
  0: {
    left: [
      "Garaje",
      "Almacén",
      "Nave Alimentación",
      "Cocina Industrial",
      "Suelo vivienda",
      "Supermercado",
      "Terraza",
    ],
    right: [
      "Nave Industrial",
      "Taller Mecánico",
      "Parking",
      "Suelo Exterior",
      "Suelo Perrera",
      "Patio Colegio",
      "Trasteros",
    ],
    question1: "¿QUÉ SUELO QUIERE USTED",
    question2: "PINTAR?",
    slides: [
      {
        name: "Parking",
        url:
          "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-SUELO-PARKING-HS.jpg?v=1612267813",
      },
      {
        name: "Patio Colegio",
        url:
          "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-SUELO-PATIO-COLEGIO-HS.jpg?v=1612267812",
      },
      {
        name: "Taller Mecánico",
        url:
          "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-SUELOS-TALLER-MECANICO-HS.jpg?v=1612267812",
      },
      {
        name: "Terraza",
        url:
          "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-TERRAZA.jpg?v=1612267812",
      },
      {
        name: "Supermercado",
        url:
          "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-SUELO-SUPERMERCADO-HS.jpg?v=1612267812",
      },
      {
        name: "Trasteros",
        url:
          "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-TRASTERO.jpg?v=1612267812",
      },
      {
        name: "Tiendas",
        url:
          "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-TIENDAS.jpg?v=1612267812",
      },
      {
        name: "Almacén",
        url:
          "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-SUELOS-ALMACEN-HS.jpg?v=1612267812",
      },
      {
        name: "Naves",
        url:
          "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-SUELOS_NAVES_HS.jpg?v=1612267812",
      },
      {
        name: "Exterior",
        url:
          "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-SUELO-EXTERIOR-HS.jpg?v=1612267812",
      },
      {
        name: "Suelos Alimentarios",
        url:
          "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-SUELOS-ALIMENTARIOS-HS.jpg?v=1612267812",
      },
      {
        name: "Viviendas",
        url:
          "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-SUELO-VIVIENDA-HS.jpg?v=1612267812",
      },
      {
        name: "Cocina Industrial",
        url:
          "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-SUELO-COCINA-INDUSTRIAL-HS.jpg?v=1612267812",
      },
      {
        name: "Garajes",
        url:
          "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-SUELOS-GARAJES-HS.jpg?v=1612267812",
      },
    ],
    variableName: "floorType",
  },
  1: {
    middle: [
      "Hormigón Liso",
      "Hormigón Muy Rugoso",
      "Cemento Sobre Hormigón",
      "Ya Está Pintado",
      "Terrazo",
      "Baldosa",
      "Otros",
    ],
    question1: "¿DE QUÉ MATERIAL ES EL",
    question2: "SUELO DE SU GARAJE?",
    slides: [
      {
        name: "Hormigón Liso",
        url:
          "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/MATERIAL-SUELO-HORMIGON-LISO-GS1.jpg?v=1612289800",
      },
      {
        name: "Hormigón Muy Rugoso",
        url:
          "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/MATERIAL-HORMIGON-RUGOSO-SLIDE.jpg?v=1612289800",
      },
      {
        name: "Cemento Sobre Hormigón",
        url:
          "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/MATERIAL-SUELO-CEMENTO-SOBRE-HORMIGON-GS1.jpg?v=1612289800",
      },
      {
        name: "Ya Está Pintado",
        url:
          "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/MATERIAL-SUELO-YA-PINTADO-GS1.jpg?v=1612289800",
      },
      {
        name: "Terrazo",
        url:
          "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/MATERIAL-SUELO-TERRAZO-GS1.jpg?v=1612289799",
      },
      {
        name: "Baldosa",
        url:
          "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/MATERIAL-SUELO-BALDOSAS-GS1.jpg?v=1612289799",
      },
      {
        name: "Otros",
        url:
          "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/MATERIAL-SUELO-OTROS-SUELOS-GS1.jpg?v=1612289800",
      },
    ],
    variableName: "floorMaterial",
  },

  'Hormigón Liso': {
    2: {
      middle:["No", "Pocos", "Muchos"],
      question1: "¿SU SUELO TIENE",
      question2: "DESPERFECTOS?",
      slides: [
        {
          name: "Muchos Desperfectos",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/DESPERFECTOS-SUELO-CON-MUCHOS-DESPERFECTOS.jpg?v=1612354485",
        },
        {
          name: "Pocos Desperfectos",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/DESPERFECTOS-SUELO-CON-POCOS-DESPERFECTOS.jpg?v=1612354485",
        },
        {
          name: "Sin Desperfectos",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/DESPERFECTOS-SUELO-SIN-DESPERFECTOS.jpg?v=1612354485",
        },
      ],
      variableName: "Desperfectos",
    },
    3: {
      middle: "area picker",
      question1: "¿CUÁNTOS M² QUIERE",
      question2: "PINTAR DE SUELO?",
      slides: [
        {
          name: "Parking",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-SUELO-PARKING-HS.jpg?v=1612267813",
        },
        {
          name: "Patio Colegio",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-SUELO-PATIO-COLEGIO-HS.jpg?v=1612267812",
        },
        {
          name: "Taller Mecánico",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-SUELOS-TALLER-MECANICO-HS.jpg?v=1612267812",
        },
        {
          name: "Terraza",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-TERRAZA.jpg?v=1612267812",
        },
        {
          name: "Supermercado",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-SUELO-SUPERMERCADO-HS.jpg?v=1612267812",
        },
        {
          name: "Trasteros",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-TRASTERO.jpg?v=1612267812",
        },
        {
          name: "Tiendas",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-TIENDAS.jpg?v=1612267812",
        },
        {
          name: "Almacén",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-SUELOS-ALMACEN-HS.jpg?v=1612267812",
        },
        {
          name: "Naves",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-SUELOS_NAVES_HS.jpg?v=1612267812",
        },
        {
          name: "Exterior",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-SUELO-EXTERIOR-HS.jpg?v=1612267812",
        },
        {
          name: "Suelos Alimentarios",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-SUELOS-ALIMENTARIOS-HS.jpg?v=1612267812",
        },
        {
          name: "Viviendas",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-SUELO-VIVIENDA-HS.jpg?v=1612267812",
        },
        {
          name: "Cocina Industrial",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-SUELO-COCINA-INDUSTRIAL-HS.jpg?v=1612267812",
        },
        {
          name: "Garajes",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HOME-SUELOS-GARAJES-HS.jpg?v=1612267812",
        },
      ],
      variableName: "Area",
    },
    4: {
      middle: ["color picker"],
      question1: "¿DE QUE COLOR QUIERE",
      question2: "PINTAR EL SUELO?",
      slides: [
        {
          name: "Gris Oscuro",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/COLOR-GRIS-OSCURO-SLIDE.jpg?v=1612354971",
        },
        {
          name: "Gris Medio",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/COLOR-GRIS-MEDIO-SLIDE.jpg?v=1612354971",
        },
        {
          name: "Blanco",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/COLOR-BLANCO-SLIDE.jpg?v=1612354971",
        },
        {
          name: "Azul Acero",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/COLOR-AZUL-ACERO-SLIDE.jpg?v=1612354971",
        },
        {
          name: "Negro",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/COLOR-NEGRO-SLIDE.jpg?v=1612354971",
        },
        {
          name: "Gris Antártica",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/COLOR-GRIS-ANTRACITA-SLIDE.jpg?v=1612354971",
        },
        {
          name: "Rojo",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/COLOR-ROJO-CARTA-SLIDE.jpg?v=1612354971",
        },
        {
          name: "Gris Claro",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/COLOR-GRIS-CLARO-SLIDE.jpg?v=1612354971",
        },
        {
          name: "Verde",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/COLOR-VERDE-CARTA-SLIDE.jpg?v=1612354971",
        },
        {
          name: "Crema",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/COLOR-CREMA-SLIDE.jpg?v=1612354971",
        },
        {
          name: "Ocre",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/COLOR-OCRE-SLIDE.jpg?v=1612354971",
        },
      ],
      variableName: "Color",
    },
    5: {
      middle:["herramientas picker"],
      question1: "¿NECESITA",
      question2: "HERRAMIENTAS?",
      slides: [
        {
          name: "Báscula Pequeña",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HERRAMIENTAS-BASCULA-PEQUENA-SLIDE.jpg?v=1612355587",
        },
        {
          name: "Brochas",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HERRAMIENTAS-BROCHAS-SLIDE.jpg?v=1612355587",
        },
        {
          name: "Rodillos",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/HERRAMIENTAS-RODILLOS-SLIDE.jpg?v=1612355587",
        },
      ],
      variableName: "Herramientas",
    },
    5: {
      middle:["Brillo", "Mate"],
      question1: "¿LO PREFIERE BRILLO",
      question2: "O MATE?",
      slides: [
        {
          name: "Brillo",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/BRILLO-EPOXI-SUELO-BRILLO.jpg?v=1612355742",
        },
        {
          name: "Mate",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/BRILLO-EPOXI-SUELO-MATE.jpg?v=1612355741",
        },
      ],
      variableName: "Brillo",
    },
    6: {
      middle:["Prespuesto picker"],
      question1: "ELIJA SU",
      question2: "PRESUPUESTO",
      slides: [
        {
          name: "2 Manos e Imprimación",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/PRESUPUESTO-DOS-MANOS-E-IMPRIMACION.jpg?v=1612356095",
        },
        {
          name: "2 Manos",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/PRESUPUESTO-DOS-MANOS.jpg?v=1612356095",
        },
        {
          name: "1 Capa Transparente",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/PRESUPUESTO-TRANSPARENTE.jpg?v=1612356095",
        },
      ],
      variableName: "Presupuesto",
    },
  },

};


const SLIDE_TIME = 500;
let floorType = localStorage.getItem("floorType");
let floorMaterial = localStorage.getItem("floorMaterial");
let color = localStorage.getItem("color");
let area = localStorage.getItem("area");

if (!floorType) {
  step = 0;
} else if (floorType) {
  step = 0;
} else {
  step = 0;
}
console.log("started at step:", step);

window.addEventListener("load", changeStep, false);

function reloadElement(el) {
  //var el = document.getElementById("interactive");
  elClone = el.cloneNode(true);
  el.parentNode.replaceChild(elClone, el);
}

function changeStep() {
  let elements = document.getElementsByClassName("option");

  if (step == 0) {
    onWndLoad();
  } else if (step == 1) {
  }
  for (let i = 0, len = elements.length; i < len; i++) {
    let myElement = elements[i];
    elements[i].addEventListener(
      "click",
      () => buttonClickedAt(myElement),
      false
    );
  }
}

function slideToTheLeft(element) {
  let start = Date.now(); // remember start time

  let timer = setInterval(function () {
    // how much time passed from the start?
    let timePassed = Date.now() - start;

    if (timePassed >= SLIDE_TIME) {
      clearInterval(timer); // finish the animation
      element.style.left = 60 + "vw";
      return;
    }

    // draw the animation at the moment timePassed
    draw(timePassed);
  }, 20);

  function draw(timePassed) {
    element.style.left = (-timePassed / SLIDE_TIME) * 60 + "vw";
    //element.style.left = '75vw';
  }
}

function slideFromTheRight(element) {
  let start = Date.now(); // remember start time

  let timer = setInterval(function () {
    // how much time passed from the start?
    let timePassed = Date.now() - start;

    if (timePassed >= 600) {
      clearInterval(timer); // finish the animation
      element.style.left = 0 + "vw";
      return;
    }

    // draw the animation at the moment timePassed
    draw(timePassed);
  }, 20);

  function draw(timePassed) {
    if (timePassed / SLIDE_TIME < 1) {
      element.style.left = 60 - (timePassed / SLIDE_TIME) * 60 + "vw";
    }
    //element.style.left = '75vw';
  }
}

function slideToTheRight(element) {
  let start = Date.now(); // remember start time

  let timer = setInterval(function () {
    // how much time passed from the start?
    let timePassed = Date.now() - start;

    if (timePassed >= SLIDE_TIME) {
      clearInterval(timer); // finish the animation
      element.style.left = -60 + "vw";
      return;
    }

    // draw the animation at the moment timePassed
    draw(timePassed);
  }, 20);

  function draw(timePassed) {
    element.style.left = (timePassed / SLIDE_TIME) * 60 + "vw";
    //element.style.left = '75vw';
  }
}

function slideFromTheLeft(element) {
  let start = Date.now(); // remember start time

  let timer = setInterval(function () {
    // how much time passed from the start?
    let timePassed = Date.now() - start;

    if (timePassed >= 600) {
      clearInterval(timer); // finish the animation
      element.style.left = 0 + "vw";
      return;
    }

    // draw the animation at the moment timePassed
    draw(timePassed);
  }, 20);

  function draw(timePassed) {
    if (timePassed / SLIDE_TIME < 1) {
      element.style.left = -60 + (timePassed / SLIDE_TIME) * 60 + "vw";
    }
    //element.style.left = '75vw';
  }
}

function nextStep() {
  step++;

  //slideToTheLeft(document.getElementById('buttonarea'))
  slideToTheLeft(document.getElementById("question1"));
  slideToTheLeft(document.getElementById("question2"));
  slideToTheLeft(document.getElementById("buttonarea"));
  setTimeout(() => {
    reloadElement(document.getElementById("question1"));
    reloadElement(document.getElementById("question2"));
    reloadElement(document.getElementById("buttonarea"));
    reloadElement(document.getElementById("slider"));
    sliderGenerator();
    onWndLoad();
    buttonAreaInnerHTMLGenerator();
    slideFromTheRight(document.getElementById("question1"));
    slideFromTheRight(document.getElementById("question2"));
    slideFromTheRight(document.getElementById("buttonarea"));
    setTimeout(() => {
      changeStep();
    }, SLIDE_TIME);
  }, SLIDE_TIME);
}

function prevStep() {
  if (!step) {
    window.location.href = "/";
  } else {
    step--;
    //slideToTheLeft(document.getElementById('buttonarea'))
    slideToTheRight(document.getElementById("question1"));
    slideToTheRight(document.getElementById("question2"));
    slideToTheRight(document.getElementById("buttonarea"));
    setTimeout(() => {
      reloadElement(document.getElementById("question1"));
      reloadElement(document.getElementById("question2"));
      reloadElement(document.getElementById("buttonarea"));
      reloadElement(document.getElementById("slider"));
      sliderGenerator();
      onWndLoad();
      buttonAreaInnerHTMLGenerator();
      slideFromTheLeft(document.getElementById("question1"));
      slideFromTheLeft(document.getElementById("question2"));
      slideFromTheLeft(document.getElementById("buttonarea"));
      setTimeout(() => {
        changeStep();
      }, SLIDE_TIME);
    }, SLIDE_TIME);
  }
}

function buttonClickedAt(myElement) {
  let option = myElement.innerHTML;
  console.log(stepOptions, option);
  if (step > 1) {
    localStorage.setItem(stepOptions[floorMaterial][step].variableName, option);
  } else if (step == 1) {
    localStorage.setItem("floorMaterial", option);
  } else {
    localStorage.setItem("floorType", option);
  }
  nextStep();
}

function onWndLoad() {
  var slider = document.querySelector(".slider");
  var sliders = slider.children;

  var initX = null;
  var transX = 0;
  var rotZ = 0;
  var transY = 0;

  var curSlide = null;

  var Z_DIS = 50;
  var Y_DIS = 10;
  var TRANS_DUR = 0.4;

  var images = document.querySelectorAll("img");
  for (var i = 0; i < images.length; i++) {
    images[i].onmousemove = function (e) {
      e.preventDefault();
    };
    images[i].ondragstart = function (e) {
      return false;
    };
  }

  function init() {
    var z = 0,
      y = 0;

    for (var i = sliders.length - 1; i >= 0; i--) {
      sliders[i].style.transform =
        "translateZ(" + z + "px) translateY(" + y + "px)";

      z -= Z_DIS;
      y += Y_DIS;
    }

    attachEvents(sliders[sliders.length - 1]);
    startRevolving(); // ERASE THIS TO STOP AUTOSCROLL
  }

  function startRevolving() {
    //asdasdasdasdasdasd
    setTimeout(function () {
      document.removeEventListener("mousemove", slideMouseMove, false);
      document.removeEventListener("touchmove", slideMouseMove, false);

      prevSlide = curSlide;
      attachEvents(sliders[sliders.length - 2]);
      slideMouseUp();
      setTimeout(function () {
        slider.insertBefore(prevSlide, slider.firstChild);

        prevSlide.style.transition = "none";
        prevSlide.style.opacity = "1";
        slideMouseUp();
      }, 201);
      startRevolving();
    }, 7000);
  }
  function attachEvents(elem) {
    curSlide = elem;

    curSlide.addEventListener("mousedown", slideMouseDown, false);
    curSlide.addEventListener("touchstart", slideMouseDown, false);
  }
  init();
  function slideMouseDown(e) {
    if (e.touches) {
      initX = e.touches[0].clientX;
    } else {
      initX = e.pageX;
    }

    document.addEventListener("mousemove", slideMouseMove, false);
    document.addEventListener("touchmove", slideMouseMove, false);

    document.addEventListener("mouseup", slideMouseUp, false);
    document.addEventListener("touchend", slideMouseUp, false);
  }
  var prevSlide = null;

  function slideMouseMove(e) {
    var mouseX;

    if (e.touches) {
      mouseX = e.touches[0].clientX;
    } else {
      mouseX = e.pageX;
    }

    transX += mouseX - initX;
    rotZ = transX / 20;

    transY = -Math.abs(transX / 15);

    curSlide.style.transition = "none";
    curSlide.style.webkitTransform =
      "translateX(" +
      transX +
      "px)" +
      " rotateZ(" +
      rotZ +
      "deg)" +
      " translateY(" +
      transY +
      "px)";
    curSlide.style.transform =
      "translateX(" +
      transX +
      "px)" +
      " rotateZ(" +
      rotZ +
      "deg)" +
      " translateY(" +
      transY +
      "px)";
    var j = 1;
    //remains elements
    for (var i = sliders.length - 2; i >= 0; i--) {
      sliders[i].style.webkitTransform =
        "translateX(" +
        transX / (2 * j) +
        "px)" +
        " rotateZ(" +
        rotZ / (2 * j) +
        "deg)" +
        " translateY(" +
        Y_DIS * j +
        "px)" +
        " translateZ(" +
        -Z_DIS * j +
        "px)";
      sliders[i].style.transform =
        "translateX(" +
        transX / (2 * j) +
        "px)" +
        " rotateZ(" +
        rotZ / (2 * j) +
        "deg)" +
        " translateY(" +
        Y_DIS * j +
        "px)" +
        " translateZ(" +
        -Z_DIS * j +
        "px)";
      sliders[i].style.transition = "none";
      j++;
    }

    initX = mouseX;
    //e.preventDefault(); //ELIMINADO POR QUITAR ERRORES
    if (Math.abs(transX) >= curSlide.offsetWidth - 30) {
      document.removeEventListener("mousemove", slideMouseMove, false);
      document.removeEventListener("touchmove", slideMouseMove, false);
      curSlide.style.transition = "ease 0.2s";
      curSlide.style.opacity = 0;
      prevSlide = curSlide;
      attachEvents(sliders[sliders.length - 2]);
      slideMouseUp();
      setTimeout(function () {
        slider.insertBefore(prevSlide, slider.firstChild);

        prevSlide.style.transition = "none";
        prevSlide.style.opacity = "1";
        slideMouseUp();
      }, 201);

      return;
    }
  }
  function slideMouseUp() {
    transX = 0;
    rotZ = 0;
    transY = 0;

    curSlide.style.transition =
      "cubic-bezier(0,1.95,.49,.73) " + TRANS_DUR + "s";

    curSlide.style.webkitTransform =
      "translateX(" +
      transX +
      "px)" +
      "rotateZ(" +
      rotZ +
      "deg)" +
      " translateY(" +
      transY +
      "px)";
    curSlide.style.transform =
      "translateX(" +
      transX +
      "px)" +
      "rotateZ(" +
      rotZ +
      "deg)" +
      " translateY(" +
      transY +
      "px)";
    //remains elements
    var j = 1;
    for (var i = sliders.length - 2; i >= 0; i--) {
      sliders[i].style.transition =
        "cubic-bezier(0,1.95,.49,.73) " + TRANS_DUR / (j + 0.9) + "s";
      sliders[i].style.webkitTransform =
        "translateX(" +
        transX +
        "px)" +
        "rotateZ(" +
        rotZ +
        "deg)" +
        " translateY(" +
        Y_DIS * j +
        "px)" +
        " translateZ(" +
        -Z_DIS * j +
        "px)";
      sliders[i].style.transform =
        "translateX(" +
        transX +
        "px)" +
        "rotateZ(" +
        rotZ +
        "deg)" +
        " translateY(" +
        Y_DIS * j +
        "px)" +
        " translateZ(" +
        -Z_DIS * j +
        "px)";

      j++;
    }

    document.removeEventListener("mousemove", slideMouseMove, false);
    document.removeEventListener("touchmove", slideMouseMove, false);
  }
}

function buttonAreaInnerHTMLGenerator() {
  console.log("changing texts");
  floorType = localStorage.getItem("floorType");
  floorMaterial = localStorage.getItem('floorMaterial')

  let leftDiv, rightDiv, middleDiv;
  if (!floorType) {
    console.log("forced to step 0")
    step = 0;
  } else if (!floorMaterial) {
    console.log("forced to step 1", floorMaterial)
    step = 1;
  }

  if (step < 2) {
    if (stepOptions[step].middle) {
      console.log("this runs")
      middleDiv =
        '<div class="middleside side" >' +
        stepOptions[step].middle
          .map((option) => `<a><div class="option">${option}</div></a>`)
          .join("") +
        "</div>";
      document.getElementById("buttonarea").innerHTML = middleDiv;
    } else {
      leftDiv =
        '<div class="leftside side" >' +
        stepOptions[step].left
          .map((option) => `<a><div class="option">${option}</div></a>`)
          .join("") +
        "</div>";
      rightDiv =
        '<div class="rightside side" >' +
        stepOptions[step].right
          .map((option) => `<a><div class="option">${option}</div></a>`)
          .join("") +
        "</div>";
      document.getElementById("buttonarea").innerHTML = leftDiv + rightDiv;
    }
    document.getElementById('question1').innerHTML = stepOptions[step].question1
    document.getElementById('question2').innerHTML = stepOptions[step].question2
  } else {
    if(stepOptions[floorMaterial][step].middle=="area picker"){
      loadAreaPicker()
    }
    else if (stepOptions[floorMaterial][step].middle) {
      middleDiv =
        '<div class="middleside side" >' +
        stepOptions[floorMaterial][step].middle
          .map((option) => `<a><div class="option">${option}</div></a>`)
          .join("") +
        "</div>";
      document.getElementById("buttonarea").innerHTML = middleDiv;
    } else {
      leftDiv =
        '<div class="leftside side" >' +
        stepOptions[floorMaterial][step].left
          .map((option) => `<a><div class="option">${option}</div></a>`)
          .join("") +
        "</div>";
      rightDiv =
        '<div class="rightside side" >' +
        stepOptions[floorMaterial][step].right
          .map((option) => `<a><div class="option">${option}</div></a>`)
          .join("") +
        "</div>";
      document.getElementById("buttonarea").innerHTML = leftDiv + rightDiv;
    }
    document.getElementById('question1').innerHTML = stepOptions[floorMaterial][step].question1
    document.getElementById('question2').innerHTML = stepOptions[floorMaterial][step].question2
  }

}

function sliderGenerator() {
  let slideArray;
  const sliderDiv = document.getElementById("slider");

  if (!floorType) {
    slideArray = stepOptions[0].slides;
  } else if (!floorMaterial) {
    slideArray = stepOptions[1].slides;
  } else if (step < 2) {
    slideArray = stepOptions[step].slides;
  } else {
    slideArray = stepOptions[floorMaterial][step].slides;
  }
  console.log("this is slideArray", slideArray);

  sliderDiv.innerHTML = slideArray
    .map(
      (slide) => `
  <div class="slide">
    <img src="${slide.url}"/>
    <p>${slide.name}</p>
  </div>`
    )
    .join("");
}

const goBack = document.getElementById("back");

goBack.addEventListener("click", prevStep, false);

function loadAreaPicker(){

  document.getElementById('buttonarea').innerHTML = `
  <div class="areapicker">
    <div class="areapickerheader">
      SELECCIONE LOS M² Y PINCHE EN CONTINUAR
    </div>
    <div>
      <span class="input-number-decrement" id="decrease">–</span>
      <input id="areainput" class="input-number" type="number" value="100" min="0">
      <span class="input-number-increment" id="increase">+</span>
    </div>
    <a><div id="areapickercontinuar">
        CONTINUAR
    </div></a>
  </div>`


  const decreaseButton = document.getElementById("decrease")
  const increaseButton = document.getElementById("increase")
  const areaInput = document.getElementById("areainput")
  const areaPickerContinuar = document.getElementById("areapickercontinuar")
  const storedValue = localStorage.getItem('Area')

  if(storedValue>0){areaInput.value = storedValue}
  decreaseButton.addEventListener('click', ()=>{areaInput.value = Number(areaInput.value) - 10}, 'false')
  increaseButton.addEventListener('click', ()=>{areaInput.value = Number(areaInput.value) + 10}, 'false')

  areaPickerContinuar.addEventListener('click', areaPickerGoNext, 'false')

  function areaPickerGoNext(){
    localStorage.setItem('Area', areaInput.value)
    nextStep()
  }
}
