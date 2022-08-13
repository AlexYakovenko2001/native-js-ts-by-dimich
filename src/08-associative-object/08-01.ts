

export const userObj = {
    '0': 'Alex',
    '1': 'Dimich',
    '2': 'Valera',
    '3': 'Igor'
}
export type UsersType = {
    [key: string]: {id: number, name: string}
}

//users[2]
// const user = {id: 28, name: 'Igor'}
// users[user.id] = user
// delete users[user.id]
// users[user.id].name = 'Vitya'

export const userArray = [
    {id: 24, name: 'Alex'},
    {id: 2, name: 'Dimich'},
    {id: 543, name: 'Valera'},
    {id: 23, name: 'Igor'}
]
//userArray.find( el => el.id === 2)
//let userCopy = [...userArray.filter(), user]
//userArray = userArray.filter( u => u.id !== user.id )