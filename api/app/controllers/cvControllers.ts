import {
  Controller,
  Get,
  HttpStatus,

} from "../../deps.ts";
import { Type } from "../models/model.ts";


@Controller("/cv")
export class cvController {
  @Get("/legend")
  @HttpStatus(200)
  async getLegend() {

    const data =  await Type.all()

    if (data){
      return {
        message: "Action returning all type! Defaults to 200 status!",
        data
      };

    }
    else {
      return {
        message: "error"
      }
    }
  }

}

export default cvController;