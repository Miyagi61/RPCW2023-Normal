var axios = require('axios');

module.exports.list = () => {
    return axios.get('http://localhost:15015/contracts')
        .then(response => response.data)
        .catch(error => error)
}

module.exports.getContract = (id) => {
    return axios.get('http://localhost:15015/contracts/' + id)
        .then(response => response.data)
        .catch(error => error)
}
                
module.exports.getInstituicao = (nipc) => {
    return axios.get('http://localhost:15015/contracts?inst=' + nipc)
        .then(response => response.data)
        .catch(error => error)
}
