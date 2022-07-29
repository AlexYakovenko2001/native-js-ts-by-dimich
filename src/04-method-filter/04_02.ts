import {CityType, GovernmentBuildingsType} from '../02-objects-tests/02';

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(el => el.address.street.title !== street)
}
export const getBuildingsWithStaffCountGreaterThen = (city: CityType, staff:number) => {
    return city.governmentBuildings.filter(s => s.staffCount > staff)
}