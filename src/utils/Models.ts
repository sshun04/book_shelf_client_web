type BookState = ('done' | 'reading' | 'notYet');

export interface BookData {
    title: string;
    author: string;
    publisher: string;
    state: BookState
    rate: number
    genre: string
    favorite: boolean
    tag: string[] | null
    note: string
    readLastAt: Date
    registeredAt: Date
}

export interface UserModel {
    name: string
    userId:string
}

