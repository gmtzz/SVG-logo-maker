const SVG = require ("./svg")
test ("renders a SVG element",()=>{
    const svg = new SVG()
    const expectedSVG= `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`
    expect (svg.render()).toEqual(expectedSVG)
})