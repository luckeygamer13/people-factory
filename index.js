const personForm = document.querySelector('form')

personForm.onsubmit = (ev) => {
    ev.preventDefault()
    console.log(ev)
    const form = ev.target
    const details = document.querySelector('details')

    const personName = form.personName.value

    
    // details.innerHTML = `<em> + ${personName} + </em>`

    document.createElement('em')
    em.textContent = personName
    details.appendChild(em)

}