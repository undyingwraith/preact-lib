import {MeldReadState, MeldStateSubscription} from '@m-ld/m-ld'

export interface IMeldService {
    subscribe(update: (state: MeldReadState) => void): MeldStateSubscription<void>
}