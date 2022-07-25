import {StudentType} from '../01-hello-tests/01_1';
import {addSkill, livesInAnyCity, makeStudentActive} from './03';


let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: 'Alex',
        age: 21,
        isActive: false,
        address: {
            streetTitle: 'Trudovaya',
            city: {
                title: 'Simferopol',
                countryTitle: 'Russia'
            }
        },
        technologies: [{
            id: 1,
            title: 'HTML'
        },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'React'
            }]
    };
})

test('add tech skill to students', () => {
    expect(student.technologies.length).toBe(3)

    addSkill(student,'JS')

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()
})

test('student should be active', () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)
})

test('if student lives in any city', () => {
    let result1 = livesInAnyCity(student, 'Moscow')
    let result2 = livesInAnyCity(student, 'Simferopol')
    expect(result1).toBe(false)
    expect(result2).toBe(true)
})