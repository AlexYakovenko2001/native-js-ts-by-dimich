import {GovernmentBuildingsType, HousesType} from '../02-objects-tests/02';

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildingsType>) => {
    return buildings.map(street => street.address.street.title)
}
export const getStreetsTitlesOfHouses = (houses: Array<HousesType>) => {
    return houses.map(t=>t.address.street.title)
}