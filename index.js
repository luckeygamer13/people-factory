const personForm = document.querySelector('form')

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

  const personName = form.personName.value
  const hairColor = form.hairColor.value
  const age = form.age.value
  const birthplace = form.birthplace.value

  const colorDiv = `
    <div style="height: 50px; width: 100px; background-color: ${hairColor}"></div>
  `

    // details.innerHTML = `<em> + ${personName} + </em>`

    // document.createElement('em')
    // em.textContent = personName
    // details.appendChild(em)


  const ul = document.createElement("ul")                       // Create a <p> element
  ul.textContent = "Sumbission Details"       // Create a text node                                         // Append the text to <p>
  details.appendChild(ul)                              // Append <p> to <body>
  
  
  // const li1 = document.createElement("li");                       // Create a <p> element
  // const t1 = document.createTextNode('Name:: ' + personName); //details.personName);       // Create a text node
  // li1.appendChild(t1);                                          // Append the text to <p>
  // ul.appendChild(li1);

  // const li2 = document.createElement("li");                       // Create a <p> element
  // const t2 = document.createTextNode('Hair Color: ' + colorDiv); //details.personName);       // Create a text node
  // li2.appendChild(t2);                                          // Append the text to <p>
  // ul.appendChild(li2);

  const labels = document.getElementsByTagName("label")
  
  for (var i = 0; i < form.length - 1; i++){
    var list = document.createElement('li')
    list.textContent = labels[i].innerText + ': ' + form[i].value
    ul.appendChild(list)
  }

console.log(form.length)

}

personForm.addEventListener('submit', handleSubmit)