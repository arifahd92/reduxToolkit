import React from 'react'
import Chance from 'chance'
const chance = Chance()
export const fakeUserData = () => {
    return chance.name({ middle: true })
}
// when ever fakeuserData will be called it will return a name

