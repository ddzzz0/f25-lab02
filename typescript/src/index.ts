import { newRenderer } from "./renderer.js"
import { rectangle } from "./shapes/rectangle.js";

const rect: Shape = rectangle(2, 3)
const renderer = newRenderer(rect)
renderer.draw();