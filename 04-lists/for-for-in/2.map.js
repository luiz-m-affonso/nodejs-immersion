const service = require('./service')
Array.prototype.myMap = function (callback) {
    const newMappedArray = []
    for(let index = 0 ; index <= this.length -1; index++) {
        const result = callback(this[index], index)
        newMappedArray.push(result)
    }
    return newMappedArray
}

async function main() {
    try {
        const results = await service.getPeople(`A`)
        // results.results.forEach(function(item) {
        //     names.push(item.name)
        // })
        const names = results.results.map(function(person) {
            return person.name
        })
        // const names = results.results.map(person => person.name)

        // const names = results.results.myMap(function(person, index) {
        //     return `[${index}] ${person.name}`
        // })

        console.log('names', names)
    } catch (error) {
        console.error('Internal error', error)
    }
}

main()