import {Controller, Get} from "@tsed/common";

@Controller("/questionarioNovoCadastro")
export class QuestionarioNovoCadastroController {
  @Get("")
  getquestioanrio() {
    return 
        fetch('https://healthmapv3-api.healthmap.com.br/api/questionario/v1/questionario/questionarioNovoCadastro')
      .then(res => res.json())

  }
}