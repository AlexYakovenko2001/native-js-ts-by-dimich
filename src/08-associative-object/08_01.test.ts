import {UsersType} from './08-01';


let users: UsersType;

beforeEach( () => {
    users = {
        '24': {id: 24, name: 'Alex'},
        '2': {id: 2, name: 'Dimich'},
        '543': {id: 543, name: 'Valera'},
        '23': {id: 23, name: 'Igor'}
    }
} )

test('should get changed name', () => {
    users[23].name = 'Vitya'

    expect(users[23].name).toEqual('Vitya')
})
test('should delete one element in object', () => {
    delete users[23]

    expect(users[23]).toBeUndefined()
})