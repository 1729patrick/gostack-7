import { runSaga } from "redux-saga";
import { getTechs } from "~/store/modules/techs/sagas";
import * as Techs from "~/store/modules/techs/actions";

describe("Tecs saga", () => {
  it("should be able to fetch techs", async () => {
    const dispatch = jest.fn();

    await runSaga({ dispatch }, getTechs).toPromise();

    expect(dispatch).toHaveBeenCalledWith(Techs.getTechsSuccess(["Node.js"]));
  });
});
