import {ScreenRect} from 'react-native'

export function measure(component: any) {
  return new Promise<ScreenRect>(resolve => {
    component.measure(
      (screenX: number, screenY: number, width: number, height: number) => {
        resolve({screenX, screenY, width, height})
      },
    )
  })
}
