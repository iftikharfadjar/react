import { ActionTypes } from "./Types";
import { data as rawData } from "./placeholderData";

export const loadData = (dataType) => ({
  type: ActionTypes.DATA_LOAD,
  payload: {
    dataType: dataType,
    data: rawData[dataType],
  },
});
