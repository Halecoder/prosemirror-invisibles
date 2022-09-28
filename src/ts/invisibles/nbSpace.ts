import { default as character } from "./character";
import AddDecorationsForInvisible from "../utils/invisible";

export default (predicate = (char: string) => char === " "): AddDecorationsForInvisible =>
    character("nb-space")(predicate);


