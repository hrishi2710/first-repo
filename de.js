let salaries = {
    "john" : 100,
    "pete" : 300,
    "mary" : 250
};

function topSalary (salaries){
    let max = 0;
    let name = null;
   let arr = Object.entries(salaries);
   console.log(arr);
   for (let [nam, salary ] of arr){
       if (salary > max)
       {
           max = salary;
           name = nam;
       }
   }
   console.log (max);
    console.log(name);
}
topSalary(salaries);
