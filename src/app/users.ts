export interface User {
    id: number,
    name: string,
    password: string,
    money: number,
    photo: string,
    nOrders: number,
    rank: number
}

export const users: User[] = [
    {
        id: 1,
        name: 'Juan Pablo',
        password: '12345',
        money: 500,
        photo: 'https://github.com/JuanPabloGomezHaroCabrera.png',
        nOrders: 9,
        rank: 0
    },
    {
        id: 2,
        name: 'Emilio Rivera',
        password: '12345',
        money: 1000,
        photo: 'https://github.com/EmilioRivera.png',
        nOrders: 17,
        rank: 1
    },
]