import moment from 'moment'

const landingZero = int => {
    return int < 10 ? `0${int}` : int
}

export const getIntDate = str => {
    const date = new Date(str)
    return `${landingZero(date.getDate())}${landingZero(date.getMonth() + 1)}${date.getFullYear().toString().substr(2, 2)}`
}

export const getIntTime = str => {
    const date = new Date(str)
    return `${landingZero(date.getUTCHours())}${landingZero(date.getMinutes())}`
}

export const getIntTimeNoUTC = str => {
    const date = new Date(str)
    return `${landingZero(date.getHours())}${landingZero(date.getMinutes())}`
}

export const getStringTime = str => {
    let date = new Date(str)

    return `${landingZero(date.getUTCHours())}:${landingZero(date.getMinutes())}`
}

export const getStringTimeInt = int => {
    return `${landingZero(Math.floor(int / 100))}:${landingZero(int % 100)}`
}

export const getStringDateInt = int => {
    return `${landingZero(Math.floor(int / 10000))}/${landingZero(Math.floor(int / 100) % 100)}/20${int % 100}`
}

export const getStringUTCTime = str => {
    let date = new Date(str)

    return `${landingZero(date.getHours())}:${landingZero(date.getMinutes())}`
}

export const removeUTCDate = date => {
    return new Date(null, null, null, date.getUTCHours(), date.getMinutes())
}

export const convertTimestampToTime = timestamp => {
    let date = new Date(timestamp * 1000)

    return `${landingZero(date.getHours())}:${landingZero(date.getMinutes())}`
}

export const getCurrentTimeURL = () => {
    return getIntTimeNoUTC(moment(new Date(), 'HH:mm'))
}

export const getCurrentDateURL = () => {
    return getIntDate(moment(new Date(), 'DD/MM/YYYY'))
}

export const convertIntTimeToDate = int => {
    let h = Math.floor(int / 100)
    let m = int % 100

    return new Date(1990, 1, 1, h, m)
}

export const convertIntTimeToMoment = int => {
    let h = Math.floor(int / 100)
    let m = int % 100

    return moment(`${landingZero(h)}${landingZero(m)}`, "HHmm")
}

export const convertIntDateToMoment = int => {
    return moment(`${landingZero(Math.floor(int / 10000))}/${landingZero(Math.floor(int / 100) % 100)}/20${int % 100}`, "DD/MM/YYYY")
}

export const changeHours = (int, plus) => {
    let d = convertIntTimeToDate(int)
    plus ? d.setMinutes(d.getMinutes() + 30) : d.setMinutes(d.getMinutes() - 30)

    return `${landingZero(d.getHours())}${landingZero(d.getMinutes())}`
}

export const getTrainType = id => {
    var filterRegex = new RegExp('(S[0-9])|(ICE)|(THA)|(IC)|(EUR)|(TGV)|(P)|(L)')
    let matched = filterRegex.exec(id)

    if (!matched)
        return 'Unknown'

    return matched[0]
}

export const getStationReliability = station => {
    const reliability = [station.station, station.reliability]

    return reliability
}

export const getViaScore = via => {
    let bestProbability = {
        delay: null,
        probability: null
    }

    for (let t in via.arrival.reliability_graph) {
        if (bestProbability.probability < via.arrival.reliability_graph[t]) {
            bestProbability.delay = t
            bestProbability.probability = via.arrival.reliability_graph[t]
        }
    }

    let realTimeBetween = via.timeBetween - (bestProbability.delay * 60)

    if (realTimeBetween > 600)
        return 3

    if (realTimeBetween >= 180)
        return 2

    return 1
}

export const getScore = direction => {
    if (direction.vias) {
        let worstInterval = null

        for (let v of direction.vias.via) {
            // For each via, calculate the most likely of them
            let bestProbability = {
                delay: null,
                probability: null
            }

            for (let t in v.arrival.reliability_graph) {
                if (bestProbability.probability < v.arrival.reliability_graph[t]) {
                    bestProbability.delay = t
                    bestProbability.probability = v.arrival.reliability_graph[t]
                }
            }

            let realTimeBetween = v.timeBetween - (bestProbability.delay * 60)

            if (!worstInterval || realTimeBetween < worstInterval)
                worstInterval = realTimeBetween
        }

        if (worstInterval > 600)
            return 3

        if (worstInterval >= 180)
            return 2

        return 1
    } else {
        let value = 3
        if (direction.arrival.delay > 900) {
            value = 1
        } else if (direction.arrival.delay > 300) {
            value = 2
        }

        return value
    }
}