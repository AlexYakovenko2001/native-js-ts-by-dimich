

export type ManType = {
    name:string
    age: number
}

const people: Array<ManType> = [
    {name: 'Ivanov Ivan', age: 25},
    {name: 'Sokolov Dmitry', age: 32},
    {name: 'Sidorov Sidor', age: 45},
]

const dimichTransformator = (man:ManType) => ({
    stack: ['html, css', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
})

const devs1 = [
    {
        stack: ['html, css', 'js', 'tdd', 'react'],
        firstName: 'Ivan', lastName: 'Ivanov'
    },
    {
        stack: ['html, css', 'js', 'tdd', 'react'],
        firstName: 'Dmitry', lastName: 'Sokolov'
    },
    {
        stack: ['html, css', 'js', 'tdd', 'react'],
        firstName: 'Sidor', lastName: 'Sidorov'
    }
]

let d1 = dimichTransformator(people[0])
let d2 = dimichTransformator(people[1])
let d3 = dimichTransformator(people[2])

const devs2 = [
    dimichTransformator(people[0]),
    dimichTransformator(people[1]),
    dimichTransformator(people[2]),
]

const devs3 = people.map(dimichTransformator)

const devs4 = people.map(man => ({
    stack: ['html, css', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}))


export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(' ')[1]}. Welcome to IT-INCUBATOR`)
}