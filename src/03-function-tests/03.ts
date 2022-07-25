import {StudentType} from '../01-hello-tests/01_1';
import {CityType} from '../02-objects-tests/02';

export const addSkill = (student: StudentType, skill: string) => {
  student.technologies.push({
      id: new Date().getTime(),
      title: skill
  })
}
export const makeStudentActive = (s: StudentType) => {
    s.isActive = true
}
export const livesInAnyCity = (s: StudentType, city: string) => {
    return s.address.city.title === city
}

export const addMoneyToBudget = (governmentBuilding: GovernmentBuildingsType, budget: number) => {
governmentBuilding.budget += budget
}

export const repairHouse = (houses: HousesType) => {
    houses.repaired = true
}
export const toFireStaff = (governmentBuildings: GovernmentBuildingsType, staff: number) => {
    governmentBuildings.staffCount -= staff
}
export const toHireStaff = (governmentBuildings: GovernmentBuildingsType, staff: number) => {
    governmentBuildings.staffCount += staff
}

export const addGreeting = (city: CityType) => {
    return `Hello ${city.title} citizens. I want we all be happy. All ${city.citizensNumber} citizens`
}