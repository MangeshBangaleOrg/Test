arr = [1,2,3,4]

opt = arr.map((ar) => {

    return `applicationids=${ar}`
})

param = opt.toString()

string = `user/Adduser?${param}`

console.log(string)

