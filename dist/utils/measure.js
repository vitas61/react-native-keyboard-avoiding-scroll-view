export function measure(component) {
  return new Promise(resolve => {
    component.measure((screenX, screenY, width, height) => {
      resolve({screenX, screenY, width, height})
    })
  })
}
