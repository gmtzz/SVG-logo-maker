


const {Square,Circle,Triangle}=require("./shapes")



describe("Square",()=>{
    test("I can render a square with a fill color of blue",() =>{
        const shape = new Square(); 
        const expectedShape = `<rect x="50" y="50" fill="blue"/>`
        shape.setcolor("blue")
        expect(shape.render()).toEqual(expectedShape)
    }) 
})