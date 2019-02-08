import { assert } from "chai";
import { resolve } from "path";
import { readFileSync, existsSync } from "fs";
import * as ts from "typescript";

interface Options {
  compilerOptions: ts.CompilerOptions;
}

const SS_REGEX = /\/\/.*[\r\n]+/gi;
const stripDoubleSlash = (str: string): string => str.replace(SS_REGEX, "");
const ST_REGEX = /\/\*.*\*\//gi;
const removeSlashStar = (str: string): string => str.replace(ST_REGEX, "");

const removeComments = (str: string): string => {
  return removeSlashStar(stripDoubleSlash(str));
};

describe("tsconfig.json", () => {
  let program: ts.Program;

  before(() => {
    const tsconfigPath = resolve(__dirname, "../tsconfig.json");
    const data = readFileSync(tsconfigPath, { encoding: "utf8" }).toString();
    const options: Options = JSON.parse(removeComments(data));
    const programPath = resolve(__dirname, "./program.ts");
    const { compilerOptions } = options;
    program = ts.createProgram([programPath], compilerOptions);
  });

  it("generates files in dist", () => {
    ["d.ts", "js", "js.map"]
      .map(extension => resolve(__dirname, `../dist/program.${extension}`))
      .map(existsSync)
      .forEach(result => assert.isTrue(result));
  });

  it("compiles with no warnings (except missing files)", () => {
    const allowMissingFile = (diagnostic: ts.Diagnostic) =>
      diagnostic.code === 6035;
    const results = program.emit();
    let allDiagnostics = ts
      .getPreEmitDiagnostics(program)
      .concat(results.diagnostics)
      .filter(allowMissingFile);
    assert.equal(allDiagnostics.length, 0);
  });
});
