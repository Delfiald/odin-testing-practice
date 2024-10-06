export default () => {
  const main = document.createElement('div')
  main.className = 'container'

  const h1 = document.createElement('h1')
  h1.textContent = 'How to Run Test'

  const body = document.createElement('div')
  const p1 = document.createElement('p')
  p1.textContent = 'open terminal'
  const p2 = document.createElement('p')
  p2.textContent = 'npm run watch'

  body.appendChild(p1)
  body.appendChild(p2)

  main.appendChild(h1)
  main.appendChild(body)
  return main
}