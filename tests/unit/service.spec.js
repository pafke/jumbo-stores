import {loadData} from '@/services/loadDataService';
jest.setTimeout(10000);

describe("Load data", () => {
  it("Should load the data", async () => {
    let data = await loadData();
    expect(data).toBeTruthy();
  });
});