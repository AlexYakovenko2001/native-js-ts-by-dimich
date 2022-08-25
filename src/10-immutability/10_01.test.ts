import {
    addCompany,
    addNewBooksToUser,
    makeHairstyle,
    moveUser, removeBook, updateBooks, updateCompanyTitle,
    upgradeLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptop, WithCompaniesType
} from './10_01';


test('reference type test', () => {
    const user: UserType = {
        name: 'Alex',
        hair: 21,
        address: {city: 'Simf', title: 30}
    }

    const awesomeUser = makeHairstyle(user, 2)

    expect(awesomeUser.hair).toBe(10.5)
    expect(user.hair).toBe(21)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {

    const user: UserWithLaptop = {
        name: 'Alex',
        hair: 21,
        address: {city: 'Simf', title: 30},
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(movedUser).not.toBe(user)
    expect(movedUser.address).not.toBe(user.address)
    expect(movedUser.address.title).toEqual(user.address.title)
    expect(movedUser.laptop).toBe(user.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})

test('upgrade user laptop to mackbook', () => {

    const user: UserWithLaptop = {
        name: 'Alex',
        hair: 21,
        address: {city: 'Simf', title: 30},
        laptop: {
            title: 'ZenBook'
        }
    }

    const upgradedUsersLaptop = upgradeLaptop(user, 'mackbook')

    expect(upgradedUsersLaptop).not.toBe(user)
    expect(upgradedUsersLaptop.address).toBe(user.address)
    expect(upgradedUsersLaptop.address.title).toEqual(user.address.title)
    expect(upgradedUsersLaptop.laptop).not.toBe(user.laptop)
    expect(upgradedUsersLaptop.laptop.title).toBe('mackbook')
})

test('upgrade user books list', () => {

    const user: UserWithLaptop & UserWithBooksType = {
        name: 'Alex',
        hair: 21,
        address: {city: 'Simf', title: 30},
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userWithUpgradedBooks = addNewBooksToUser(user, ['ts', 'rest api'])

    expect(userWithUpgradedBooks).not.toBe(user)
    expect(userWithUpgradedBooks.address).toBe(user.address)
    expect(userWithUpgradedBooks.address.title).toEqual(user.address.title)
    expect(userWithUpgradedBooks.laptop).toBe(user.laptop)
    expect(userWithUpgradedBooks.books).not.toBe(user.books)
    expect(userWithUpgradedBooks.books).toEqual(['css', 'html', 'js', 'react', 'ts', 'rest api'])
})

test('update book', () => {

    const user: UserWithLaptop & UserWithBooksType = {
        name: 'Alex',
        hair: 21,
        address: {city: 'Simf', title: 30},
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userWithUpgradedBooks = updateBooks(user, 'js', 'ts')

    expect(userWithUpgradedBooks).not.toBe(user)
    expect(userWithUpgradedBooks.address).toBe(user.address)
    expect(userWithUpgradedBooks.laptop).toBe(user.laptop)
    expect(userWithUpgradedBooks.books).not.toBe(user.books)
    expect(userWithUpgradedBooks.books).toEqual(['css', 'html', 'ts', 'react'])
})

test('remove js book', () => {

    const user: UserWithLaptop & UserWithBooksType = {
        name: 'Alex',
        hair: 21,
        address: {city: 'Simf', title: 30},
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userWithUpgradedBooks = removeBook(user, 'js')

    expect(userWithUpgradedBooks).not.toBe(user)
    expect(userWithUpgradedBooks.address).toBe(user.address)
    expect(userWithUpgradedBooks.laptop).toBe(user.laptop)
    expect(userWithUpgradedBooks.books).not.toBe(user.books)
    expect(userWithUpgradedBooks.books).toEqual(['css', 'html', 'react'])
})

test('add new company', () => {

    const user: UserWithLaptop & WithCompaniesType = {
        name: 'Alex',
        hair: 21,
        address: {city: 'Simf', title: 30},
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'IT-INCUBATOR'}]
    }

    const userWithNewCompany = addCompany(user, 3, 'Google')

    expect(userWithNewCompany).not.toBe(user)
    expect(userWithNewCompany.address).toBe(user.address)
    expect(userWithNewCompany.laptop).toBe(user.laptop)
    expect(userWithNewCompany.companies).not.toBe(user.companies)
    expect(userWithNewCompany.companies[2].id).toBe(3)
    expect(userWithNewCompany.companies[2].title).toBe('Google')
})

test('update company', () => {

    let companies = {
        'Alex':[{id: 1, title: 'Epam'}, {id: 2, title: 'IT-INCUBATOR'}],
        'Artem': [{id: 2, title: 'IT-INCUBATOR'}]
    }

     const copy = updateCompanyTitle(companies, 'Alex', 1, 'EPAM')

    expect(copy['Alex']).not.toBe(companies['Alex'])
})