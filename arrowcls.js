// class A{
//     name = 'edwin'
//     sample(){
//         console.log(this.name)
//         var sum = ()=>{
//             // var name = 'karthik'
//             console.log(`${this.name}`)
//         }
//         sum()
//     }
// }
// const a = new A()

// a.sample()

// function show(){
//     100
// }
// console.log(show()) /**it returns undefined , but in the case of arrow it will return 100 */
// function assign(a){
//     a = a || 10
//     console.log(a)
// }
// assign(20)
function createClass(name,age,role){
    this.name = name
    this.age = age
    this.role = role
    this.display = function(){
        console.log(this.age)
    }
}
var user1 = new  createClass('edwin',21,'dev')
console.log(user1.name)
// createClass.prototype.display = function(){
//     console.log(this.name,this.age)
// }
user1.display()
// console.log(createClass)