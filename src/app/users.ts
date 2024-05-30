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
        photo: 'https://github.com/JuanPabloGHC.png',
        nOrders: 9,
        rank: 0
    }
]