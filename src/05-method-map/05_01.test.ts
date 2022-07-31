import {createGreetingMessage, ManType} from './05_01';

let people: Array<ManType> = []

beforeEach(()=>{
    people = [
        {name: 'Ivanov Ivan', age: 25},
        {name: 'Sokolov Dmitry', age: 32},
        {name: 'Sidorov Sidor', age: 45},
    ]
})

test('should get three greeting phrases', ()=>{

    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe(`Hello Ivan. Welcome to IT-INCUBATOR`)
    expect(messages[1]).toBe(`Hello Dmitry. Welcome to IT-INCUBATOR`)
    expect(messages[2]).toBe(`Hello Sidor. Welcome to IT-INCUBATOR`)

})