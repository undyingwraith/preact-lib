import { IMeldService } from "./IMeldService";
import { MeldReadState, MeldStateSubscription, MeldClone, clone, ConstructRemotes, MeldConfig } from '@m-ld/m-ld'
import { AbstractLevel } from 'abstract-level'

export class MeldService implements IMeldService {
	protected constructor(private readonly instance: MeldClone) {
	}

	public static async create<TConfig extends MeldConfig>(level: AbstractLevel<any, any, any>, remotes: ConstructRemotes, config: TConfig): Promise<IMeldService> {
		await level.open({
			createIfMissing: true,
		})
		const instance = await clone(level, remotes, config);
		return new MeldService(instance);
	}

	subscribe(update: (state: MeldReadState) => void): MeldStateSubscription<void> {
		return this.instance.read((state) => update(state), (_, state) => update(state));
	}
}