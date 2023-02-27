import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

// import packageJson from "./package.json" assert { type: "json" };
import scss from "rollup-plugin-scss";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        // Todo: fix it later to get main and module from the package json
        file: "dist/cjs/index.js", //packageJson.main,
        format: "cjs",
      },
      {
        file: "dist/esm/index.js", //packageJson.module,
        format: "esm",
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      scss(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/],
  },
];
