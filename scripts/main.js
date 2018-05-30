console.log('Welcome to Validation Station!')

const form = document.querySelector('#new-train-car-form')
form.addEventListener('submit', (event) => {
  event.preventDefault()
  const kind = document.querySelector('#train-kind') // could also do: kind = event.target.kind (b/c name="kind" in <select>)
  const error = document.querySelector('#error') // <div> containing the empty <p>
  if (kind.value === 'observation' || kind.value === 'passenger') {
    const seats = event.target.seats
    if (!seats.value) {
      error.querySelector('p').textContent = 'You must have a number of seats.'
      error.classList.remove('d-none') // remove from classList
    }
  }

  if (error.classList.contains('d-none')) {
    error.classList.remove('alert-danger')
    error.classList.add('alert-success')
    error.querySelector('p').textContent = 'Success.'
    error.classList.remove('d-none')
    addCarToList(event)
    form.reset() // reset AFTER adding car to list - otherwise you are deleting the values from the form before you save it as new car
  }
})

function addCarToList (event) {
  const carList = document.querySelector('#car-list')
  const brand = event.target.brand
  const kind = event.target.kind
  const numSeats = event.target.seats
  const newCar = `<li>
                    <p>${brand.value} ${kind.value} (${numSeats.value})</p>
                  </li>`
  carList.innerHTML += newCar
}
