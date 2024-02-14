import { isArray } from "@m-ld/jsonld/lib/types";

export function getAsArray(item: any): any[] {
    return !item ? [] : isArray(item) ? item : [item]
}