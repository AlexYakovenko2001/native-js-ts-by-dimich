
type StreetType = {
    title: string
}

type AddressType = {
    street: StreetType
}

type LessonsType = {
    title: string
}

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonsType>
    address: AddressType
}

let props: ManType;



beforeEach(()=>{
     props = {
        name: 'Dimich',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Trudovaya street'
            }
        }
    }
})


test('', () => {


   /* const age = props.age;
    const lessons = props.lessons*/
    const {age, lessons} = props
    const {title} = props.address.street


    expect(age).toBe(32)
    expect(lessons.length).toBe(2)
    expect(title).toBe('Trudovaya street')

})

test(' ', ()=>{

    const [lesson1, lesson2] = props.lessons

    expect(lesson1.title).toBe('1')
    expect(lesson2.title).toBe('2')

})