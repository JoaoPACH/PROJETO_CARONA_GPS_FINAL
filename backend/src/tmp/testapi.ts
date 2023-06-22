import { db, Usuario, Carona } from "../shared/infra/db/database";
//import { app } from '../shared/infra/routes/api'
import * as http from "http";

async function testAPI(port: number) {
  // TODO
}

(async () => {
  // DB Management method
  await db.sync();

  // API Method
  //app.listen(3000);

  // Do API Tests
  await testAPI(3000);
})();
