
const ages = [18, 22, 21, 1, 90, 100, 54]

const predicate = (age:number) => {
    return age > 90
}

const oldAges = [100]

type CoursesType = {
    title:string
    price:number
}

const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'React', price: 150}
]

const cheapPredicate = (courses: CoursesType) => {
  return courses.price < 160
}

const cheapCourses = [
    {title: 'CSS', price: 110},
    {title: 'React', price: 150}
]