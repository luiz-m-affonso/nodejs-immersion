const { getPeople } = require('./service')

Array.prototype.myReduce = function (callback, initialValue) {
    let finalValue = typeof initialValue !== undefined ? initialValue : this[0]
    for(let index = 0; index <= this.length; index++) {
        finalValue = callback(finalValue, this[index], this)
    }
    return finalValue
}

async function main(){
    try {
        const { results } = await getPeople('A')
        const weights = results.map(item => parseInt(item.height))
        console.log('weights', weights)
        // const total = weights.reduce((first, second) => {
        //     return first + second
        // })
        const myList = [
            ['Luiz', 'Affonso'],
            ['Ruby', 'Rails']
        ]
        const total = myList.reduce((first, second) => {
            return first.concat(second)
        }, [])
            .join(', ')
        console.log('total', total)
    } catch (error) {
        console.log('Internal error', error)
    }
}

main()