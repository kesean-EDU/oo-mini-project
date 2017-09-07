class Student {
  constructor(name) {
    this.name = name
    this.id = allStudents.length
    allStudents.push(this)
  }

  studentRender(){
    let studentList = document.getElementById('students')
    let studentInfo = document.createElement("div")
    studentInfo.innerHTML = `<div><h6>${this.name}</h6></div>`
    studentList.append(studentInfo)
  }

}
