import validateColor from "validate-color"

const isValidColor = (v: string , p: string) => validateColor(v) ? v : p

export default isValidColor;