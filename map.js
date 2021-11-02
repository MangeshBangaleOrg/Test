arr = [1,2,3,4]

name = "Mangesh"

opt = arr.map((ar) => {

    return `applicationids=${ar}`
})

param = opt.toString()

string = `user/Adduser?${param}`

console.log(string)

