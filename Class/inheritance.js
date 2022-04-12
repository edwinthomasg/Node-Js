// class Bank{
//     display(){
//         console.log("Bank Class")
//     }

// }
// class Hdfc extends Bank{
//     display(){
//         console.log("Hdfc Class")
//     }
// }
// let bank = new Bank()
// let hdfc = new Hdfc()
// hdfc.display()
// bank.display()

class A{
    show1(){
        console.log("A")
    }
}
class B extends A{
    show2(){
        console.log("B")
    }
}
class C extends B{
    show3(){
        console.log("C")
    }
}
let c = new C()
c.show1()
c.show2()
c.show3()