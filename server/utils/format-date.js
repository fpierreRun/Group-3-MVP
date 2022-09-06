const moment = require('moment')

const formatDate = (date) => {
    return moment(date).format('MMMM D, YYYY')
}

module.exports = formatDate;