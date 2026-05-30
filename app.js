const views = {
  dashboard: "Panel de Capellania",
  roles: "Vistas por rol",
  students: "Estudiantes",
  studentProfile: "Ficha del estudiante",
  pastors: "Pastores y responsabilidades",
  chaplaincy: "Capellanía",
  teaching: "Docencia",
  groups: "Grupos Pequenos",
  classes: "Maranatha Class",
  visits: "Visitas",
  training: "Capacitaciones",
  events: "Eventos",
  reports: "Reportes"
};

const faculties = [
  ["Facultad de Ciencias de la Salud", 2071],
  ["Facultad de Ciencias Empresariales", 1107],
  ["Facultad de Ingenieria y Arquitectura", 993],
  ["Facultad de Ciencias Humanas y Educacion", 899],
  ["Facultad de Teologia", 197]
];

const sampleStudents = [
  {
    code: "202612051",
    name: "HUANAY ESTRADA SARA YASMIN",
    program: "EP Enfermeria",
    cycle: "1",
    group: "1",
    faculty: "Facultad de Ciencias de la Salud",
    modality: "Presencial",
    campus: "Sede Lima",
    phone: "928712962",
    document: "73162552",
    religion: "Evangelico",
    status: "No adventista",
    pastoralStatus: "Sin contacto"
  },
  {
    code: "202610033",
    name: "Corrales Ponce Alexander Daniel",
    program: "EP Medicina",
    cycle: "1",
    group: "1",
    faculty: "Facultad de Ciencias de la Salud",
    modality: "Presencial",
    campus: "Sede Lima",
    phone: "925529727",
    document: "61471741",
    religion: "Adventista del Septimo Dia",
    status: "Adventista - pendiente definir",
    pastoralStatus: "Sin contacto"
  },
  {
    code: "202611400",
    name: "HUANACUNI MUCHO MARIA ANGELICA",
    program: "EP Medicina",
    cycle: "1",
    group: "1",
    faculty: "Facultad de Ciencias de la Salud",
    modality: "Presencial",
    campus: "Sede Lima",
    phone: "919292018",
    document: "72986336",
    religion: "Adventista del Septimo Dia",
    status: "Adventista - pendiente definir",
    pastoralStatus: "Sin contacto"
  },
  {
    code: "202212670",
    name: "Vargas Villanueva Leydi",
    program: "EP Psicologia",
    cycle: "9",
    group: "UPN",
    faculty: "Facultad de Ciencias de la Salud",
    modality: "Presencial",
    campus: "Sede Lima",
    phone: "943192164",
    document: "48055175",
    religion: "Otro",
    status: "No adventista",
    pastoralStatus: "Sin contacto"
  },
  {
    code: "202612077",
    name: "Guardia Aguilar Belsi",
    program: "EP Psicologia",
    cycle: "1",
    group: "2",
    faculty: "Facultad de Ciencias de la Salud",
    modality: "Presencial",
    campus: "Sede Lima",
    phone: "921956068",
    document: "76647645",
    religion: "Adventista del Septimo Dia",
    status: "Adventista - pendiente definir",
    pastoralStatus: "Sin contacto"
  },
  {
    code: "201912869",
    name: "Laureano Condori Stefani",
    program: "EP Medicina",
    cycle: "13",
    group: "Unico",
    faculty: "Facultad de Ciencias de la Salud",
    modality: "Presencial",
    campus: "Sede Lima",
    phone: "904672287",
    document: "75541713",
    religion: "Adventista del Septimo Dia",
    status: "Adventista - pendiente definir",
    pastoralStatus: "Sin contacto"
  },
  {
    code: "202210932",
    name: "Yoctun Gonzalez Karla Estefany",
    program: "EP Medicina",
    cycle: "9",
    group: "Unico",
    faculty: "Facultad de Ciencias de la Salud",
    modality: "Presencial",
    campus: "Sede Lima",
    phone: "972089856",
    document: "73780962",
    religion: "Otro",
    status: "No adventista",
    pastoralStatus: "Sin contacto"
  }
];

const students = Array.isArray(window.STUDENTS_DATA) && window.STUDENTS_DATA.length ? window.STUDENTS_DATA : sampleStudents;
const studentIndexByCode = new Map(students.map((student, index) => [student.code, index]));

const pastors = [
  ["1", "Neira Reyes Belky Dante", "989059432", "42269514", "Coordinador de Facultad", "FACIHED"],
  ["2", "Torrealva Callirgos Juan Carlos", "989059479", "7660888", "Docente Capellan", "FACIHED"],
  ["3", "Branez Cajahuaringa David Jack", "966758445", "41384202", "Docente Capellan", "FACIHED"],
  ["4", "Bernui Contreras Miguel Guillermo", "969361032", "25700453", "Docente Capellan", "FACIHED"],
  ["5", "Palacios Morales Faimes", "989059286", "20663152", "Coordinador de Facultad", "FCE"],
  ["6", "Quintana Bravo, Edwin", "986655003", "42270783", "Coordinador General", "FCE"],
  ["7", "Chiroque Chinin Norbin", "949084428", "42627284", "Docente Capellan", "FCE"],
  ["8", "Pinazo Saune Maria", "916309137", "9932427", "Docente Capellan", "FCE"],
  ["9", "Carlos Chumbes", "960402721", "", "Docente Capellan", "FCE"],
  ["10", "Iberico Bin, Manuel Gil", "958977324", "46019807", "Coordinador de Facultad", "FIA"],
  ["11", "Pacheco Napan Neal Samuel", "983874272", "44280514", "Docente Capellan", "FIA"],
  ["12", "Vivanco Canchari Luz Milagros", "957215068", "10599408", "Docente Capellan", "FIA"],
  ["13", "Pacheco Cavero Jhonatan Andres", "989059416", "46573427", "Docente Capellan", "FIA"],
  ["14", "Del Aguila Tamanta, Robert", "958977555", "41835244", "Coordinador de Facultad", "FCS"],
  ["15", "Mamani Esenarro David", "989597322", "10169420", "Docente Capellan", "FCS"],
  ["16", "Manzanares Sipion, Jose Antonio", "989059474", "40936079", "Docente Capellan", "FCS"],
  ["17", "Cuentas Yapo, Gerardo", "989182455", "42842293", "Docente Capellan", "FCS"],
  ["18", "Ticona Jove, David Isaac", "997573617", "10297378", "Docente Capellan", "FCS"],
  ["19", "Trinidad Ticse Benjamin David", "989059481", "41898329", "Docente Capellan", "FCS"],
  ["20", "Sotelo Requena Raul", "989597282", "9463068", "Docente Capellan", "FCS"],
  ["21", "Felipe Esteban", "", "", "Coordinador de Facultad", "TEOLOGIA"]
];

const christianFormationCourseRows = `
29	Miguel Guillermo Bernui Contreras	1 Formación Cristiana VII: Regular	Ciclo 7 | Grupo Único	Educación: Especialidad Primaría, Presencial, Presencial, Sede Lima	FACIHED
30	Miguel Guillermo Bernui Contreras	2 Formación Cristiana VII: Regular	Ciclo 7 | Grupo Único	Ciencias de la Comunicación, Presencial, Presencial, Sede Lima	FACIHED
31	Miguel Guillermo Bernui Contreras	3 Formación Cristiana IX: Regular	Ciclo 9 | Grupo Único	Educación: Especialidad Primaría, Presencial, Presencial, Sede Lima	FACIHED
32	Miguel Guillermo Bernui Contreras	4 Formación Cristiana IX: Regular	Ciclo 9 | Grupo UPN	Educación Inicial y Puericultura, Presencial, Presencial, Sede Lima	FACIHED
33	Miguel Guillermo Bernui Contreras	5 Formación Cristiana IX: Regular	Ciclo 9 | Grupo Único	Ciencias de la Comunicación, Presencial, Presencial, Sede Lima	FACIHED
37	Juan Carlos Torrealva Callirgos	4 Formación Cristiana III: Regular	Ciclo 3 | Grupo Único	COMUNICACIÓN AUDIOVISUAL Y MEDIOS INTERACTIVOS, Presencial, Presencial, Sede Lima	FACIHED
38	Juan Carlos Torrealva Callirgos	5 Formación Cristiana III: Regular	Ciclo 3 | Grupo Único	Derecho, Presencial, Presencial, Sede Lima	FACIHED
39	Juan Carlos Torrealva Callirgos	6 Formación Cristiana III: Regular	Ciclo 3 | Grupo Único	Educación, especialidad primaria y pedagogía terapéutica, Presencial, Presencial, Sede Lima	FACIHED
46	Belky Dante Neira Reyes	1 Formación Cristiana I: Regular	Ciclo 1 | Grupo 2	Derecho, Presencial, Presencial, Sede Lima	FACIHED
47	Belky Dante Neira Reyes	2 Formación Cristiana I: Regular	Ciclo 1 | Grupo 1	Derecho, Presencial, Presencial, Sede Lima	FACIHED
48	Belky Dante Neira Reyes	3 Formación Cristiana I: Regular	Ciclo 1 | Grupo Único	COMUNICACIÓN AUDIOVISUAL Y MEDIOS INTERACTIVOS, Presencial, Presencial, Sede Lima	FACIHED
49	Belky Dante Neira Reyes	4 Formación Cristiana I: Regular	Ciclo 1 | Grupo Único	Educación, especialidad primaria y pedagogía terapéutica, Presencial, Presencial, Sede Lima	FACIHED
50	David Jack Brañez Cajahuaringa	2 Formación Cristiana V: Regular	Ciclo 5 | Grupo Único	Educación, especialidad primaria y pedagogía terapéutica, Presencial, Presencial, Sede Lima	FACIHED
51	David Jack Brañez Cajahuaringa	3 Formación Cristiana V: Regular	Ciclo 5 | Grupo Único	Derecho, Presencial, Presencial, Sede Lima	FACIHED
52	David Jack Brañez Cajahuaringa	5 Formación Cristiana V: Regular	Ciclo 5 | Grupo Único	Ciencias de la Comunicación, Presencial, Presencial, Sede Lima	FACIHED
5	Maria Teresa Pinazo Sauñe	1 Formación Cristiana V: Regular	Ciclo 5 | Grupo Único	Marketing y Negocios Internacionales, Presencial, Presencial, Sede Lima	FCE
6	Maria Teresa Pinazo Sauñe	2 Formación Cristiana V: Regular	Ciclo 5 | Grupo Único	Contabilidad, gestión tributaria y Aduanera, Presencial, Presencial, Sede Lima	FCE
7	Maria Teresa Pinazo Sauñe	3 Formación Cristiana V: Regular	Ciclo 5 | Grupo Único	Administración, Presencial, Presencial, Sede Lima	FCE
8	Edwing Steven Quintana Bravo	1 Formación Cristiana III: Regular	Ciclo 3 | Grupo Único	Contabilidad, gestión tributaria y Aduanera, Presencial, Presencial, Sede Lima	FCE
9	Edwing Steven Quintana Bravo	4 Formación Cristiana III: Regular	Ciclo 3 | Grupo Único	Marketing y Negocios Internacionales, Presencial, Presencial, Sede Lima	FCE
10	Edwing Steven Quintana Bravo	5 Formación Cristiana III: Regular	Ciclo 3 | Grupo Único	Administración, Presencial, Presencial, Sede Lima	FCE
11	Edwing Steven Quintana Bravo	8 Formación Cristiana IX: Regular	Ciclo 9 | Grupo Único	Contabilidad y Gestión Tributaria, Presencial, Presencial, Sede Lima	FCE
12	Faimes Palacios Morales	1 Formación Cristiana I: Regular	Ciclo 1 | Grupo Único	Marketing y Negocios Internacionales, Presencial, Presencial, Sede Lima	FCE
13	Faimes Palacios Morales	2 Formación Cristiana I: Regular	Ciclo 1 | Grupo Único	Contabilidad, gestión tributaria y Aduanera, Presencial, Presencial, Sede Lima	FCE
14	Faimes Palacios Morales	4 Formación Cristiana I: Regular	Ciclo 1 | Grupo Único	Administración, Presencial, Presencial, Sede Lima	FCE
15	Faimes Palacios Morales	5 Formación Cristiana I: Regular	Ciclo 1 | Grupo Único	Negocios Internacionales y Gestión Portuaria, Presencial, Presencial, Sede Lima	FCE
16	Norbin Chiroque Chininin	3 Formación Cristiana VII: Regular	Ciclo 7 | Grupo Único	Contabilidad y Gestión Tributaria, Presencial, Presencial, Sede Lima	FCE
17	Norbin Chiroque Chininin	4 Formación Cristiana VII: Regular	Ciclo 7 | Grupo Único	Administración, Presencial, Presencial, Sede Lima	FCE
18	Norbin Chiroque Chininin	6 Formación Cristiana VII: Regular	Ciclo 7 | Grupo Único	Marketing y Negocios Internacionales, Presencial, Presencial, Sede Lima	FCE
19	Norbin Chiroque Chininin	7 Formación Cristiana IX: Regular	Ciclo 9 | Grupo Único	Administración, Presencial, Presencial, Sede Lima	FCE
23	Chumbes Rojas Carlos Antonio	8 Formación Cristiana IX: Regular	Ciclo 9 | Grupo Único	Marketing y Negocios Internacionales, Presencial, Presencial, Sede Lima	FCE
1	Benjamin David Trinidad Ticse	1 Formación Cristiana I: Regular	Ciclo 1 | Grupo 2	Psicología, Presencial, Presencial, Sede Lima	FCS
2	Benjamin David Trinidad Ticse	2 Formación Cristiana I: Regular	Ciclo 1 | Grupo 1	Psicología, Presencial, Presencial, Sede Lima	FCS
3	Benjamin David Trinidad Ticse	3 Formación Cristiana I: Regular	Ciclo 1 | Grupo 3	Psicología, Presencial, Presencial, Sede Lima	FCS
4	Benjamin David Trinidad Ticse	4 Formación Cristiana I: Regular	Ciclo 1 | Grupo Único	Nutrición Humana, Presencial, Presencial, Sede Lima	FCS
20	Chumbes Rojas Carlos Antonio	5 Formación Cristiana IX: Regular	Ciclo 9 | Grupo 1	Psicología, Presencial, Presencial, Sede Lima	FCS
22	Chumbes Rojas Carlos Antonio	7 Formación Cristiana IX: Regular	Ciclo 9 | Grupo Único	Nutrición Humana, Presencial, Presencial, Sede Lima	FCS
24	Raul Sotelo Requena	1 Liderazgo y Desarrollo Personal: Regular	Ciclo 1 | Grupo 1	Medicina Humana, Presencial, Presencial, Sede Lima	FCS
25	Raul Sotelo Requena	2 Liderazgo y Desarrollo Personal: Regular	Ciclo 1 | Grupo 3	Medicina Humana, Presencial, Presencial, Sede Lima	FCS
26	Raul Sotelo Requena	3 Liderazgo y Desarrollo Personal: Regular	Ciclo 1 | Grupo 2	Medicina Humana, Presencial, Presencial, Sede Lima	FCS
27	Raul Sotelo Requena	4 Formación Cristiana I: Regular	Ciclo 1 | Grupo Único	Tecnología Médica en Terapia Física y Rehabilitación, Presencial, Presencial, Sede Lima	FCS
28	Raul Sotelo Requena	5 Formación Cristiana I: Regular	Ciclo 1 | Grupo Único	Tecnología Médica en Laboratorio Clínico y Anatomía Patológica, Presencial, Presencial, Sede Lima	FCS
34	David Mamani Esenarro	1 Formación y Desarrollo Integral III: Doctrinas Bíblicas: Regular	Ciclo 5 | Grupo Único	Medicina Humana, Presencial, Presencial, Sede Lima	FCS
35	David Mamani Esenarro	2 Formación Cristiana VII: Regular	Ciclo 7 | Grupo 1	Enfermería, Presencial, Presencial, Sede Lima	FCS
36	David Mamani Esenarro	3 Formación y Desarrollo Integral VIII: Regular	Ciclo 11 | Grupo Único	Medicina Humana, Presencial, Presencial, Sede Lima	FCS
60	Robert Humberto Del Aguila Tananta	1 Formación Cristiana II: Regular	Ciclo 2 | Grupo Único	Psicología, Presencial, Presencial, Sede Lima	FCS
61	Robert Humberto Del Aguila Tananta	2 Formación y Desarrollo Integral I: La Biblia: Regular	Ciclo 3 | Grupo 2	Medicina Humana, Presencial, Presencial, Sede Lima	FCS
62	Robert Humberto Del Aguila Tananta	3 Formación y Desarrollo Integral I: La Biblia: Regular	Ciclo 3 | Grupo 3	Medicina Humana, Presencial, Presencial, Sede Lima	FCS
63	Robert Humberto Del Aguila Tananta	4 Formación y Desarrollo Integral I: La Biblia: Regular	Ciclo 3 | Grupo 1	Medicina Humana, Presencial, Presencial, Sede Lima	FCS
64	Robert Humberto Del Aguila Tananta	5 Formación Cristiana IV: Regular	Ciclo 4 | Grupo Único	Psicología, Presencial, Presencial, Sede Lima	FCS
65	Jose Antonio Manzanares Sipion	1 Formación y Desarrollo Integral V: Regular	Ciclo 7 | Grupo Único	Medicina Humana, Presencial, Presencial, Sede Lima	FCS
66	Jose Antonio Manzanares Sipion	2 Formación Cristiana VII: Regular	Ciclo 7 | Grupo 1	Psicología, Presencial, Presencial, Sede Lima	FCS
67	Jose Antonio Manzanares Sipion	3 Formación Cristiana VII: Regular	Ciclo 7 | Grupo 2	Psicología, Presencial, Presencial, Sede Lima	FCS
68	Jose Antonio Manzanares Sipion	4 Formación Cristiana VII: Regular	Ciclo 7 | Grupo Único	Nutrición Humana, Presencial, Presencial, Sede Lima	FCS
69	Jose Antonio Manzanares Sipion	5 Formación y Desarrollo Integral VII: Regular	Ciclo 9 | Grupo Único	Medicina Humana, Presencial, Presencial, Sede Lima	FCS
70	Gerardo Rafael Cuentas Yapo	1 Formación Cristiana III: Regular	Ciclo 3 | Grupo 1	Enfermería, Presencial, Presencial, Sede Lima	FCS
71	Gerardo Rafael Cuentas Yapo	2 Formación y Desarrollo Integral III: Regular	Ciclo 3 | Grupo Único	Tecnología Médica en Laboratorio Clínico y Anatomía Patológica, Presencial, Presencial, Sede Lima	FCS
72	Gerardo Rafael Cuentas Yapo	3 Formación Cristiana V: Regular	Ciclo 5 | Grupo Único	Nutrición Humana, Presencial, Presencial, Sede Lima	FCS
73	Gerardo Rafael Cuentas Yapo	4 Formación Cristiana V: Regular	Ciclo 5 | Grupo 1	Enfermería, Presencial, Presencial, Sede Lima	FCS
74	Gerardo Rafael Cuentas Yapo	5 Formación Cristiana V: Regular	Ciclo 5 | Grupo 2	Enfermería, Presencial, Presencial, Sede Lima	FCS
75	Gerardo Rafael Cuentas Yapo	6 Formación Cristiana V: Regular	Ciclo 5 | Grupo 1	Psicología, Presencial, Presencial, Sede Lima	FCS
76	Gerardo Rafael Cuentas Yapo	7 Formación Cristiana V: Regular	Ciclo 5 | Grupo 2	Psicología, Presencial, Presencial, Sede Lima	FCS
87	David Isaac Ticona Jove	1 Formación Cristiana I: Regular	Ciclo 1 | Grupo 2	Enfermería, Presencial, Presencial, Sede Lima	FCS
88	David Isaac Ticona Jove	2 Formación Cristiana I: Regular	Ciclo 1 | Grupo 1	Enfermería, Presencial, Presencial, Sede Lima	FCS
89	David Isaac Ticona Jove	3 Formación Cristiana III: Regular	Ciclo 3 | Grupo Único	Nutrición Humana, Presencial, Presencial, Sede Lima	FCS
90	David Isaac Ticona Jove	4 Formación Cristiana III: Regular	Ciclo 3 | Grupo 1	Psicología, Presencial, Presencial, Sede Lima	FCS
91	David Isaac Ticona Jove	5 Formación Cristiana III: Regular	Ciclo 3 | Grupo 2	Psicología, Presencial, Presencial, Sede Lima	FCS
92	David Isaac Ticona Jove	6 Formación Cristiana III: Regular	Ciclo 3 | Grupo 2	Enfermería, Presencial, Presencial, Sede Lima	FCS
93	David Isaac Ticona Jove	7 Formación Cristiana VII: Regular	Ciclo 7 | Grupo 2	Enfermería, Presencial, Presencial, Sede Lima	FCS
94	Joel Yosimar Atoche Rosillo	2 Formación Cristiana IX: Regular	Ciclo 9 | Grupo 2	Psicología, Presencial, Presencial, Sede Lima	FCS
96	Joel Yosimar Atoche Rosillo	5 Formación Cristiana IX: Regular	Ciclo 9 | Grupo 1	Enfermería, Presencial, Presencial, Sede Lima	FCS
97	Hector Willy Roncal Salazar	6 Formación Cristiana IX: Regular	Ciclo 9 | Grupo UPN	Psicología, Presencial, Presencial, Sede Lima	FCS
98	Hector Willy Roncal Salazar	7 Formación Cristiana IX: Regular	Ciclo 9 | Grupo 2	Enfermería, Presencial, Presencial, Sede Lima	FCS
21	Chumbes Rojas Carlos Antonio	6 Formación Cristiana IX: Regular	Ciclo 9 | Grupo Único	Ingeniería de Industrias Alimentarias, Presencial, Presencial, Sede Lima	FIA
40	Luz Milagros Vivanco Canchari	1 Formación Cristiana III: Regular	Ciclo 3 | Grupo Único	INGENIERIA INDUSTRIAL, Presencial, Presencial, Sede Lima	FIA
41	Luz Milagros Vivanco Canchari	2 Formación Cristiana III: Regular	Ciclo 3 | Grupo Único	Ingeniería Civil, Presencial, Presencial, Sede Lima	FIA
42	Luz Milagros Vivanco Canchari	3 Formación Cristiana III: Regular	Ciclo 3 | Grupo Único	Ingeniería de Sistemas, Presencial, Presencial, Sede Lima	FIA
43	Luz Milagros Vivanco Canchari	4 Formación Cristiana III: Regular	Ciclo 3 | Grupo Único	Arquitectura y Urbanismo, Presencial, Presencial, Sede Lima	FIA
44	Luz Milagros Vivanco Canchari	5 Formación Cristiana III: Regular	Ciclo 3 | Grupo Único	Ingeniería Ambiental, Presencial, Presencial, Sede Lima	FIA
45	Luz Milagros Vivanco Canchari	7 Formación Cristiana VII: Regular	Ciclo 7 | Grupo 1	Ingeniería de Sistemas, Presencial, Presencial, Sede Lima	FIA
53	Jonathan Andres Pacheco Cavero	1 Formación Cristiana I: Regular	Ciclo 1 | Grupo Único	Ingeniería de Sistemas, Presencial, Presencial, Sede Lima	FIA
54	Jonathan Andres Pacheco Cavero	2 Formación Cristiana V: Regular	Ciclo 5 | Grupo Único	Ingeniería de Industrias Alimentarias, Presencial, Presencial, Sede Lima	FIA
55	Jonathan Andres Pacheco Cavero	3 Formación Cristiana V: Regular	Ciclo 5 | Grupo Único	Arquitectura y Urbanismo, Presencial, Presencial, Sede Lima	FIA
56	Jonathan Andres Pacheco Cavero	4 Formación Cristiana V: Regular	Ciclo 5 | Grupo Único	Ingeniería Civil, Presencial, Presencial, Sede Lima	FIA
57	Jonathan Andres Pacheco Cavero	5 Formación Cristiana V: Regular	Ciclo 5 | Grupo 2	Ingeniería de Sistemas, Presencial, Presencial, Sede Lima	FIA
58	Jonathan Andres Pacheco Cavero	6 Formación Cristiana V: Regular	Ciclo 5 | Grupo 1	Ingeniería de Sistemas, Presencial, Presencial, Sede Lima	FIA
59	Jonathan Andres Pacheco Cavero	7 Formación Cristiana IX: Regular	Ciclo 9 | Grupo Único	Ingeniería de Sistemas, Presencial, Presencial, Sede Lima	FIA
77	Neal Samuel Pacheco Napan	1 Formación Cristiana I: Regular	Ciclo 1 | Grupo Único	INGENIERIA INDUSTRIAL, Presencial, Presencial, Sede Lima	FIA
78	Neal Samuel Pacheco Napan	2 Formación Cristiana I: Regular	Ciclo 1 | Grupo Único	Ingeniería Civil, Presencial, Presencial, Sede Lima	FIA
79	Neal Samuel Pacheco Napan	3 Formación Cristiana VII: Regular	Ciclo 7 | Grupo Único	Ingeniería Civil, Presencial, Presencial, Sede Lima	FIA
80	Neal Samuel Pacheco Napan	4 Formación Cristiana VII: Regular	Ciclo 7 | Grupo 2	Ingeniería de Sistemas, Presencial, Presencial, Sede Lima	FIA
81	Neal Samuel Pacheco Napan	5 Formación Cristiana VII: Regular	Ciclo 7 | Grupo Único	Arquitectura, Presencial, Presencial, Sede Lima	FIA
82	Neal Samuel Pacheco Napan	6 Formación Cristiana VII: Regular	Ciclo 7 | Grupo Único	Ingeniería de Industrias Alimentarias, Presencial, Presencial, Sede Lima	FIA
83	Neal Samuel Pacheco Napan	7 Formación Cristiana IX: Regular	Ciclo 9 | Grupo Único	Ingeniería Civil, Presencial, Presencial, Sede Lima	FIA
84	Manuel Gil Iberico Bin	1 Formación Cristiana I: Regular	Ciclo 1 | Grupo Único	Ingeniería de Industrias Alimentarias, Presencial, Presencial, Sede Lima	FIA
85	Manuel Gil Iberico Bin	2 Formación Cristiana I: Regular	Ciclo 1 | Grupo Único	Arquitectura y Urbanismo, Presencial, Presencial, Sede Lima	FIA
86	Manuel Gil Iberico Bin	3 Formación Cristiana I: Regular	Ciclo 1 | Grupo Único	INGENIERÍA DE SOFTWARE, Presencial, Presencial, Sede Lima	FIA
95	Joel Yosimar Atoche Rosillo	3 Formación Cristiana IX: Regular	Ciclo 9 | Grupo Único	Arquitectura, Presencial, Presencial, Sede Lima	FIA
`;

const christianFormationCourses = christianFormationCourseRows.trim().split("\n").map((row, index) => {
  const [number, pastor, course, cycleGroup, career, faculty] = row.split("\t");
  const [cycle = "", group = ""] = cycleGroup.split("|").map((part) => part.trim());
  return {
    id: `course-${index + 1}`,
    number,
    pastor,
    course: course.replace(/^\d+\s+/, ""),
    cycle,
    group,
    cycleGroup,
    career,
    faculty
  };
});

const knownFormationEnrollmentTotal = 3599;

const defaultTeachingAssignments = [
  {
    courseId: "course-16",
    label: "Maria Teresa Pinazo Sauñe - Formación Cristiana V: Regular - Marketing y Negocios Internacionales",
    students: [
      ["201910622", "Villa Unión"],
      ["202310532", "Villa Unión"],
      ["202410397", "Villa Unión"],
      ["202410410", "Villa Unión"],
      ["202410436", "Villa Unión"],
      ["202412857", "Villa Unión"],
      ["202410389", "Villa Unión"],
      ["202410391", "Villa Unión"],
      ["202310857", "Villa Unión"],
      ["202310471", "Villa Unión"],
      ["202310822", "Villa Unión"],
      ["202312338", "Visita NA"],
      ["202412865", "Visita OI"],
      ["202410411", "Visita OI"],
      ["202410404", "Visita OI"],
      ["202412032", "Visita OI"],
      ["202311576", "Visita NA"],
      ["202410396", "Visita NA"],
      ["202412854", "Visita NA"],
      ["202410388", "Visita NA"]
    ]
  },
  {
    courseId: "course-17",
    label: "Maria Teresa Pinazo Sauñe - Formación Cristiana V: Regular - Contabilidad, gestión tributaria y Aduanera",
    students: [
      ["202410594", "Visita OI"],
      ["202121862", "Visita OI"],
      ["202413425", "Visita OI"],
      ["202410595", "Visita OI"],
      ["202412705", "Villa Unión"],
      ["202410588", "Villa Unión"],
      ["202410529", "Villa Unión"],
      ["202310522", "Villa Unión"],
      ["202413033", "Villa Unión"],
      ["202311590", "Villa Unión"],
      ["202410583", "Villa Unión"],
      ["202410596", "Villa Unión"],
      ["202410598", "Villa Unión"],
      ["202410584", "Villa Unión"]
    ]
  },
  {
    courseId: "course-18",
    label: "Maria Teresa Pinazo Sauñe - Formación Cristiana V: Regular - Administración",
    students: [
      ["202310500", "Visita OI"],
      ["202410531", "Visita OI"],
      ["202122403", "Visita OI"],
      ["202122407", "Visita OI"],
      ["202410532", "Visita OI"],
      ["202210141", "Visita OI"],
      ["202410526", "Visita OI"],
      ["202211463", "Visita OI"],
      ["202312278", "Visita OI"],
      ["202412970", "Villa Unión"],
      ["202312336", "Villa Unión"],
      ["202410537", "Villa Unión"],
      ["202410528", "Villa Unión"],
      ["202410535", "Villa Unión"],
      ["202311573", "Visita NA"],
      ["201520536", "Visita NA"],
      ["202100036", "Visita NA"],
      ["202413824", "Visita NA"],
      ["202312279", "Visita NA"],
      ["202410534", "Visita NA"],
      ["202410538", "Visita NA"],
      ["201910532", "Visita NA"]
    ]
  },
  {
    courseId: "course-19",
    label: "Edwing Steven Quintana Bravo - Formación Cristiana III: Regular - Contabilidad, gestión tributaria y Aduanera",
    students: [
      ["202510176", "Visita OI"],
      ["202513817", "Visita OI"],
      ["202612007", "Visita OI"],
      ["202510181", "Villa Unión"],
      ["202421123", "Villa Unión"],
      ["202510182", "Villa Unión"],
      ["202510145", "Villa Unión"],
      ["202512259", "Villa Unión"],
      ["202512251", "Villa Unión"],
      ["202510144", "Villa Unión"],
      ["202510175", "Visita NA"],
      ["202512257", "Visita NA"],
      ["202211908", "Visita NA"]
    ]
  },
  {
    courseId: "course-20",
    label: "Edwing Steven Quintana Bravo - Formación Cristiana III: Regular - Marketing y Negocios Internacionales",
    students: [
      ["202513751", "Visita OI"],
      ["202510313", "Visita OI"],
      ["202410441", "Visita OI"],
      ["202510304", "Visita OI"],
      ["202512245", "Visita OI"],
      ["202513608", "Visita OI"],
      ["202510309", "Visita OI"],
      ["202410407", "Villa Unión"],
      ["202420530", "Villa Unión"],
      ["202510308", "Villa Unión"],
      ["202513654", "Villa Unión"],
      ["202311507", "Villa Unión"],
      ["202413817", "Villa Unión"],
      ["202510311", "Villa Unión"],
      ["202421124", "Villa Unión"],
      ["202510317", "Villa Unión"],
      ["202410274", "Villa Unión"],
      ["202510143", "Villa Unión"],
      ["202513750", "Villa Unión"],
      ["202510547", "Villa Unión"],
      ["202510303", "Villa Unión"],
      ["202410390", "Villa Unión"],
      ["202512249", "Visita NA"],
      ["202412870", "Visita NA"],
      ["202412867", "Visita NA"],
      ["202512244", "Visita NA"],
      ["202512247", "Visita NA"],
      ["202510151", "Visita NA"],
      ["202512235", "Visita NA"],
      ["202510312", "Visita NA"]
    ]
  },
  {
    courseId: "course-21",
    label: "Edwing Steven Quintana Bravo - Formación Cristiana III: Regular - Administración",
    students: [
      ["202410385", "Visita OI"],
      ["202510292", "Visita OI"],
      ["202513747", "Visita OI"],
      ["202510302", "Visita OI"],
      ["202513598", "Villa Unión"],
      ["202512234", "Villa Unión"],
      ["202513746", "Villa Unión"],
      ["202412975", "Villa Unión"],
      ["202512238", "Villa Unión"],
      ["202510288", "Villa Unión"],
      ["202512236", "Villa Unión"],
      ["202512861", "Villa Unión"],
      ["202510301", "Visita NA"],
      ["202512239", "Visita NA"],
      ["202512232", "Visita NA"],
      ["202410521", "Visita NA"],
      ["202512233", "Visita NA"],
      ["202413743", "Visita NA"],
      ["202512237", "Visita NA"]
    ]
  },
  {
    courseId: "course-22",
    label: "Edwing Steven Quintana Bravo - Formación Cristiana IX: Regular - Contabilidad y Gestión Tributaria",
    students: [
      ["202210150", "Invitado OI"],
      ["202010357", "Invitado OI"],
      ["202211507", "Invitado OI"],
      ["202210717", "Villa Unión"],
      ["202210145", "Villa Unión"],
      ["202210157", "Villa Unión"],
      ["202210143", "Villa Unión"],
      ["202210025", "Villa Unión"],
      ["202117292", "Villa Unión"],
      ["202210159", "Villa Unión"],
      ["202210154", "Villa Unión"],
      ["202211508", "Villa Unión"],
      ["202220188", "Invitado NA"],
      ["202312287", "Invitado NA"],
      ["202312286", "Invitado NA"],
      ["202212027", "Invitado NA"],
      ["202311587", "Invitado NA"]
    ]
  },
  {
    courseId: "course-23",
    label: "Faimes Palacios Morales - Formación Cristiana I: Regular - Marketing y Negocios Internacionales",
    students: [
      ["202610491", "Visita OI"],
      ["202613755", "Visita OI"],
      ["202613003", "Villa Unión"],
      ["202613001", "Villa Unión"],
      ["202610489", "Villa Unión"],
      ["202611257", "Villa Unión"],
      ["202612703", "Villa Unión"],
      ["202612702", "Villa Unión"],
      ["202610498", "Villa Unión"],
      ["202612695", "Villa Unión"],
      ["202612999", "Villa Unión"],
      ["202610504", "Villa Unión"],
      ["202612994", "Villa Unión"],
      ["202612110", "Villa Unión"],
      ["202612707", "Villa Unión"],
      ["202613758", "Villa Unión"],
      ["202612685", "Villa Unión"],
      ["202118950", "Villa Unión"],
      ["202610510", "Villa Unión"],
      ["202610512", "Villa Unión"],
      ["202610496", "Visita NA"],
      ["202613944", "Visita NA"],
      ["202512242", "Visita NA"],
      ["202610511", "Visita NA"],
      ["202610507", "Visita NA"],
      ["202610506", "Visita NA"],
      ["202610508", "Visita NA"],
      ["202613376", "Visita NA"],
      ["202613941", "Visita NA"],
      ["202612997", "Visita NA"],
      ["202613760", "Visita NA"],
      ["202614768", "Visita NA"],
      ["202612704", "Visita NA"],
      ["202312262", "Visita NA"]
    ]
  },
  {
    courseId: "course-24",
    label: "Faimes Palacios Morales - Formación Cristiana I: Regular - Contabilidad, gestión tributaria y Aduanera",
    students: [
      ["202610521", "Visita OI"],
      ["202612008", "Visita OI"],
      ["202014599", "Visita OI"],
      ["202610519", "Visita OI"],
      ["202610525", "Visita OI"],
      ["202612007", "Visita OI"],
      ["202610495", "Villa Unión"],
      ["202610515", "Villa Unión"],
      ["202610524", "Villa Unión"],
      ["202613949", "Villa Unión"],
      ["202510604", "Villa Unión"],
      ["202610514", "Villa Unión"],
      ["202610516", "Villa Unión"],
      ["202612010", "Villa Unión"],
      ["202410358", "Villa Unión"],
      ["202612717", "Villa Unión"],
      ["202512256", "Villa Unión"],
      ["202510979", "Villa Unión"],
      ["202612713", "Villa Unión"],
      ["202512253", "Villa Unión"],
      ["202612714", "Villa Unión"],
      ["202610518", "Villa Unión"],
      ["202610520", "Visita NA"],
      ["202612009", "Visita NA"],
      ["202612718", "Visita NA"],
      ["202612715", "Visita NA"],
      ["202613948", "Visita NA"],
      ["202613947", "Visita NA"]
    ]
  },
  {
    courseId: "course-25",
    label: "Faimes Palacios Morales - Formación Cristiana I: Regular - Administración",
    students: [
      ["202210125", "Villa Unión"],
      ["202610476", "Villa Unión"],
      ["202610481", "Villa Unión"],
      ["202510299", "Villa Unión"],
      ["202612687", "Villa Unión"],
      ["202610484", "Villa Unión"],
      ["202613753", "Villa Unión"],
      ["202610478", "Villa Unión"],
      ["202613077", "Villa Unión"],
      ["202610477", "Villa Unión"],
      ["202610485", "Villa Unión"],
      ["202520506", "Villa Unión"],
      ["202610483", "Villa Unión"],
      ["202613754", "Villa Unión"],
      ["202512770", "Villa Unión"],
      ["202510174", "Villa Unión"],
      ["202512202", "Villa Unión"],
      ["202612690", "Visita NA"],
      ["202610474", "Visita NA"],
      ["202610475", "Visita NA"],
      ["202612691", "Visita NA"],
      ["202510298", "Visita NA"],
      ["202610482", "Visita NA"],
      ["202612689", "Visita NA"],
      ["202610480", "Visita NA"],
      ["202610473", "Visita NA"],
      ["202412869", "Visita NA"],
      ["202610039", "Visita NA"],
      ["202613936", "Visita NA"],
      ["202613792", "Visita NA"],
      ["202613982", "Visita NA"],
      ["202118676", "Visita NA"]
    ]
  },
  {
    courseId: "course-26",
    label: "Faimes Palacios Morales - Formación Cristiana I: Regular - Negocios Internacionales y Gestión Portuaria",
    students: [
      ["202310499", "Visita OI"],
      ["202613365", "Villa Unión"],
      ["202612792", "Villa Unión"],
      ["202614796", "Villa Unión"],
      ["202610428", "Villa Unión"],
      ["202613999", "Villa Unión"],
      ["202612791", "Villa Unión"],
      ["202613937", "Villa Unión"],
      ["202612701", "Villa Unión"],
      ["202612696", "Villa Unión"],
      ["202610683", "Visita NA"],
      ["202613789", "Visita NA"],
      ["202610923", "Visita NA"],
      ["202610682", "Visita NA"],
      ["202612793", "Visita NA"],
      ["202612790", "Visita NA"],
      ["202613709", "Visita NA"],
      ["202520523", "Visita NA"],
      ["202512737", "Visita NA"],
      ["202613997", "Visita NA"],
      ["202612700", "Visita NA"]
    ]
  },
  {
    courseId: "course-27",
    label: "Norbin Chiroque Chininin - Formación Cristiana VII: Regular - Contabilidad y Gestión Tributaria",
    students: [
      ["202310519", "Visita OI"],
      ["202211505", "Visita OI"],
      ["202312329", "Visita OI"],
      ["202312293", "Visita OI"],
      ["202310514", "Visita OI"],
      ["202312289", "Villa Unión"],
      ["202211278", "Villa Unión"],
      ["202310510", "Villa Unión"],
      ["202210152", "Villa Unión"],
      ["202310526", "Villa Unión"],
      ["202310524", "Villa Unión"],
      ["202100030", "Villa Unión"],
      ["202211506", "Villa Unión"],
      ["202212945", "Villa Unión"],
      ["202310509", "Villa Unión"],
      ["202320333", "Villa Unión"],
      ["202311580", "Villa Unión"],
      ["202310517", "Villa Unión"],
      ["202110784", "Visita NA"],
      ["202310505", "Visita NA"],
      ["202310507", "Visita NA"],
      ["202312291", "Visita NA"]
    ]
  },
  {
    courseId: "course-28",
    label: "Norbin Chiroque Chininin - Formación Cristiana VII: Regular - Administración",
    students: [
      ["202211466", "Visita OI"],
      ["202120330", "Villa Unión"],
      ["202210177", "Villa Unión"],
      ["202100008", "Villa Unión"],
      ["202312207", "Villa Unión"],
      ["202320143", "Villa Unión"],
      ["202122310", "Villa Unión"],
      ["202310494", "Villa Unión"],
      ["202210101", "Villa Unión"],
      ["202410591", "Villa Unión"],
      ["202413885", "Villa Unión"],
      ["202311565", "Villa Unión"],
      ["202312283", "Villa Unión"],
      ["202310749", "Visita NA"],
      ["202312208", "Visita NA"],
      ["202312277", "Visita NA"],
      ["202110777", "Visita NA"],
      ["202510359", "Visita NA"],
      ["202320347", "Visita NA"]
    ]
  },
  {
    courseId: "course-29",
    label: "Norbin Chiroque Chininin - Formación Cristiana VII: Regular - Marketing y Negocios Internacionales",
    students: [
      ["202220296", "Visita OI"],
      ["202210166", "Visita OI"],
      ["202310531", "Visita OI"],
      ["202310528", "Visita OI"],
      ["202311627", "Visita OI"],
      ["202310822", "Villa Unión"],
      ["202310535", "Villa Unión"],
      ["202120468", "Villa Unión"],
      ["202310546", "Villa Unión"],
      ["202310530", "Villa Unión"],
      ["202311569", "Villa Unión"],
      ["202310545", "Villa Unión"],
      ["202310544", "Villa Unión"],
      ["202310533", "Villa Unión"],
      ["202310416", "Villa Unión"],
      ["202220294", "Villa Unión"],
      ["202310394", "Villa Unión"],
      ["202310534", "Villa Unión"],
      ["201920268", "Villa Unión"],
      ["202320171", "Visita NA"],
      ["202220295", "Visita NA"],
      ["202311575", "Visita NA"],
      ["202320170", "Visita NA"],
      ["202220297", "Visita NA"],
      ["202312342", "Visita NA"],
      ["202320350", "Visita NA"],
      ["202310538", "Visita NA"],
      ["202320348", "Visita NA"],
      ["202312285", "Visita NA"],
      ["202310541", "Visita NA"],
      ["202110735", "Visita NA"],
      ["202220302", "Visita NA"]
    ]
  },
  {
    courseId: "course-30",
    label: "Norbin Chiroque Chininin - Formación Cristiana IX: Regular - Administración",
    students: [
      ["202210137", "Visita OI"],
      ["202211458", "Visita OI"],
      ["202210101", "Villa Unión"],
      ["202211670", "Villa Unión"],
      ["202220291", "Villa Unión"],
      ["202220292", "Villa Unión"],
      ["202210120", "Villa Unión"],
      ["202210146", "Villa Unión"],
      ["202210552", "Villa Unión"],
      ["202210123", "Villa Unión"],
      ["202210131", "Villa Unión"],
      ["202210127", "Villa Unión"],
      ["201710227", "Villa Unión"],
      ["202210582", "Villa Unión"],
      ["202513649", "Villa Unión"],
      ["202413885", "Villa Unión"],
      ["202122286", "Villa Unión"],
      ["202410592", "Villa Unión"],
      ["202011782", "Visita NA"],
      ["202210121", "Visita NA"],
      ["202010494", "Visita NA"],
      ["202213138", "Visita NA"],
      ["202413887", "Visita NA"],
      ["202110777", "Visita NA"],
      ["202123211", "Visita NA"],
      ["202011688", "Visita NA"],
      ["201811711", "Visita NA"],
      ["202410591", "Visita NA"],
      ["202122436", "Visita NA"]
    ]
  },
  {
    courseId: "course-31",
    label: "Chumbes Rojas Carlos Antonio - Formación Cristiana IX: Regular - Marketing y Negocios Internacionales",
    students: [
      ["202212702", "Villa Unión"],
      ["202210118", "Villa Unión"],
      ["202212706", "Villa Unión"],
      ["202210194", "Villa Unión"],
      ["202212703", "Villa Unión"],
      ["202211588", "Villa Unión"],
      ["202212707", "Villa Unión"],
      ["202212692", "Villa Unión"],
      ["202210140", "Visita NA"],
      ["202211907", "Visita NA"],
      ["202211906", "Visita NA"],
      ["202211589", "Visita NA"],
      ["202121380", "Visita NA"],
      ["202220301", "Visita NA"],
      ["202211814", "Visita NA"],
      ["202011610", "Visita NA"],
      ["202120480", "Visita NA"],
      ["202212705", "Visita OI"],
      ["200920001", "Visita OI"],
      ["202220299", "Visita OI"],
      ["202213094", "Visita OI"]
    ]
  }
];

const pastoralClassificationByCode = defaultTeachingAssignments.reduce((records, assignment) => {
  assignment.students.forEach(([code, classification]) => {
    records[code] = classification;
  });
  return records;
}, {});

const roleFromCargo = {
  "Coordinador General": "general",
  "Coordinador de Facultad": "faculty",
  "Docente Capellan": "chaplain"
};

const users = pastors
  .map(([number, name, phone, dni, role, facultyCode]) => ({
    number,
    name,
    phone,
    dni: dni || `pastor-${number}`,
    loginDni: dni,
    role,
    facultyCode,
    roleKey: roleFromCargo[role]
  }));

let loggedInUser = null;
let currentUser = null;
let selectedVisitStudentCode = "";
let visitRecords = [];
let trainingRecords = [];
let eventRecords = [];
let smallGroupRecords = [];
let customMaranathaClasses = [];
let chaplaincyAssignments = {};
let pastorRoleAssignments = {};
let teachingEnrollments = {};
let retiredStudentCodes = {};
let selectedProfileStudentCode = "";
let selectedTeachingEnrollmentStudentCode = "";
let selectedTeachingCourseId = "";
let selectedTeachingPastorName = "";
let calendarDate = new Date();
let selectedEventId = "";
let selectedSmallGroupId = "";

function onlyDigits(value) {
  return String(value || "").replace(/\D/g, "");
}

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function nameTokens(value) {
  const ignored = new Set(["de", "del", "la", "las", "los", "y"]);
  return normalizeText(value).split(" ").filter((token) => token.length > 1 && !ignored.has(token));
}

function namesLikelyMatch(left, right) {
  const leftTokens = nameTokens(left);
  const rightTokens = new Set(nameTokens(right));
  const matches = leftTokens.filter((token) => rightTokens.has(token)).length;
  return matches >= Math.min(2, leftTokens.length, rightTokens.size);
}

const windowStoragePrefix = "maranatha-window-store:";

function readWindowStore() {
  if (!window.name?.startsWith(windowStoragePrefix)) return {};
  try {
    return JSON.parse(window.name.slice(windowStoragePrefix.length)) || {};
  } catch {
    return {};
  }
}

function writeWindowStore(store) {
  try {
    window.name = `${windowStoragePrefix}${JSON.stringify(store)}`;
  } catch {
    // If the browser blocks even this fallback, the app still continues in memory.
  }
}

const safeStorage = {
  get(key) {
    try {
      const value = window.localStorage.getItem(key);
      if (value !== null) return value;
    } catch {
      // File-based previews can block local storage; use the tab fallback below.
    }
    const store = readWindowStore();
    return Object.prototype.hasOwnProperty.call(store, key) ? store[key] : null;
  },
  set(key, value) {
    const store = readWindowStore();
    store[key] = value;
    writeWindowStore(store);
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // File-based previews can block local storage; the tab fallback above keeps refreshes safe.
    }
  },
  remove(key) {
    const store = readWindowStore();
    delete store[key];
    writeWindowStore(store);
    try {
      window.localStorage.removeItem(key);
    } catch {
      // Nothing to clear when storage is unavailable.
    }
  }
};

const backupStorageKeys = [
  "maranatha_user_dni",
  "maranatha_visit_records",
  "maranatha_training_records",
  "maranatha_event_records",
  "maranatha_chaplaincy_assignments_v2",
  "maranatha_pastor_role_assignments",
  "maranatha_teaching_enrollments_v3",
  "maranatha_retired_student_codes",
  "maranatha_small_group_records",
  "maranatha_custom_classes"
];

const maranathaClasses = [
  ["Facultad de ciencias de la Salud", "B202", "HA MASHIAJ-BA"],
  ["Facultad de ciencias de la Salud", "D406", "SHEVIL"],
  ["Facultad de ciencias de la Salud", "D402", "ARCANGEL"],
  ["Facultad de ciencias de la Salud", "C101", "ADONAI"],
  ["Facultad de ciencias de la Salud", "B301", "ASRIEL - EBENEZER"],
  ["Facultad de ciencias de la Salud", "", "AHAVAH"],
  ["Facultad de ciencias de la Salud", "B203", "JADASH"],
  ["Facultad de ciencias de la Salud", "B101", "YIREH"],
  ["Facultad de ciencias de la Salud", "C103", "SHABBATH PRAY"],
  ["Facultad de ciencias de la Salud", "B102", "MARANATHA"],
  ["Facultad de ciencias de la Salud", "C202", "NETZER"],
  ["Facultad de ciencias de la Salud", "", "MEKADESH"],
  ["Facultad de ciencias de la Salud", "A102", "TZURIEL"],
  ["Facultad de ciencias de la Salud", "D505", "ABIEL/JAZEL"],
  ["Facultad de Ciencias Empresariales", "D102", "ELIEL"],
  ["Facultad de Ciencias Empresariales", "D202", "JADASHIM"],
  ["Facultad de Ciencias Empresariales", "D204", "LIGHTHOUSE"],
  ["Facultad de Ciencias Empresariales", "D105", "EL OLAM"],
  ["Facultad de Ciencias Empresariales", "D203", "ISRAEL"],
  ["Facultad de Ciencias Humanas y Educacion", "Global Spark y 2do Piso Labcom", "ELIAM"],
  ["Facultad de Ciencias Humanas y Educacion", "D209", "LEX-FE"],
  ["Facultad de Ciencias Humanas y Educacion", "D204-207", "AZIEL- KADOSH- OHANA"],
  ["Facultad de Ciencias Humanas y Educacion", "D201-D202-D302", "AVODA -ABIEL-CONEXION 3:16"],
  ["Facultad de Ciencias Humanas y Educacion", "D202", "CONAVO"],
  ["Facultad de Ingenieria y Arquitectura", "E405", "ADRIEL"],
  ["Facultad de Ingenieria y Arquitectura", "E306", "MARANATHA CLASS 14"],
  ["Facultad de Ingenieria y Arquitectura", "", "JESED"],
  ["Facultad de Ingenieria y Arquitectura", "E401", "BENIMELEK"],
  ["Facultad de Ingenieria y Arquitectura", "E203", "OLAM"],
  ["Facultad de Ingenieria y Arquitectura", "E201", "NOVA LUX"],
  ["Facultad de Ingenieria y Arquitectura", "E406", "CORINTO"],
  ["Facultad de Ingenieria y Arquitectura", "E303", "TEAM FAITH"],
  ["Facultad de Ingenieria y Arquitectura", "E405", "BETHEL"],
  ["Facultad de Ingenieria y Arquitectura", "E206", "AZARIAS"],
  ["Facultad de Ingenieria y Arquitectura", "E305", "GAD ASER"],
  ["Facultad de Ingenieria y Arquitectura", "", "EMAUS"],
  ["Facultad de Ingenieria y Arquitectura", "E307", "CALEB"],
  ["Facultad de Ingenieria y Arquitectura", "E403", "HOREB"],
  ["Facultad de Ingenieria y Arquitectura", "E402", "CAPERNAUM"]
];

const roleProfiles = {
  general: {
    title: "Vista actual: Coordinador General",
    scope: "Todas las facultades",
    metrics: ["4,499 estudiantes", "5 facultades", "39 Maranatha Class", "20 pastores registrados"],
    focus: "Supervisa el avance institucional, compara facultades, revisa reportes y detecta areas que necesitan apoyo."
  },
  faculty: {
    title: "Vista actual: Coordinador de Facultad",
    scope: "Solo su facultad",
    metrics: ["Estudiantes de su facultad", "Pastores asignados", "Maranatha Class de la facultad", "Visitas y eventos locales"],
    focus: "Coordina escuelas, revisa asistencia, acompana a sus docentes capellanes y consolida reportes de facultad."
  },
  chaplain: {
    title: "Vista actual: Docente Capellan",
    scope: "Solo estudiantes asignados",
    metrics: ["Lista pastoral asignada", "Grupos pequenos propios", "Visitas pendientes", "Asistencia de sus estudiantes"],
    focus: "Registra visitas, crea grupos pequenos, toma asistencia y actualiza el estado pastoral de sus estudiantes."
  },
  smallGroup: {
    title: "Vista actual: Lider de Grupo Pequeno",
    scope: "Solo su grupo pequeno",
    metrics: ["Integrantes del grupo", "Asistencia del viernes", "Pedidos y observaciones", "Derivaciones al pastor"],
    focus: "Gestiona la reunion del viernes, registra asistencia y comunica necesidades pastorales al docente capellan."
  },
  classLeader: {
    title: "Vista actual: Lider de Maranatha Class",
    scope: "Solo su Maranatha Class",
    metrics: ["Inscritos en la clase", "Asistencia sabatica", "Grupos pequenos asociados", "Actividades eclesiasticas"],
    focus: "Mide la participacion del sabado, organiza responsables y reporta asistencia de la Maranatha Class."
  }
};

const homeByRole = {
  general: {
    label: "Ingreso como Coordinador General",
    title: "Vista general institucional",
    scope: "Todas las facultades",
    description: "Supervision completa del trabajo pastoral, academico y eclesiastico de todas las facultades.",
    metrics: [
      ["Estudiantes unicos", "4,499", "Base limpia para importacion"],
      ["Facultades", "5", "Cobertura institucional"],
      ["Maranatha Class", "39", "Actividad eclesiastica central"],
      ["Equipo pastoral", "21", "Faltan 4 registros para llegar a 25"],
      ["Sin religion registrada", "899", "Requiere actualizacion pastoral", "alert"]
    ],
    actions: [
      "Revisar avance por facultad.",
      "Asignar coordinadores y pastores faltantes.",
      "Comparar asistencia por Maranatha Class.",
      "Revisar estudiantes sin contacto pastoral."
    ]
  },
  faculty: {
    label: "Ingreso como Coordinador de Facultad",
    title: "Vista de facultad",
    scope: "Solo su facultad",
    description: "Gestion de estudiantes, docentes capellanes, grupos pequenos, Maranatha Class y visitas de una facultad especifica.",
    metrics: [
      ["Estudiantes de facultad", "Segun asignacion", "Solo registros de su facultad"],
      ["Docentes capellanes", "Asignados", "Equipo bajo coordinacion"],
      ["Maranatha Class", "Filtradas", "Solo clases de la facultad"],
      ["Visitas", "Pendientes", "Seguimiento local"],
      ["Reportes", "Facultad", "Consolidado para coordinacion general"]
    ],
    actions: [
      "Asignar estudiantes a docentes capellanes.",
      "Revisar Maranatha Class sin aula o responsable.",
      "Validar asistencia de la semana.",
      "Enviar reporte de facultad al coordinador general."
    ]
  },
  chaplain: {
    label: "Ingreso como Docente Capellan",
    title: "Vista pastoral personal",
    scope: "Solo estudiantes asignados",
    description: "Espacio de trabajo para acompanamiento directo, visitas, grupos pequenos y asistencia de estudiantes asignados.",
    metrics: [
      ["Mis estudiantes", "Asignados", "Lista pastoral personal"],
      ["Sin contacto", "Prioridad", "Primera accion pastoral"],
      ["Mis grupos pequenos", "Activos", "Reunion viernes de noche"],
      ["Visitas pendientes", "Agenda", "Seguimiento pastoral"],
      ["Asistencia", "Semana", "Participacion de mis estudiantes"]
    ],
    actions: [
      "Registrar visita pastoral.",
      "Crear o actualizar grupo pequeno.",
      "Tomar asistencia del viernes.",
      "Actualizar semaforo pastoral de estudiantes."
    ]
  },
  smallGroup: {
    label: "Ingreso como Lider de Grupo Pequeno",
    title: "Vista del grupo pequeno",
    scope: "Solo su grupo pequeno",
    description: "Vista simple para lideres estudiantiles que registran asistencia, tema, observaciones y necesidades del grupo.",
    metrics: [
      ["Integrantes", "Mi grupo", "Solo miembros autorizados"],
      ["Asistencia viernes", "Registrar", "Reunion semanal"],
      ["Tema tratado", "Pendiente", "Registro de reunion"],
      ["Pedidos", "Reportar", "Necesidades para el pastor"],
      ["Derivaciones", "Pastor", "Casos que requieren apoyo"]
    ],
    actions: [
      "Tomar asistencia del grupo pequeno.",
      "Registrar tema de la reunion.",
      "Enviar observaciones al docente capellan.",
      "Reportar estudiantes que necesitan visita."
    ]
  },
  classLeader: {
    label: "Ingreso como Lider de Maranatha Class",
    title: "Vista de Maranatha Class",
    scope: "Solo su Maranatha Class",
    description: "Gestion sabatica de inscritos, asistencia, grupos pequenos vinculados y actividades eclesiasticas.",
    metrics: [
      ["Inscritos", "Mi clase", "Participantes autorizados"],
      ["Asistencia sabado", "Registrar", "Medicion principal"],
      ["Grupos asociados", "Vinculados", "Origen de participantes"],
      ["Aula", "Asignada", "Lugar de reunion"],
      ["Actividad", "Eclesiastica", "Medida en Maranatha Class"]
    ],
    actions: [
      "Tomar asistencia sabatica.",
      "Revisar grupos pequenos asociados.",
      "Registrar actividad eclesiastica.",
      "Enviar reporte de Maranatha Class."
    ]
  }
};

const roleRows = [
  ["Coordinador General", "Todas las facultades", "Dashboard general, facultades, pastores, estudiantes, visitas, eventos y reportes", "Metas, asignaciones generales, eventos globales y reportes institucionales", "Datos privados innecesarios de consejeria sensible"],
  ["Coordinador de Facultad", "Solo su facultad", "Estudiantes, pastores, grupos, Maranatha Class, eventos y visitas de su facultad", "Eventos de facultad, asignaciones internas, seguimiento y reportes", "Otras facultades completas"],
  ["Docente Capellan", "Solo sus estudiantes asignados", "Fichas pastorales, grupos pequenos, visitas y asistencia de sus estudiantes", "Grupos pequenos, visitas, asistencia, observaciones y derivaciones", "Estudiantes de otros pastores"],
  ["Lider de Grupo Pequeno", "Solo su grupo pequeno", "Integrantes, asistencia del viernes y datos basicos permitidos", "Asistencia, tema tratado, observaciones y pedidos", "Datos sensibles, reportes globales y otros grupos"],
  ["Lider de Maranatha Class", "Solo su Maranatha Class", "Inscritos, grupos asociados y asistencia sabatica", "Asistencia del sabado, actividades y participacion", "Otras Maranatha Class y datos pastorales sensibles"]
];

function activateView(id) {
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === id);
  });
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active", view.id === id);
  });
  document.getElementById("page-title").textContent = views[id];
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function focusField(id) {
  window.setTimeout(() => {
    const field = document.getElementById(id);
    if (!field) return;
    field.focus();
    if (typeof field.select === "function") field.select();
  }, 80);
}

function csvCell(value) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

function downloadCsv(filename, rows) {
  const csv = rows.map((row) => row.map(csvCell).join(",")).join("\n");
  const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function exportFormationReport() {
  const rows = [
    ["Reporte", "Formacion Cristiana por pastor"],
    ["Generado", new Date().toLocaleString("es-PE")],
    ["Rol visible", currentUser?.role || "Sin usuario"],
    [],
    ["Facultad", "Pastor", "Cursos", "Estudiantes", "Promedio por curso"]
  ];

  const pastorStats = visibleTeachingCourses().reduce((stats, course) => {
    const key = `${course.faculty}__${course.pastor}`;
    if (!stats[key]) {
      stats[key] = { faculty: course.faculty, pastor: course.pastor, courses: 0, students: 0 };
    }
    stats[key].courses += 1;
    stats[key].students += enrollmentRowsForCourse(course.id).length;
    return stats;
  }, {});

  Object.values(pastorStats)
    .sort((a, b) => a.faculty.localeCompare(b.faculty, "es", { numeric: true }) || a.pastor.localeCompare(b.pastor, "es", { numeric: true }))
    .forEach((row) => {
      rows.push([
        row.faculty,
        row.pastor,
        row.courses,
        row.students,
        row.courses ? (row.students / row.courses).toFixed(1) : "0.0"
      ]);
    });

  downloadCsv("reporte-formacion-cristiana.csv", rows);
}

function backupPayload() {
  return {
    app: "maranatha-gestion-pastoral",
    version: 1,
    exportedAt: new Date().toISOString(),
    data: backupStorageKeys.reduce((payload, key) => {
      payload[key] = safeStorage.get(key);
      return payload;
    }, {})
  };
}

function exportBackup() {
  const date = new Date().toISOString().slice(0, 10);
  const blob = new Blob([JSON.stringify(backupPayload(), null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `maranatha-respaldo-${date}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function reloadStoredState() {
  loadVisitRecords();
  loadTrainingRecords();
  loadEventRecords();
  loadChaplaincyAssignments();
  loadPastorRoleAssignments();
  loadTeachingEnrollments();
  loadRetiredStudentCodes();
  applyDefaultTeachingAssignments();
  loadSmallGroupRecords();
  loadCustomMaranathaClasses();
  ensureCycleBaseEvents();

  const savedDni = safeStorage.get("maranatha_user_dni");
  const savedUser = users.find((user) => user.loginDni === savedDni || user.dni === savedDni);
  if (savedUser) {
    loggedInUser = savedUser;
    currentUser = savedUser;
    const sessionUser = document.getElementById("session-user");
    if (sessionUser) sessionUser.textContent = `${savedUser.name} · ${savedUser.role}`;
    const roleSwitcher = document.getElementById("role-switcher");
    if (roleSwitcher) roleSwitcher.value = savedUser.roleKey;
  }

  refreshCurrentView();
  renderVisitTable();
  renderVisitReport();
  renderTrainingTable();
  renderEventTable();
  renderCalendar();
  renderSmallGroupTable();
  renderClasses();
  renderRoleTable();
  renderFormationCourseReport();
}

function importBackupFile(file) {
  const message = document.getElementById("backup-message");
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    importBackupText(String(reader.result || ""));
  });
  reader.readAsText(file);
}

function importBackupText(text) {
  const message = document.getElementById("backup-message");
  try {
    const payload = JSON.parse(String(text || ""));
    if (payload?.app !== "maranatha-gestion-pastoral" || !payload.data) {
      throw new Error("invalid-backup");
    }

    backupStorageKeys.forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(payload.data, key)) {
        const value = payload.data[key];
        if (value === null || typeof value === "undefined") {
          safeStorage.remove(key);
        } else {
          safeStorage.set(key, String(value));
        }
      }
    });

    reloadStoredState();
    if (message) message.textContent = "Copia restaurada correctamente. Los datos ya estan cargados en la app.";
    return true;
  } catch {
    if (message) message.textContent = "No se pudo restaurar. Pegue un respaldo JSON generado por esta app.";
    return false;
  }
}

function demoUserForRole(roleKey) {
  const loggedFacultyCode = loggedInUser?.facultyCode || "FACIHED";
  const defaultFacultyUser = users.find((user) => user.roleKey === "faculty" && user.facultyCode === loggedFacultyCode)
    || users.find((user) => user.roleKey === "faculty")
    || loggedInUser;
  const defaultChaplainUser = users.find((user) => user.roleKey === "chaplain" && user.facultyCode === loggedFacultyCode)
    || users.find((user) => user.roleKey === "chaplain")
    || loggedInUser;

  if (roleKey === "general") {
    return users.find((user) => user.roleKey === "general") || loggedInUser || currentUser;
  }

  if (roleKey === "faculty") {
    return defaultFacultyUser;
  }

  if (roleKey === "chaplain") {
    return defaultChaplainUser;
  }

  const baseUser = defaultChaplainUser || defaultFacultyUser || loggedInUser || {};
  if (roleKey === "smallGroup") {
    return {
      ...baseUser,
      dni: `${baseUser.dni || "demo"}-gp`,
      name: "Vista demo Lider Grupo Pequeno",
      role: "Lider Grupo Pequeno",
      roleKey: "smallGroup",
      facultyCode: baseUser.facultyCode || loggedFacultyCode
    };
  }

  if (roleKey === "classLeader") {
    return {
      ...baseUser,
      dni: `${baseUser.dni || "demo"}-mc`,
      name: "Vista demo Lider Maranatha Class",
      role: "Lider Maranatha Class",
      roleKey: "classLeader",
      facultyCode: baseUser.facultyCode || loggedFacultyCode
    };
  }

  return loggedInUser || currentUser;
}

function refreshCurrentView() {
  refreshStudentFilterOptions();
  refreshStudentsAndActions();
  renderPastors();
  renderFaculties();
  refreshSmallGroupFilters();
  renderSmallGroupTable();
  renderClassBars();
  renderClasses();
  renderRolePreview();
  renderHomeByRole();
  renderMyVisitTable();
  renderChaplaincy();
  refreshTeachingFilters();
  renderTeaching();
  renderFormationCourseReport();
  renderVisitReport();
  renderRetiredReport();
  updateRoleAssignmentAccess();
  updateNavigationAccess();
}

function applyRoleSimulation(roleKey) {
  const simulatedUser = demoUserForRole(roleKey);
  if (!simulatedUser) return;

  currentUser = simulatedUser;
  const roleSwitcher = document.getElementById("role-switcher");
  const sessionUser = document.getElementById("session-user");

  if (roleSwitcher) {
    roleSwitcher.value = roleKey;
    roleSwitcher.disabled = false;
    roleSwitcher.title = "Cambiar vista para simular como lo ven otros roles";
  }

  if (sessionUser) {
    const realUserLabel = loggedInUser && loggedInUser.dni !== currentUser.dni ? ` · sesión: ${loggedInUser.name}` : "";
    sessionUser.textContent = `${currentUser.name} · ${currentUser.role}${realUserLabel}`;
  }

  refreshCurrentView();
}

document.addEventListener("click", (event) => {
  const jump = event.target.closest("[data-view-jump]");
  if (jump) {
    activateView(jump.dataset.viewJump);
  }

  const deleteButton = event.target.closest("[data-delete-visit]");
  if (deleteButton) {
    deleteVisit(deleteButton.dataset.deleteVisit);
  }

  const assignButton = event.target.closest("[data-assign-chaplain]");
  if (assignButton) {
    const code = assignButton.dataset.assignChaplain;
    const select = document.querySelector(`[data-chaplaincy-select="${code}"]`);
    if (select?.value) {
      chaplaincyAssignments[code] = select.value;
      saveChaplaincyAssignments();
      renderChaplaincy();
      renderTeaching();
      refreshStudentsAndActions();
    }
  }

  const unassignButton = event.target.closest("[data-unassign-chaplain]");
  if (unassignButton) {
    delete chaplaincyAssignments[unassignButton.dataset.unassignChaplain];
    saveChaplaincyAssignments();
    renderChaplaincy();
    renderTeaching();
    refreshStudentsAndActions();
  }

  const retireButton = event.target.closest("[data-retire-student]");
  if (retireButton) {
    retireStudent(retireButton.dataset.retireStudent);
  }

  const restoreRetiredButton = event.target.closest("[data-restore-retired-student]");
  if (restoreRetiredButton) {
    restoreRetiredStudent(restoreRetiredButton.dataset.restoreRetiredStudent);
  }

  const teachingCourseButton = event.target.closest("[data-teaching-course-id]");
  if (teachingCourseButton) {
    openTeachingCourseDetail(teachingCourseButton.dataset.teachingCourseId);
  }

  const teachingPastorButton = event.target.closest("[data-teaching-pastor]");
  if (teachingPastorButton) {
    openTeachingPastorDetail(teachingPastorButton.dataset.teachingPastor);
  }
});

function setLoggedInUser(user) {
  loggedInUser = user;
  currentUser = user;
  const loginScreen = document.getElementById("login-screen");
  const roleSwitcher = document.getElementById("role-switcher");
  const sessionUser = document.getElementById("session-user");

  document.body.classList.add("is-authenticated");
  loginScreen?.classList.add("hidden");

  if (roleSwitcher) {
    roleSwitcher.value = user.roleKey;
    roleSwitcher.disabled = false;
    roleSwitcher.title = "Cambiar vista para simular como lo ven otros roles";
  }

  if (sessionUser) {
    sessionUser.textContent = `${user.name} · ${user.role}`;
  }

  refreshCurrentView();
  activateView("dashboard");
}

function setupLogin() {
  const loginForm = document.getElementById("login-form");
  const error = document.getElementById("login-error");
  const logoutButton = document.getElementById("logout-button");
  const savedDni = safeStorage.get("maranatha_user_dni");
  const savedUser = users.find((user) => user.dni === savedDni);

  if (savedUser) {
    setLoggedInUser(savedUser);
  }

  loginForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const userValue = onlyDigits(document.getElementById("login-user").value);
    const passwordValue = onlyDigits(document.getElementById("login-password").value);
    const user = users.find((item) => {
      const loginValue = onlyDigits(item.loginDni || item.dni);
      return loginValue && loginValue === userValue && loginValue === passwordValue;
    });

    if (!user) {
      error.textContent = "DNI o contraseña incorrectos. Para este prototipo, ambos deben ser el DNI registrado.";
      return;
    }

    error.textContent = "";
    safeStorage.set("maranatha_user_dni", user.loginDni);
    setLoggedInUser(user);
  });

  logoutButton?.addEventListener("click", () => {
    safeStorage.remove("maranatha_user_dni");
    loggedInUser = null;
    currentUser = null;
    document.body.classList.remove("is-authenticated");
    document.getElementById("login-screen")?.classList.remove("hidden");
    document.getElementById("login-user").value = "";
    document.getElementById("login-password").value = "";
    const roleSwitcher = document.getElementById("role-switcher");
    if (roleSwitcher) {
      roleSwitcher.disabled = false;
      roleSwitcher.value = "general";
    }
    refreshCurrentView();
  });
}

function updateNavigationAccess() {
  const hiddenForChaplain = new Set(["roles", "pastors"]);
  document.querySelectorAll(".nav-item").forEach((item) => {
    const shouldHide = currentUser?.roleKey === "chaplain" && hiddenForChaplain.has(item.dataset.view);
    item.classList.toggle("hidden", shouldHide);
  });

  const activeHidden = document.querySelector(".nav-item.active.hidden");
  if (activeHidden) {
    activateView("dashboard");
  }
}

function loadVisitRecords() {
  try {
    visitRecords = JSON.parse(safeStorage.get("maranatha_visit_records") || "[]");
  } catch {
    visitRecords = [];
  }
}

function saveVisitRecords() {
  safeStorage.set("maranatha_visit_records", JSON.stringify(visitRecords));
}

function loadTrainingRecords() {
  try {
    trainingRecords = JSON.parse(safeStorage.get("maranatha_training_records") || "[]");
  } catch {
    trainingRecords = [];
  }
}

function saveTrainingRecords() {
  safeStorage.set("maranatha_training_records", JSON.stringify(trainingRecords));
}

function loadEventRecords() {
  try {
    eventRecords = JSON.parse(safeStorage.get("maranatha_event_records") || "[]");
  } catch {
    eventRecords = [];
  }
}

function saveEventRecords() {
  safeStorage.set("maranatha_event_records", JSON.stringify(eventRecords));
}

function loadChaplaincyAssignments() {
  try {
    chaplaincyAssignments = JSON.parse(safeStorage.get("maranatha_chaplaincy_assignments_v2") || "{}");
  } catch {
    chaplaincyAssignments = {};
  }
}

function saveChaplaincyAssignments() {
  safeStorage.set("maranatha_chaplaincy_assignments_v2", JSON.stringify(chaplaincyAssignments));
}

function loadPastorRoleAssignments() {
  try {
    pastorRoleAssignments = JSON.parse(safeStorage.get("maranatha_pastor_role_assignments") || "{}");
  } catch {
    pastorRoleAssignments = {};
  }
  applyPastorRoleAssignments();
}

function savePastorRoleAssignments() {
  safeStorage.set("maranatha_pastor_role_assignments", JSON.stringify(pastorRoleAssignments));
}

function loadTeachingEnrollments() {
  try {
    teachingEnrollments = JSON.parse(safeStorage.get("maranatha_teaching_enrollments_v3") || "{}");
  } catch {
    teachingEnrollments = {};
  }
}

function saveTeachingEnrollments() {
  safeStorage.set("maranatha_teaching_enrollments_v3", JSON.stringify(teachingEnrollments));
}

function loadRetiredStudentCodes() {
  try {
    retiredStudentCodes = JSON.parse(safeStorage.get("maranatha_retired_student_codes") || "{}");
  } catch {
    retiredStudentCodes = {};
  }
}

function saveRetiredStudentCodes() {
  safeStorage.set("maranatha_retired_student_codes", JSON.stringify(retiredStudentCodes));
}

function isStudentRetired(studentOrCode) {
  const code = typeof studentOrCode === "string" ? studentOrCode : studentOrCode?.code;
  return Boolean(code && retiredStudentCodes[code]);
}

function activeStudents(source = students) {
  return source.filter((student) => !isStudentRetired(student));
}

function retireStudent(code) {
  const student = students.find((item) => item.code === code);
  if (!student || currentUser?.roleKey !== "general") return;
  retiredStudentCodes[code] = {
    code,
    name: student.name,
    faculty: student.faculty,
    program: student.program,
    cycle: student.cycle,
    retiredAt: new Date().toISOString()
  };
  saveRetiredStudentCodes();
  refreshCurrentView();
  renderRetiredReport();
}

function restoreRetiredStudent(code) {
  if (currentUser?.roleKey !== "general") return;
  delete retiredStudentCodes[code];
  saveRetiredStudentCodes();
  refreshCurrentView();
  renderRetiredReport();
}

function enhanceStudentRetireButtons() {
  const table = document.getElementById("student-table");
  if (!table) return;

  table.querySelectorAll("[data-retire-student]").forEach((button) => button.remove());
  table.querySelectorAll(".retire-actions-cell").forEach((cell) => cell.remove());
  const headerRow = table.closest("table")?.querySelector("thead tr");
  headerRow?.querySelector("[data-retire-actions-header]")?.remove();
  if (currentUser?.roleKey !== "general") return;

  if (headerRow) {
    const header = document.createElement("th");
    header.dataset.retireActionsHeader = "true";
    header.textContent = "Acciones";
    headerRow.appendChild(header);
  }

  table.querySelectorAll(".student-profile-link[data-code]").forEach((link) => {
    const code = link.dataset.code;
    if (!code || isStudentRetired(code)) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "trash-button";
    button.dataset.retireStudent = code;
    button.title = "Marcar como retirado";
    button.setAttribute("aria-label", "Marcar como retirado");
    button.textContent = "🗑";
    const row = link.closest("tr");
    if (row) {
      const cell = document.createElement("td");
      cell.className = "retire-actions-cell";
      cell.appendChild(button);
      row.appendChild(cell);
    }
  });
}

function refreshStudentsAndActions() {
  renderStudents();
  enhanceStudentRetireButtons();
  applyRetiredStudentFilterView();
}

function studentRetiredFilterValue() {
  return [...document.querySelectorAll("#student-retired-filter")]
    .find((select) => select.offsetParent !== null)?.value
    || document.getElementById("student-retired-filter")?.value
    || "active";
}

function applyRetiredStudentFilterView() {
  const table = document.getElementById("student-table");
  const retiredFilter = studentRetiredFilterValue();
  if (!table || retiredFilter === "active") return;

  const scoped = studentsInCurrentScope(students);
  const query = normalizeText(document.getElementById("student-search")?.value || "");
  const retiredRows = students
    .filter((student) => isStudentRetired(student))
    .filter((student) => retiredFilter === "all" || retiredFilter === "retired")
    .filter((student) => currentUser?.roleKey === "general" || scoped.some((item) => item.code === student.code))
    .filter((student) => {
      const text = normalizeText(`${student.code} ${student.name} ${student.document} ${student.phone} ${student.program} ${student.faculty}`);
      return !query || text.includes(query);
    });

  if (retiredFilter === "retired") {
    table.innerHTML = retiredRows.length ? retiredRows.map((student) => `
      <tr>
        <td>${student.code}</td>
        <td><strong>${student.name}</strong><br><small>Retirado</small></td>
        <td>${student.document || ""}</td>
        <td>${student.phone || ""}</td>
        <td>${student.faculty}</td>
        <td>${student.program}</td>
        <td>${student.cycle || "Sin ciclo"}</td>
        <td>${student.group || ""}</td>
        <td>${student.modality || ""}</td>
        <td>${student.campus || ""}</td>
        <td><span class="pill">Retirado</span></td>
        <td><button type="button" class="link-button student-profile-link" data-code="${student.code}">Ver ficha</button></td>
        <td class="retire-actions-cell"><button type="button" class="ghost-button" data-restore-retired-student="${student.code}">Restaurar</button></td>
      </tr>
    `).join("") : "<tr><td colspan=\"13\">No hay estudiantes retirados con esta busqueda.</td></tr>";
    document.getElementById("student-result-count").textContent = `${retiredRows.length.toLocaleString("es-PE")} retirados`;
  }
}

function setupRetiredStudentControls() {
  const table = document.getElementById("student-table");
  if (!table) return;
  enhanceStudentRetireButtons();
}

function applyPastoralClassification(student, classification) {
  if (classification === "Villa Unión") {
    student.religion = "Adventista del Séptimo Día";
    student.status = "Adventista - asistirá a Villa Unión";
    student.pastoralStatus = "Asistirá a Villa Unión";
    student.pastoralLight = "Verde";
    student.churchAttendance = "Iglesia de Villa Unión";
    return;
  }

  if (classification === "Visita NA" || classification === "Invitado NA") {
    student.status = "No adventista";
    student.pastoralStatus = classification === "Invitado NA" ? "Invitado - no adventista" : "Visita pendiente - no adventista";
    student.pastoralLight = "Ámbar";
    student.churchAttendance = classification === "Invitado NA" ? "Invitado NA" : "Requiere visita NA";
    return;
  }

  if (classification === "Visita OI" || classification === "Invitado OI") {
    student.religion = "Adventista del Séptimo Día";
    student.status = "Adventista - asiste a otra iglesia en Lima";
    student.pastoralStatus = classification === "Invitado OI" ? "Invitado - otra iglesia" : "Visita pendiente - otra iglesia";
    student.pastoralLight = "Ámbar";
    student.churchAttendance = classification === "Invitado OI" ? "Invitado OI" : "Otra iglesia en Lima";
  }
}

function applyDefaultTeachingAssignments() {
  let changed = false;

  defaultTeachingAssignments.forEach((assignment) => {
    assignment.students.forEach(([code]) => {
      const currentCourses = Array.isArray(teachingEnrollments[code]) ? teachingEnrollments[code] : [];
      if (!currentCourses.includes(assignment.courseId)) {
        teachingEnrollments[code] = [...currentCourses, assignment.courseId];
        changed = true;
      }
    });
  });

  students.forEach((student) => {
    const classification = pastoralClassificationByCode[student.code];
    if (classification) applyPastoralClassification(student, classification);
  });

  if (changed) saveTeachingEnrollments();
}

function applyPastorRoleAssignments() {
  users.forEach((user) => {
    const assignedRole = pastorRoleAssignments[user.dni];
    if (assignedRole && roleFromCargo[assignedRole]) {
      user.role = assignedRole;
      user.roleKey = roleFromCargo[assignedRole];
    }
  });
}

function loadSmallGroupRecords() {
  try {
    smallGroupRecords = JSON.parse(safeStorage.get("maranatha_small_group_records") || "[]");
  } catch {
    smallGroupRecords = [];
  }
}

function saveSmallGroupRecords() {
  safeStorage.set("maranatha_small_group_records", JSON.stringify(smallGroupRecords));
}

function loadCustomMaranathaClasses() {
  try {
    customMaranathaClasses = JSON.parse(safeStorage.get("maranatha_custom_classes") || "[]");
  } catch {
    customMaranathaClasses = [];
  }
}

function saveCustomMaranathaClasses() {
  safeStorage.set("maranatha_custom_classes", JSON.stringify(customMaranathaClasses));
}

function allMaranathaClasses() {
  return [
    ...customMaranathaClasses.map((item) => [item.faculty, item.room, item.name, item]),
    ...maranathaClasses.map(([faculty, room, name]) => [faculty, room, name, null])
  ];
}

function ensureCycleBaseEvents() {
  const facultiesForCycle = [
    "Facultad de Ciencias Humanas y Educación",
    "Facultad de Ciencias Empresariales",
    "Facultad de Ingeniería y Arquitectura",
    "Facultad de Ciencias de la Salud",
    "Facultad de Teología"
  ];
  const start = new Date("2026-05-29T00:00:00");
  const end = new Date("2026-07-04T00:00:00");
  const baseEvents = [];

  for (const date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
    const iso = date.toISOString().slice(0, 10);
    const day = date.getDay();

    if (day === 5) {
      facultiesForCycle.forEach((faculty) => {
        baseEvents.push({
          id: `base-gp-${facultyCodeFromName(faculty)}-${iso}`,
          level: "Facultad",
          faculty,
          program: "",
          responsible: "Coordinador de Facultad",
          type: "Grupo Pequeno",
          title: `Grupos Pequenos - ${facultyCodeFromName(faculty)}`,
          date: iso,
          time: "19:00",
          description: "Actividad base de viernes tarde/noche. Puede editarse si cambia la naturaleza de reunion."
        });
      });
    }

    if (day === 6) {
      [
        ["Consejo de Maestros", "Consejo de Maestros", "07:30"],
        ["Culto Divino Joven", "Culto Divino Joven", "09:00"],
        ["Facultades en Mision", "Facultades en Mision", "14:00"],
        ["Enjoy", "Enjoy UPeU", "19:00"]
      ].forEach(([type, title, time]) => {
        baseEvents.push({
          id: `base-general-${type.toLowerCase().replace(/\s+/g, "-")}-${iso}`,
          level: "General",
          faculty: "",
          program: "",
          responsible: "Coordinacion General",
          type,
          title,
          date: iso,
          time,
          description: "Actividad general base del sabado. Puede editarse si cambia la programacion."
        });
      });

      facultiesForCycle.forEach((faculty) => {
        baseEvents.push({
          id: `base-mc-${facultyCodeFromName(faculty)}-${iso}`,
          level: "Facultad",
          faculty,
          program: "",
          responsible: "Coordinador de Facultad",
          type: "Maranatha Class",
          title: `Maranatha Class - ${facultyCodeFromName(faculty)}`,
          date: iso,
          time: "10:30",
          description: "Actividad base de sabado por facultad. Puede editarse por Maranatha Class o facultad."
        });
      });
    }
  }

  let changed = false;
  const existingIds = new Set(eventRecords.map((event) => event.id));
  baseEvents.forEach((event) => {
    if (!existingIds.has(event.id)) {
      eventRecords.push(event);
      changed = true;
    }
  });

  if (changed) {
    saveEventRecords();
  }
}

function visitsForStudent(code) {
  return visitRecords
    .filter((visit) => visit.studentCode === code)
    .sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
}

function lastVisitForStudent(code) {
  return visitsForStudent(code)[0];
}

function canDeleteVisits() {
  return currentUser?.roleKey === "general";
}

function canEditEvents() {
  return currentUser?.roleKey === "general" || currentUser?.roleKey === "faculty";
}

function deleteVisit(id) {
  if (!canDeleteVisits()) return;
  const confirmed = window.confirm("¿Deseas borrar esta visita? Esta accion no se puede deshacer en el prototipo.");
  if (!confirmed) return;

  visitRecords = visitRecords.filter((visit) => visit.id !== id);
  saveVisitRecords();
  renderVisitTable();
  renderMyVisitTable();
  renderVisitReport();
  renderStudents();
  renderStudentProfile();
}

function renderFaculties() {
  const visibleFaculties = currentUser?.roleKey === "general"
    ? faculties
    : faculties.filter(([name]) => facultyCodeFromName(name) === currentUser?.facultyCode);
  const max = Math.max(...visibleFaculties.map((item) => item[1]), 1);
  const container = document.getElementById("faculty-bars");
  container.innerHTML = visibleFaculties.map(([name, count]) => {
    const width = Math.round((count / max) * 100);
    return `
      <div class="bar-row">
        <strong>${name}</strong>
        <span class="bar-track"><span class="bar-fill" style="width:${width}%"></span></span>
        <span>${count}</span>
      </div>
    `;
  }).join("") || "<p class=\"empty-result\">Sin facultad asignada para este usuario.</p>";
}

function renderStudents() {
  const query = document.getElementById("student-search").value.toLowerCase();
  const religionFilter = document.getElementById("religion-filter").value;
  const facultyFilter = document.getElementById("student-faculty-filter").value;
  const programFilter = document.getElementById("student-program-filter").value;
  const cycleFilter = document.getElementById("student-cycle-filter").value;
  const groupFilter = document.getElementById("student-group-filter").value;
  const modalityFilter = document.getElementById("student-modality-filter").value;
  const campusFilter = document.getElementById("student-campus-filter").value;
  const pastoralFilter = document.getElementById("student-pastoral-filter").value;
  const rows = studentsInCurrentScope(students).filter((student) => {
    const text = `${student.code} ${student.name} ${student.program} ${student.faculty} ${student.phone} ${student.document} ${student.religion}`.toLowerCase();
    const matchesSearch = text.includes(query);
    const matchesReligion = !religionFilter || student.status.includes(religionFilter);
    const matchesFaculty = !facultyFilter || student.faculty === facultyFilter;
    const matchesProgram = !programFilter || student.program === programFilter;
    const matchesCycle = !cycleFilter || student.cycle === cycleFilter;
    const matchesGroup = !groupFilter || student.group === groupFilter;
    const matchesModality = !modalityFilter || student.modality === modalityFilter;
    const matchesCampus = !campusFilter || student.campus === campusFilter;
    const matchesPastoral = !pastoralFilter || student.pastoralStatus === pastoralFilter;

    return matchesSearch && matchesReligion && matchesFaculty && matchesProgram && matchesCycle && matchesGroup && matchesModality && matchesCampus && matchesPastoral;
  });

  const visibleRows = rows.slice(0, 100);
  document.getElementById("student-table").innerHTML = visibleRows.map((student) => `
    ${(() => {
      const lastVisit = lastVisitForStudent(student.code);
      const visitText = lastVisit ? `${lastVisit.date || "Sin fecha"} · ${lastVisit.visitedBy}` : "Sin visita registrada";
      return `
    <tr>
      <td>${student.code}</td>
      <td><button type="button" class="link-button student-profile-link" data-code="${student.code}">${student.name}</button></td>
      <td>${student.program}</td>
      <td>${student.cycle}</td>
      <td>${student.group}</td>
      <td>${student.faculty}</td>
      <td>${student.modality}</td>
      <td>${student.campus}</td>
      <td>${student.religion}</td>
      <td><span class="pill">${student.status}</span><br><small>${student.pastoralStatus}</small></td>
      <td>${lastVisit ? `<span class="pill faculty">Visitado</span><br><small>${visitText}</small>` : `<small>${visitText}</small>`}</td>
    </tr>
      `;
    })()}
  `).join("");

  const resultCount = document.getElementById("student-result-count");
  if (resultCount) {
    resultCount.textContent = `${rows.length} encontrados de ${students.length} · mostrando ${visibleRows.length}`;
  }
}

function openStudentProfile(code) {
  selectedProfileStudentCode = code;
  renderStudentProfile();
  activateView("studentProfile");
}

function renderStudentProfile() {
  const empty = document.getElementById("student-profile-empty");
  const content = document.getElementById("student-profile-content");
  if (!empty || !content) return;

  const student = students.find((item) => item.code === selectedProfileStudentCode);
  if (!student || !studentsInCurrentScope([student]).length) {
    empty.classList.remove("hidden");
    content.classList.add("hidden");
    empty.textContent = student ? "No tienes acceso a la ficha de este estudiante." : "Selecciona un estudiante para ver su ficha completa.";
    return;
  }

  const studentVisits = visitsForStudent(student.code);
  const hasLeadership = Boolean(student.smallGroup || student.maranathaClass);
  const smallGroupAttendance = student.smallGroup ? "Pendiente registrar asistencia" : "Sin grupo pequeno asignado";
  const classAttendance = student.maranathaClass ? "Pendiente registrar asistencia" : "Sin Maranatha Class asignada";
  const teachingEnrollmentsForStudent = teachingEnrollmentForStudent(student);
  const teachingSummary = teachingEnrollmentsForStudent.length
    ? teachingEnrollmentsForStudent.map((course) => `${course.course} (${course.cycle} · ${course.group})`).join("<br>")
    : "No matriculado";
  const teachingPastors = teachingEnrollmentsForStudent.length
    ? teachingEnrollmentsForStudent.map((course) => course.pastor).join("<br>")
    : "Pendiente";
  const alerts = [
    !student.smallGroup ? "No tiene grupo pequeno asignado." : "",
    !student.maranathaClass ? "No tiene Maranatha Class asignada." : "",
    !studentVisits.length ? "No registra visitas pastorales." : "",
    student.status.includes("pendiente") ? "Falta definir si asiste a Villa Union o iglesia local." : ""
  ].filter(Boolean);

  empty.classList.add("hidden");
  content.classList.remove("hidden");
  document.getElementById("profile-code").textContent = `Codigo ${student.code}`;
  document.getElementById("profile-name").textContent = student.name;
  document.getElementById("profile-program").textContent = `${student.program} · ${student.faculty}`;
  document.getElementById("profile-status").textContent = student.status;

  document.getElementById("profile-academic").innerHTML = profileRows([
    ["Facultad", student.faculty],
    ["Escuela / Programa", student.program],
    ["Ciclo", student.cycle],
    ["Grupo", student.group],
    ["Modalidad", student.modality],
    ["Sede", student.campus]
  ]);

  document.getElementById("profile-pastoral").innerHTML = profileRows([
    ["Religion", student.religion || "Sin dato"],
    ["Clasificacion", student.status],
    ["Estado pastoral", student.pastoralStatus],
    ["Asistencia iglesia", student.churchAttendance || "Pendiente definir"],
    ["Semaforo", student.pastoralLight || "Rojo"],
    ["Pastor asignado", student.pastor || "Pendiente"],
    ["Coordinador facultad", student.facultyCoordinator || "Pendiente"],
    ["Cursos Formacion Cristiana", teachingSummary],
    ["Docente(s) del curso", teachingPastors],
    ["Cantidad de cursos", teachingEnrollmentsForStudent.length ? teachingEnrollmentsForStudent.length : "0"]
  ]);

  document.getElementById("profile-leadership").innerHTML = profileRows([
    ["Es lider", hasLeadership ? "Pendiente confirmar rol" : "No registrado"],
    ["Grupo pequeno", student.smallGroup || "No asignado"],
    ["Maranatha Class", student.maranathaClass || "No asignada"],
    ["Responsabilidad", "Pendiente registrar"]
  ]);

  document.getElementById("profile-smallgroup-attendance").textContent = smallGroupAttendance;
  document.getElementById("profile-class-attendance").textContent = classAttendance;
  document.getElementById("profile-alerts").innerHTML = alerts.length ? alerts.map((alert) => `<li>${alert}</li>`).join("") : "<li>Sin alertas pastorales.</li>";
  document.getElementById("profile-visits").innerHTML = studentVisits.length ? studentVisits.map((visit) => `
    <tr>
      <td>${visit.date}</td>
      <td>${visit.visitedBy}<br><small>${visit.visitedByRole}</small></td>
      <td>${visit.reason}</td>
      <td>${visit.result || "Sin observaciones"}</td>
      <td>${canDeleteVisits() ? `<button type="button" class="danger-button" data-delete-visit="${visit.id}">Borrar</button>` : "Solo lectura"}</td>
    </tr>
  `).join("") : "<tr><td colspan=\"5\">Sin visitas registradas.</td></tr>";
}

function profileRows(rows) {
  return rows.map(([label, value]) => `<dt>${label}</dt><dd>${value || "Pendiente"}</dd>`).join("");
}

function fillSelect(id, values) {
  const select = document.getElementById(id);
  if (!select) return;

  const firstOption = select.querySelector("option")?.outerHTML || "<option value=\"\">Todos</option>";
  const uniqueValues = [...new Set(values.filter(Boolean))].sort((a, b) => String(a).localeCompare(String(b), "es", { numeric: true }));
  select.innerHTML = firstOption + uniqueValues.map((value) => `<option value="${value}">${value}</option>`).join("");
}

function setSelectOptions(select, placeholder, values) {
  const uniqueValues = [...new Set(values.filter(Boolean))].sort((a, b) => String(a).localeCompare(String(b), "es", { numeric: true }));
  select.innerHTML = `<option value="">${placeholder}</option>` + uniqueValues.map((value) => `<option value="${value}">${value}</option>`).join("");
}

function setupStudentFilters() {
  refreshStudentFilterOptions();

  [
    "student-search",
    "religion-filter",
    "student-faculty-filter",
    "student-program-filter",
    "student-cycle-filter",
    "student-group-filter",
    "student-modality-filter",
    "student-campus-filter",
    "student-pastoral-filter"
  ].forEach((id) => document.getElementById(id)?.addEventListener("input", refreshStudentsAndActions));
  document.querySelectorAll("#student-retired-filter").forEach((select) => {
    select.addEventListener("input", refreshStudentsAndActions);
    select.addEventListener("change", refreshStudentsAndActions);
  });

  document.getElementById("student-faculty-filter")?.addEventListener("change", () => {
    updateProgramFilter();
    refreshStudentsAndActions();
  });

  document.getElementById("clear-student-filters")?.addEventListener("click", () => {
    [
      "student-search",
      "religion-filter",
      "student-faculty-filter",
      "student-program-filter",
      "student-cycle-filter",
      "student-group-filter",
      "student-modality-filter",
      "student-campus-filter",
      "student-pastoral-filter",
      "student-retired-filter"
    ].forEach((id) => {
      const element = document.getElementById(id);
      if (element) element.value = id === "student-retired-filter" ? "active" : "";
    });
    updateProgramFilter();
    refreshStudentsAndActions();
  });

  document.getElementById("student-table")?.addEventListener("click", (event) => {
    const button = event.target.closest(".student-profile-link");
    if (!button) return;
    openStudentProfile(button.dataset.code);
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest(".student-profile-link");
    if (!button) return;
    openStudentProfile(button.dataset.code);
  });
}

function refreshStudentFilterOptions() {
  const scoped = studentsInCurrentScope(students);
  fillSelect("student-faculty-filter", scoped.map((student) => student.faculty));
  updateProgramFilter();
  fillSelect("student-cycle-filter", scoped.map((student) => student.cycle));
  fillSelect("student-group-filter", scoped.map((student) => student.group));
  fillSelect("student-modality-filter", scoped.map((student) => student.modality));
  fillSelect("student-campus-filter", scoped.map((student) => student.campus));
}

function updateProgramFilter() {
  const faculty = document.getElementById("student-faculty-filter")?.value || "";
  const programSelect = document.getElementById("student-program-filter");
  if (!programSelect) return;

  const currentProgram = programSelect.value;
  const scoped = studentsInCurrentScope(students);
  const filteredStudents = faculty ? scoped.filter((student) => student.faculty === faculty) : scoped;
  fillSelect("student-program-filter", filteredStudents.map((student) => student.program));

  const stillExists = [...programSelect.options].some((option) => option.value === currentProgram);
  programSelect.value = stillExists ? currentProgram : "";
}

function responsibilityFor(role) {
  if (role === "Coordinador General") return "Supervisa todo el trabajo de capellania";
  if (role === "Coordinador de Facultad") return "Coordina facultad, escuelas, pastores y reportes";
  return "Acompana estudiantes, grupos pequenos, visitas y asistencia";
}

function renderPastors() {
  const table = document.getElementById("pastor-table");
  if (!table) return;

  const query = (document.getElementById("pastor-search")?.value || "").toLowerCase();
  const facultyFilter = document.getElementById("pastor-faculty-filter")?.value || "";
  const roleFilter = document.getElementById("pastor-role-filter")?.value || "";
  const rows = pastors.filter(([number, name, phone, dni, role, facultyCode]) => {
    const effectiveRole = pastorRoleAssignments[dni] || role;
    const text = `${number} ${name} ${phone} ${dni} ${effectiveRole} ${facultyCode}`.toLowerCase();
    const matchesSearch = text.includes(query);
    const matchesFaculty = !facultyFilter || facultyCode === facultyFilter;
    const matchesRole = !roleFilter || effectiveRole === roleFilter;
    const matchesScope = !currentUser || currentUser.roleKey === "general" || facultyCode === currentUser.facultyCode || dni === currentUser.dni;
    return matchesSearch && matchesFaculty && matchesRole && matchesScope;
  });

  table.innerHTML = rows.map(([number, name, phone, dni, role, facultyCode]) => {
    const effectiveRole = pastorRoleAssignments[dni] || role;
    return `
    <tr>
      <td>${number}</td>
      <td><strong>${name}</strong></td>
      <td>${phone || "Pendiente"}</td>
      <td>${dni || "Pendiente"}</td>
      <td><span class="pill">${effectiveRole}</span></td>
      <td><span class="pill faculty">${facultyCode}</span></td>
      <td>${responsibilityFor(effectiveRole)}</td>
    </tr>
  `;
  }).join("");

  const count = document.getElementById("pastor-result-count");
  if (count) {
    count.textContent = `${rows.length} visibles de ${pastors.length}`;
  }
}

function setupPastorFilters() {
  fillSelect("pastor-faculty-filter", pastors.map((pastor) => pastor[5]));
  fillSelect("pastor-role-filter", users.map((user) => user.role));

  ["pastor-search", "pastor-faculty-filter", "pastor-role-filter"].forEach((id) => {
    document.getElementById(id)?.addEventListener("input", renderPastors);
  });

  document.getElementById("clear-pastor-filters")?.addEventListener("click", () => {
    ["pastor-search", "pastor-faculty-filter", "pastor-role-filter"].forEach((id) => {
      const element = document.getElementById(id);
      if (element) element.value = "";
    });
    renderPastors();
  });
}

function setupVisitStudentSearch() {
  const input = document.getElementById("visit-student-search");
  const results = document.getElementById("visit-student-results");
  const selected = document.getElementById("selected-visit-student");
  if (!input || !results || !selected) return;

  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    selected.classList.add("hidden");
    selected.innerHTML = "";

    if (query.length < 2) {
      results.innerHTML = "";
      return;
    }

    const matches = students.filter((student) => {
      const text = `${student.code} ${student.name} ${student.document} ${student.program} ${student.faculty}`.toLowerCase();
      return text.includes(query);
    }).slice(0, 8);

    if (!matches.length) {
      results.innerHTML = "<div class=\"empty-result\">No se encontraron estudiantes.</div>";
      return;
    }

    results.innerHTML = matches.map((student) => `
      <button type="button" class="student-result" data-code="${student.code}">
        <strong>${student.code} · ${student.name}</strong>
        <span>${student.program} · ${student.faculty}</span>
      </button>
    `).join("");
  });

  results.addEventListener("click", (event) => {
    const button = event.target.closest(".student-result");
    if (!button) return;

    const student = students.find((item) => item.code === button.dataset.code);
    if (!student) return;

    selectedVisitStudentCode = student.code;
    input.value = `${student.code} - ${student.name}`;
    results.innerHTML = "";
    selected.classList.remove("hidden");
    selected.innerHTML = `
      <strong>${student.name}</strong>
      <span>Codigo: ${student.code}</span>
      <span>DNI: ${student.document || "Sin dato"}</span>
      <span>${student.program} · ${student.faculty}</span>
      <span>Religion: ${student.status}</span>
    `;
  });

  document.getElementById("visit-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = document.getElementById("visit-message");
    const student = students.find((item) => item.code === selectedVisitStudentCode);

    if (!student) {
      if (message) message.textContent = "Primero selecciona un estudiante de la lista de resultados.";
      return;
    }

    const visit = {
      id: `${Date.now()}-${student.code}`,
      studentCode: student.code,
      studentName: student.name,
      program: student.program,
      faculty: student.faculty,
      type: document.getElementById("visit-type")?.value || "Estudiante",
      reason: document.getElementById("visit-reason")?.value || "",
      date: document.getElementById("visit-date")?.value || new Date().toISOString().slice(0, 10),
      result: document.getElementById("visit-result")?.value.trim() || "",
      visitedBy: currentUser?.name || "Usuario actual",
      visitedByRole: currentUser?.role || "",
      createdAt: new Date().toISOString()
    };

    visitRecords.unshift(visit);
    saveVisitRecords();
    renderVisitTable();
    renderMyVisitTable();
    renderVisitReport();
    renderStudents();
    if (selectedProfileStudentCode === student.code) {
      renderStudentProfile();
    }

    if (message) message.textContent = "Visita guardada y vinculada al estudiante.";
    selectedVisitStudentCode = "";
    input.value = "";
    results.innerHTML = "";
    selected.classList.add("hidden");
    selected.innerHTML = "";
    document.getElementById("visit-date").value = "";
    document.getElementById("visit-result").value = "";
  });
}

function renderVisitTable() {
  const table = document.getElementById("visit-table");
  const count = document.getElementById("visit-count");
  if (!table) return;

  table.innerHTML = visitRecords.map((visit) => `
    <tr>
      <td>${visit.date}</td>
      <td><strong>${visit.studentName}</strong><br><small>${visit.program}</small></td>
      <td>${visit.studentCode}</td>
      <td>${visit.visitedBy}<br><small>${visit.visitedByRole}</small></td>
      <td>${visit.reason}</td>
      <td>${visit.result || "Sin observaciones"}</td>
      <td>${canDeleteVisits() ? `<button type="button" class="danger-button" data-delete-visit="${visit.id}">Borrar</button>` : "Solo lectura"}</td>
    </tr>
  `).join("") || "<tr><td colspan=\"7\">Aun no hay visitas registradas.</td></tr>";

  if (count) {
    count.textContent = `${visitRecords.length} visitas`;
  }
}

function renderMyVisitTable() {
  const table = document.getElementById("my-visit-table");
  const count = document.getElementById("my-visit-count");
  if (!table) return;

  const myVisits = currentUser
    ? visitRecords.filter((visit) => visit.visitedBy === currentUser.name)
    : [];

  table.innerHTML = myVisits.length ? myVisits.map((visit) => `
    <tr>
      <td>${visit.date}</td>
      <td><strong>${visit.studentName}</strong><br><small>${visit.program}</small></td>
      <td>${visit.studentCode}</td>
      <td>${visit.reason}</td>
      <td>${visit.result || "Sin observaciones"}</td>
    </tr>
  `).join("") : "<tr><td colspan=\"5\">Aun no registraste visitas.</td></tr>";

  if (count) {
    count.textContent = `${myVisits.length} visitas`;
  }
}

function setupTrainingForm() {
  const level = document.getElementById("training-level");
  const faculty = document.getElementById("training-faculty");
  const program = document.getElementById("training-program");
  const responsible = document.getElementById("training-responsible");
  const form = document.getElementById("training-form");
  if (!level || !faculty || !program || !responsible || !form) return;

  fillSelect("training-faculty", students.map((student) => student.faculty));
  fillSelect("training-program", students.map((student) => student.program));
  fillSelect("training-responsible", pastors.map((pastor) => pastor[1]));

  function updateTrainingScope() {
    const selectedLevel = level.value;

    if (selectedLevel === "General") {
      faculty.disabled = true;
      program.disabled = true;
      faculty.value = "";
      program.value = "";
      setSelectOptions(program, "No aplica para nivel general", []);
      return;
    }

    if (selectedLevel === "Facultad") {
      faculty.disabled = false;
      program.disabled = true;
      program.value = "";
      setSelectOptions(program, "No aplica para nivel facultad", []);
      return;
    }

    faculty.disabled = false;
    if (!faculty.value) {
      program.disabled = true;
      setSelectOptions(program, "Primero seleccione facultad", []);
      return;
    }

    const scopedStudents = students.filter((student) => student.faculty === faculty.value);
    program.disabled = false;
    setSelectOptions(program, "Seleccione escuela / programa", scopedStudents.map((student) => student.program));
  }

  level.addEventListener("change", updateTrainingScope);
  level.addEventListener("input", updateTrainingScope);
  faculty.addEventListener("change", updateTrainingScope);
  faculty.addEventListener("input", updateTrainingScope);
  updateTrainingScope();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const selectedLevel = level.value;
    const record = {
      id: `${Date.now()}-training`,
      level: selectedLevel,
      faculty: faculty.value,
      program: program.value,
      responsible: responsible.value || currentUser?.name || "Pendiente",
      title: document.getElementById("training-title")?.value.trim() || "Capacitacion sin titulo",
      date: document.getElementById("training-date")?.value || "",
      description: document.getElementById("training-description")?.value.trim() || ""
    };

    trainingRecords.unshift(record);
    saveTrainingRecords();
    renderTrainingTable();
    form.reset();
    updateTrainingScope();
  });
}

function renderTrainingTable() {
  const table = document.getElementById("training-table");
  const count = document.getElementById("training-count");
  if (!table) return;

  table.innerHTML = trainingRecords.length ? trainingRecords.map((record) => {
    const scope = record.level === "General" ? "Toda la UPeU" : record.level === "Facultad" ? record.faculty : `${record.faculty} · ${record.program}`;
    return `
      <tr>
        <td>${record.level}</td>
        <td>${scope || "Pendiente"}</td>
        <td><strong>${record.title}</strong></td>
        <td>${record.responsible}</td>
        <td>${record.date || "Sin fecha"}</td>
      </tr>
    `;
  }).join("") : "<tr><td colspan=\"5\">Aun no hay capacitaciones registradas.</td></tr>";

  if (count) {
    count.textContent = `${trainingRecords.length} capacitaciones`;
  }
}

function setupScopedForm(config) {
  const level = document.getElementById(config.level);
  const faculty = document.getElementById(config.faculty);
  const program = document.getElementById(config.program);
  const responsible = document.getElementById(config.responsible);
  if (!level || !faculty || !program || !responsible) return null;

  fillSelect(config.faculty, students.map((student) => student.faculty));
  fillSelect(config.responsible, pastors.map((pastor) => pastor[1]));

  function updateScope() {
    const selectedLevel = level.value;

    if (selectedLevel === "General") {
      faculty.disabled = true;
      program.disabled = true;
      faculty.value = "";
      program.value = "";
      setSelectOptions(program, "No aplica para nivel general", []);
      return;
    }

    if (selectedLevel === "Facultad") {
      faculty.disabled = false;
      program.disabled = true;
      program.value = "";
      setSelectOptions(program, "No aplica para nivel facultad", []);
      return;
    }

    faculty.disabled = false;
    if (!faculty.value) {
      program.disabled = true;
      setSelectOptions(program, "Primero seleccione facultad", []);
      return;
    }

    const scopedStudents = students.filter((student) => student.faculty === faculty.value);
    program.disabled = false;
    setSelectOptions(program, "Seleccione escuela / programa", scopedStudents.map((student) => student.program));
  }

  level.addEventListener("change", updateScope);
  level.addEventListener("input", updateScope);
  faculty.addEventListener("change", updateScope);
  faculty.addEventListener("input", updateScope);
  updateScope();
  return updateScope;
}

function setupEventForm() {
  const form = document.getElementById("event-form");
  if (!form) return;

  const updateScope = setupScopedForm({
    level: "event-level",
    faculty: "event-faculty",
    program: "event-program",
    responsible: "event-responsible"
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const level = document.getElementById("event-level")?.value || "General";
    const record = {
      id: `${Date.now()}-event`,
      level,
      faculty: document.getElementById("event-faculty")?.value || "",
      program: document.getElementById("event-program")?.value || "",
      responsible: document.getElementById("event-responsible")?.value || currentUser?.name || "Pendiente",
      type: document.getElementById("event-type")?.value || "",
      title: document.getElementById("event-title")?.value.trim() || "Evento sin titulo",
      date: document.getElementById("event-date")?.value || "",
      time: document.getElementById("event-time")?.value || "",
      description: document.getElementById("event-description")?.value.trim() || ""
    };

    eventRecords.unshift(record);
    saveEventRecords();
    renderEventTable();
    form.reset();
    updateScope?.();
  });
}

function renderEventTable() {
  const table = document.getElementById("event-table");
  const count = document.getElementById("event-count");
  if (!table) return;

  table.innerHTML = eventRecords.length ? eventRecords.map((record) => {
    const scope = record.level === "General" ? "Toda la UPeU" : record.level === "Facultad" ? record.faculty : `${record.faculty} · ${record.program}`;
    return `
      <tr>
        <td>${record.level}</td>
        <td>${scope || "Pendiente"}</td>
        <td>${record.type}</td>
        <td><strong>${record.title}</strong></td>
        <td>${record.responsible}</td>
        <td>${record.date || "Sin fecha"}</td>
        <td>${record.time || "Sin hora"}</td>
      </tr>
    `;
  }).join("") : "<tr><td colspan=\"7\">Aun no hay eventos registrados.</td></tr>";

  if (count) {
    count.textContent = `${eventRecords.length} eventos`;
  }

  renderCalendar();
}

function setupSmallGroupForm() {
  const form = document.getElementById("small-group-form");
  if (!form) return;

  fillSelect("small-group-pastor", pastors.map((pastor) => pastor[1]));
  refreshSmallGroupFilters();

  ["small-group-search", "small-group-faculty-filter", "small-group-pastor-filter"].forEach((id) => {
    document.getElementById(id)?.addEventListener("input", renderSmallGroupTable);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const record = {
      id: `${Date.now()}-small-group`,
      name: document.getElementById("small-group-name")?.value.trim() || "Grupo pequeno sin nombre",
      pastor: document.getElementById("small-group-pastor")?.value || "Pendiente",
      faculty: document.getElementById("small-group-faculty")?.value || "Pendiente",
      meeting: document.getElementById("small-group-meeting")?.value || "Viernes de noche",
      place: document.getElementById("small-group-place")?.value.trim() || "Pendiente"
    };

    smallGroupRecords.unshift(record);
    saveSmallGroupRecords();
    renderSmallGroupTable();
    form.reset();
    refreshSmallGroupFilters();
  });
}

function refreshSmallGroupFilters() {
  const scopedStudents = studentsInCurrentScope(students);
  const scopedPastors = currentUser?.roleKey === "general"
    ? pastors
    : pastors.filter((pastor) => pastor[5] === currentUser?.facultyCode);
  fillSelect("small-group-pastor", scopedPastors.map((pastor) => pastor[1]));
  fillSelect("small-group-faculty", scopedStudents.map((student) => student.faculty));
  fillSelect("small-group-pastor-filter", scopedPastors.map((pastor) => pastor[1]));
  fillSelect("small-group-faculty-filter", scopedStudents.map((student) => student.faculty));
}

function renderSmallGroupTable() {
  const table = document.getElementById("small-group-table");
  const count = document.getElementById("small-group-count");
  if (!table) return;

  const query = (document.getElementById("small-group-search")?.value || "").toLowerCase();
  const facultyFilter = document.getElementById("small-group-faculty-filter")?.value || "";
  const pastorFilter = document.getElementById("small-group-pastor-filter")?.value || "";
  const rows = smallGroupRecords.filter((group) => {
    const text = `${group.name} ${group.pastor} ${group.faculty} ${group.meeting} ${group.place}`.toLowerCase();
    return text.includes(query)
      && (!facultyFilter || group.faculty === facultyFilter)
      && (!pastorFilter || group.pastor === pastorFilter)
      && (currentUser?.roleKey === "general" || isCurrentFacultyName(group.faculty));
  });

  table.innerHTML = rows.length ? rows.map((group) => `
    <tr>
      <td><button type="button" class="link-button small-group-link" data-group-id="${group.id}">${group.name}</button></td>
      <td>${group.pastor}</td>
      <td>${group.faculty}</td>
      <td>${group.meeting}</td>
      <td>${group.place}</td>
    </tr>
  `).join("") : "<tr><td colspan=\"5\">No hay grupos pequenos con esos filtros.</td></tr>";

  if (count) {
    const totalScope = smallGroupRecords.filter((group) => currentUser?.roleKey === "general" || isCurrentFacultyName(group.faculty)).length;
    count.textContent = `${rows.length} visibles de ${totalScope}`;
  }
}

function selectedSmallGroup() {
  return smallGroupRecords.find((group) => group.id === selectedSmallGroupId);
}

function openSmallGroupInfo(id) {
  selectedSmallGroupId = id;
  renderSmallGroupInfo();
}

function renderSmallGroupInfo() {
  const group = selectedSmallGroup();
  const panel = document.getElementById("small-group-info-panel");
  const board = document.getElementById("small-group-info-board");
  if (!panel || !board) return;

  if (!group) {
    panel.classList.add("hidden");
    return;
  }

  panel.classList.remove("hidden");
  document.getElementById("small-group-leader").value = group.leader || "";
  document.getElementById("small-group-co-leader").value = group.coLeader || "";
  document.getElementById("small-group-counselor").value = group.counselor || group.pastor || "";
  document.getElementById("small-group-logo").value = group.logo || "";
  document.getElementById("small-group-banner").value = group.banner || "";
  document.getElementById("small-group-photo").value = group.photo || "";
  document.getElementById("small-group-verse").value = group.verse || "";
  document.getElementById("small-group-motto").value = group.motto || "";
  document.getElementById("small-group-regular-place").value = group.regularPlace || group.place || "";
  renderSmallGroupMembers();
}

function setupSmallGroupInfoForms() {
  document.getElementById("small-group-table")?.addEventListener("click", (event) => {
    const button = event.target.closest(".small-group-link");
    if (!button) return;
    openSmallGroupInfo(button.dataset.groupId);
  });

  document.getElementById("small-group-leaders-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const group = selectedSmallGroup();
    if (!group) return;
    group.leader = document.getElementById("small-group-leader").value.trim();
    group.coLeader = document.getElementById("small-group-co-leader").value.trim();
    group.counselor = document.getElementById("small-group-counselor").value.trim();
    saveSmallGroupRecords();
  });

  document.getElementById("small-group-identity-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const group = selectedSmallGroup();
    if (!group) return;
    group.logo = document.getElementById("small-group-logo").value.trim();
    group.banner = document.getElementById("small-group-banner").value.trim();
    group.photo = document.getElementById("small-group-photo").value.trim();
    group.verse = document.getElementById("small-group-verse").value.trim();
    group.motto = document.getElementById("small-group-motto").value.trim();
    group.regularPlace = document.getElementById("small-group-regular-place").value.trim();
    saveSmallGroupRecords();
    renderSmallGroupTable();
  });

  document.getElementById("small-group-save-all")?.addEventListener("click", () => {
    saveSelectedSmallGroupInfo();
    renderSmallGroupTable();
  });

  document.getElementById("small-group-convert")?.addEventListener("click", openConvertClassModal);
  document.getElementById("convert-class-close")?.addEventListener("click", closeConvertClassModal);
  document.getElementById("convert-class-modal")?.addEventListener("click", (event) => {
    if (event.target.id === "convert-class-modal") closeConvertClassModal();
  });
  document.getElementById("convert-class-form")?.addEventListener("submit", convertSelectedGroupToClass);

  setupSmallGroupMemberSearch();
}

function saveSelectedSmallGroupInfo() {
  const group = selectedSmallGroup();
  if (!group) return;

  group.leader = document.getElementById("small-group-leader").value.trim();
  group.coLeader = document.getElementById("small-group-co-leader").value.trim();
  group.counselor = document.getElementById("small-group-counselor").value.trim();
  group.logo = document.getElementById("small-group-logo").value.trim();
  group.banner = document.getElementById("small-group-banner").value.trim();
  group.photo = document.getElementById("small-group-photo").value.trim();
  group.verse = document.getElementById("small-group-verse").value.trim();
  group.motto = document.getElementById("small-group-motto").value.trim();
  group.regularPlace = document.getElementById("small-group-regular-place").value.trim();
  saveSmallGroupRecords();
}

function openConvertClassModal() {
  saveSelectedSmallGroupInfo();
  const group = selectedSmallGroup();
  const modal = document.getElementById("convert-class-modal");
  if (!group || !modal) return;

  document.getElementById("convert-class-name").value = group.name || "";
  document.getElementById("convert-class-faculty").value = group.faculty || "";
  document.getElementById("convert-class-room").value = group.regularPlace || group.place || "";
  document.getElementById("convert-class-groups").innerHTML = `
    <div class="member-row">
      <strong>${group.name}</strong>
      <span>${(group.members || []).length} miembros registrados</span>
    </div>
  `;
  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeConvertClassModal() {
  document.getElementById("convert-class-modal")?.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function convertSelectedGroupToClass(event) {
  event.preventDefault();
  const group = selectedSmallGroup();
  if (!group) return;

  const name = document.getElementById("convert-class-name").value.trim() || group.name;
  const faculty = document.getElementById("convert-class-faculty").value.trim() || group.faculty;
  const room = document.getElementById("convert-class-room").value.trim() || group.regularPlace || group.place || "";
  const classRecord = {
    faculty,
    room,
    name,
    sourceGroups: [group.id],
    members: [...(group.members || [])],
    createdFromSmallGroup: true
  };

  customMaranathaClasses.unshift(classRecord);
  saveCustomMaranathaClasses();
  group.convertedToClass = name;
  saveSmallGroupRecords();
  renderClasses();
  renderClassBars();
  closeConvertClassModal();
  activateView("classes");
}

function setupSmallGroupMemberSearch() {
  const input = document.getElementById("small-group-member-search");
  const results = document.getElementById("small-group-member-results");
  if (!input || !results) return;

  input.addEventListener("input", () => {
    const group = selectedSmallGroup();
    const query = input.value.trim().toLowerCase();
    if (!group || query.length < 2) {
      results.innerHTML = "";
      return;
    }

    const memberCodes = new Set(group.members || []);
    const matches = students.filter((student) => {
      const text = `${student.code} ${student.name} ${student.document} ${student.program} ${student.faculty}`.toLowerCase();
      return text.includes(query) && !memberCodes.has(student.code);
    }).slice(0, 8);

    results.innerHTML = matches.length ? matches.map((student) => `
      <button type="button" class="student-result" data-member-code="${student.code}">
        <strong>${student.code} · ${student.name}</strong>
        <span>${student.program} · ${student.faculty}</span>
      </button>
    `).join("") : "<div class=\"empty-result\">No se encontraron estudiantes disponibles.</div>";
  });

  results.addEventListener("click", (event) => {
    const button = event.target.closest("[data-member-code]");
    const group = selectedSmallGroup();
    if (!button || !group) return;
    group.members = group.members || [];
    group.members.push(button.dataset.memberCode);
    saveSmallGroupRecords();
    input.value = "";
    results.innerHTML = "";
    renderSmallGroupMembers();
  });
}

function renderSmallGroupMembers() {
  const group = selectedSmallGroup();
  const list = document.getElementById("small-group-member-list");
  if (!list) return;
  const members = (group?.members || []).map((code) => students.find((student) => student.code === code)).filter(Boolean);

  list.innerHTML = members.length ? members.map((student) => `
    <div class="member-row">
      <strong>${student.name}</strong>
      <span>${student.code} · ${student.program}</span>
      <button type="button" class="danger-button" data-remove-member="${student.code}">Quitar</button>
    </div>
  `).join("") : "<p class=\"empty-result\">Aun no hay miembros registrados.</p>";

  list.querySelectorAll("[data-remove-member]").forEach((button) => {
    button.addEventListener("click", () => {
      const current = selectedSmallGroup();
      if (!current) return;
      current.members = (current.members || []).filter((code) => code !== button.dataset.removeMember);
      saveSmallGroupRecords();
      renderSmallGroupMembers();
    });
  });
}

function facultyCodeFromName(name) {
  const value = String(name || "").toLowerCase();
  if (value.includes("humanas") || value.includes("educacion")) return "FACIHED";
  if (value.includes("empresariales")) return "FCE";
  if (value.includes("ingenieria") || value.includes("arquitectura")) return "FIA";
  if (value.includes("salud")) return "FCS";
  if (value.includes("teologia")) return "TEOLOGIA";
  return "GENERAL";
}

function eventColorClass(record) {
  if (record.level === "General") return "event-general";
  const code = facultyCodeFromName(record.faculty);
  return {
    FACIHED: "event-facihed",
    FCE: "event-fce",
    FIA: "event-fia",
    FCS: "event-fcs",
    TEOLOGIA: "event-teologia"
  }[code] || "event-general";
}

function calendarEvents() {
  return eventRecords
    .filter((event) => event.date)
    .sort((a, b) => `${a.date} ${a.time || ""}`.localeCompare(`${b.date} ${b.time || ""}`));
}

function renderCalendar() {
  const grid = document.getElementById("calendar-grid");
  const title = document.getElementById("calendar-title");
  if (!grid || !title) return;

  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  const todayIso = new Date().toISOString().slice(0, 10);
  const monthName = calendarDate.toLocaleDateString("es-PE", { month: "long", year: "numeric" });
  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startOffset = firstDay.getDay();
  const events = calendarEvents();

  title.textContent = monthName.charAt(0).toUpperCase() + monthName.slice(1);
  const headers = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"].map((day) => `<div class="calendar-weekday">${day}</div>`);
  const cells = [];

  for (let i = 0; i < startOffset; i += 1) {
    cells.push("<div class=\"calendar-day muted-day\"></div>");
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const isoDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const dayEvents = events.filter((event) => event.date === isoDate);
    cells.push(`
      <div class="calendar-day ${isoDate === todayIso ? "today" : ""}" data-date="${isoDate}">
        <strong>${day}</strong>
        <div class="calendar-events">
          ${dayEvents.map((event) => `
            <button type="button" class="calendar-event ${eventColorClass(event)}" data-event-id="${event.id}" title="${event.responsible || "Sin responsable"}">
              <span>${event.time || ""} ${event.type}</span>
              ${event.title}
            </button>
          `).join("")}
        </div>
      </div>
    `);
  }

  grid.innerHTML = [...headers, ...cells].join("");
}

function setupCalendar() {
  document.getElementById("calendar-prev")?.addEventListener("click", () => {
    calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1, 1);
    renderCalendar();
  });

  document.getElementById("calendar-next")?.addEventListener("click", () => {
    calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 1);
    renderCalendar();
  });

  document.getElementById("calendar-grid")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-event-id]");
    if (button) {
      openEventDetail(button.dataset.eventId);
      return;
    }

    const day = event.target.closest("[data-date]");
    if (day) {
      openDayEvents(day.dataset.date);
    }
  });

  document.getElementById("event-detail-close")?.addEventListener("click", closeEventDetail);
  document.getElementById("event-detail-modal")?.addEventListener("click", (event) => {
    if (event.target.id === "event-detail-modal") closeEventDetail();
  });

  document.getElementById("event-detail-modal")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-modal-event-id]");
    if (button) {
      openEventDetail(button.dataset.modalEventId);
    }
  });
}

function openDayEvents(date) {
  const modal = document.getElementById("event-detail-modal");
  const title = document.getElementById("event-detail-title");
  const body = document.getElementById("event-detail-body");
  const editForm = document.getElementById("event-edit-form");
  const editButton = document.getElementById("event-detail-edit");
  if (!modal || !title || !body) return;

  const events = calendarEvents().filter((event) => event.date === date);
  const formatted = new Date(`${date}T00:00:00`).toLocaleDateString("es-PE", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  title.textContent = `Eventos del ${formatted}`;
  body.classList.remove("hidden");
  editForm?.classList.add("hidden");
  if (editButton) editButton.classList.add("hidden");
  body.innerHTML = events.length ? `
    <div class="day-event-list">
      ${events.map((event) => `
        <button type="button" class="day-event-item ${eventColorClass(event)}" data-modal-event-id="${event.id}">
          <span class="day-event-time">${event.time || "Sin hora"}</span>
          <strong>${event.title}</strong>
          <span>${event.type}</span>
          <span>${event.level === "General" ? "Toda la UPeU" : event.faculty}</span>
        </button>
      `).join("")}
    </div>
  ` : "<p class=\"empty-result\">No hay eventos registrados para este dia.</p>";
  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function openEventDetail(id) {
  const event = calendarEvents().find((item) => item.id === id);
  const modal = document.getElementById("event-detail-modal");
  const title = document.getElementById("event-detail-title");
  const body = document.getElementById("event-detail-body");
  if (!event || !modal || !title || !body) return;

  selectedEventId = id;
  const scope = event.level === "General" ? "Toda la UPeU" : event.level === "Facultad" ? event.faculty : `${event.faculty} · ${event.program}`;
  title.textContent = event.title;
  body.innerHTML = profileRows([
    ["Fecha", event.date],
    ["Hora", event.time || "Sin hora"],
    ["Tipo", event.type],
    ["Nivel", event.level],
    ["Alcance", scope],
    ["Responsable", event.responsible || "Pendiente"],
    ["Descripcion", event.description || "Sin descripcion"]
  ]);
  document.getElementById("event-edit-form")?.classList.add("hidden");
  const editButton = document.getElementById("event-detail-edit");
  if (editButton) {
    editButton.classList.toggle("hidden", !canEditEvents());
  }
  body.classList.remove("hidden");
  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeEventDetail() {
  document.getElementById("event-detail-modal")?.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function setupEventEditing() {
  const editButton = document.getElementById("event-detail-edit");
  const form = document.getElementById("event-edit-form");
  const body = document.getElementById("event-detail-body");
  if (!editButton || !form || !body) return;

  editButton.addEventListener("click", () => {
    if (!canEditEvents()) return;
    const event = eventRecords.find((item) => item.id === selectedEventId);
    if (!event) return;

    document.getElementById("event-edit-title").value = event.title || "";
    document.getElementById("event-edit-type").value = event.type || "Academico-pastoral";
    document.getElementById("event-edit-level").value = event.level || "General";
    document.getElementById("event-edit-faculty").value = event.faculty || "";
    document.getElementById("event-edit-date").value = event.date || "";
    document.getElementById("event-edit-time").value = event.time || "";
    document.getElementById("event-edit-description").value = event.description || "";
    body.classList.add("hidden");
    form.classList.remove("hidden");
  });

  form.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();
    if (!canEditEvents()) return;
    const event = eventRecords.find((item) => item.id === selectedEventId);
    if (!event) return;

    event.title = document.getElementById("event-edit-title").value.trim() || event.title;
    event.type = document.getElementById("event-edit-type").value;
    event.level = document.getElementById("event-edit-level").value;
    event.faculty = document.getElementById("event-edit-faculty").value.trim();
    event.date = document.getElementById("event-edit-date").value;
    event.time = document.getElementById("event-edit-time").value;
    event.description = document.getElementById("event-edit-description").value.trim();
    saveEventRecords();
    renderEventTable();
    renderCalendar();
    openEventDetail(event.id);
  });
}

function renderClassBars() {
  const container = document.getElementById("class-bars");
  if (!container) return;

  const scopedClasses = allMaranathaClasses().filter(([faculty]) => currentUser?.roleKey === "general" || isCurrentFacultyName(faculty));
  const counts = scopedClasses.reduce((acc, [faculty]) => {
    acc[faculty] = (acc[faculty] || 0) + 1;
    return acc;
  }, {});
  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const max = Math.max(...entries.map((item) => item[1]), 1);

  container.innerHTML = entries.length ? entries.map(([name, count]) => {
    const width = Math.round((count / max) * 100);
    return `
      <div class="bar-row compact">
        <strong>${name}</strong>
        <span class="bar-track"><span class="bar-fill" style="width:${width}%"></span></span>
        <span>${count}</span>
      </div>
    `;
  }).join("") : "<p class=\"empty-result\">No hay Maranatha Class para esta facultad.</p>";
}

function renderClasses() {
  const table = document.getElementById("class-table");
  if (!table) return;

  const query = (document.getElementById("class-search")?.value || "").toLowerCase();
  const filter = document.getElementById("faculty-filter")?.value || "";
  const rows = allMaranathaClasses().filter(([faculty, room, name]) => {
    const text = `${faculty} ${room} ${name}`.toLowerCase();
    return text.includes(query)
      && (!filter || faculty.includes(filter))
      && (currentUser?.roleKey === "general" || isCurrentFacultyName(faculty));
  });

  table.innerHTML = rows.length ? rows.map(([faculty, room, name, custom]) => `
    <tr>
      <td>${faculty}</td>
      <td>${room || "<span class=\"pill warning\">Pendiente</span>"}</td>
      <td><strong>${name}</strong></td>
      <td>${custom ? `Creada desde grupo pequeno · ${custom.members.length} miembros` : "Medicion de asistencia, grupos asociados y actividad eclesiastica"}</td>
    </tr>
  `).join("") : "<tr><td colspan=\"4\">No hay Maranatha Class visibles para esta facultad.</td></tr>";
}

function isFormationCristianaEnrolled(student) {
  const index = studentIndexByCode.get(student.code) || 0;
  return index % 5 !== 0;
}

function studentFacultyCode(student) {
  return facultyCodeFromName(student.faculty);
}

function isCurrentFacultyName(name) {
  return !currentUser?.facultyCode || facultyCodeFromName(name) === currentUser.facultyCode;
}

function pastorUsersByFaculty(facultyCode, includeCoordinators = false) {
  const roles = includeCoordinators ? ["Docente Capellan", "Coordinador de Facultad", "Coordinador General"] : ["Docente Capellan"];
  const facultyPastors = users.filter((user) => user.facultyCode === facultyCode && roles.includes(user.role));
  if (facultyPastors.length) return facultyPastors;
  return users.filter((user) => roles.includes(user.role));
}

function teachingPastorForStudent(student) {
  const index = studentIndexByCode.get(student.code) || 0;
  const options = pastorUsersByFaculty(studentFacultyCode(student));
  return options[index % Math.max(options.length, 1)] || users.find((user) => user.role === "Coordinador General");
}

function assignedChaplainForStudent(student) {
  const dni = chaplaincyAssignments[student.code];
  return users.find((user) => user.dni === dni) || null;
}

function teachingEnrollmentForStudent(student) {
  const courseIds = Array.isArray(teachingEnrollments[student.code]) ? teachingEnrollments[student.code] : [];
  return courseIds
    .map((courseId) => christianFormationCourses.find((course) => course.id === courseId))
    .filter(Boolean);
}

function teachingCourseBelongsToCurrentUser(course) {
  if (!currentUser || currentUser.roleKey === "general") return true;
  if (currentUser.roleKey === "faculty") return course.faculty === currentUser.facultyCode;
  if (currentUser.roleKey === "chaplain") {
    return course.faculty === currentUser.facultyCode && namesLikelyMatch(course.pastor, currentUser.name);
  }

  return false;
}

function visibleTeachingCourses() {
  return christianFormationCourses
    .filter(teachingCourseBelongsToCurrentUser)
    .sort((a, b) => Number(a.number) - Number(b.number));
}

function canManageTeachingEnrollments() {
  return currentUser?.roleKey === "general" || currentUser?.roleKey === "faculty";
}

function updateTeachingEnrollmentAccess() {
  const panel = document.getElementById("teaching-enrollment-panel");
  panel?.classList.toggle("hidden", !canManageTeachingEnrollments());
}

function studentHasVisibleTeachingEnrollment(student) {
  const visibleCourseIds = new Set(visibleTeachingCourses().map((course) => course.id));
  const courseIds = Array.isArray(teachingEnrollments[student.code]) ? teachingEnrollments[student.code] : [];
  return courseIds.some((courseId) => visibleCourseIds.has(courseId));
}

function studentAssignedToCurrentChaplain(student) {
  return Boolean(currentUser?.dni && chaplaincyAssignments[student.code] === currentUser.dni);
}

function studentFormationCourseIds(student) {
  return Array.isArray(teachingEnrollments[student.code]) ? teachingEnrollments[student.code] : [];
}

function studentIsEnrolledInFormation(student) {
  return studentFormationCourseIds(student).length > 0;
}

function studentsInCurrentScope(source = students) {
  const sourceActive = activeStudents(source);
  if (!currentUser || currentUser.roleKey === "general") return sourceActive;

  if (currentUser.roleKey === "chaplain") {
    return sourceActive.filter((student) => studentHasVisibleTeachingEnrollment(student) || studentAssignedToCurrentChaplain(student));
  }

  if (currentUser.facultyCode) {
    return sourceActive.filter((student) => studentFacultyCode(student) === currentUser.facultyCode);
  }

  return sourceActive;
}

function chaplaincyBaseStudents() {
  const availableStudents = activeStudents(students);
  if (!currentUser || currentUser.roleKey === "general") return availableStudents;
  if (currentUser.roleKey === "chaplain") {
    return availableStudents.filter((student) => studentAssignedToCurrentChaplain(student) || studentFacultyCode(student) === currentUser.facultyCode);
  }
  return studentsInCurrentScope(students);
}

function refreshChaplaincyFilters() {
  const select = document.getElementById("chaplaincy-faculty-filter");
  const modalitySelect = document.getElementById("chaplaincy-modality-filter");
  const pastorFacultySelect = document.getElementById("chaplaincy-pastor-faculty-filter");
  const selected = select?.value || "";
  const selectedModality = modalitySelect?.value || "";
  const selectedPastorFaculty = pastorFacultySelect?.value || "";
  fillSelect("chaplaincy-faculty-filter", chaplaincyBaseStudents().map((student) => student.faculty));
  fillSelect("chaplaincy-modality-filter", chaplaincyBaseStudents().map((student) => student.modality));
  fillSelect("chaplaincy-pastor-faculty-filter", users.map((user) => user.facultyCode));
  if (select && [...select.options].some((option) => option.value === selected)) {
    select.value = selected;
  }
  if (modalitySelect && [...modalitySelect.options].some((option) => option.value === selectedModality)) {
    modalitySelect.value = selectedModality;
  }
  if (pastorFacultySelect && [...pastorFacultySelect.options].some((option) => option.value === selectedPastorFaculty)) {
    pastorFacultySelect.value = selectedPastorFaculty;
  }
}

function renderChaplaincy() {
  const loadTable = document.getElementById("chaplaincy-load-table");
  const unassignedTable = document.getElementById("chaplaincy-unassigned-table");
  const assignedTable = document.getElementById("chaplaincy-assigned-table");
  if (!loadTable || !unassignedTable || !assignedTable) return;

  refreshChaplaincyFilters();
  const baseStudents = chaplaincyBaseStudents();
  const search = normalizeText(document.getElementById("chaplaincy-search")?.value || "");
  const facultyFilter = document.getElementById("chaplaincy-faculty-filter")?.value || "";
  const modalityFilter = document.getElementById("chaplaincy-modality-filter")?.value || "";
  const pastorFacultyFilter = document.getElementById("chaplaincy-pastor-faculty-filter")?.value || "";
  const enrolledStudents = baseStudents.filter(studentIsEnrolledInFormation);
  const unenrolledStudents = baseStudents.filter((student) => !studentIsEnrolledInFormation(student));
  const studentMatchesChaplaincyFilters = (student) => {
    const text = normalizeText(`${student.code} ${student.name} ${student.document} ${student.program} ${student.faculty}`);
    return (!facultyFilter || student.faculty === facultyFilter)
      && (!modalityFilter || student.modality === modalityFilter)
      && (!search || text.includes(search));
  };
  const pendingUnenrolledStudents = unenrolledStudents.filter((student) => !chaplaincyAssignments[student.code]);
  const filteredUnenrolledStudents = pendingUnenrolledStudents.filter(studentMatchesChaplaincyFilters);
  const scopedAssignmentRows = Object.entries(chaplaincyAssignments).flatMap(([code, pastorDni]) => {
    const student = students.find((item) => item.code === code);
    const pastor = users.find((user) => user.dni === pastorDni);
    return student && pastor && baseStudents.includes(student) && !studentIsEnrolledInFormation(student) ? [{ student, pastor }] : [];
  });
  const filteredAssignmentRows = scopedAssignmentRows.filter(({ student }) => studentMatchesChaplaincyFilters(student));

  document.getElementById("chaplaincy-enrolled").textContent = enrolledStudents.length.toLocaleString("es-PE");
  document.getElementById("chaplaincy-unenrolled").textContent = unenrolledStudents.length.toLocaleString("es-PE");
  document.getElementById("chaplaincy-assigned").textContent = scopedAssignmentRows.length.toLocaleString("es-PE");
  document.getElementById("chaplaincy-pending").textContent = pendingUnenrolledStudents.length.toLocaleString("es-PE");
  document.getElementById("chaplaincy-unassigned-count").textContent = `${filteredUnenrolledStudents.length.toLocaleString("es-PE")} visibles`;
  document.getElementById("chaplaincy-assigned-list-count").textContent = `${filteredAssignmentRows.length.toLocaleString("es-PE")} visibles`;

  const loadByDni = users.reduce((acc, user) => {
    acc[user.dni] = { user, teaching: 0, assigned: 0, faculties: new Set([user.facultyCode].filter(Boolean)) };
    return acc;
  }, {});

  Object.entries(teachingEnrollments).forEach(([code, courseIds]) => {
    const student = students.find((item) => item.code === code);
    if (!student || !baseStudents.includes(student) || !Array.isArray(courseIds)) return;
    courseIds.forEach((courseId) => {
      const course = christianFormationCourses.find((item) => item.id === courseId);
      const pastor = users.find((user) => user.facultyCode === course?.faculty && namesLikelyMatch(course.pastor, user.name));
      if (pastor && loadByDni[pastor.dni]) {
        loadByDni[pastor.dni].teaching += 1;
        if (course?.faculty) loadByDni[pastor.dni].faculties.add(course.faculty);
      }
    });
  });

  scopedAssignmentRows.forEach(({ student, pastor }) => {
    if (pastor && loadByDni[pastor.dni]) {
      loadByDni[pastor.dni].assigned += 1;
      const facultyCode = student ? studentFacultyCode(student) : "";
      if (facultyCode) loadByDni[pastor.dni].faculties.add(facultyCode);
    }
  });

  loadTable.innerHTML = Object.values(loadByDni)
    .filter(({ user, teaching, assigned }) => teaching || assigned || currentUser?.roleKey !== "chaplain")
    .filter(({ user, faculties }) => currentUser?.roleKey === "general" || user.facultyCode === currentUser?.facultyCode || faculties.has(currentUser?.facultyCode))
    .filter(({ faculties }) => !pastorFacultyFilter || faculties.has(pastorFacultyFilter))
    .map(({ user, teaching, assigned, faculties }) => `
      <tr>
        <td><strong>${user.name}</strong><br><small>${user.role}</small></td>
        <td><span class="pill faculty">${[...faculties].join(", ")}</span></td>
        <td>${teaching.toLocaleString("es-PE")}</td>
        <td>${assigned.toLocaleString("es-PE")}</td>
        <td><strong>${(teaching + assigned).toLocaleString("es-PE")}</strong></td>
      </tr>
    `).join("");

  unassignedTable.innerHTML = filteredUnenrolledStudents.length ? filteredUnenrolledStudents.slice(0, 300).map((student) => {
    const assignedPastor = assignedChaplainForStudent(student);
    const facultyPastors = pastorUsersByFaculty(studentFacultyCode(student), true);
    return `
      <tr>
        <td>${student.code}</td>
        <td><button type="button" class="link-button student-profile-link" data-code="${student.code}">${student.name}</button></td>
        <td><span class="pill faculty">${student.faculty}</span></td>
        <td>${student.cycle || "Sin ciclo"}</td>
        <td>${student.program}<br><small>${student.modality || "Sin modalidad"}</small></td>
        <td>${assignedPastor ? assignedPastor.name : "Pendiente"}</td>
        <td>
          <select data-chaplaincy-select="${student.code}">
            <option value="">Seleccione pastor</option>
            ${facultyPastors.map((pastor) => `<option value="${pastor.dni}" ${assignedPastor?.dni === pastor.dni ? "selected" : ""}>${pastor.name} · ${pastor.role}</option>`).join("")}
          </select>
          <button type="button" class="primary-button" data-assign-chaplain="${student.code}">Asignar</button>
        </td>
      </tr>
    `;
  }).join("") : "<tr><td colspan=\"7\">No hay estudiantes no matriculados con los filtros actuales.</td></tr>";

  assignedTable.innerHTML = filteredAssignmentRows.length ? filteredAssignmentRows.slice(0, 300).map(({ student, pastor }) => `
    <tr>
      <td>${student.code}</td>
      <td><button type="button" class="link-button student-profile-link" data-code="${student.code}">${student.name}</button></td>
      <td><span class="pill faculty">${student.faculty}</span></td>
      <td>${student.cycle || "Sin ciclo"}</td>
      <td>${student.program}<br><small>${student.modality || "Sin modalidad"}</small></td>
      <td>${pastor.name}<br><small>${pastor.role}</small></td>
      <td><button type="button" class="danger-button" data-unassign-chaplain="${student.code}">Quitar</button></td>
    </tr>
  `).join("") : "<tr><td colspan=\"7\">No hay estudiantes asignados con los filtros actuales.</td></tr>";
}

function setupChaplaincyFilters() {
  refreshChaplaincyFilters();
  ["chaplaincy-search", "chaplaincy-faculty-filter", "chaplaincy-modality-filter", "chaplaincy-pastor-faculty-filter"].forEach((id) => {
    document.getElementById(id)?.addEventListener("input", renderChaplaincy);
    document.getElementById(id)?.addEventListener("change", renderChaplaincy);
  });
}

function filteredTeachingCourses() {
  const pastorFilter = (document.getElementById("teaching-pastor-filter")?.value || "").toLowerCase();
  const facultyFilter = document.getElementById("teaching-faculty-filter")?.value || "";
  const courseFilter = document.getElementById("teaching-course-filter")?.value || "";
  const cycleFilter = document.getElementById("teaching-cycle-filter")?.value || "";
  const groupFilter = document.getElementById("teaching-group-filter")?.value || "";
  const careerFilter = (document.getElementById("teaching-career-filter")?.value || "").toLowerCase();

  return visibleTeachingCourses()
    .filter((record) => !pastorFilter || record.pastor.toLowerCase().includes(pastorFilter))
    .filter((record) => !facultyFilter || record.faculty === facultyFilter)
    .filter((record) => !courseFilter || record.course === courseFilter)
    .filter((record) => !cycleFilter || record.cycle === cycleFilter)
    .filter((record) => !groupFilter || record.group === groupFilter)
    .filter((record) => !careerFilter || record.career.toLowerCase().includes(careerFilter))
    .sort((a, b) => Number(a.number) - Number(b.number));
}

function renderTeaching() {
  const courseTable = document.getElementById("teaching-course-table");
  if (!courseTable) return;

  const scoped = studentsInCurrentScope();
  const courseRows = filteredTeachingCourses();
  const pastorCount = new Set(courseRows.map((record) => record.pastor)).size;
  const scopedEnrollmentRows = Object.entries(teachingEnrollments).flatMap(([code, courseIds]) => {
    const student = students.find((item) => item.code === code);
    if (!student || !studentsInCurrentScope([student]).length) return [];
    return (Array.isArray(courseIds) ? courseIds : []).map((courseId) => ({
      student,
      course: christianFormationCourses.find((item) => item.id === courseId)
    })).filter((item) => item.course);
  });
  const courseEnrollmentCounts = scopedEnrollmentRows.reduce((counts, { course }) => {
    counts[course.id] = (counts[course.id] || 0) + 1;
    return counts;
  }, {});
  const studentCount = new Set(scopedEnrollmentRows.map(({ student }) => student.code)).size;

  document.getElementById("teaching-enrolled").textContent = studentCount.toLocaleString("es-PE");
  document.getElementById("teaching-unenrolled").textContent = (scoped.length - studentCount).toLocaleString("es-PE");
  document.getElementById("teaching-courses").textContent = courseRows.length.toLocaleString("es-PE");
  document.getElementById("teaching-average").textContent = pastorCount ? Math.round(courseRows.length / pastorCount).toLocaleString("es-PE") : "0";
  document.getElementById("teaching-enrollment-count").textContent = `${scopedEnrollmentRows.length.toLocaleString("es-PE")} matriculas`;
  updateTeachingEnrollmentAccess();

  const pastorRows = Object.values(courseRows.reduce((groups, course) => {
    if (!groups[course.pastor]) {
      groups[course.pastor] = {
        pastor: course.pastor,
        faculties: new Set(),
        courses: [],
        studentCodes: new Set()
      };
    }

    groups[course.pastor].faculties.add(course.faculty);
    groups[course.pastor].courses.push(course);
    enrollmentRowsForCourse(course.id).forEach((student) => groups[course.pastor].studentCodes.add(student.code));
    return groups;
  }, {})).sort((a, b) => a.pastor.localeCompare(b.pastor, "es", { numeric: true }));

  courseTable.innerHTML = pastorRows.map((row, index) => {
    const courseCount = row.courses.length;
    const studentTotal = row.studentCodes.size;
    const average = courseCount ? (studentTotal / courseCount).toFixed(1) : "0.0";
    return `
      <tr>
        <td>${index + 1}</td>
        <td><strong>${row.pastor}</strong></td>
        <td>${[...row.faculties].map((faculty) => `<span class="pill faculty">${faculty}</span>`).join(" ")}</td>
        <td><button type="button" class="link-button" data-teaching-pastor="${row.pastor}">${courseCount.toLocaleString("es-PE")} cursos</button></td>
        <td>${studentTotal.toLocaleString("es-PE")}</td>
        <td>${average}</td>
        <td><button type="button" class="ghost-button" data-teaching-pastor="${row.pastor}">Ver cursos</button></td>
      </tr>
    `;
  }).join("") || "<tr><td colspan=\"7\">No hay docentes visibles para estos filtros.</td></tr>";

  if (selectedTeachingCourseId) {
    renderTeachingCourseDetail(selectedTeachingCourseId);
  } else if (selectedTeachingPastorName) {
    renderTeachingPastorDetail(selectedTeachingPastorName, courseRows);
  }
  renderFormationCourseReport();
}

function courseOptionLabel(course) {
  return `${course.faculty} · ${course.pastor} · ${course.course} · ${course.cycle} · ${course.group}`;
}

function enrollmentRowsForCourse(courseId) {
  const course = christianFormationCourses.find((item) => item.id === courseId);
  if (!course || !teachingCourseBelongsToCurrentUser(course)) return [];

  return Object.entries(teachingEnrollments).flatMap(([code, courseIds]) => {
    if (!Array.isArray(courseIds) || !courseIds.includes(courseId)) return [];
    const student = students.find((item) => item.code === code);
    return student && studentsInCurrentScope([student]).length ? [student] : [];
  });
}

function openTeachingCourseDetail(courseId) {
  selectedTeachingPastorName = "";
  selectedTeachingCourseId = courseId;
  renderTeachingCourseDetail(courseId);
}

function openTeachingPastorDetail(pastorName) {
  selectedTeachingCourseId = "";
  selectedTeachingPastorName = pastorName;
  renderTeachingPastorDetail(pastorName);
}

function renderTeachingPastorDetail(pastorName, scopedCourses = null) {
  const panel = document.getElementById("teaching-course-detail-panel");
  const title = document.getElementById("teaching-course-detail-title");
  const subtitle = document.getElementById("teaching-course-detail-subtitle");
  const count = document.getElementById("teaching-course-detail-count");
  const meta = document.getElementById("teaching-course-detail-meta");
  const table = document.getElementById("teaching-course-detail-students");
  const head = document.getElementById("teaching-course-detail-head");
  if (!panel || !title || !subtitle || !count || !meta || !table) return;

  const courses = (scopedCourses || filteredTeachingCourses())
    .filter((course) => course.pastor === pastorName && teachingCourseBelongsToCurrentUser(course));
  const studentCodes = new Set();
  courses.forEach((course) => enrollmentRowsForCourse(course.id).forEach((student) => studentCodes.add(student.code)));
  const faculties = [...new Set(courses.map((course) => course.faculty))];

  panel.classList.remove("hidden");
  title.textContent = pastorName;
  subtitle.textContent = "Resumen de cursos asignados";
  count.textContent = `${courses.length.toLocaleString("es-PE")} cursos`;
  if (head) {
    head.innerHTML = `
      <th>Curso</th>
      <th>Facultad</th>
      <th>Carrera</th>
      <th>Ciclo / Grupo</th>
      <th>Estudiantes</th>
    `;
  }
  meta.innerHTML = profileRows([
    ["Facultades", faculties.length ? faculties.join(", ") : "Sin facultad"],
    ["Cursos", courses.length.toLocaleString("es-PE")],
    ["Estudiantes únicos", studentCodes.size.toLocaleString("es-PE")],
    ["Promedio por curso", courses.length ? (studentCodes.size / courses.length).toFixed(1) : "0.0"]
  ]);
  table.innerHTML = courses.length ? courses.map((course) => {
    const enrolled = enrollmentRowsForCourse(course.id).length;
    return `
      <tr>
        <td><button type="button" class="link-button" data-teaching-course-id="${course.id}">${course.course}</button></td>
        <td><span class="pill faculty">${course.faculty}</span></td>
        <td>${course.career}</td>
        <td>${course.cycle} · ${course.group}</td>
        <td><strong>${enrolled.toLocaleString("es-PE")}</strong></td>
      </tr>
    `;
  }).join("") : "<tr><td colspan=\"5\">No hay cursos visibles para este docente.</td></tr>";
}

function renderTeachingCourseDetail(courseId) {
  const panel = document.getElementById("teaching-course-detail-panel");
  const title = document.getElementById("teaching-course-detail-title");
  const subtitle = document.getElementById("teaching-course-detail-subtitle");
  const count = document.getElementById("teaching-course-detail-count");
  const meta = document.getElementById("teaching-course-detail-meta");
  const table = document.getElementById("teaching-course-detail-students");
  const head = document.getElementById("teaching-course-detail-head");
  const course = christianFormationCourses.find((item) => item.id === courseId);
  if (!panel || !title || !subtitle || !count || !meta || !table || !course) return;
  if (!teachingCourseBelongsToCurrentUser(course)) {
    selectedTeachingCourseId = "";
    panel.classList.add("hidden");
    return;
  }

  const courseStudents = enrollmentRowsForCourse(courseId);
  panel.classList.remove("hidden");
  title.textContent = course.course;
  subtitle.textContent = course.pastor;
  count.textContent = `${courseStudents.length.toLocaleString("es-PE")} alumnos`;
  if (head) {
    head.innerHTML = `
      <th>Codigo</th>
      <th>Estudiante</th>
      <th>Facultad</th>
      <th>Programa</th>
      <th>Estado</th>
    `;
  }
  meta.innerHTML = profileRows([
    ["Facultad", course.faculty],
    ["Carrera", course.career],
    ["Ciclo", course.cycle],
    ["Grupo", course.group],
    ["Docente", course.pastor]
  ]);

  table.innerHTML = courseStudents.length ? courseStudents.map((student) => `
    <tr>
      <td>${student.code}</td>
      <td><button type="button" class="link-button student-profile-link" data-code="${student.code}">${student.name}</button></td>
      <td>${student.faculty}</td>
      <td>${student.program}</td>
      <td>${student.status}</td>
    </tr>
  `).join("") : "<tr><td colspan=\"5\">Aun no hay estudiantes asignados a este curso.</td></tr>";
}

function renderFormationCourseReport() {
  const table = document.getElementById("formation-course-report-table");
  const count = document.getElementById("formation-course-report-count");
  const facultyReport = document.getElementById("formation-faculty-report");
  if (!table) return;

  const facultyColors = ["#0ea5e9", "#f97316", "#22c55e", "#a855f7", "#ef4444", "#14b8a6"];
  const pastorStats = visibleTeachingCourses().reduce((stats, course) => {
    const key = `${course.pastor}__${course.faculty}`;
    if (!stats[key]) {
      stats[key] = {
        pastor: course.pastor,
        faculty: course.faculty,
        courses: 0,
        students: 0
      };
    }
    stats[key].courses += 1;
    stats[key].students += enrollmentRowsForCourse(course.id).length;
    return stats;
  }, {});
  const rows = Object.values(pastorStats);
  const facultyStats = rows.reduce((stats, row) => {
    if (!stats[row.faculty]) {
      stats[row.faculty] = {
        faculty: row.faculty,
        pastors: 0,
        courses: 0,
        students: 0
      };
    }
    stats[row.faculty].pastors += 1;
    stats[row.faculty].courses += row.courses;
    stats[row.faculty].students += row.students;
    return stats;
  }, {});
  const facultyRows = Object.values(facultyStats).sort((a, b) => {
    if (b.students !== a.students) return b.students - a.students;
    return a.faculty.localeCompare(b.faculty, "es", { numeric: true });
  });
  const sortedRows = rows.sort((a, b) => {
    if (a.faculty !== b.faculty) return a.faculty.localeCompare(b.faculty, "es", { numeric: true });
    if (b.students !== a.students) return b.students - a.students;
    return a.pastor.localeCompare(b.pastor, "es", { numeric: true });
  });
  const totalCourses = sortedRows.reduce((total, row) => total + row.courses, 0);
  const totalStudents = sortedRows.reduce((total, row) => total + row.students, 0);

  if (count) {
    count.textContent = `${facultyRows.length.toLocaleString("es-PE")} facultades · ${sortedRows.length.toLocaleString("es-PE")} pastores · ${totalCourses.toLocaleString("es-PE")} cursos · ${totalStudents.toLocaleString("es-PE")} estudiantes`;
  }

  if (facultyReport) {
    facultyReport.innerHTML = facultyRows.length ? facultyRows.map((row, index) => {
      const color = facultyColors[index % facultyColors.length];
      const share = totalStudents ? Math.round((row.students / totalStudents) * 100) : 0;
      const courseShare = totalCourses ? Math.round((row.courses / totalCourses) * 100) : 0;
      const average = row.courses ? (row.students / row.courses).toFixed(1) : "0.0";
      return `
        <article class="faculty-report-card" style="--accent-color:${color}; --pie:${share}%;">
          <div class="faculty-report-head">
            <div>
              <span class="faculty-code">${row.faculty}</span>
              <strong>${row.students.toLocaleString("es-PE")}</strong>
              <small>estudiantes asignados</small>
            </div>
            <div class="donut-chart" aria-label="${share}% de estudiantes asignados"></div>
          </div>
          <div class="report-stats">
            <span><strong>${row.pastors.toLocaleString("es-PE")}</strong> pastores</span>
            <span><strong>${row.courses.toLocaleString("es-PE")}</strong> cursos</span>
            <span><strong>${average}</strong> prom.</span>
            <span><strong>${share}%</strong> estudiantes</span>
            <span><strong>${courseShare}%</strong> cursos</span>
          </div>
        </article>
      `;
    }).join("") : "<p class=\"empty-result\">No hay datos visibles para este rol.</p>";
  }

  let previousFaculty = "";
  let visibleIndex = 0;
  table.innerHTML = sortedRows.length ? sortedRows.map((row) => {
    const average = row.courses ? (row.students / row.courses).toFixed(1) : "0.0";
    const facultyHeader = row.faculty !== previousFaculty
      ? `<tr class="report-faculty-row"><td colspan="6">${row.faculty}</td></tr>`
      : "";
    previousFaculty = row.faculty;
    visibleIndex += 1;
    return `${facultyHeader}
      <tr>
        <td>${visibleIndex}</td>
        <td><strong>${row.pastor}</strong></td>
        <td><span class="pill faculty">${row.faculty}</span></td>
        <td>${row.courses.toLocaleString("es-PE")}</td>
        <td><strong>${row.students.toLocaleString("es-PE")}</strong></td>
        <td>${average}</td>
      </tr>
    `;
  }).join("") : "<tr><td colspan=\"6\">No hay datos visibles para este rol.</td></tr>";
}

function renderVisitReport() {
  const table = document.getElementById("visit-report-table");
  const count = document.getElementById("visit-report-count");
  if (!table) return;

  const scopedVisits = visitRecords.filter((visit) => {
    const student = students.find((item) => item.code === visit.studentCode);
    return !student || studentsInCurrentScope([student]).length;
  });
  const rows = Object.values(scopedVisits.reduce((groups, visit) => {
    const student = students.find((item) => item.code === visit.studentCode);
    const faculty = student ? student.faculty : "Sin facultad";
    const responsible = visit.visitedBy || "Sin responsable";
    const key = `${responsible}__${faculty}`;

    if (!groups[key]) {
      groups[key] = {
        responsible,
        faculty,
        visits: 0,
        lastDate: "",
        reasons: {}
      };
    }

    groups[key].visits += 1;
    if (visit.date && (!groups[key].lastDate || visit.date > groups[key].lastDate)) {
      groups[key].lastDate = visit.date;
    }
    const reason = visit.reason || "Sin motivo";
    groups[key].reasons[reason] = (groups[key].reasons[reason] || 0) + 1;
    return groups;
  }, {})).sort((a, b) => {
    if (b.visits !== a.visits) return b.visits - a.visits;
    return a.responsible.localeCompare(b.responsible, "es", { numeric: true });
  });

  if (count) {
    count.textContent = `${scopedVisits.length.toLocaleString("es-PE")} visitas`;
  }

  table.innerHTML = rows.length ? rows.map((row, index) => {
    const reasons = Object.entries(row.reasons)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([reason, total]) => `${reason} (${total})`)
      .join("<br>");
    return `
      <tr>
        <td>${index + 1}</td>
        <td><strong>${row.responsible}</strong></td>
        <td><span class="pill faculty">${row.faculty}</span></td>
        <td>${row.visits.toLocaleString("es-PE")}</td>
        <td>${row.lastDate || "Sin fecha"}</td>
        <td>${reasons || "Sin motivo"}</td>
      </tr>
    `;
  }).join("") : "<tr><td colspan=\"6\">Aun no hay visitas registradas para reportar.</td></tr>";
}

function renderRetiredReport() {
  const table = document.getElementById("retired-report-table");
  const count = document.getElementById("retired-report-count");
  if (!table) return;

  const rows = Object.values(retiredStudentCodes)
    .map((record) => {
      const student = students.find((item) => item.code === record.code);
      return {
        code: record.code,
        name: student?.name || record.name || "Sin nombre",
        faculty: student?.faculty || record.faculty || "Sin facultad",
        program: student?.program || record.program || "Sin programa",
        cycle: student?.cycle || record.cycle || "Sin ciclo",
        retiredAt: record.retiredAt || ""
      };
    })
    .sort((a, b) => a.faculty.localeCompare(b.faculty, "es", { numeric: true }) || a.name.localeCompare(b.name, "es", { numeric: true }));

  if (count) count.textContent = `${rows.length.toLocaleString("es-PE")} retirados`;

  table.innerHTML = rows.length ? rows.map((row) => `
    <tr>
      <td>${row.code}</td>
      <td><strong>${row.name}</strong></td>
      <td><span class="pill faculty">${row.faculty}</span></td>
      <td>${row.cycle}</td>
      <td>${row.program}</td>
      <td>${row.retiredAt ? new Date(row.retiredAt).toLocaleDateString("es-PE") : "Sin fecha"}</td>
      <td>${currentUser?.roleKey === "general" ? `<button type="button" class="ghost-button" data-restore-retired-student="${row.code}">Restaurar</button>` : ""}</td>
    </tr>
  `).join("") : "<tr><td colspan=\"7\">No hay estudiantes retirados.</td></tr>";
}

function refreshTeachingFilters() {
  const scopedCourses = visibleTeachingCourses();
  fillSelect("teaching-faculty-filter", scopedCourses.map((record) => record.faculty));
  fillSelect("teaching-course-filter", scopedCourses.map((record) => record.course));
  fillSelect("teaching-cycle-filter", scopedCourses.map((record) => record.cycle));
  fillSelect("teaching-group-filter", scopedCourses.map((record) => record.group));
  const courseSelect = document.getElementById("teaching-enrollment-course");
  if (courseSelect) {
    const selected = courseSelect.value;
    courseSelect.innerHTML = `<option value="">Seleccione curso</option>${scopedCourses.map((course) => (
      `<option value="${course.id}">${courseOptionLabel(course)}</option>`
    )).join("")}`;
    courseSelect.value = [...courseSelect.options].some((option) => option.value === selected) ? selected : "";
  }

  const bulkCourseSelect = document.getElementById("teaching-bulk-course");
  if (bulkCourseSelect) {
    const selected = bulkCourseSelect.value;
    bulkCourseSelect.innerHTML = `<option value="">Seleccione curso</option>${scopedCourses.map((course) => (
      `<option value="${course.id}">${courseOptionLabel(course)}</option>`
    )).join("")}`;
    bulkCourseSelect.value = [...bulkCourseSelect.options].some((option) => option.value === selected) ? selected : "";
  }
}

function setupTeachingFilters() {
  const filters = document.getElementById("teaching-pastor-filter")?.closest(".compact-filters");
  const table = document.getElementById("teaching-course-table")?.closest("table");
  if (filters && table) {
    table.before(filters);
  }

  refreshTeachingFilters();
  [
    "teaching-pastor-filter",
    "teaching-faculty-filter",
    "teaching-course-filter",
    "teaching-cycle-filter",
    "teaching-group-filter",
    "teaching-career-filter"
  ].forEach((id) => {
    document.getElementById(id)?.addEventListener("input", renderTeaching);
    document.getElementById(id)?.addEventListener("change", renderTeaching);
  });

  document.getElementById("clear-teaching-filters")?.addEventListener("click", () => {
    [
      "teaching-pastor-filter",
      "teaching-faculty-filter",
      "teaching-course-filter",
      "teaching-cycle-filter",
      "teaching-group-filter",
      "teaching-career-filter"
    ].forEach((id) => {
      const element = document.getElementById(id);
      if (element) element.value = "";
    });
    renderTeaching();
  });
}

function setupTeachingEnrollmentForm() {
  const form = document.getElementById("teaching-enrollment-form");
  const input = document.getElementById("teaching-enrollment-student-search");
  const results = document.getElementById("teaching-enrollment-student-results");
  const selected = document.getElementById("teaching-enrollment-selected");
  const message = document.getElementById("teaching-enrollment-message");
  if (!form || !input || !results || !selected) return;

  input.addEventListener("input", () => {
    selectedTeachingEnrollmentStudentCode = "";
    selected.classList.add("hidden");
    selected.innerHTML = "";
    const query = input.value.trim().toLowerCase();
    if (query.length < 2) {
      results.innerHTML = "";
      return;
    }

    const matches = studentsInCurrentScope(students).filter((student) => {
      const text = `${student.code} ${student.name} ${student.document} ${student.program} ${student.faculty}`.toLowerCase();
      return text.includes(query);
    }).slice(0, 8);

    results.innerHTML = matches.length ? matches.map((student) => `
      <button type="button" class="student-result" data-teaching-student-code="${student.code}">
        <strong>${student.code} · ${student.name}</strong>
        <span>${student.program} · ${student.faculty}</span>
      </button>
    `).join("") : "<div class=\"empty-result\">No se encontraron estudiantes.</div>";
  });

  results.addEventListener("click", (event) => {
    const button = event.target.closest("[data-teaching-student-code]");
    if (!button) return;
    const student = students.find((item) => item.code === button.dataset.teachingStudentCode);
    if (!student) return;
    selectedTeachingEnrollmentStudentCode = student.code;
    selected.classList.remove("hidden");
    selected.innerHTML = `<strong>${student.code} · ${student.name}</strong><span>${student.program} · ${student.faculty}</span>`;
    results.innerHTML = "";
    input.value = student.name;
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!canManageTeachingEnrollments()) {
      if (message) message.textContent = "Solo Coordinador General o Coordinador de Facultad puede asignar alumnos a cursos.";
      return;
    }

    const courseId = document.getElementById("teaching-enrollment-course")?.value || "";
    const searchText = input.value.trim().toLowerCase();
    const student = students.find((item) => item.code === selectedTeachingEnrollmentStudentCode)
      || studentsInCurrentScope(students).find((item) => {
        const text = `${item.code} ${item.name} ${item.document}`.toLowerCase();
        return searchText.length >= 2 && text.includes(searchText);
      });
    const course = christianFormationCourses.find((item) => item.id === courseId);
    if (!student || !course) {
      if (message) message.textContent = "Seleccione un curso y un estudiante.";
      return;
    }

    if (!teachingCourseBelongsToCurrentUser(course) || !studentsInCurrentScope([student]).length) {
      if (message) message.textContent = "No tienes acceso para vincular ese curso o estudiante.";
      return;
    }

    const currentCourses = Array.isArray(teachingEnrollments[student.code]) ? teachingEnrollments[student.code] : [];
    if (currentCourses.includes(course.id)) {
      if (message) message.textContent = `${student.name} ya esta matriculado en ese curso.`;
      return;
    }

    teachingEnrollments[student.code] = [...currentCourses, course.id];
    selectedTeachingEnrollmentStudentCode = student.code;
    selected.classList.remove("hidden");
    selected.innerHTML = `<strong>${student.code} · ${student.name}</strong><span>${student.program} · ${student.faculty}</span>`;
    saveTeachingEnrollments();
    renderTeaching();
    renderFormationCourseReport();
    if (selectedProfileStudentCode === student.code) renderStudentProfile();
    if (message) message.textContent = `${student.name} agregado a ${course.course}.`;
  });
}

function extractStudentCodesFromText(text) {
  return [...new Set(String(text || "").match(/\b\d{8,12}\b/g) || [])];
}

function addStudentToCourse(student, course) {
  const currentCourses = Array.isArray(teachingEnrollments[student.code]) ? teachingEnrollments[student.code] : [];
  if (currentCourses.includes(course.id)) return false;
  teachingEnrollments[student.code] = [...currentCourses, course.id];
  return true;
}

function setupTeachingBulkImportForm() {
  const form = document.getElementById("teaching-bulk-import-form");
  const courseSelect = document.getElementById("teaching-bulk-course");
  const fileInput = document.getElementById("teaching-bulk-file");
  const message = document.getElementById("teaching-bulk-message");
  if (!form || !courseSelect || !fileInput) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!canManageTeachingEnrollments()) {
      if (message) message.textContent = "Solo Coordinador General o Coordinador de Facultad puede cargar alumnos a cursos.";
      return;
    }

    const course = christianFormationCourses.find((item) => item.id === courseSelect.value);
    const file = fileInput.files?.[0];
    if (!course || !file) {
      if (message) message.textContent = "Seleccione un curso y un archivo con codigos.";
      return;
    }

    if (!teachingCourseBelongsToCurrentUser(course)) {
      if (message) message.textContent = "No tienes acceso para cargar alumnos en ese curso.";
      return;
    }

    if (/\.(xlsx|xls)$/i.test(file.name)) {
      if (message) message.textContent = "Para este prototipo, guarde el Excel como CSV o TSV y vuelva a subirlo.";
      return;
    }

    const text = await file.text();
    const codes = extractStudentCodesFromText(text);
    let added = 0;
    let missing = 0;
    let repeated = 0;

    codes.forEach((code) => {
      const student = studentsInCurrentScope(students).find((item) => item.code === code || item.document === code);
      if (!student) {
        missing += 1;
        return;
      }
      if (addStudentToCourse(student, course)) {
        added += 1;
      } else {
        repeated += 1;
      }
    });

    saveTeachingEnrollments();
    renderTeaching();
    renderFormationCourseReport();
    if (selectedTeachingCourseId === course.id) renderTeachingCourseDetail(course.id);
    if (message) {
      message.textContent = `${added} agregados, ${repeated} ya estaban, ${missing} no encontrados.`;
    }
  });
}

function renderRolePreview() {
  const selected = document.getElementById("role-switcher")?.value || "general";
  const profile = roleProfiles[selected];
  const title = document.getElementById("role-panel-title");
  const scope = document.getElementById("role-scope");
  const preview = document.getElementById("role-preview");
  if (!title || !scope || !preview) return;

  title.textContent = profile.title;
  scope.textContent = profile.scope;
  preview.innerHTML = `
    <div class="role-cards">
      ${profile.metrics.map((metric) => `<article>${metric}</article>`).join("")}
    </div>
    <p>${profile.focus}</p>
  `;
}

function renderHomeByRole() {
  const selected = document.getElementById("role-switcher")?.value || "general";
  const home = homeByRole[selected];
  const label = document.getElementById("home-role-label");
  const title = document.getElementById("home-title");
  const description = document.getElementById("home-description");
  const scope = document.getElementById("home-scope");
  const metrics = document.getElementById("home-metrics");
  const actions = document.getElementById("home-actions");
  const actionsTitle = document.getElementById("home-actions-title");
  if (!label || !title || !description || !scope || !metrics || !actions) return;

  label.textContent = home.label;
  title.textContent = home.title;
  description.textContent = home.description;
  scope.textContent = home.scope;
  actionsTitle.textContent = selected === "general" ? "Acciones de hoy" : "Mis acciones";

  metrics.innerHTML = home.metrics.map(([name, value, note, tone]) => `
    <article class="metric ${tone || ""}">
      <span>${name}</span>
      <strong>${value}</strong>
      <small>${note}</small>
    </article>
  `).join("");

  actions.innerHTML = home.actions.map((action) => `<li>${action}</li>`).join("");
}

function renderRoleTable() {
  const table = document.getElementById("role-table");
  if (!table) return;

  table.innerHTML = roleRows.map(([role, scope, canSee, canCreate, cannotSee]) => `
    <tr>
      <td><strong>${role}</strong></td>
      <td>${scope}</td>
      <td>${canSee}</td>
      <td>${canCreate}</td>
      <td>${cannotSee}</td>
    </tr>
  `).join("");
}

function updateRoleAssignmentAccess() {
  const panel = document.getElementById("role-assignment-panel");
  if (!panel) return;
  panel.classList.toggle("hidden", currentUser?.roleKey !== "general");
}

function renderRoleAssignmentOptions() {
  const select = document.getElementById("role-assignment-user");
  if (!select) return;

  select.innerHTML = `<option value="">Seleccione pastor</option>${users.map((user) => `
    <option value="${user.dni}">${user.name} - ${user.role} - ${user.facultyCode}</option>
  `).join("")}`;
}

function setupRoleAssignmentForm() {
  renderRoleAssignmentOptions();
  updateRoleAssignmentAccess();

  const form = document.getElementById("role-assignment-form");
  const userSelect = document.getElementById("role-assignment-user");
  const roleSelect = document.getElementById("role-assignment-role");
  const message = document.getElementById("role-assignment-message");
  if (!form || !userSelect || !roleSelect) return;

  userSelect.addEventListener("change", () => {
    const user = users.find((item) => item.dni === userSelect.value);
    if (user) roleSelect.value = user.role;
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (currentUser?.roleKey !== "general") return;

    const user = users.find((item) => item.dni === userSelect.value);
    if (!user) {
      if (message) message.textContent = "Seleccione un pastor.";
      return;
    }

    pastorRoleAssignments[user.dni] = roleSelect.value;
    applyPastorRoleAssignments();
    if (currentUser?.dni === user.dni) {
      currentUser = user;
      const roleSwitcher = document.getElementById("role-switcher");
      if (roleSwitcher) roleSwitcher.value = user.roleKey;
      const sessionUser = document.getElementById("session-user");
      if (sessionUser) sessionUser.textContent = `${user.name} · ${user.role}`;
    }
    savePastorRoleAssignments();
    renderRoleAssignmentOptions();
    userSelect.value = user.dni;
    renderPastors();
    renderChaplaincy();
    renderTeaching();
    renderRolePreview();
    renderHomeByRole();
    if (message) message.textContent = `Rol actualizado para ${user.name}.`;
  });
}

function setupQuickActions() {
  const backupFile = document.getElementById("backup-import-file");

  document.getElementById("global-search-button")?.addEventListener("click", () => {
    activateView("students");
    focusField("student-search");
  });

  document.getElementById("new-activity-button")?.addEventListener("click", () => {
    activateView("events");
    focusField("event-title");
  });

  document.getElementById("export-report-button")?.addEventListener("click", exportFormationReport);
  document.getElementById("backup-export-button")?.addEventListener("click", () => {
    exportBackup();
    const message = document.getElementById("backup-message");
    if (message) message.textContent = "Copia descargada. Guarde ese archivo para restaurar sus datos cuando lo necesite.";
  });
  document.getElementById("backup-import-button")?.addEventListener("click", () => backupFile?.click());
  backupFile?.addEventListener("change", () => {
    importBackupFile(backupFile.files?.[0]);
    backupFile.value = "";
  });
}

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => activateView(item.dataset.view));
});

document.getElementById("class-search")?.addEventListener("input", renderClasses);
document.getElementById("faculty-filter")?.addEventListener("change", renderClasses);
document.getElementById("role-switcher")?.addEventListener("change", () => {
  const selectedRole = document.getElementById("role-switcher")?.value || "general";
  if (loggedInUser) {
    applyRoleSimulation(selectedRole);
    return;
  }

  renderRolePreview();
  renderHomeByRole();
});

renderFaculties();
loadVisitRecords();
loadTrainingRecords();
loadEventRecords();
loadChaplaincyAssignments();
loadPastorRoleAssignments();
loadTeachingEnrollments();
loadRetiredStudentCodes();
applyDefaultTeachingAssignments();
loadSmallGroupRecords();
loadCustomMaranathaClasses();
ensureCycleBaseEvents();
setupStudentFilters();
setupRetiredStudentControls();
refreshStudentsAndActions();
setupPastorFilters();
renderPastors();
setupVisitStudentSearch();
renderVisitTable();
renderMyVisitTable();
setupSmallGroupForm();
renderSmallGroupTable();
setupSmallGroupInfoForms();
setupTrainingForm();
renderTrainingTable();
setupEventForm();
renderEventTable();
setupCalendar();
setupEventEditing();
renderCalendar();
renderClassBars();
renderClasses();
setupChaplaincyFilters();
renderChaplaincy();
setupTeachingFilters();
setupTeachingEnrollmentForm();
setupTeachingBulkImportForm();
renderTeaching();
renderFormationCourseReport();
renderVisitReport();
renderRetiredReport();
renderRolePreview();
renderRoleTable();
renderHomeByRole();
setupRoleAssignmentForm();
setupQuickActions();
setupLogin();

