import { diacriticsHelper } from '@/JS/diacritics'

export const searchHelper = function () {
  var searchPort = function (searchString, portList, maxResultCount) {
    let tempResult = []
    let resultSet = []
    let result = []
    if ((!searchString === '') & (searchString.length > 0)) {
      searchString.split(' ').forEach(function (searchStringPart) {
        portList.forEach(function (elm) {
          elm.keyList.forEach(function (key) {
            key = diacriticsHelper().removeDiacritics(key)
            searchStringPart = diacriticsHelper().removeDiacritics(searchStringPart)
            if (key.toLocaleLowerCase('en').startsWith(searchStringPart.toLocaleLowerCase('en'))) {
              tempResult.push(elm)
            }
          })
        })
        resultSet.push(tempResult)
        tempResult = []
      })
    }
    result = Array.from(setIntersection(resultSet))
    return result.slice(0, maxResultCount)
  }

  var searchPortByCityName = function (portList, cityName) {
    cityName = diacriticsHelper().removeDiacritics(cityName).toLocaleLowerCase('en')

    return portList.filter(function (port) {
      return diacriticsHelper().removeDiacritics(port.cityName).toLocaleLowerCase('en') === cityName
    })
  }

  var setIntersection = function (a) {
    let m = new Map()
    let r = new Set()
    let l = a.length
    a.forEach(sa => new Set(sa).forEach(n => m.has(n) ? m.set(n, m.get(n) + 1) : m.set(n, 1)))
    m.forEach((v, k) => v === l && r.add(k))
    return r
  }
  return {
    searchPort: searchPort,
    searchPortByCityName: searchPortByCityName
  }
}
