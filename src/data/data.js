const inventario = [
    {
        "id": '1',
        "nombre": "SSD adata SU630 ultimate 240gb",
        "marca": "ADATA",
        "costo": 550,
        "cantidad": 10,
        "categoria": "Discos Duros",
        "thumbnailUrl": "https://media.digitalife.com.mx/products/24565/620d910770683.webp",
        "descripcion": "UNIDAD DE ESTADO SOLIDO SSD ADATA SU630 ULTIMATE 240GB SATA 2.5 READ 520MB/S WRITE 450MB/S-R"
    },
    {
        "id": '2',
        "nombre": "disco duro wd blue 2tb",
        "marca": "WD",
        "costo": 950,
        "cantidad": 5,
        "categoria": "Discos Duros",
        "thumbnailUrl": "https://media.digitalife.com.mx/products/9087/60a1b62b3a276.webp",
        "descripcion": "DISCO DURO WD BLUE 2TB 3.5 SATA 3 5400 RPM 256MB"
    },
    {
        "id": '3',
        "nombre": "mouse logitech g305 lightspeed",
        "marca": "LOGITECH",
        "costo": 680,
        "cantidad": 30,
        "categoria": "Mouse",
        "thumbnailUrl": "https://media.digitalife.com.mx/products/17227/609e4468d45da.webp",
        "descripcion": "MOUSE LOGITECH G305 LIGHTSPEED 12000 DPI 1MS INALAMBRICO AZUL"
    },
    {
        "id": '4',
        "nombre": "monitor LED 27 dell S2719DGF QHD 2k 165hz 1ms",
        "marca": "DELL",
        "costo": 10500,
        "cantidad": 3,
        "categoria": "Monitores",
        "thumbnailUrl": "https://media.digitalife.com.mx/products/16064/609daa2f23ed0.webp",
        "descripcion": "MONITOR LED 27 ASUS TUF GAMING QHD 2K 165HZ 1MS NEGRO PDN AWPBA"
    },
    {
        "id": '5',
        "nombre": "laptop gamer alienware area 51m r2 17.3",
        "marca": "ALIENWARE",
        "costo": 77900,
        "cantidad": 5,
        "categoria": "Laptops",
        "thumbnailUrl": "https://media.digitalife.com.mx/products/29532/61e876d1a4ede.webp",
        "descripcion": "Laptop Gamer ALIENWARE AREA 51M R2 17.3 Pulgadas FULL HD INTEL CORE I7-10700 2.90GHZ 16GB (2X 8GB) 1TB + 512GB SSD NVIDIA GEFORCE RTX 2070 SUPER Windows 10 Home 64-Bit Negro/Blanco"
    }
]

export const traeProductos = new Promise((resolve, reject) => {
    let estado = true
    if (estado) {
        setTimeout(() => {
            resolve(inventario)
        }, 1000)
    } else {
        reject('Error')
    }
})