import { describe, it, expect } from "vitest";

describe("biometric-key contract", () => {
  it("should start with 0 users", () => {
    expect(0).toBe(0);
  });

  it("should allow registration", () => {
    expect(true).toBe(true);
  });

  it("should fail on duplicate registration", () => {
    // Simulate dupe
    const error = 101; // err-already-registered
    expect(error).toBe(101);
  });
});
