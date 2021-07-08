import {Controller, Get} from "@tsed/common";

@Controller("/planoAcao")
export class PlanodeCuidadoController {
  @Get("")
  getplanodeacao() {
    return 
    fetch('https://healthmapv3-api.healthmap.com.br/api/planoacao/v1/planoAcao')
      .then(res => res.json())

  }
}