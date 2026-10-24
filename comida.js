const menu = [
    {
        nombre: "Hamburguesa Titán",
        precio: 185.00,
        tipo: "Hamburguesa",
        descripcion: "Doble carne de res de 180g, queso cheddar fundido, tocino crujiente y cebolla caramelizada en pan brioche artesanal."
    },
    {
        nombre: "Hamburguesa Titán Familiar",
        precio: 420.00,
        tipo: "Hamburguesa",
        descripcion: "Hamburguesa gigantesca de medio kilo de carne de res, cuádruple queso, tocino extra, pepinillos, aros de cebolla y bañado con queso cheddar fundido para compartir."
    },
    {
        nombre: "Hamburguesa Dios Gorilla",
        precio: 210.00,
        tipo: "Hamburguesa",
        descripcion: "Una mole de hamburguesa con triple carne estilo smash, mucho queso americano, aros de cebolla empanizados y salsa BBQ ahumada."
    },
    {
        nombre: "Hamburguesa Chango Dios",
        precio: 225.00,
        tipo: "Hamburguesa",
        descripcion: "Poderosa combinación de carne de res a la parrilla, plátano macho frito, tocino ahumado, queso manchego derretido y un toque de salsa barbacoa picante."
    },
    {
        nombre: "Hotdog 30 Kilates",
        precio: 110.00,
        tipo: "Hotdog",
        descripcion: "Salchicha jumbo envuelta en tocino, gratinada con mezcla de 4 quesos y chispas de tocino dorado sobre pan horneado en casa."
    },
    {
        nombre: "Hotdog Sensación",
        precio: 95.00,
        tipo: "Hotdog",
        descripcion: "Salchicha de res a la parrilla bañada en aderezo de guacamole cremoso, pico de gallo frito y un toque de queso parmesano rallado."
    },
    {
        nombre: "Sushi Megalodón",
        precio: 220.00,
        tipo: "Sushi",
        descripcion: "Roll gigante empanizado por fuera, relleno de salmón, queso crema y aguacate, coronado con una torre de tampico picante y salsa de anguila."
    },
    {
        nombre: "Sushi Cthulhu",
        precio: 205.00,
        tipo: "Sushi",
        descripcion: "Rollo envuelto en alga nori oscura con pulpo salteado al ajo, aguacate, queso crema y una salsa especial de chile morita agridulce."
    },
    {
        nombre: "Pizza Continente Perdido",
        precio: 260.00,
        tipo: "Pizza",
        descripcion: "Pizza familiar de masa gruesa repleta de carnes frías (pepperoni, salchicha italiana, jamón y tocino) cubierta con un mar de queso mozzarella."
    },
    {
        nombre: "Papas Infierno",
        precio: 130.00,
        tipo: "Acompañamiento",
        descripcion: "Montaña de papas a la francesa bañadas en queso cheddar, trozos de carne asada, jalapeños en rodajas y coronadas con Salsa Inframundo."
    },
    {
        nombre: "Alitas Gaya",
        precio: 140.00,
        tipo: "Entrada / Botana",
        descripcion: "10 piezas de alitas crujientes bañadas en salsa BBQ tradicional con hierbas finas."
    },
    {
        nombre: "Alitas Fénix",
        precio: 145.00,
        tipo: "Entrada / Botana",
        descripcion: "10 piezas de alitas bañadas en una picante y dulce mezcla de mango con habanero."
    },
    {
        nombre: "Salsa Inframundo",
        precio: 35.00,
        tipo: "Extra / Salsa",
        descripcion: "Salsa súper picante elaborada con extracto de habanero y chiles ahumados extremo."
    },

    // --- COMBOS ---
    {
        nombre: "Combo Brutal",
        precio: 290.00,
        tipo: "Combo",
        descripcion: "Incluye 1 Hamburguesa Dios Gorilla, orden grande de papas rústicas con queso cheddar y tocino, y 1 refresco o malteada a elegir."
    },
    {
        nombre: "Combo Ramsés",
        precio: 240.00,
        tipo: "Combo",
        descripcion: "Incluye 2 Hotdogs 30 Kilates, 1 orden de aros de cebolla y 2 bebidas medianas."
    },
    {
        nombre: "Combo Chungo",
        precio: 310.00,
        tipo: "Combo",
        descripcion: "Para compartir: 1 Sushi Megalodón + 6 Alitas Fénix + Papas gajo sazonadas y 2 refrescos de lata."
    },
    {
        nombre: "Combo Monumento",
        precio: 490.00,
        tipo: "Combo",
        descripcion: "Banquete gigante: 1 Hamburguesa Titán Familiar, 1 Papas Infierno grandes, 12 Alitas a elegir y 1 jarra de limonada o 4 refrescos."
    },
    {
        nombre: "Isla de Waffles",
        precio: 155.00,
        tipo: "Postre",
        descripcion: "Torre de 4 waffles esponjosos acompañados de helado de vainilla, fruta de la temporada, crema batida, jarabe de Nutella y chispas de chocolate."
    },
    {
        nombre: "Malteada Grumosa Poderosa",
        precio: 85.00,
        tipo: "Postre / Bebida",
        descripcion: "Malteada espesa de galleta Oreo con trozos crujientes, nieve de vainilla, crema batida y chispas de chocolate."
    }
];


const hamburguesas = menu.filter(({tipo})=> tipo === 'Hamburguesa')
const totalPrecioHamburguesas = hamburguesas.reduce((total,x)=> total + (x?.precio ?? 0), 0)
const promedioPrecioHamburguesa = totalPrecioHamburguesas/hamburguesas.length
const ordenadosPrecio = [...hamburguesas].sort((a,b)=> a?.precio - b?.precio)

console.log({hamburguesas,totalPrecioHamburguesas,promedioPrecioHamburguesa,ordenadosPrecio})