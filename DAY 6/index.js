var shape = {
    is2d: true,
    
};
var circle = {
    radius: 3,
    
};
var rectangle = {
    length: 1,
    breadth: 2,
    
};
circle__proto__=shape
    console.log("is circle a 2d shape?" + rectangle.is2d);
console.log("radius od circle =" + circle.radius);

rectangle__proto__=shape
console.log("is rectangle a 2d shapedd?" + rectangle.is2d);
console.log(
    "length of rectangle ="+rectangle.length +", breadth of rectangle ="+rectangle.breadth
);