const { getPeople  } = require('./service')

Array.prototype.myFilter = function (callback) {
    const list = []
    for(index in this) {
        const item = this[index]
        const result = callback(item, index, this)

        if(!result) continue;
        list.push(item)
    }
    return list;
}

async function main() {
    try {
        const {
            results
        } = await getPeople(`A`)

        // const LarsFamily = results.filter(function (item){
        //     const result = item.name.toLowerCase().indexOf(`lars`) !== -1
        //     return result
        // })
        const LarsFamily = results.myFilter((item, index, list) => {
            console.log(`index: ${index}`, list.length)
            return item.name.toLowerCase().indexOf('lars' !== -1)
        })

        const names = LarsFamily.map((person) => person.name)
        console.log(names)

    } catch (error) {
        console.error('Internal Error', error)
    }
}

main()