
type UserType = {
    name: string
    age: number
    address: {title: string}
}


function increaseAge(u: UserType) {
    u.age = u.age + 1
}


test('reference type test', () => {
    const user: UserType = {
        name: 'Alex',
        age: 21,
        address: {title: 'Simf'}
    }
    increaseAge(user)

    expect(user.age).toBe(22)

    const superman = user;
    superman.age = 1000;

    expect(user.age).toBe(1000)
})

test('array reference test', () => {
    const users = [
        {name: 'Alex', age: 21},
        {name: 'Lesha', age: 20}
    ]
    const admins = users;
    admins.push({name: 'Bandyugan', age: 12})

    expect(users[2]).toEqual({name: 'Bandyugan', age: 12})
})

test('primitive value test', () => {
    let users = 100;
    let admins = users;
    admins++

    expect(users).toBe(100);
    expect(admins).toBe(101)
})

test('object reference type test', () => {
    const user: UserType = {
        name: 'Alex',
        age: 21,
        address: {
            title: 'Simf'
        }
    }
    const user2 = {
        name: 'Lesha',
        age: 20,
        address: user.address
    }

    user2.address.title = 'Moskow'

    expect(user.address.title).toBe('Moskow')
})

test('reference type arrays test', () => {
    const user: UserType = {
        name: 'Alex',
        age: 21,
        address: {
            title: 'Simf'
        }
    }
    const user2 = {
        name: 'Lesha',
        age: 20,
        address: user.address
    }

    const users = [user, user2, {name: 'Bandyugan', age: 12, address: {title: 'SPb'}}]

    users[0].address.title = 'NEW YORK'

    expect(user.address.title).toBe('NEW YORK')
    expect(user2.address.title).toBe('NEW YORK')
})