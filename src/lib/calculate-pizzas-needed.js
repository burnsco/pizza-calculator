export default (guests, slices) => {
  let slicesInAPizza = 8
  let totalSlices = guests * slices
  let pizzas = Math.ceil(totalSlices / slicesInAPizza)
  return pizzas
}
