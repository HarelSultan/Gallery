'use strict'

// portfolio-img - change url img
// portfolio-header - change proj name
// portfolio-text - change proj text (few words on the proj)





// portfolio-container
$(document).ready(onInit)

function onInit() {
    renderProjects()
}

function renderProjects() {
    const projects = getProjects()
    console.log('projects:', projects)
    var strHTMLs = projects.map(project => `
    <div class="col-lg-4 col-md-6 col-sm-6 portfolio-item d-flex flex-column">
    <a class="portfolio-link" onclick="onReadProj('${project.id}')" data-toggle="modal" href="#portfolioModal1">
    <div class="portfolio-hover">
    <div class="portfolio-hover-content">
    <i class="fa fa-plus fa-2x"></i>
    </div>
    </div>
    <img class="portfolio-img" src="img/${project.id}.jpg" alt="?">
    </a>
    <div class="portfolio-caption">
    <h4 class="portfolio-header">${project.name}</h4>
    <p class="text-muted portfolio-text">${project.title}</p>
    </div>
    </div>
    `
    )
    $('.portfolio-container').html(strHTMLs.join(''))
}


function onReadProj(projectId) {
    const project = getProjectById(projectId)
    const $elModalContainer = $('.modal-body')
    $elModalContainer.find('.portfolio-modal-header').text(project.name)
    $elModalContainer.find('.portfolio-modal-text').text(project.title)
    $elModalContainer.find('.portfolio-modal-img').attr("src", `img/${project.id}.jpg`)
    $elModalContainer.find('.portfolio-modal-content').text(project.desc)
    $elModalContainer.find('.portfolio-modal-date').text(getFormattedTime(project.publishedAt))
    $elModalContainer.find('.portfolio-modal-category').text(`Category:, ${project.category}`)
    $elModalContainer.find('.proj-link').attr("href", `${project.url}`)
    console.log('project.url:', project.url)

}

function addF() {
    $('.contact-form').sumbit(function (event) {
        console.log('event:', event)
        console.log(':')
        event.preventDefault()
    })
}
function onContactSumbit(ev) {
    const $elForm = $('.contact-form')
    const subjectVal = $elForm.find('.subject-input').val()
    const fullName = $elForm.find('.name-input').val()
    const desc = $elForm.find('.desc-input').val()
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=harel714@gmail.com&su=${subjectVal}&body=Hey, This is ${fullName}, ${desc}`, '_blank')
    ev.preventDefault()
}

// Date: January 2017
// Client: Non-profit project
// Category: Illustration

// .modal-body

// portfolio-modal-header - change proj name
// portfolio-modal-text - change proj text (few words on the proj)
// portfolio-modal-img - change url img
// portfolio-modal-content - change proj content
// portfolio-modal-date - change portfolio date
// portfolio-modal-category - change portfolio category



// <!-- Project Details Go Here -->

// <h2 class="portfolio-modal-header">Project Name</h2>
// <p class="item-intro text-muted portfolio-modal-text">Lorem ipsum dolor sit amet consectetur.</p>
// <img class="img-fluid d-block mx-auto portfolio-modal-img" src="img/portfolio/01-full.jpg" alt="">
// <p class="portfolio-modal-content">Use this area to describe your project. Lorem ipsum dolor sit amet,
//   consectetur adipisicing elit. Est
//   blanditiis
//   dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
//   cupiditate,
//   maiores repudiandae, nostrum, reiciendis facere nemo!</p>
// <ul class="list-inline">
//   <li class="portfolio-modal-date">Date: January 2017</li>
//   <li>Client: Non-profit project</li>
//   <li class="portfolio-modal-category">Category: Illustration</li>
// </ul>
// <button class="btn btn-primary" data-dismiss="modal" type="button">
//   <i class="fa fa-times"></i>
//   Close Project</button>
