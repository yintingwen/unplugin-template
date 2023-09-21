import { createUnplugin } from 'unplugin'
import { Options } from '../types'


export default createUnplugin<Options>((options) => {
    return {
        name: 'unplugin-name',
        transform (code: string) {
          return code
        }
    }
})
