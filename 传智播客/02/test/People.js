/**
 * Created by Admin on 2017/9/30.
 */
function People(name,sex,age) {
    this.name = name;
    this.sex = sex;
    this.age = age;
}

People.prototype = {
    sayHello : function () {
        console.log(this.name + "、"+this.sex+"、"+this.age);
    }
}

module.exports = People;