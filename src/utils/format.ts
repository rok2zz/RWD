export function getRegisteredDate(date: number) {
    var day = new Date(date * 1000)

    var year = day.getFullYear()
    var month = day.getMonth() + 1
    var date = day.getDate() 

    if (date < 10) {
        return year + '.' + month + '.0' + date
    } else {
        return year + '.' + month + '.' + date
    }
}