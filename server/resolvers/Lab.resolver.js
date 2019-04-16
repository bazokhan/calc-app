const dbUrl = require('./db')
const axios = require('axios')

module.exports = {
    Query: {
        async labs(parent, args) {
            return await axios.get(`${dbUrl}/labs`).then(res => res.data)
        },

        async lab(parent, {id}) {
            return await axios.get(`${dbUrl}/labs/${id}`).then(res=>res.data)
        }
    },

    Mutation: {
        async addLab(parent, args) {
            return await axios.post(`${dbUrl}/labs`, args).then(res => res.data)
        },

        async editLab(parent, {id, ...args}) {
            return await axios.patch(`${dbUrl}/labs/${id}`, args).then(res => res.data)
        },

        async removeLab(parent, {id}) {
            return await axios.delete(`${dbUrl}/labs/${id}`).then(res => res.data)
        }
    }
}