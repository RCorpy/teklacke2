let step;

const DESCUENTO = 50;
const DISOLVENTE_PRICE = 19;
const PER_KG_PRICE_TRANPORT = 0.33;
const VOLVER_BUTTON = {
  id: "cerrarpopup",
  text: "Volver",
  function: closePopUp,
};

const RESINAS_TABLE_NAMES = {
  "Epoxi": "Enepoxi HS100",
  "Acrilica": "Enekril",
  "Politop": "Politop",
  "Imprimacion":  "Enepoxi HS100 (Imprimación)"
}

let cartproductsArray = []

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
      "callus Otros",
    ],
    question1: "¿DE QUÉ MATERIAL ES EL",
    question2: "SUELO DE SU ",
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

  "Hormigón Liso": {
    2: {
      middle: [
        { text: "No", function: () => console.log("dfghjk") },
        "Pocos",
        "callus Muchos",
      ],
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
          name: "Gris Antracita",
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
      middle: ["Brillo", "Mate"],
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
      middle: "presupuesto picker",
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
    7: {
      middle: "resina picker",
      question1: "ELIJA SU",
      question2: "PRESUPUESTO",
      slides: [
        {
          name: "Epoxi",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/RESINA-EPOXI-100_-SOLIDOS.jpg?v=1612448310",
        },
        {
          name: "Acrílica",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/RESINA-ACRILICA-SUELOS.jpg?v=1612448310",
        },
      ],
      variableName: "Resina",
    },
    8: {
      middle: "herramientas picker",
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
    9: {
      middle: "fin",
      lastStep: 8,
    },
  },
  "Hormigón Muy Rugoso": {
    2: {
      middle: [
        "Quiero que siga rugoso",
        {
          text: "Quiero que se quede liso",
          function: () =>
            showCustomPopUp(
              "titulo",
              `Hay varias formas de dejar totalmente liso un suelo, incluso sin usar nivelantes.
      Contacte con nosotros por whatsapp y envienos una foto de su suelo para darle la mejor opción.`,
              [
                {
                  id: "contactarbutton",
                  text: "Contactar",
                  function: () => getContactarText(),
                },
                VOLVER_BUTTON,
              ]
            ),
        },
      ],
      question1: "¿CÓMO QUIERE EL TERMINADO",
      question2: "DE SU SUELO?",
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
      variableName: "Rugoso",
    },
    3: {
      middle: [
        { text: "No", function: () => console.log("dfghjk") },
        "Pocos",
        "callus Muchos",
      ],
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
    4: {
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
    5: {
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
          name: "Gris Antracita",
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
    6: {
      middle: ["Brillo", "Mate"],
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
    7: {
      middle: "presupuesto picker",
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
    8: {
      middle: "resina picker",
      question1: "ELIJA SU",
      question2: "PRESUPUESTO",
      slides: [
        {
          name: "Epoxi",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/RESINA-EPOXI-100_-SOLIDOS.jpg?v=1612448310",
        },
        {
          name: "Acrílica",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/RESINA-ACRILICA-SUELOS.jpg?v=1612448310",
        },
      ],
      variableName: "Resina",
    },
    9: {
      middle: "herramientas picker",
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
    10: {
      middle: "fin",
      lastStep: 9,
    },
  },
  "Cemento Sobre Hormigón": {
    2: {
      middle: [
        { text: "No", function: () => console.log("dfghjk") },
        "Pocos",
        "callus Muchos",
      ],
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
          name: "Gris Antracita",
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
      middle: ["Brillo", "Mate"],
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
      middle: "presupuesto picker",
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
    7: {
      middle: "resina picker",
      question1: "ELIJA SU",
      question2: "PRESUPUESTO",
      slides: [
        {
          name: "Epoxi",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/RESINA-EPOXI-100_-SOLIDOS.jpg?v=1612448310",
        },
        {
          name: "Acrílica",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/RESINA-ACRILICA-SUELOS.jpg?v=1612448310",
        },
      ],
      variableName: "Resina",
    },
    8: {
      middle: "herramientas picker",
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
    9: {
      middle: "fin",
      lastStep: 8,
    },
  },
  "Ya Está Pintado": {
    2: {
      middle: ["Quitar la capa de pintura antigua", "Pintar encima"],
      question1: "¿QUIERE PINTAR ENCIMA O",
      question2: "QUITAR LA PINTURA ANTERIOR?",
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
      variableName: "isPintaEncima",
    },
    3: {
      middle: [
        { text: "No", function: () => console.log("dfghjk") },
        "Pocos",
        "callus Muchos",
      ],
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
    4: {
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
    5: {
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
          name: "Gris Antracita",
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
    6: {
      middle: ["Brillo", "Mate"],
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
    7: {
      middle: "ya pintado presupuesto picker",
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
    8: {
      middle: "resina picker",
      question1: "ELIJA SU",
      question2: "PRESUPUESTO",
      slides: [
        {
          name: "Epoxi",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/RESINA-EPOXI-100_-SOLIDOS.jpg?v=1612448310",
        },
        {
          name: "Acrílica",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/RESINA-ACRILICA-SUELOS.jpg?v=1612448310",
        },
      ],
      variableName: "Resina",
    },
    9: {
      middle: "herramientas picker",
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
    10: {
      middle: "fin",
      lastStep: 9,
    },
  },
  Terrazo: {
    2: {
      middle: ["No", "Si"],
      question1: "¿QUIERE QUE SE VEAN",
      question2: "LAS JUNTAS?",
      slides: [
        {
          name: "Con Juntas",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/terrazo-pintado-con-juntas.jpg?v=1614610976",
        },
        {
          name: "Sin Juntas",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/terrazo-pintado-sin-juntas.jpg?v=1614610976",
        },
      ],
      variableName: "Juntas",
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
          name: "Gris Antracita",
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
      middle: ["Brillo", "Mate"],
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
      middle: "presupuesto picker",
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
    7: {
      middle: "resina picker",
      question1: "ELIJA SU",
      question2: "PRESUPUESTO",
      slides: [
        {
          name: "Epoxi",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/RESINA-EPOXI-100_-SOLIDOS.jpg?v=1612448310",
        },
        {
          name: "Acrílica",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/RESINA-ACRILICA-SUELOS.jpg?v=1612448310",
        },
      ],
      variableName: "Resina",
    },
    8: {
      middle: "herramientas picker",
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
    9: {
      middle: "fin",
      lastStep: 8,
    },
  },
  Baldosa: {
    2: {
      middle: [
        "callus Si, se ha roto alguna al pisar",
        "No, están bien agarradas",
      ],
      question1: "¿LAS BALDOSAS ESTAN HUECAS",
      question2: "POR DEBAJO?",
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
      variableName: "Huecas",
    },
    3: {
      middle: ["No", {id:"Si",text: "Si", infobutton: true, function: (myElement) => buttonClickedAt(myElement), infofunction: ()=>showCustomPopUp("INFORMATION", "THIS IS AN INFORMATIVE MESSAGE", [VOLVER_BUTTON], "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/baldosas-pintadas-sin-juntas.jpg?v=1614610988")}],
      question1: "¿QUIERE QUE SE VEAN",
      question2: "LAS JUNTAS?",
      slides: [
        {
          name: "Con Juntas",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/baldosas-pintado-con-juntas.jpg?v=1614610988",
        },
        {
          name: "Sin Juntas",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/baldosas-pintadas-sin-juntas.jpg?v=1614610988",
        },
      ],
      variableName: "Juntas",
    },
    4: {
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
    5: {
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
          name: "Gris Antracita",
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
    6: {
      middle: ["Brillo", "Mate"],
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
    7: {
      middle: "presupuesto picker",
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
    8: {
      middle: "resina picker",
      question1: "ELIJA SU",
      question2: "PRESUPUESTO",
      slides: [
        {
          name: "Epoxi",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/RESINA-EPOXI-100_-SOLIDOS.jpg?v=1612448310",
        },
        {
          name: "Acrílica",
          url:
            "https://cdn.shopify.com/s/files/1/0533/7255/1350/files/RESINA-ACRILICA-SUELOS.jpg?v=1612448310",
        },
      ],
      variableName: "Resina",
    },
    9: {
      middle: "herramientas picker",
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
    10: {
      middle: "fin",
      lastStep: 9,
    },
  },
};

const priceObject = {
  epoxi: {
    imprimacion: {
      Incoloro: {
        "6Kg": 94.05,
        "12Kg": 152.20,
        "18Kg": 218.10,
        "24Kg": 290.80,
        "30Kg": 356.16
      },
      Gris: {
        "6Kg": 96.46559999999998,
        "12Kg": 156.24,
        "18Kg": 224.154,
        "24Kg": 298.872,
        "30Kg": 366.24
      },
      Azul: {
        "6Kg": 101.304,
        "12Kg": 164.304,
        "18Kg": 236.25,
        "24Kg": 315,
        "30Kg": 386.40000000000003
      },
      "Rojo granate": {
        "6Kg": 101.304,
        "12Kg": 164.304,
        "18Kg": 236.25,
        "24Kg": 315,
        "30Kg": 386.40000000000003
      },
      Verde: {
        "6Kg": 117.93599999999999,
        "12Kg": 192.024,
        "18Kg": 277.83,
        "24Kg": 370.44,
        "30Kg": 455.70000000000005
      },
      Amarillo: {
        "6Kg": 217.72800000000004,
        "12Kg": 358.344,
        "18Kg": 527.31,
        "24Kg": 703.0799999999999,
        "30Kg": 871.5
      },
      Crema: {
        "6Kg": 96.46559999999998,
        "12Kg": 156.24,
        "18Kg": 224.154,
        "24Kg": 298.872,
        "30Kg": 366.24
      },
      Blanco: {
        "6Kg": 91.872,
        "12Kg": 148.8,
        "18Kg": 213.48,
        "24Kg": 284.64,
        "30Kg": 348.8,
      },
      Negro: {
        "6Kg": 96.46559999999998,
        "12Kg": 156.24,
        "18Kg": 224.154,
        "24Kg": 298.872,
        "30Kg": 366.24
      },
      "Rojo Ferrari": {
        "6Kg": 117.93599999999999,
        "12Kg": 192.024,
        "18Kg": 277.83,
        "24Kg": 370.44,
        "30Kg": 455.70000000000005
      },
    },
    Brillo: {
      Gris: {
        "6Kg": 107.42399999999999,
        "12Kg": 174.72,
        "18Kg": 252.35999999999999,
        "24Kg": 336.47999999999996,
        "30Kg": 413.6
      },
      Azul: {
        "6Kg": 110.87999999999998,
        "12Kg": 180.48,
        "18Kg": 261,
        "24Kg": 348,
        "30Kg": 428
      },
      "Rojo granate": {
        "6Kg": 110.87999999999998,
        "12Kg": 180.48,
        "18Kg": 261,
        "24Kg": 348,
        "30Kg": 428
      },
      Verde: {
        "6Kg": 136.224,
        "12Kg": 222.72,
        "18Kg": 324.36,
        "24Kg": 432.47999999999996,
        "30Kg": 533.6
      },
      Amarillo: {
        "6Kg": 207.35999999999999,
        "12Kg": 341.28,
        "18Kg": 502.2,
        "24Kg": 669.6,
        "30Kg": 830
      },
      Crema: {
        "6Kg": 107.42399999999999,
        "12Kg": 174.72,
        "18Kg": 252.35999999999999,
        "24Kg": 336.47999999999996,
        "30Kg": 413.6
      },
      Blanco: {
        "6Kg": 107.42399999999999,
        "12Kg": 174.72,
        "18Kg": 252.35999999999999,
        "24Kg": 336.47999999999996,
        "30Kg": 413.6
      },
      Negro: {
        "6Kg": 107.42399999999999,
        "12Kg": 174.72,
        "18Kg": 252.35999999999999,
        "24Kg": 336.47999999999996,
        "30Kg": 413.6
      },
      "Rojo Ferrari": {
        "6Kg": 136.79999999999998,
        "12Kg": 223.68,
        "18Kg": 325.8,
        "24Kg": 434.4,
        "30Kg": 536
      }
    },
    Mate: {
      Gris: {
        "6Kg": 121.82399999999998,
        "12Kg": 198.72,
        "18Kg": 288.36,
        "24Kg": 384.47999999999996,
        "30Kg": 473.6
      },
      Azul: {
        "6Kg": 125.27999999999999,
        "12Kg": 204.48,
        "18Kg": 297,
        "24Kg": 396,
        "30Kg": 488
      },
      "Rojo granate": {
        "6Kg": 125.27999999999999,
        "12Kg": 204.48,
        "18Kg": 297,
        "24Kg": 396,
        "30Kg": 488
      },
      Verde: {
        "6Kg": 150.62399999999997,
        "12Kg": 246.71999999999997,
        "18Kg": 360.36,
        "24Kg": 480.47999999999996,
        "30Kg": 593.6
      },
      Amarillo: {
        "6Kg": 221.75999999999996,
        "12Kg": 365.28,
        "18Kg": 538.1999999999999,
        "24Kg": 717.6,
        "30Kg": 890
      },
      Crema: {
        "6Kg": 121.82399999999998,
        "12Kg": 198.72,
        "18Kg": 288.36,
        "24Kg": 384.47999999999996,
        "30Kg": 473.6
      },
      Blanco: {
        "6Kg": 121.82399999999998,
        "12Kg": 198.72,
        "18Kg": 288.36,
        "24Kg": 384.47999999999996,
        "30Kg": 473.6
      },
      Negro: {
        "6Kg": 121.82399999999998,
        "12Kg": 198.72,
        "18Kg": 288.36,
        "24Kg": 384.47999999999996,
        "30Kg": 473.6
      },
      "Rojo Ferrari": {
        "6Kg": 150.62399999999997,
        "12Kg": 246.71999999999997,
        "18Kg": 360.36,
        "24Kg": 480.47999999999996,
        "30Kg": 593.6
      }
    },
  },

  acrilica: {

    Primer: {
      "5Kg": 37.529999999999994,
      "10Kg": 58.797,
      "15Kg": 83.4,
      "20Kg": 106.335
    },
    Gris: {
      "5Kg": 52.541999999999994,
      "10Kg": 83.81700000000001,
      "15Kg": 120.92999999999999,
      "20Kg": 156.375
    },
    Azul: {
      "5Kg": 57.546,
      "10Kg": 92.15700000000001,
      "15Kg": 133.44,
      "20Kg": 173.055
    },
    "Rojo granate": {
      "5Kg": 78.81299999999999,
      "10Kg": 127.602,
      "15Kg": 186.6075,
      "20Kg": 243.945
    },
    Verde: {
      "5Kg": 103.833,
      "10Kg": 169.302,
      "15Kg": 249.1575,
      "20Kg": 327.34499999999997
    },
    Amarillo: {
      "5Kg": 185.148,
      "10Kg": 304.827,
      "15Kg": 452.445,
      "20Kg": 598.395
    },
    Crema: {
      "5Kg": 57.546,
      "10Kg": 92.15700000000001,
      "15Kg": 133.44,
      "20Kg": 173.055
    },
    Blanco: {
      "5Kg": 57.546,
      "10Kg": 92.15700000000001,
      "15Kg": 133.44,
      "20Kg": 173.055
    },
    Negro: {
      "5Kg": 57.546,
      "10Kg": 92.15700000000001,
      "15Kg": 133.44,
      "20Kg": 173.055
    },
    "Rojo Ferrari": {
      "5Kg": 110.088,
      "10Kg": 179.727,
      "15Kg": 264.795,
      "20Kg": 348.195
    }
  },

  politop: {
    "Incoloro": {
      "5Kg": 87.12,
      "10Kg": 141.24,
      "15Kg": 206.8,
      "20Kg": 270.6
    },
    Gris: {
      "5Kg": 98.28,
      "10Kg": 160.02,
      "15Kg": 235.20000000000002,
      "20Kg": 308.7
    },
    Azul: {
      "5Kg": 123.48,
      "10Kg": 202.02,
      "15Kg": 298.2,
      "20Kg": 392.7
    },
    "Rojo granate": {
      "5Kg": 123.48,
      "10Kg": 202.02,
      "15Kg": 298.2,
      "20Kg": 392.7
    },
    Verde: {
      "5Kg": 161.28,
      "10Kg": 265.02000000000004,
      "15Kg": 392.7,
      "20Kg": 518.7
    },
    Amarillo: {
      "5Kg": 211.68,
      "10Kg": 349.02,
      "15Kg": 518.7,
      "20Kg": 686.7
    },
    Crema: {
      "5Kg": 98.28,
      "10Kg": 160.02,
      "15Kg": 235.20000000000002,
      "20Kg": 308.7
    },
    Blanco: {
      "5Kg": 98.28,
      "10Kg": 160.02,
      "15Kg": 235.20000000000002,
      "20Kg": 308.7
    },
    Negro: {
      "5Kg": 98.28,
      "10Kg": 160.02,
      "15Kg": 235.20000000000002,
      "20Kg": 308.7
    },
    "Rojo Ferrari": {
      "5Kg": 123.48,
      "10Kg": 202.02,
      "15Kg": 298.2,
      "20Kg": 392.7
    },
    Antracita: {
      "5Kg": 123.48,
      "10Kg": 202.02,
      "15Kg": 298.2,
      "20Kg": 392.7
    }
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
  const floorMaterial = localStorage.getItem("floorMaterial");
  if (step == 0) {
    onWndLoad();
  } else if (step == 1) {
  }
  for (let i = 0, len = elements.length; i < len; i++) {
    let myElement = elements[i];

    //console.log(elements[i].parentElement.classList)

    if (myElement.parentElement.classList.contains("callus")) {
      myElement.parentElement.addEventListener(
        "click",
        () => showContactPopUp(),
        false
      );
    } else if (myElement.parentElement.classList.contains("forbidden")) {

    } else if (myElement.parentElement.classList.contains("custom") || myElement.parentElement.parentElement.classList.contains("custom")) {
      if(myElement.parentElement.firstChild.classList.contains("infobutton")){
        myElement.parentElement.firstChild.addEventListener('click', (e)=>{
          e.stopPropagation()
          thisStepOptions[i].infofunction()
        }, false)
      }

      //CUSTOMIZATOR
      const thisStepOptions = stepOptions[floorMaterial][step].middle;
      myElement.parentElement.addEventListener(
        "click",
        () => {
          thisStepOptions[i].function(myElement)
        },
        false
      );
    } else {
      myElement.parentElement.addEventListener(
        "click",
        () => buttonClickedAt(myElement),
        false
      );
    }
  }
}

function slideToTheLeft(element) {
  let start = Date.now(); // remember start time
  if (element) {
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
}

function slideFromTheRight(element) {
  let start = Date.now(); // remember start time
  if (element) {
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
}

function slideToTheRight(element) {
  let start = Date.now(); // remember start time
  if (element) {
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
}

function slideFromTheLeft(element) {
  let start = Date.now(); // remember start time
  if (element) {
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
}

function nextStep() {
  step++;

  slideToTheLeft(document.getElementById("question1"));
  slideToTheLeft(document.getElementById("question2"));
  slideToTheLeft(document.getElementById("buttonarea"));
  setTimeout(() => {
    reloadElement(document.getElementById("question1"));
    reloadElement(document.getElementById("question2"));
    reloadElement(document.getElementById("buttonarea"));
    reloadElement(document.getElementById("slider"));
    buttonAreaInnerHTMLGenerator();
    sliderGenerator();
    onWndLoad();
    slideFromTheRight(document.getElementById("question1"));
    slideFromTheRight(document.getElementById("question2"));
    slideFromTheRight(document.getElementById("buttonarea"));
    setTimeout(() => {
      changeStep();
    }, SLIDE_TIME);
  }, SLIDE_TIME);
}

function prevStep() {
  console.log("prevStep, current step", step);
  if (!step) {
    step = 0;
    window.location.href = "/";
  } else {
    console.log("it goes down");
    step--;
    console.log("currentStep:", step);
    slideToTheRight(document.getElementById("question1"));
    slideToTheRight(document.getElementById("question2"));
    slideToTheRight(document.getElementById("buttonarea"));
    setTimeout(() => {
      reloadElement(document.getElementById("question1"));
      reloadElement(document.getElementById("question2"));
      reloadElement(document.getElementById("buttonarea"));
      reloadElement(document.getElementById("slider"));
      buttonAreaInnerHTMLGenerator();
      sliderGenerator();
      onWndLoad();
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
  if (!slider) {
    return false;
  }
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
  floorType = localStorage.getItem("floorType");
  floorMaterial = localStorage.getItem("floorMaterial");

  let leftDiv, rightDiv, middleDiv;
  if (!floorType) {
    console.log("forced to step 0");
    step = 0;
  } /*else if (!floorMaterial) {
    console.log("forced to step 1", floorMaterial);
    step = 1;
  }*/

  if (step < 2) {
    if (stepOptions[step].middle) {
      middleDiv =
        `<div class="middleside side ${
          stepOptions[step].variableName == "floorMaterial"
            ? "onlybottomborder"
            : ""
        }" >` +
        stepOptions[step].middle
          .map((option) => {
            if (typeof option !== "object") {
              if (option.split(" ")[0] == "forbidden") {
                return `<a class="forbidden"><div class="option">${option}</div></a>`;
              } else if (option.split(" ")[0] == "callus") {
                return `<a class="callus"><div class="option">${
                  option.split(" ")[1]
                }</div></a>`;
              } else {
                return `<a><div class="option">${option}</div></a>`;
              }
            } else {
              return `<a class="custom" id="${option.text}"><div class="option">${option.text}</div></a>`;
            }
          })
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
    document.getElementById("question1").innerHTML =
      stepOptions[step].question1;
    if (step == 1) {
      const FLOOR_TYPE = localStorage.getItem("floorType").toUpperCase();
      document.getElementById("question2").innerHTML =
        stepOptions[step].question2 + FLOOR_TYPE + "?";
    } else {
      document.getElementById("question2").innerHTML =
        stepOptions[step].question2;
    }
  } else {
    if (stepOptions[floorMaterial][step].middle == "area picker") {
      loadAreaPicker();
    } else if (stepOptions[floorMaterial][step].middle == "color picker") {
      loadColorPicker();
    } else if (
      stepOptions[floorMaterial][step].middle == "herramientas picker"
    ) {
      loadHerramientasPicker();
    } else if (stepOptions[floorMaterial][step].middle == "resina picker") {
      loadResinaPicker();
    } else if (
      stepOptions[floorMaterial][step].middle == "presupuesto picker"
    ) {
      loadPresupuestoPicker();
    } else if (
      stepOptions[floorMaterial][step].middle == "ya pintado presupuesto picker"
    ) {
      loadYaPintadoPresupuestoPicker();
    } else if (stepOptions[floorMaterial][step].middle == "fin") {
      loadFinalResult();
    } else if (stepOptions[floorMaterial][step].middle) {
      middleDiv =
        '<div class="middleside side" >' +
        stepOptions[floorMaterial][step].middle
          .map((option) => {
            if (typeof option !== "object") {
              if (option.split(" ")[0] == "forbidden")
                return `<a class="forbidden"><div class="option">${option
                  .split(" ")
                  .splice(1, option.split(" ").length - 1)
                  .join(" ")}</div></a>`;
              else if (option.split(" ")[0] == "callus")
                return `<a class="callus"><div class="option">${option
                  .split(" ")
                  .splice(1, option.split(" ").length - 1)
                  .join(" ")}</div></a>`;
              else {
                return `<a><div class="option">${option}</div></a>`;
              }
            } else {
              if(option.infobutton){
                return `<a class="custom" id="${option.text}"><div class="infodiv"><div class="infobutton"><img src="https://cdn.shopify.com/s/files/1/0533/7255/1350/files/INFO-2.png?v=1614685382" /></div><div class="option">${option.text}</div></div></a>`
              }
              else{
                return `<a class="custom" id="${option.text}"><div class="option">${option.text}</div></a>`;
              }
            }
          })
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
    if (document.getElementById("question1")) {
      document.getElementById("question1").innerHTML =
        stepOptions[floorMaterial][step].question1;
    }
    if (document.getElementById("question2")) {
      document.getElementById("question2").innerHTML =
        stepOptions[floorMaterial][step].question2;
    }
  }
}

function sliderGenerator() {
  let slideArray;
  const sliderDiv = document.getElementById("slider");

  if (sliderDiv) {
    if (step < 2) {
      slideArray = stepOptions[step].slides;
    } else {
      slideArray = stepOptions[floorMaterial][step].slides;
    }

    sliderDiv.innerHTML = slideArray
      .map(
        (slide) => `
  <div class="slide">
    <img src="${slide.url}"/>
    <p ${slide.name.length > 12 ? "class='smallsliderfont'" : ""}>${
          slide.name
        }</p>
  </div>`
      )
      .join("");
  }
}

const goBack = document.getElementById("back");

goBack.addEventListener("click", prevStep, false);

function loadAreaPicker() {
  document.getElementById("buttonarea").innerHTML = `
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
  </div>`;

  const decreaseButton = document.getElementById("decrease");
  const increaseButton = document.getElementById("increase");
  const areaInput = document.getElementById("areainput");
  const areaPickerContinuar = document.getElementById("areapickercontinuar");
  const storedValue = localStorage.getItem("Area");

  if (storedValue > 0) {
    areaInput.value = storedValue;
  }
  decreaseButton.addEventListener(
    "click",
    () => {
      areaInput.value = Number(areaInput.value) - 10;
    },
    "false"
  );
  increaseButton.addEventListener(
    "click",
    () => {
      areaInput.value = Number(areaInput.value) + 10;
    },
    "false"
  );

  areaPickerContinuar.addEventListener("click", areaPickerGoNext, "false");

  function areaPickerGoNext() {
    localStorage.setItem("Area", areaInput.value);
    nextStep();
  }
}

function loadColorPicker() {
  document.getElementById("buttonarea").innerHTML = `
  <div class="colorpicker">
    <div class="colorpickercolumn">
        <div class="colorpickeroption grisclaro">
            <p>Gris Claro</p>
        </div>
        <div class="colorpickeroption grismedio">
            <p>Gris Medio</p>
        </div>
        <div class="colorpickeroption grisoscuro">
            <p>Gris Oscuro</p>
        </div>
    </div>
    <div class="colorpickercolumn">
        <div class="colorpickeroption antracita">
            <p>Antracita</p>
        </div>
        <div class="colorpickeroption blanco">
            <p>Blanco</p>
        </div>
        <div class="colorpickeroption crema">
            <p>Crema</p>
        </div>
    </div>
    <div class="colorpickercolumn">
        <div class="colorpickeroption amarillotrafico">
            <p>Amarillo Tráfico</p>
        </div>
        <div class="colorpickeroption ocre">
            <p>Ocre</p>
        </div>
        <div class="colorpickeroption negro">
            <p>Negro</p>
        </div>
    </div>
    <div class="colorpickercolumn">
        <div class="colorpickeroption azulacero">
            <p>Azul Acero</p>
        </div>
        <div class="colorpickeroption rojooxido">
            <p>Rojo Óxido</p>
        </div>
        <div class="colorpickeroption verdebosque">
            <p>Verde Bosque</p>
        </div>
    </div>
  </div>`;

  let elements = document.getElementsByClassName("colorpickeroption");

  for (let i = 0, len = elements.length; i < len; i++) {
    let myElement = elements[i];
    elements[i].addEventListener(
      "click",
      () => colorElementClicked(myElement),
      false
    );
  }

  function colorElementClicked(element) {
    localStorage.setItem("Color", element.children[0].innerHTML);
    nextStep();
  }
}

function loadHerramientasPicker() {
  const RESINA = localStorage.getItem("Resina");
  const RUGOSO = localStorage.getItem("Rugoso");

  const hasBalanza = RESINA == "epoxi";
  const hasRodillos = !RUGOSO || RUGOSO !== "Quiero que siga rugoso";

  const balanzaDiv = `  <div class="herramientasrow">
  <p>Balanza 2g a 5Kgs</p>
  <div class="herramientasinput">
      <span class="herramientasdecrement" id="decreasebalanza">–</span>
      <input id="balanzainput" class="herramientasnumber" type="number" value="1" min="0" max="1">
      <span class="herramientasincrement" id="increasebalanza">+</span>
  </div>
</div>`;

  const rodillosDiv = `  <div  class="herramientasrow">
  <p>Rodillos 220mm</p>
  <div class="herramientasinput">
      <span class="herramientasdecrement" id="decreaserodillos">–</span>
      <input id="rodillosinput" class="herramientasnumber" type="number" value="1" min="0">
      <span class="herramientasincrement" id="increaserodillos">+</span>
  </div>
</div>`;

  const brochasDiv = `  <div  class="herramientasrow">
  <p>Brochas</p>
  <div class="herramientasinput">
      <span class="herramientasdecrement" id="decreasebrochas">–</span>
      <input id="brochasinput" class="herramientasnumber" type="number" value="1" min="0">
      <span class="herramientasincrement" id="increasebrochas">+</span>
  </div>
</div>`;

  const cubosDiv = `  <div  class="herramientasrow">
  <p>Cubos de Mezcla</p>
  <div class="herramientasinput">
      <span class="herramientasdecrement" id="decreasecubos">–</span>
      <input id="cubosinput" class="herramientasnumber" type="number" value="1" min="0">
      <span class="herramientasincrement" id="increasecubos">+</span>
  </div>
</div>`;

  const rodillosPeloLargoDiv = `<div  class="herramientasrow">
  <p>Rodillos de pelo largo</p>
  <div class="herramientasinput">
      <span class="herramientasdecrement" id="decreaserodillospelolargo">–</span>
      <input id="rodillospelolargoinput" class="herramientasnumber" type="number" value="1" min="0">
      <span class="herramientasincrement" id="increaserodillospelolargo">+</span>
  </div>
</div>`;

  document.getElementById("buttonarea").innerHTML = `
  <div class="herramientaspicker">
    ${hasBalanza ? balanzaDiv : ""}
    ${hasRodillos ? rodillosDiv : rodillosPeloLargoDiv}
    ${brochasDiv}
    ${cubosDiv}
    
  <div class="acceptandcontinue" id="acceptandcontinue">
      CONTINUAR
  </div>`;

  const herramientasPickerContinuar = document.getElementById(
    "acceptandcontinue"
  );

  if (hasBalanza) {
    const decreaseBalanzaButton = document.getElementById("decreasebalanza");
    const increaseBalanzaButton = document.getElementById("increasebalanza");
    const balanzaInput = document.getElementById("balanzainput");
    const balanzaStoredValue = localStorage.getItem("Balanzas");
    if (balanzaStoredValue > 0) {
      balanzaInput.value = balanzaStoredValue;
    }
    decreaseBalanzaButton.addEventListener(
      "click",
      () => {
        if (Number(balanzaInput.value) > 0)
          balanzaInput.value = Number(balanzaInput.value) - 1;
      },
      "false"
    );
    increaseBalanzaButton.addEventListener(
      "click",
      () => {
        balanzaInput.value = Number(balanzaInput.value) + 1;
      },
      "false"
    );
  } else {
    localStorage.removeItem("Balanza");
  }

  if (hasRodillos) {
    const decreaseRodillosButton = document.getElementById("decreaserodillos");
    const increaseRodillosButton = document.getElementById("increaserodillos");
    const rodillosInput = document.getElementById("rodillosinput");
    const rodillosStoredValue = localStorage.getItem("Rodillos");

    localStorage.removeItem("Rodillos pelo largo");

    if (rodillosStoredValue > 0) {
      rodillosInput.value = rodillosStoredValue;
    }
    decreaseRodillosButton.addEventListener(
      "click",
      () => {
        if (Number(rodillosInput.value) > 0)
          rodillosInput.value = Number(rodillosInput.value) - 1;
      },
      "false"
    );
    increaseRodillosButton.addEventListener(
      "click",
      () => {
        rodillosInput.value = Number(rodillosInput.value) + 1;
      },
      "false"
    );
  } else {
    const decreaseRodillosPeloLargoButton = document.getElementById(
      "decreaserodillospelolargo"
    );
    const increaseRodillosPeloLargoButton = document.getElementById(
      "increaserodillospelolargo"
    );
    const rodillosPeloLargoInput = document.getElementById(
      "rodillospelolargoinput"
    );
    const rodillosPeloLargoStoredValue = localStorage.getItem(
      "Rodillos pelo largo"
    );

    localStorage.removeItem("Rodillos");

    if (rodillosPeloLargoStoredValue > 0) {
      rodillosPeloLargoInput.value = rodillosPeloLargoStoredValue;
    }
    decreaseRodillosPeloLargoButton.addEventListener(
      "click",
      () => {
        if (Number(rodillosPeloLargoInput.value) > 0)
          rodillosPeloLargoInput.value =
            Number(rodillosPeloLargoInput.value) - 1;
      },
      "false"
    );
    increaseRodillosPeloLargoButton.addEventListener(
      "click",
      () => {
        rodillosPeloLargoInput.value = Number(rodillosPeloLargoInput.value) + 1;
      },
      "false"
    );
  }

  const decreaseBrochasButton = document.getElementById("decreasebrochas");
  const increaseBrochasButton = document.getElementById("increasebrochas");
  const brochasInput = document.getElementById("brochasinput");
  const brochasStoredValue = localStorage.getItem("Brochas");

  const decreaseCubosButton = document.getElementById("decreasecubos");
  const increaseCubosButton = document.getElementById("increasecubos");
  const cubosInput = document.getElementById("cubosinput");
  const cubosStoredValue = localStorage.getItem("Cubos");

  if (brochasStoredValue > 0) {
    brochasInput.value = brochasStoredValue;
  }
  decreaseBrochasButton.addEventListener(
    "click",
    () => {
      if (Number(brochasInput.value) > 0)
        brochasInput.value = Number(brochasInput.value) - 1;
    },
    "false"
  );
  increaseBrochasButton.addEventListener(
    "click",
    () => {
      brochasInput.value = Number(brochasInput.value) + 1;
    },
    "false"
  );

  if (cubosStoredValue > 0) {
    cubosInput.value = cubosStoredValue;
  }
  decreaseCubosButton.addEventListener(
    "click",
    () => {
      if (Number(cubosInput.value) > 0)
        cubosInput.value = Number(cubosInput.value) - 1;
    },
    "false"
  );
  increaseCubosButton.addEventListener(
    "click",
    () => {
      cubosInput.value = Number(cubosInput.value) + 1;
    },
    "false"
  );
  herramientasPickerContinuar.addEventListener(
    "click",
    herramientasPickerGoNext,
    "false"
  );

  function herramientasPickerGoNext() {
    const balanzaInput = document.getElementById("balanzainput");
    const rodillosInput = document.getElementById("rodillosinput");
    const rodillosPeloLargoInput = document.getElementById(
      "rodillospelolargoinput"
    );

    if (hasBalanza) localStorage.setItem("Balanza", balanzaInput.value);
    if (hasRodillos) {
      localStorage.setItem("Rodillos", rodillosInput.value);
    } else {
      localStorage.setItem("Rodillos pelo largo", rodillosPeloLargoInput.value);
    }
    localStorage.setItem("Brochas", brochasInput.value);
    localStorage.setItem("Cubos", cubosInput.value);
    nextStep();
  }
}

function loadPresupuestoPicker() {
  const FLOOR_MATERIAL = localStorage.getItem("floorMaterial");
  const JUNTAS = localStorage.getItem("Juntas");

  const hasUnaManoTransparente =
    ((FLOOR_MATERIAL == "Baldosa" || FLOOR_MATERIAL == "Terrazo") &&
      JUNTAS &&
      JUNTAS == "Si") ||
    (FLOOR_MATERIAL !== "Baldosa" && FLOOR_MATERIAL !== "Terrazo");

  const unaManoTransparenteDiv = `
  <div class="presupuestooption" id="soloimprimacion">
  <h3>UNA MANO TRANSPARENTE</h3>
  <p>Ideal para cuando solo se quiere evitar el polvo</p>
  <p>y gastar poco</p>
</div>`;
  document.getElementById("buttonarea").innerHTML = `
    <div class="presupuestopicker">
      <div class="presupuestooption" id="imprimacionydosmanos">
        <h3>DOS MANOS E IMPRIMACION</h3>
        <p>Esto es lo que recomendamos.<b>(Recomendada)</b></p>
      </div>
      <div class="presupuestooption" id="dosmanos">
        <h3>SOLO DOS MANOS</h3>
        <p>Se puede ahorrar la imprimación, pero va a quedar</p>
        <p>menos capa. Para suelos nuevos funciona bien</p>
      </div>
  ${hasUnaManoTransparente ? unaManoTransparenteDiv : ""}
    </div>`;

  function setAndContinue(id) {
    localStorage.setItem("Manos", id);
    nextStep();
  }

  [...document.getElementsByClassName("presupuestooption")].map((div) => {
    div.addEventListener("click", () => setAndContinue(div.id), "false");
  });
}

function loadYaPintadoPresupuestoPicker() {
  const PINTA_ENCIMA = localStorage.getItem("isPintaEncima");

  if (PINTA_ENCIMA == "Quitar la capa de pintura antigua") {
    document.getElementById("buttonarea").innerHTML = `
    <div class="presupuestopicker">
      <div class="presupuestooption" id="imprimacionydosmanos">
        <h3>DOS MANOS E IMPRIMACION</h3>
        <p>Esto es lo que recomendamos.<b>(Recomendada)</b></p>
      </div>
      <div class="presupuestooption" id="dosmanos">
        <h3>SOLO DOS MANOS</h3>
        <p>Se puede ahorrar la imprimación, pero va a quedar</p>
        <p>menos capa. Para suelos nuevos funciona bien</p>
      </div>
      <div class="presupuestooption" id="soloimprimacion">
        <h3>UNA MANO TRANSPARENTE</h3>
        <p>Ideal para cuando solo se quiere evitar el polvo</p>
        <p>y gastar poco</p>
      </div>
    </div>`;

    function setAndContinue(id) {
      localStorage.setItem("Manos", id);
      nextStep();
    }

    [...document.getElementsByClassName("presupuestooption")].map((div) => {
      div.addEventListener("click", () => setAndContinue(div.id), "false");
    });
  } else {
    document.getElementById("buttonarea").innerHTML = `
    <div class="presupuestopicker">
      <div class="presupuestooption" id="unamano">
        <h3>UNA SOLA MANO</h3>
        <p>Se puede ahorrar una capa, pero va a quedar</p>
        <p>menos capa, puede quedar un poco peor</p>
        <p>o aguantar menos</p>
      </div>
      <div class="presupuestooption" id="dosmanos">
        <h3>SOLO DOS MANOS</h3>
        <p>Esto es lo que recomendamos.<b>(Recomendada)</b></p>
      </div>
    </div>`;

    function setAndContinue(id) {
      localStorage.setItem("Manos", id);
      nextStep();
    }

    [...document.getElementsByClassName("presupuestooption")].map((div) => {
      div.addEventListener("click", () => setAndContinue(div.id), "false");
    });
  }
}

function loadResinaPicker() {
  const FLOOR_MATERIAL = localStorage.getItem("floorMaterial");
  const FLOOR_TYPE = localStorage.getItem("floorType")

  let hasAcrilica =
    FLOOR_MATERIAL !== "Baldosa" && FLOOR_MATERIAL !== "Terrazo";
  let hasEpoxi =true
  let hasPolitop = false
  if(FLOOR_TYPE=="Patio Colegio"){
    hasAcrilica=true
    hasEpoxi=false
    hasPolitop=false
  }
  const acrilicaDiv = `    <div class="resinaoption" id="acrilica">
  <h3>ACRILICA MONOCOMPONENTE</h3>
  <p>No aguanta manchas ni la presión de ruedas. </p>
  <p>Solo evita el polvo. No protege el suelo</p>
  <p>de un garaje, nave o taller.</p>
</div>`;

  const epoxiDiv = `    <div class="resinaoption" id="epoxi">
  <h3>EPOXI 100% SOLIDOS</h3>
  <p>Epoxi bicomponente pura, calidad profesional.</p>
  <p>se diluye con disolvente.  <b>(Recomendada)</b></p>
</div>`

  const politopDiv = `    <div class="resinaoption" id="politop">
<h3>POLITOP</h3>
<p>bli bla blu blo ble</p>
<p>se diluye con disolvente.  </p>
</div>`

  document.getElementById("buttonarea").innerHTML = `
  <div class="resinapicker">
  ${hasEpoxi ? epoxiDiv : ""}
  ${hasAcrilica ? acrilicaDiv : ""}
  ${hasPolitop ? politopDiv : ""}
  </div>`;

  function setAndContinue(id) {
    localStorage.setItem("Resina", id);
    nextStep();
  }

  [...document.getElementsByClassName("resinaoption")].map((div) => {
    div.addEventListener("click", () => setAndContinue(div.id), "false");
  });
}



function showPopUp() {
  let popUp = document.getElementById("popup");
  let email = document.getElementById("email");
  popUp.classList.add("appear");
  email.classList.add("expand");
}

window.addEventListener("keydown", maybeShowPopUp, false);

function maybeShowPopUp(e) {
  if (e.keyCode == "13") showPopUp();

  if (e.keyCode == "70") closePopUp();
}

function closePopUp(e) {
  document.getElementById("email").classList.remove("expand");
  event.stopPropagation();
  document.getElementById("popup").classList.remove("appear");
  event.stopPropagation();
}

function showContactPopUp() {
  const prevPopUpMessage = document.getElementById("popupmessage");
  reloadElement(prevPopUpMessage);
  const popUpMessage = document.getElementById("popupmessage");

  document.getElementById("email").classList.remove("withimage")

  document.getElementById("email").classList.remove("withimage")

  popUpMessage.innerHTML = `
    <p>La selección que acaba de realizar necesita que la evalúe nuestro equipo de soporte, contacte con nosotros por whatsapp y envienos una foto de su suelo para darle la mejor opción.</p>
    <div class="emailbuttonarea" id="popupbuttonarea">
      <button id="contactarbutton">Contactar</button>
      <button id="cerrarpopup">Volver</button>
    </div> 
    `;
  showPopUp();

  document
    .getElementById("contactarbutton")
    .addEventListener("click", getContactarText, false);
  document
    .getElementById("cerrarpopup")
    .addEventListener("click", closePopUp, false);
}

function getContactarText() {
  const prevPopUpMessage = document.getElementById("popupmessage");
  reloadElement(prevPopUpMessage);
  const popUpMessage = document.getElementById("popupmessage");

  document.getElementById("email").classList.remove("withimage")

  popUpMessage.innerHTML = `
  <p><a href="wa.me/34682312307">Telefono/Whatsapp: 628042210</a></p>
  <div class="emailbuttonarea" id="popupbuttonarea">
  <button id="cerrarpopup">Volver</button>
  </div> 
  `;
  document
    .getElementById("cerrarpopup")
    .addEventListener("click", closePopUp, false);
}

function showCustomPopUp(title, message, buttons, images=false) {
  //buttons is an array of objects [{id:X, text:YYY, function: ZZZ},{id:X, text:YYY, function: ZZZ}]
  const prevPopUpMessage = document.getElementById("popupmessage");
  reloadElement(prevPopUpMessage);
  const popUpMessage = document.getElementById("popupmessage");

  popUpMessage.parentElement.firstElementChild.firstElementChild.innerHTML = title;

  if(images){
    document.getElementById("email").classList.add("withimage")
    popUpMessage.innerHTML = `
    <img class="withimageimg" src="${images}" />
    <p class="withimagep">${message}</p>
    <div class="emailbuttonarea withimagebuttonarea" id="popupbuttonarea">
    ${buttons.map(button=>("<button id='"+button.id+"'>"+button.text+"</button>")).join("")}
    </div> 
    `;
  }else{
    document.getElementById("email").classList.remove("withimage")
    popUpMessage.innerHTML = `
    <p>${message}</p>
    <div class="emailbuttonarea" id="popupbuttonarea">
    ${buttons.map(button=>("<button id='"+button.id+"'>"+button.text+"</button>")).join("")}
    </div> 
    `;
  }



  showPopUp();
  for (let i = 0; i < buttons.length; i++) {
    document
      .getElementById(buttons[i].id)
      .addEventListener("click", buttons[i].function, false);
  }
}

function startOver(relativePath) {
  localStorage.removeItem("floorType");
  localStorage.removeItem("Desperfectos");
  localStorage.removeItem("Manos");
  localStorage.removeItem("floorMaterial");
  localStorage.removeItem("Rugoso");
  localStorage.removeItem("Cubos");
  localStorage.removeItem("Rodillos");
  localStorage.removeItem("Rodillos pelo largo");
  localStorage.removeItem("Balanza");
  localStorage.removeItem("Brochas");
  localStorage.removeItem("Resina");
  localStorage.removeItem("Brillo");
  localStorage.removeItem("Area");
  localStorage.removeItem("Color");
  window.location.href = `${relativePath}`;
}
//showCustomPopUp("mytitle", "it works baby", [VOLVER_BUTTON])
//find a way to add forbidden o callus to div to the <a> tag





function loadFinalResult() {
  document.getElementById("interactive").innerHTML = `
    <div class="backgroundimage">
    <img
      src="https://cdn.shopify.com/s/files/1/0533/7255/1350/files/FONDO_GENERAL.jpg?v=1612267903"
      alt="background"
    />
  </div>
  <h3>PRESUPUESTO</h3>
  <div class="table">
    <h2 class="tableheading">
      Presupuesto
    </h2>
    <div class="tableblocks">
    <div class="tableblock" id="tablepinturas">

  </div>
  <div class="tableblock" id="tabledisolvente">
    <p>disolvente
      <span class="tableprice">$28
        <sub></sub>
      </span>   
      <ul class="tableoptions">
        <li>Disolvente</li>
      </ul>
  </p>
  </div>
  <div class="tableblock" id="tableherramientas">
    <p>Herramientas
      <span class="tableprice">$29
        <sub></sub>
      </span>   
      <ul class="tableoptions">
        <li>Brochas</li>
        <li>Cubos de mezcla</li>
        <li>Balanza</li>
        <li>Rodillos</li>
      </ul>
    </p>
  </div>
  <div class="tableblock" id="tabletotal">
    <p>
      <ul class="tableoptions">
        <li>portes</li>
        <li>IVA</li>
      </ul>
      Total
        <span class="tableprice">$29
          <sub></sub>
        </span>   
    </p>
  </div>
</div>
<button class="btn" id="buybutton">
  <p>book your order now</p>
  <span class="fa fa-cart-plus" aria-hidden="true">Go to the store</span>
</button>
</div>
<div class="buttonholder">
  <button class="button" id="gotohome">
    Inicio
  </button>
  <button class="button" id="editarconfiguracion">
    Editar configuración
  </button>
</div>`;

  document
    .getElementById("editarconfiguracion")
    .addEventListener("click", goEdit, false);
  document
    .getElementById("gotohome")
    .addEventListener("click", () => startOver("/"), false);
  document
    .getElementById("buybutton")
    .addEventListener("click", makePurchase, false);

  function goEdit() {
    step = stepOptions[floorMaterial][step].lastStep;
    recoverOptinoneerScreen();
  }
  function recoverOptinoneerScreen() {
    document.getElementById("interactive").innerHTML = `
    <a class="tiendahomehomelink" href="/"></a>
    <div class="backgroundimage">
    <img
      src="https://cdn.shopify.com/s/files/1/0533/7255/1350/files/FONDO_GENERAL.jpg?v=1612267903"
      alt="background"
    />
  </div>
  <div class="slider" id="slider">
    </div>
  </div>
  <div class="changeablecontent">
    <div class="question part1" id="question1">
      ¿QUÉ SUELO QUIERE USTED
    </div>
    <div class="question part2" id="question2">PINTAR?</div>
    <div class="buttonarea" id="buttonarea">

    </div>
    <div class="menu">
      <a id="back">Atras</a>
      <div><p>
        PINCHE EN UNA OPCIÓN PARA
      </p>
      <p>
        CONTINUAR
      </p></div>
      <a id="gotohome" href="/">Inicio</a>
      
    </div>
  </div>`;
    buttonAreaInnerHTMLGenerator();
    sliderGenerator();
    onWndLoad();
    const goBack = document.getElementById("back");
    goBack.addEventListener("click", prevStep, false);
  }

  function makePurchase() {
    console.log("purchasing");
  }

  let totalKgs = 0;
  let litersOfDisolvente = 0;
  const tableTotal = document.getElementById("tabletotal");

  const finalPriceNoTax =
    Number(createTablePinturas()) +
    Number(createTableDisolvente()) +
    Number(createTableHerramientas());
  createTableFinalPrice();

  function createTablePinturas() {
    const tablePinturas = document.getElementById("tablepinturas");

    let pinturasTotal = 0;
    let pinturasElements = getPinturasElements();

    function getPinturasElements() {
      const MANOS = localStorage.getItem("Manos");
      const AREA = localStorage.getItem("Area");
      const COLOR = localStorage.getItem("Color");
      const RESINA = localStorage.getItem("Resina");
      const BRILLO = localStorage.getItem("Brillo");
      const DESPERFECTOS = localStorage.getItem("Desperfectos");
      const RUGOSO = localStorage.getItem("Rugoso");

      let toReturnArray = [];

      let gm2 = DESPERFECTOS == "No" ? 140 : 150;
      if (RUGOSO && RUGOSO == "Quiero que siga rugoso") {
        gm2 = gm2 * 1.2;
        console.log("gm2 actualizados por ser suelo rugoso");
      }
      let kgAmountPerLayer = (gm2 * AREA) / 1000;

      function calculateKits(isImprimacion) {
        if (RESINA == "politop") {
          if(isImprimacion)return [];
          else{
            const AMOUNT_MANOS=1
            const MAX_BARREL_SIZE=20
            const BARREL_VOLUME_DIFFERENCE=5

            return calculateSpecificLayersKits(AMOUNT_MANOS,MAX_BARREL_SIZE,BARREL_VOLUME_DIFFERENCE)
          }
        }

        if (isImprimacion && RESINA == "acrilica") return [];
        else if (!isImprimacion && RESINA == "acrilica") {
          const AMOUNT_MANOS = MANOS.includes("dosmanos") ? 2 : 1;
          const MAX_BARREL_SIZE = 20;
          const BARREL_VOLUME_DIFFERENCE = 5;

          return calculateSpecificLayersKits(
            AMOUNT_MANOS,
            MAX_BARREL_SIZE,
            BARREL_VOLUME_DIFFERENCE
          );
        } else if (isImprimacion && RESINA == "epoxi") {
          const MAX_BARREL_SIZE = 30;
          const BARREL_VOLUME_DIFFERENCE = 6;

          let amountOf30KgsKits = Math.floor(
            kgAmountPerLayer / MAX_BARREL_SIZE
          );
          let doWeAddDisolvente =
            (kgAmountPerLayer % MAX_BARREL_SIZE) % BARREL_VOLUME_DIFFERENCE <
            BARREL_VOLUME_DIFFERENCE / 2
              ? true
              : false;
          let remainderKits = doWeAddDisolvente
            ? (kgAmountPerLayer % MAX_BARREL_SIZE) -
              ((kgAmountPerLayer % MAX_BARREL_SIZE) % BARREL_VOLUME_DIFFERENCE)
            : (kgAmountPerLayer % MAX_BARREL_SIZE) -
              ((kgAmountPerLayer % MAX_BARREL_SIZE) %
                BARREL_VOLUME_DIFFERENCE) +
              BARREL_VOLUME_DIFFERENCE;

          if (amountOf30KgsKits == 0 && remainderKits == 0) {
            return [
              { name: `Kit ${MAX_BARREL_SIZE}Kgs Imprimacion`, qty: 0 },
              {
                name: `Kit ${BARREL_VOLUME_DIFFERENCE}Kgs Imprimacion`,
                qty: 1,
              },
            ];
          }

          if (doWeAddDisolvente) litersOfDisolvente += amountOf30KgsKits + 1;

          if (!remainderKits) {
            return [
              {
                name: `Kit ${MAX_BARREL_SIZE}Kgs Imprimacion`,
                qty: amountOf30KgsKits,
              },
            ];
          }

          return [
            {
              name: `Kit ${MAX_BARREL_SIZE}Kgs Imprimacion`,
              qty: amountOf30KgsKits,
            },
            { name: `Kit ${remainderKits}Kgs Imprimacion`, qty: 1 },
          ];
        } else {
          const AMOUNT_MANOS = MANOS.includes("dosmanos") ? 2 : 1;
          const MAX_BARREL_SIZE = 30;
          const BARREL_VOLUME_DIFFERENCE = 6;
          return calculateSpecificLayersKits(
            AMOUNT_MANOS,
            MAX_BARREL_SIZE,
            BARREL_VOLUME_DIFFERENCE
          );
        }

        function calculateSpecificLayersKits(
          manos,
          maxBarrelSize,
          barrelVolumeDiff
        ) {
          let thisKgAmountPerLayer = kgAmountPerLayer * manos;

          let amountOfMaxKgsKits = Math.floor(
            thisKgAmountPerLayer / maxBarrelSize
          );
          let doWeAddDisolvente =
            (thisKgAmountPerLayer % maxBarrelSize) % barrelVolumeDiff <
            barrelVolumeDiff / 2
              ? true
              : false;
          let remainderKits = doWeAddDisolvente
            ? (thisKgAmountPerLayer % maxBarrelSize) -
              ((thisKgAmountPerLayer % maxBarrelSize) % barrelVolumeDiff)
            : (thisKgAmountPerLayer % maxBarrelSize) -
              ((thisKgAmountPerLayer % maxBarrelSize) % barrelVolumeDiff) +
              barrelVolumeDiff;

          if (amountOfMaxKgsKits == 0 && remainderKits == 0) {
            return [
              { name: `Kit ${maxBarrelSize} ${RESINA}`, qty: 0 },
              { name: `Kit ${barrelVolumeDiff}Kgs ${RESINA}`, qty: 1 },
            ];
          }

          if (doWeAddDisolvente || MANOS == "dosmanos")
            litersOfDisolvente += amountOfMaxKgsKits + 1;

          if (!remainderKits) {
            return [
              {
                name: `Kit ${maxBarrelSize}Kgs ${RESINA}`,
                qty: amountOfMaxKgsKits,
              },
            ];
          }
          return [
            {
              name: `Kit ${maxBarrelSize}Kgs ${RESINA}`,
              qty: amountOfMaxKgsKits,
            },
            { name: `Kit ${remainderKits}Kgs ${RESINA}`, qty: 1 },
          ];
        }
      }
      cartproductsArray = []
      let imprimacionArray = calculateKits(true);
      let layersArray = calculateKits(false);

      console.log("first", cartproductsArray[0], cartproductsArray)

      calculateTotalKgs();
      function calculateTotalKgs() {
        if (imprimacionArray[0])
          totalKgs +=
            imprimacionArray[0].qty *
            Number(imprimacionArray[0].name.split(" ")[1].split("Kg")[0]);
        if (imprimacionArray[1])
          totalKgs +=
            imprimacionArray[1].qty *
            Number(imprimacionArray[1].name.split(" ")[1].split("Kg")[0]);
        if (layersArray[0])
          totalKgs +=
            layersArray[0].qty *
            Number(layersArray[0].name.split(" ")[1].split("Kg")[0]);
        if (layersArray[1])
          totalKgs +=
            layersArray[1].qty *
            Number(layersArray[1].name.split(" ")[1].split("Kg")[0]);
        let addDisolventeWeigth = litersOfDisolvente;
        if (AREA / 100 < litersOfDisolvente && litersOfDisolvente > 2) {
          addDisolventeWeigth = Math.floor(AREA / 100);
        }
        totalKgs += addDisolventeWeigth;
      }

      function calculateImprimacionArray() {
        if (!MANOS.includes("imprimacion") || RESINA == "acrilica") return [];

        let thisAmountOfKgs = imprimacionArray[1].name
          .split(" ")[1]
          .split("s")[0];

        toReturnArray = toReturnArray.concat(imprimacionArray);

        if(imprimacionArray[0].qty){
          cartproductsArray.push({
            name: "imprimacion epoxi 30Kg",
            price: imprimacionArray[0].qty *
            priceObject["epoxi"]["imprimacion"]["Incoloro"]["30Kg"],
            amount: imprimacionArray[0].qty
        })}

        pinturasTotal +=
          imprimacionArray[0].qty *
          priceObject["epoxi"]["imprimacion"]["Incoloro"]["30Kg"];
        if (
          imprimacionArray[1] &&
          priceObject["epoxi"]["imprimacion"]["Incoloro"][thisAmountOfKgs]
        ) {

        if(imprimacionArray[1].qty){
          cartproductsArray.push({
            name: `imprimacion epoxi ${thisAmountOfKgs}`,
            price: imprimacionArray[1].qty *
            priceObject["epoxi"]["imprimacion"]["Incoloro"][thisAmountOfKgs],
            amount: imprimacionArray[1].qty
        })}

          pinturasTotal +=
            imprimacionArray[1].qty *
            priceObject["epoxi"]["imprimacion"]["Incoloro"][thisAmountOfKgs];
        }
        //console.log("pinturas total after imprimacion", pinturasTotal);
      }

      function calculateLayersArray() {
        if (!MANOS.includes("mano") && RESINA !== "acrilica") return [];

        toReturnArray = toReturnArray.concat(layersArray);

        let thisColor = {
          "Gris Claro": "Gris",
          "Gris Medio": "Gris",
          "Gris Oscuro": "Gris",
          Antracita: "Negro",
          Blanco: "Blanco",
          "Rojo Óxido": "Rojo granate",
          Crema: "Crema",
          "Amarillo Tráfico": "Amarillo",
          Ocre: "Crema",
          Negro: "Negro",
          "Azul Acero": "Azul",
          "Verde Bosque": "Verde",
        };

        const MAX_BARREL_SIZE = {
          politop: "20Kg",
          acrilica: "20Kg",
          epoxi: "30Kg",
        };

        let priceObjectBrillo =
          RESINA == "epoxi"
            ? priceObject[RESINA][BRILLO]
            : priceObject[RESINA];

        if(layersArray[0].qty){cartproductsArray.push({
        name: `HS100 epoxi ${BRILLO} ${MAX_BARREL_SIZE[RESINA]} ${COLOR}`, 
        price: layersArray[0].qty * priceObjectBrillo[thisColor[COLOR]][MAX_BARREL_SIZE[RESINA]],
        amount: layersArray[0].qty
      })}

        pinturasTotal +=
          layersArray[0].qty *
          priceObjectBrillo[thisColor[COLOR]][MAX_BARREL_SIZE[RESINA]];

        let thisAmountOfKgs = layersArray[1]
          ? layersArray[1].name.split(" ")[1].split("s")[0]
          : false;
        if (
          layersArray[1] &&
          thisAmountOfKgs &&
          priceObjectBrillo[thisColor[COLOR]][thisAmountOfKgs]
        ) {
          if(layersArray[1].qty){cartproductsArray.push({
            name: `HS100 epoxi ${BRILLO} ${thisAmountOfKgs} ${COLOR}`, 
            price: layersArray[1].qty * priceObjectBrillo[thisColor[COLOR]][thisAmountOfKgs],
            amount: layersArray[1].qty
          })}

          pinturasTotal +=
            layersArray[1].qty *
            priceObjectBrillo[thisColor[COLOR]][thisAmountOfKgs];
        }
      }
      calculateImprimacionArray();
      calculateLayersArray();
      pinturasTotal = ((pinturasTotal * DESCUENTO) / 100).toFixed(2);
      return toReturnArray;
    }

    function getPathToFicha(name){
      if(name.includes('epoxi')){
        return
      }
      else if(name.includes('Imprimacion')){
        return
      }
      else if(name.includes('acrilica')){
        return
      }
      else if(name.includes('politop')){
        return
      }
      else{
        return ''
      }
    }
    console.log("second", cartproductsArray[0], cartproductsArray)
    let index = 0

    function addIndex(){
      index = index+1 
      return index-1
    }
    tablePinturas.innerHTML = `
    <p>Pinturas y resinas
    <span class="tableprice">${pinturasTotal}€
      <sub></sub>
    </span>   
    <ul class="tableoptions">
      ${pinturasElements
        .map((element) =>
          element.qty ? `<li><a class='fichatecnicadownload' role='button' href='${getPathToFicha(element.name)}' download='fichatecnica'>`+element.name+" x "+ element.qty +"</a>"+"<p>"+(cartproductsArray[addIndex()].price*(100-DESCUENTO)/100).toFixed(2)+"€</p>"+"</li>" : ""
        )
        .join("").replaceAll("epoxi", RESINAS_TABLE_NAMES["Epoxi"]).replaceAll("Imprimacion", RESINAS_TABLE_NAMES["Imprimacion"]).replaceAll("acrilica", RESINAS_TABLE_NAMES["Acrilica"]).replaceAll("politop", RESINAS_TABLE_NAMES["Politop"])}
    </ul>
  </p>
  `;
    return pinturasTotal;
  }
  function createTableDisolvente() {
    const AREA = localStorage.getItem("Area");
    const tableDisolvente = document.getElementById("tabledisolvente");
    const RUGOSO = localStorage.getItem("Rugoso");

    if (AREA / 100 < litersOfDisolvente && litersOfDisolvente > 2) {
      litersOfDisolvente = Math.floor(AREA / 100);
    }
    if (RUGOSO && RUGOSO == "Quiero que siga rugoso") {
      console.log(
        "litersOfDisolvente actualizados por ser muy rugoso",
        litersOfDisolvente
      );
      litersOfDisolvente = litersOfDisolvente * 2;
    }

    let priceDisolvente = (
      (DISOLVENTE_PRICE * Math.ceil(litersOfDisolvente / 2)) /
      2
    ).toFixed(2);

    tableDisolvente.innerHTML = `
          <p>disolvente
            <span class="tableprice">${priceDisolvente}€
              <sub></sub>
            </span>   
            <ul class="tableoptions">
              <li>Disolvente 2L x ${Math.ceil(litersOfDisolvente / 2)}</li>
            </ul>
         </p>
  `;
    return priceDisolvente;
  }
  function createTableHerramientas() {
    const RESINA = localStorage.getItem("Resina");
    const tableHerramientas = document.getElementById("tableherramientas");
    let thisTableTotal = 0;
    const HERRAMIENTAS_PRICES = {
      Brochas: 6.5,
      Cubos: 1.5,
      Rodillos: 8.25,
      Balanza: 16,
      "Rodillos pelo largo":12,
    };
    //0 si el pedido es de mas de 200€
    function showElement(element) {
      //console.log("elemento", localStorage.getItem(element), element);
      if ((element == "Balanza" && RESINA !== "epoxi")) {
        return `<li>${element} no necesaria</li>`;
      } else if (localStorage.getItem(element) > 0) {
        thisTableTotal +=
          localStorage.getItem(element) * HERRAMIENTAS_PRICES[element];

        return `<li>${element} x ${localStorage.getItem(element)}</li>`;
      } else {
        return "";
      }
    }

    let listItems = `
    ${showElement("Brochas")}
    ${showElement("Cubos")}
    ${showElement("Rodillos")}
    ${showElement("Balanza")}
    ${showElement("Rodillos pelo largo")}`;

    tableHerramientas.innerHTML = `
    <p>Herramientas
    <span class="tableprice">${(thisTableTotal / 2).toFixed(2)}€
      <sub></sub>
    </span>   
    <ul class="tableoptions">
      ${listItems}
    </ul>
  </p>
    `;

    return (thisTableTotal / 2).toFixed(2);
  }

  function createTableFinalPrice() {
    const priceTable = document.getElementById("tabletotal");
    const portesPrice = Number(
      (PER_KG_PRICE_TRANPORT * totalKgs > 17
        ? PER_KG_PRICE_TRANPORT * totalKgs
        : 17
      ).toFixed(2)
    );
    const TAX = Number((0.21 * (finalPriceNoTax + portesPrice)).toFixed(2));

    const finalPrice = (TAX + finalPriceNoTax + portesPrice).toFixed(2);
    priceTable.innerHTML = `
    <p>
      <ul class="tableoptions">
        <li class="priceandtag"><span>portes</span> <span>${portesPrice}€</span></li>
        <li class="priceandtag"><span>IVA</span> <span>${TAX}€</span></li>
      </ul>
      Total
        <span class="tableprice">${finalPrice}€
          <sub></sub>
        </span>   
    </p>
    `;
  }
}