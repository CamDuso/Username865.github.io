
// LOOK INTO KEYFRAMES TO HAVE SHEETS CASCADE INTO MAIN CONTAINER
const displayTechnicalSkills = () =>{
    let screen = document.querySelector('.mainContainer')
    screen.classList.toggle ('technicalSkills')
}
const displayProjects = () =>{
    let screen = document.querySelector('.mainContainer')
    screen.classList.toggle ('projects')
}
const displayExperience = () =>{
    let screen = document.querySelector('.mainContainer')
    screen.classList.toggle ('experience')
}
const displayEducation = () =>{
    let screen = document.querySelector('.mainContainer')
    screen.classList.toggle ('education')
}
const displayReferences = () =>{
    let screen = document.querySelector('.mainContainer')
    screen.classList.toggle ('references')
}
const displayDate = () => {
    document.getElementById("demo").innerHTML = Date();
  }