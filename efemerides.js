/* ============================================================
   EFEMÉRIDES — La Libreta de Ciencia
   ------------------------------------------------------------
   Este es el ÚNICO archivo que editas para añadir eventos.
   No toques index.html salvo que quieras cambiar el diseño.

   Cada efeméride es un objeto con estos campos:
     mes        (1–12)        OBLIGATORIO
     dia        (1–31)        OBLIGATORIO
     nombre     (texto)       OBLIGATORIO  — título del panel
     disciplina (texto)       categoría; controla el color del punto
     anio       (número|null) año del hecho histórico (opcional)
     texto      (texto)       descripción que aparece en el panel
     enlace     (url|null)    enlace al post completo (opcional)
     imagen     (url|null)    URL de la imagen del panel (opcional)

   Disciplinas reconocidas (con color propio):
     "fisica", "astronomia", "quimica", "biologia",
     "matematicas", "exploracion", "otro"
   Cualquier otra cae en "otro".
   ============================================================ */

const EFEMERIDES = [
  {
    mes: 6, dia: 12, anio: 1922,
    nombre: "Nacimiento de Margherita Hack",
    disciplina: "astronomia",
    texto: "Astrofísica italiana, pionera en el estudio espectroscópico de estrellas y primera mujer en dirigir el Observatorio Astronómico de Trieste. Divulgadora incansable y figura pública de la ciencia en Italia.",
    enlace: null,
    imagen: null
  },
  {
    mes: 5, dia: 31, anio: 1912,
    nombre: "Nacimiento de Chien-Shiung Wu",
    disciplina: "fisica",
    texto: "Física experimental china-estadounidense. Su experimento sobre el decaimiento beta del cobalto-60 demostró la violación de la paridad en la interacción débil, refutando una simetría que se creía fundamental.",
    enlace: null,
    imagen: null
  },
  {
    mes: 5, dia: 26, anio: 1951,
    nombre: "Nacimiento de Sally Ride",
    disciplina: "exploracion",
    texto: "Física y astronauta estadounidense, primera mujer de EE. UU. en el espacio (misión STS-7, 1983). Posteriormente dedicada a la educación científica y a fomentar vocaciones STEM en niñas.",
    enlace: null,
    imagen: null
  }
];
