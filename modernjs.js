let text = 'age'
const user = {
    name:'edwin',
    [text]:21,/**user.text returns undefined, user.age returns 21
    used in dynamic */
    show:function(){
        console.log("Hello")
    }
    ,
    ob:{
        role:'dev'
    }
}
this.title = 'javascript'
function reg(){
    console.log(this)
}
const arrow = ()=>console.log(this)

reg()
arrow()
let{show:fun,ob:{role}} = user
fun()
console.log(role)