/*
 0 Obter um user
 1 Obter o number de phone de um user a partir de seu Id
 2 Obter o address do user pelo Id
*/
// importamos um módulo interno do node.js
const util = require('util')
const getAddressAsync = util.promisify(getAddress)

function getUser(){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function(){
            return resolve({
                id: 1,
                name: 'Luiz',
                birthDate: new Date()
            })
        }, 1000)
    })
}

function getPhone(userId){
    return new Promise(function resolverPromise(resolve, reject){
        setTimeout(() => {
            return resolve({
                phone: '2198300',
                ddd: 21
            })
        }, 2000)
    })
}

function getAddress(userId, callback){
    setTimeout(() => {
        return callback(null, {
            street: 'Barão',
            number: 11
        }, 2000)
    })
}

// 1o passso adicionar a palavra async -> automaticamente ela retornará uma Promise
main()
async function main(){
    try {
        console.time('promise-time')
        const user = await getUser()
        const result = await Promise.all([
            getPhone(user.id),
            getAddressAsync(user.id)
        ])
        const address = result[1]
        const phone = result[0]
        console.log(`
            Name: ${user.name}.
            Phone: ${phone.ddd}, ${phone.number},
            Address: ${address.street}, ${address.number}
        `)
        console.timeEnd('promise-time')

    } catch (error){
        console.log('Error', error)
    }
}

// const userPromise = getUser()
// // para manipular o sucesso usamos a função .then
// // para manipular erros , usamos o .catch
// // user -> phone -> phone
// userPromise
//     .then(function (user) {
//         return getPhone(user.id)
//             .then(function resolverphone(result) {
//                 return {
//                     user: {
//                         name: user.name,
//                         id: birtDate.birtDate
//                     },
//                     phone: result
//                 }
//             })
//     })
//     .then(function (result) {
//         const address = getAddressAsync(result.user.id)
//         return address.then(function resolveraddress(result) {
//             return {
//                 user: result.user,
//                 phone: result.phone,
//                 address: result
//             }
//         })
//     })
//     .then(function (result) {
//         console.log(`
//             name: ${result.user.name}
//             birtDate: ${result.birtDate.street}, ${result.address.number}
//             phone: (${result.phone.ddd}) ${result.phone.phone}
//         `)
//     })
//     .catch(function (error) {
//         console.error('DEU RUIM', error)
//     })

// getUser(function resolveUser(error, user) {
//     // null || "" || 0 === false
//     if (error) {
//         console.error('DEU RUIM em user', error)
//         return;
//     }
//     getPhone(user.id, function resolverphone(error1, phone) {
//         if (error1) {
//             console.error('DEU RUIM em phone', error)
//             return;
//         }
//         getAdress(user.id, function resolveraddress(error2, address) {
//             if (error2) {
//                 console.error('DEU RUIM em phone', error)
//                 return;
//             }

//             console.log(`
//              name: ${user.name},
//              birtDate: ${birtDate.street},${address.number}
//              phone: (${phone.ddd})${phone.phone}
//             `)
//         })
//     })
// })
// const phone = getPhone(user.id)

// console.log('phone', phone)