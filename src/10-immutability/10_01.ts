export type UserType = {
    name: string
    hair: number
    address: { city: string, title: number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptop = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}
export type WithCompaniesType = {
    companies: Array<{id: number, title: string}>
}

export function makeHairstyle(u: UserType, power: number) {
    return {...u, hair: u.hair / power}
}

export function moveUser(u: UserWithLaptop, place: string) {
    return {...u, address: {...u.address, city: place}}
}

export function upgradeLaptop(u: UserWithLaptop, laptopModel: string) {
    return {...u, laptop: {...u.laptop, title: laptopModel}}
}

export function addNewBooksToUser(u: UserWithLaptop & UserWithBooksType, newBooks: Array<string>) {
    return {...u, books: u.books.concat(newBooks)}
}

export function updateBooks(u: UserWithLaptop & UserWithBooksType, firstBook: string, secondBook: string) {
    return {...u, books: u.books.map(b => b === firstBook ? b = secondBook : b)}
}

export function removeBook(u: UserWithLaptop & UserWithBooksType, book: string) {
    return {...u, books: u.books.filter(b => b !== book)}
}

export function addCompany(u: UserWithLaptop & WithCompaniesType, id: number, title: string) {
    const newCompany = {id, title}
    return {...u, companies: [...u.companies, newCompany]}
}

export function updateCompanyTitle(companies: any, userName: string, companyId: number, newTitle: string) {
    let companyCopy = {...companies}

    return companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)
}