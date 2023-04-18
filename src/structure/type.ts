export interface Content {
    id: number
    contents: string
    registered_by: number
    registered_date: number
}

export interface Member {
    id: number
    user_id: string
    email: string
    name: string
    status: string
    registered_date: number
}