import { createLibp2p } from "libp2p";
import { IIpfsService } from "./IIpfsService";

export class HeliaIpfsService implements IIpfsService {
    protected constructor() {

    }

    public static async create(): Promise<IIpfsService> {
        const libp2p = await createLibp2p()
        return new HeliaIpfsService();
    }
}