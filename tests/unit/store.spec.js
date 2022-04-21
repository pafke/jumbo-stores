import store from "@/store/store";

describe("Test search", () => {
  it("Should match searchstring", () => {
    store.commit('saveSearch', 'Veghel');
    expect(store.state.search).toBe('Veghel')
  });
});