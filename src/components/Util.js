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

export const convertTimestampToTime = timestamp => {
    let date = new Date(timestamp * 1000)

    return `${landingZero(date.getHours())}:${landingZero(date.getMinutes())}`
}

export const getTrainType = id => {
    var filterRegex = /^(S[0-9])|(ICE)|(THA)|(IC)|(EUR)|(TGV)|(P)|(L)/
    let matched = filterRegex.exec(id)

    if(!matched)
        return 'Unknown'

    return matched[0]
}