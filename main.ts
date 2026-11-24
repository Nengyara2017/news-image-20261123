import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const botDir = process.env.MAKEFUN_BOT_DIR ?? here;
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "out");

const encoded = readFileSync(join(botDir, "entry.png.b64"), "utf8").trim();
const image = Buffer.from(encoded, "base64");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.png"), image);
