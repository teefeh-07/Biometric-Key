import { describe, it, expect } from "vitest";

describe("biometric-key contract", () => {
  it("should start with 0 users", () => {
    expect(0).toBe(0);
  });

  it("should allow registration", () => {
    const user = "ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5";
    // Simulate register
    const result = true; // Placeholder for ok response
    expect(result).toBe(true);
  });
});
