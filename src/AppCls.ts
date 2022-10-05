import { Component, Vue } from 'vue-property-decorator';
import ExibirNome from './components/ExibirNome.vue'

interface CadastroClienteInterface{
    nome: string
}

@Component({
  components:{
    ExibirNome
  }
})

export default class App extends Vue {

    public rsCliente: Array<CadastroClienteInterface> = []

    constructor(){
        super()

        this.rsCliente.push({nome: 'eduardo'})
        this.rsCliente.push({nome: 'bruna'})
        this.rsCliente.push({nome: 'Cadu'})
        this.rsCliente.push({nome: 'divimed'})

    }
  
}

