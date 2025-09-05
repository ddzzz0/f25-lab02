import { newRenderer } from "./renderer.js";
import { rectangle } from "./shapes/rectangle.js";
const rect = rectangle(2, 3);
const renderer = newRenderer(rect);
renderer.draw();
//# sourceMappingURL=index.js.map