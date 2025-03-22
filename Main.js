import Cl_hija1 from "./CL_Hija1.js";
import CL_hija2 from "./CL_Hija2.js";
export default class CL_Main {
  constructor() {
    let hija1 = new Cl_hija1(1, 2),
      hija2 = new CL_hija2(3, 4);
  }
}
