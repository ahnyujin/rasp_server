const statusOuter = {
    tempOuter : 0,
    humidOuter : 0,
    pm10Outer : 0,
    pm25Outer : 0,
    vocOuter : 0,
    co2Outer : 0,
    getUrl() {
    return 'tempOuter='+statusOuter.tempOuter+'&humidOuter='+statusOuter.humidOuter+'&pm10Outer='+statusOuter.pm10Outer+'&pm25Outer='+statusOuter.pm25Outer
        +'&vocOuter='+statusOuter.vocOuter+'&co2Outer='+statusOuter.co2Outer
}
}



module.exports = statusOuter;