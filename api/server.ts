//import "https://deno.land/x/dotenv/load.ts";

// -------------------- IMPORT DEPS --------------------

import {
  config,
  organ,
  opine,
  urlencoded,
  oakCors,
  CorsOptions,
  Request,
  Response,
  NextFunction
} from "./deps.ts";

// -------------------- IMPORT LOCALS --------------------

import router from "./app/router/router.ts";
import { client } from "./app/database/db_connection.ts";


// -------------------- DECLARATIONS --------------------

//! Quelque soit la méthode le port récupérer est une string
//| const PORT : number = Number(Deno.env.get('PORT')) || 5050; // <- import "https://deno.land/x/dotenv/load.ts";
const PORT : number = Number(config().PORT) || 5050; // <- import { config } from "./deps.ts"


//? opine = express
const app = opine();

// ------------------------------------------------------------

//? Connect db
await client.sync();

// ------------------------------------------------------------

// cors
/* app.use((req: Request, res: Response, next: NextFunction) => {
    oakCors({
      origin: '*',
      credentials: true,
      allowedHeaders: ['Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'],
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE, OPTIONS",
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });
  }
); */

// ------------------------------------------------------------

//? organ = morgan
// FIXME: Error => Uncaught TypeError: next is not a function
// FIXME:           await next();
// app.use(organ('dev'))

// ------------------------------------------------------------

//? urlencoded
app.use(urlencoded({extended: true}));

// ------------------------------------------------------------

//? router
// NOTE: possibilité d'utiliser plusieurs api en les listant à la suite avec les différents router correspondant
app.use("/api", router);

app.get("/", function (req: Request, res: Response): void {
  console.log("hello")
  res.send("Hello from root route.");
});


// ------------------------------------------------------------

//? listen
app.listen(PORT, () => {
  console.info(`CORS-enabled web server listening on port ${PORT}`);
  console.log(`Opine started on port ${PORT}`);
});