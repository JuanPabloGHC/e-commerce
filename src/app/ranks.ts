export interface Rank {
    id: number,
    name: string
    color: string,
    minimum: number,
    limit: number
}

export const ranks: Rank[] = [
    {
        id: 0,
        name: 'Bronce',
        color: 'brown',
        minimum: 0,
        limit: 10,
    },
    {
        id: 1,
        name: 'Plata',
        color: 'darkgray',
        minimum: 11,
        limit: 20,
    },
    {
        id: 2,
        name: 'Oro',
        color: 'gold',
        minimum: 21,
        limit: 30,
    }
]