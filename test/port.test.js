import dotenv from "dotenv";
import { expect } from "chai";

// testing for port
dotenv.config();
const port = Number(process.env.PORT);
const running_env = process.env.NODE_ENV;

describe("Port test", () => {
  // truthy case
  it("Should run on development port", () => {
    expect(running_env).to.equals("development");
    expect(port).to.equals(8080);
  });

  // falsy case, but should run
  it("should not run on production", () => {
    expect(running_env).to.not.equals("production");
    expect(port).to.not.equals(3000);
  });
});
