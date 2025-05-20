const fightsData = [
  {
    Fecha: "10 de Jul., 2021",
    Oponente: "Dustin Poirier",
    Resultado: "P",
    Decisión: "TKO - Detención médica",
    Rnd: 1,
    Tiempo: "5:00",
    Evento: "UFC 264: Poirier vs. McGregor 3",
  },
  {
    Fecha: "23 de Ene., 2021",
    Oponente: "Dustin Poirier",
    Resultado: "P",
    Decisión: "KO/TKO",
    Rnd: 2,
    Tiempo: "2:32",
    Evento: "UFC 257: Poirier vs. McGregor 2",
  },
  {
    Fecha: "18 de Ene., 2020",
    Oponente: "Donald Cerrone",
    Resultado: "G",
    Decisión: "KO/TKO",
    Rnd: 1,
    Tiempo: "0:40",
    Evento: "UFC 246: McGregor vs. Cowboy",
  },
  {
    Fecha: "6 de Oct., 2018",
    Oponente: "Khabib Nurmagomedov",
    Resultado: "P",
    Decisión: "Sumisión",
    Rnd: 4,
    Tiempo: "3:03",
    Evento: "UFC 229: Khabib vs. McGregor",
  },
  {
    Fecha: "13 de Nov., 2016",
    Oponente: "Eddie Alvarez",
    Resultado: "G",
    Decisión: "KO/TKO",
    Rnd: 2,
    Tiempo: "3:04",
    Evento: "UFC 205: Alvarez vs. McGregor",
  },
  {
    Fecha: "20 de Ago., 2016",
    Oponente: "Nate Diaz",
    Resultado: "G",
    Decisión: "Decisión - Mayoritaria",
    Rnd: 5,
    Tiempo: "5:00",
    Evento: "UFC 202: Diaz vs. McGregor 2",
  },
  {
    Fecha: "5 de Mar., 2016",
    Oponente: "Nate Diaz",
    Resultado: "P",
    Decisión: "Sumisión",
    Rnd: 2,
    Tiempo: "4:12",
    Evento: "UFC 196: McGregor vs. Diaz",
  },
  {
    Fecha: "12 de Dic., 2015",
    Oponente: "José Aldo",
    Resultado: "G",
    Decisión: "KO/TKO",
    Rnd: 1,
    Tiempo: "0:13",
    Evento: "UFC 194: Aldo vs. McGregor",
  },
  {
    Fecha: "11 de Jul., 2015",
    Oponente: "Chad Mendes",
    Resultado: "G",
    Decisión: "KO/TKO",
    Rnd: 2,
    Tiempo: "4:57",
    Evento: "UFC 189: Mendes vs. McGregor",
  },
  {
    Fecha: "18 de Ene., 2015",
    Oponente: "Dennis Siver",
    Resultado: "G",
    Decisión: "KO/TKO",
    Rnd: 2,
    Tiempo: "1:54",
    Evento: "UFC Fight Night: McGregor vs. Siver",
  },
  {
    Fecha: "27de Sep., 2014",
    Oponente: "Dustin Porier",
    Resultado: "G",
    Decisión: "KO/TKO",
    Rnd: 1,
    Tiempo: "1:46",
    Evento: "UFC 178: Johnson vs. Cariaso",
  },
  {
    Fecha: "19 de Jul., 2014",
    Oponente: "Diego Brandao",
    Resultado: "G",
    Decisión: "KO/TKO",
    Rnd: 1,
    Tiempo: "4:05",
    Evento: "UFC Fight Night: McGregor vs. Brandao",
  },
  {
    Fecha: "17 de Ago., 2013",
    Oponente: "Max Holloway",
    Resultado: "G",
    Decisión: "Decisión - Unánime",
    Rnd: 3,
    Tiempo: "5:00",
    Evento: "UFC Fight Night: Shogun vs. Sonnen",
  },
  {
    Fecha: "6 de Abr., 2013",
    Oponente: "Marcus Brimage",
    Resultado: "G",
    Decisión: "KO/TKO",
    Rnd: 1,
    Tiempo: "1:07",
    Evento: "UFC on FUEL TV 9: Mousasi vs. Latifi",
  },
  {
    Fecha: "31 de Dic., 2012",
    Oponente: "Ivan Buchinger",
    Resultado: "G",
    Decisión: "KO",
    Rnd: 1,
    Tiempo: "3:40",
    Evento: "CWFC 51: Cage Warriors Fighting Championship 51",
  },
  {
    Fecha: "2 de Jun., 2012",
    Oponente: "Dave Hill",
    Resultado: "G",
    Decisión: "Submission (Rear Naked Choke)",
    Rnd: 2,
    Tiempo: "4:10",
    Evento: "CWFC 47: Cage Warriors Fighting Championship 47",
  },
  {
    Fecha: "8 de Feb., 2012",
    Oponente: "Steve O'Keefe",
    Resultado: "G",
    Decisión: "KO",
    Rnd: 1,
    Tiempo: "1:33",
    Evento: "CWFC 45: Cage Warriors Fighting Championship 45",
  },
  {
    Fecha: "8 de Sep., 2011",
    Oponente: "Aaron Jahnsen",
    Resultado: "G",
    Decisión: "KO",
    Rnd: 1,
    Tiempo: "3:29",
    Evento: "CWFC: Fight Night 2",
  },
  {
    Fecha: "9 de Oct., 2010",
    Oponente: "Connor Dillon",
    Resultado: "G",
    Decisión: "TKO",
    Rnd: 1,
    Tiempo: "4:22",
    Evento: "CFC: Chaos Fighting Championship 7",
  },
  {
    Fecha: "12 de Dic., 2008",
    Oponente: "Stephen Bailey",
    Resultado: "G",
    Decisión: "TKO",
    Rnd: 1,
    Tiempo: "1:22",
    Evento: "K.O.: The Fight Before Christmas",
  },
  {
    Fecha: "28 de Jun., 2008",
    Oponente: "Artemji Sitenkov",
    Resultado: "P",
    Decisión: "Submission (Kneebar)",
    Rnd: 1,
    Tiempo: "0:30",
    Evento: "COT 3: Cage of Truth",
  },
];

function getFightData() {
  const element = document.getElementById("tablaPeleas");
  if (!element) return; // Evita errores si la tabla no existe en la página

  let tabla = `<table class="tabla-peleas">
      <thead>
        <tr class="cabecera-tabla">
          <th style= "color: black";>Fecha</th>
          <th style= "color: black";>Oponente</th>
          <th style= "color: black";>Resultado</th>
          <th style= "color: black";>Decisión</th>
          <th style= "color: black";>Rnd</th>
          <th style= "color: black";>Tiempo</th>
          <th style= "color: black";>Evento</th>
        </tr>
      </thead>
      <tbody>
    `;

  fightsData.forEach((fight) => {
    // Determina la clase según el resultado de la pelea
    let claseFila =
      fight.Resultado === "G" ? "fila-victorias" : "fila-derrotas";

    tabla += `
        <tr class="${claseFila}">
          <td style= "color: white";>${fight.Fecha}</td>
          <td style= "color: white";>${fight.Oponente}</td>
          <td style= "color: white";>${fight.Resultado}</td>
          <td style= "color: white";>${fight.Decisión}</td>
          <td style= "color: white";>${fight.Rnd}</td>
          <td style= "color: white";>${fight.Tiempo}</td>
          <td style= "color: white";>${fight.Evento}</td>
        </tr>
      `;
  });

  tabla += "</tbody></table>";
  element.innerHTML = tabla;
}

function handleChangeVideo() {}
