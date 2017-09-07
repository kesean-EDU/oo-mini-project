class Group {

  constructor(name) {
    this.name = name
    this.students = []
    this.id = allGroups.length
    allGroups.push(this)
  }

  groupRender(){
    let groupList = document.getElementById('groups')
    let groupInfo = document.createElement("div")
    groupInfo.id = `group-${this.id}`
    groupInfo.innerHTML = `<div><h5>Group ${this.name}</h5></div>`
    groupList.append(groupInfo)
  }

}
