import {Controller, Get} from "@tsed/common";

@Controller("/questionario")
export class QuestionarioController {
  @Get("")
  getquestioanrio() {
    return 
    fetch('https://healthmapv3-api.healthmap.com.br/api/questionario/v1/questionario/{id}')
      .then(res => res.json())

  }
}