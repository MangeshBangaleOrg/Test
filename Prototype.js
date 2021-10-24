function user(fname,lname){
    this.fname = fname
    this.lname = lname

}

user.prototype.address = "vashi"

user.prototype.getDetail = function(){
    console.log(`${this.fname} ${this.lname} ${this.address}`)
}

U = new user("mangesh","bangale")

U.getDetail()



console.log(new Date().format('m-d-y h:i:s'))