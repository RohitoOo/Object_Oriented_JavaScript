
class Human {
    constructor(height, name){
    this.height = height,
    this.name = name,
    this.age;
      }

      // walk : function(){
      //   old method
      // }

      walk(){
        console.log(this.name + ' keeps Walking.')
      
      }
      talk(){
        console.log(this.name + ' is talking! ')
        return this
      }

  static wassup(){
        return "Wasssssup!"
    }
}
// Chaining Methods
// rohito.walk().talk().name;

console.log (Human.wassup() )
//

var rohito = new Human("180cms" , "Rohito")

rohito['walk'] = () => {
  console.log("Changed!!")
}


rohito.walk();

console.log("this.", rohito.walk());

class Warrior extends Human{
  constructor(height,name, muscles){
    super(height, name, muscles)
    this.muscles = muscles
  }
}

var bhambhani = new Warrior("200cms" , "Bhambhani" , 100)

bhambhani;



// Extending Class To Create Admin with Added functionality 



class Person{
  constructor(name, email){
      this.name = name,
      this.email = email
  }

  login(){
    // console.log(this.name , "logged in...")
    return this
  }
  logout(){
    // console.log(this.name, "logged out...")
  }

}

var me = new Person
var two = new Person
var three = new Person

me.name = "Rohito"
two.name = "Suchi"
three.name = "Cruise"

me.login().logout()

var users = [me,two,three ]

class Admin extends Person{

  deleteUser(user){

   users = users.filter( each => {
      return each.name !== user
    })
    console.log ( "Users not deleted " , users.map( (each) => {
      return each.name
    })  )
  }

}

var systemArch = new Admin("Boss" , "boss@admin.com")

console.log(systemArch.name)

systemArch.deleteUser("Suchi")
