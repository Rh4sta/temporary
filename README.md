var vipLevel = {
    novice: 0,
    pro: 1,
    master: 2,
}

User = class {
    constructor(nickName, vipLevel) {
        this.nickName = nickName
        this.vipLevel = vipLevel
        this.purchases = []
    }

    payment(purchase) {
        if(this.isPAU) {
        this.purchases.push(purchase)
        purchase.vip.push(this)
    } else {
        this.purchases.push(purchase)
        purchase.newbie.push(this)
    }
  }
    isPAU(vipLevel) {
        if(this.vipLevel > vipLevel.novice) {
        this.isPAU = true
    } else {
        this.isPAU = false 
  }
 }
}

taras = new User('Funny', 0)
ira = new User('Sun', 1)
beer = new User('Yellow', 2)


List = class {
    constructor(name) {
        this.name = name
        this.vip = []
        this.newbie = []
    }

    printVipList() {
        this.vip.forEach(printList)
    }
}

printList = user => console.log(user.nickName, user.vipLevel)

pro = new List('User with exclusive rights')
noob = new List('User with no special rights')

ira.payment(pro)
ira
