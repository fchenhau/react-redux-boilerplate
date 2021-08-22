const actions = require("./actions")
// @ponicode
describe("actions.resetGetRequest", () => {
    test("0", () => {
        let callFunction = () => {
            actions.resetGetRequest()
        }
    
        expect(callFunction).not.toThrow()
    })
})
