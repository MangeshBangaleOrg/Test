let myArray = [
    {id: 0, name: "Jhon"},
    {id: 1, name: "Sara"},
    {id: 2, name: "Domnic"},
    {id: 3, name: "Bravo"}
  ]

  const payload = {
    id: Date.now(),
    name:"mangesh"
}

  const arrIndex = myArray.findIndex(data => {
      return data.id == 1
  })

  console.log(arrIndex)

  myArray[arrIndex] =payload


  console.log(myArray)