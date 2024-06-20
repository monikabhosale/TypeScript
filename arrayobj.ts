var arrObj = [
    {
        id: 1,
        names: "Monika",
        gender: "female",
        adress: [
            {
                area: "lasurne",
                pincode: 4131141,
                city: "baramati"
            }
        ],
        courses: ["python", "Mysql", "advancejava"]
    },
    {
        id: 2,
        names: "reva",
        gender: "female",
        adress: [
            {
                area: "daund",
                pincode: 418999,
                city: "gopalwadi"
            }
        ],
        courses: ["c", "cpp", "golan"]
    }
];
for (var i = 0; i < arrObj.length; i++) {
    console.log("\n    ID : ".concat(arrObj[i].id, "\n    Name : ").concat(arrObj[i].names, "\n    Gender : ").concat(arrObj[i].gender, "  \n    Courses : ").concat(arrObj[i].courses.join(" "), " "));
    for (var j = 0; j < arrObj[i].adress.length; j++) {
        console.log("\n    Area  : ".concat(arrObj[i].adress[j].area, "\n    Pincode : ").concat(arrObj[i].adress[j].pincode, "\n    City    :").concat(arrObj[i].adress[j].city, "\n        "));
    }
}

***************************************************************************************************************************************************************************************************************************************************

  class employ{
    id:number
    name:string
    gender: string
    salary:number
    department:string

    constructor(id:number,name:string,gender:string,salary:number,department:string)
    {
this.id=id
this.name=name
this.gender=gender
this.salary=salary
this.department=department
    }
    display()
    {
        console.log(`
        id      :${this.id},
        name    :${this.name},
        gender  :${this.gender},
        salary  :${this.salary},
        department :${this.department}

        `)
    }
        
}
let obj=new employ(1,"monika bhosale","Female",78000,"IT");
obj.display();
*******************************************************output************************************************************

  tsc june20.ts & node june20.js

        id      :1,
        name    :monika bhosale,
        gender  :Female,
        salary  :78000,
        department :IT


************************************************************************************************************************************

  
