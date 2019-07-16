const landingZero = int => {
    return int < 10 ? `0${int}` : int
}

export const getStringDate = str => {
    let date = new Date(str)

    return `${landingZero(date.getDate())}/${landingZero(date.getMonth())}/${landingZero(date.getFullYear())}`
}

export const getStringTime = str => {
    let date = new Date(str)

    return `${landingZero(date.getUTCHours())}:${landingZero(date.getMinutes())}`
}

export const removeUTCDate = date => {
    return new Date(null, null, null, date.getUTCHours(), date.getMinutes())
}