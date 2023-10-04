import calculator from "calculator";

describe("calculator tests", () => {
  it("should sum numbers", async () => {
    const value = calculator.sum(1, 2);
    expect(value).toBe(3);
  });
  it("should sub numbers", async () => {
    const value = calculator.sub(1, 2);
    expect(value).toBe(-1);
  });
  it("should div numbers", async () => {
    const value = calculator.div(1, 2);
    expect(value).toBe(0.5);
  });
  it("should mul numbers", async () => {
    const value = calculator.mul(1, 2);
    expect(value).toBe(2);
  });

})