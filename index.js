const allStudents = []
const allGroups = []

document.addEventListener('DOMContentLoaded', () =>{

  let studentForm = document.getElementById('student-creation-form')
  let studentInput = document.getElementById('student-name')

  let groupForm = document.getElementById('group-creation-form')
  let groupInput = document.getElementById('group-name')

  let randomizer = document.getElementById('randomizer')

  studentForm.addEventListener('submit', () => {
    event.preventDefault()
    let studentName = studentInput.value
    createStudent(studentName)
  })

  groupForm.addEventListener('submit', () => {
    event.preventDefault()
    let groupName = groupInput.value
    createGroup(groupName)
  })

  randomizer.addEventListener('submit', () => {
    event.preventDefault()
    randomize()
  })

  function createGroup(name) {
    let newGroup = new Group(name)
    newGroup.groupRender()
  }

  function createStudent(name) {
    let newStudent = new Student(name)
    newStudent.studentRender()
  }

  function clear() {

    let stuEl = document.getElementById('students')
    let grpEl = document.getElementById('groups')

    while (stuEl.childNodes.length > 0) {
      stuEl.removeChild(stuEl.childNodes[0])
    }

    while (grpEl.childNodes.length > 0) {
      grpEl.removeChild(grpEl.childNodes[0])
    }

    stuEl.innerHTML = ""
    grpEl.innerHTML = ""

  }

  function randomizedRender() {

    allGroups.forEach(function(group){
      let groupBox = document.createElement('div')
      groupBox.innerHTML = `<h3>Group ${group.id + 1}: ${group.name}</h3>`
      group.students.forEach(function(student){
        groupBox.innerHTML += `<h6>${student.name}</h6>`
      })
      groupBox.id = `group-${group.id}`
      let grpContainer = document.getElementById('group-assignments-container')
      grpContainer.append(groupBox)
    })

  }

  function randomize(){
    allGroups.forEach(function(group){
      while (group.students.length < 4 && allStudents.length > 0){
        student = allStudents[Math.floor(Math.random() * allStudents.length)]
        if (!group.students.includes(student)) {

            group.students.push(student)
            student.group = group

            let index = allStudents.indexOf(student)
            allStudents.splice(index, 1)
        }
      }
      clear()
      randomizedRender()
    })
  }

})
