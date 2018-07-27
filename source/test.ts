import "mocha";

import * as chai from "chai";

it(
  "empty",
  async (): Promise<void> => {
    chai.expect(2).to.equal(2);
  },
);
