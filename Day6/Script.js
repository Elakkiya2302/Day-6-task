class person{
    constructor(name,age,Qualification,course,batch){
        this.name =name;
        this.age=age;
        this.Qualification=Qualification;
        this.course=course;
        this.batch=batch;
    }
    getname(){
        return `My name is ${this.name}`;
    }
    getage(){   
        return `My age is ${this.age}`;
    }
    getQualification(){
        return`My Qualification is ${this.Qualification}`;
    }
    getcourse(){
        return `My course is ${this.course}`;
        
    }
    getbatch(){
        return `My batch is ${this.batch}`;
        
    }
}

 var c1 = new person("Elakkiya");
 var c2 = new person(30);
 var c3 = new person("B.COM");
 var c4 = new person("Full stack Development");
 var c5 = new person("FSD54WD");


 console.log(c1.getname());
 console.log(c2.getage());
 console.log(c3.getQualification());
 console.log(c2.getcourse());
 console.log(c2.getbatch());

//Uber price

class person{
    constructor(driver,price,kilometer){
        this.driver = driver;
        this.price = price;
        this.kilometer=kilometer;
    }
    getdriver(){
        return `driver name ${this.driver,}`;
    }
    getprice(){
        return `total price ${this.price,this.kilometer}`;
    }
    
}
var c1=new person("Mani");
var c2=new person(30*10)
console.log(c1.getdriver());
console.log(c2.getprice());


