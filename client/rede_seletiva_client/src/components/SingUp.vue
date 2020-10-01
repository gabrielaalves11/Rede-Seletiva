<template>
  <div class="container">
    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <div class="row">
          <div class="col-lg-5 d-none d-lg-block bg-success">
            <div class="text-center">
              <img src="LogoRS.png" class="logo" />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Cria sua conta aqui!</h1>
              </div>
              <hr />

              <form
                name="form"
                class="needs-validation"
                novalidate
                @submit="checkForm"
              >
                <div>
                  <!-- Dados para Acesso -->
                  <label for=""
                    ><i class="fas fa-user"></i> Dados para Acesso</label
                  ><br />

                  <div class="form-group left-inner-addon">
                    <!-- E-mail -->
                    <i class="fas fa-envelope"></i>
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      placeholder="Digite seu e-mail"
                      v-model="email"
                      required
                    />
                    <div class="invalid-feedback">
                      Seu e-mail é obrigatório.
                    </div>
                  </div>

                  <div class="form-row">
                    <!-- Criar e Confirmar senha -->
                    <div class="col left-inner-addon">
                      <!-- Criar senha -->
                      <i class="fas fa-lock"></i>
                      <input
                        type="password"
                        id="senha"
                        name="senha"
                        class="form-control"
                        pattern="[0-9a-fA-F]{8}"
                        placeholder="Crie uma senha"
                        v-model="senha"
                        required
                      />
                      <div class="invalid-feedback">
                        Crie uma senha com até 8 dígitos entre números e letras.
                      </div>
                    </div>

                    <div class="col left-inner-addon">
                      <!-- Confirmar senha -->
                      <i class="fas fa-lock"></i>
                      <input
                        type="password"
                        id="confirmarSenha"
                        name="confirmarSenha"
                        class="form-control"
                        pattern="[0-9a-fA-F]{8}"
                        placeholder="Confirme sua senha"
                        v-model="confirSenha"
                        required
                      />
                      <div class="invalid-feedback">Senhas diferentes.</div>
                    </div>
                  </div>
                  <hr />
                </div>

                <div>
                  <!-- Dados Pessoais -->
                  <label for=""
                    ><i class="fas fa-list-ul"></i> Dados Pessoais</label
                  >

                  <div class="form-row">
                    <!-- Nome e Sobrenome-->
                    <div class="col">
                      <!-- Nome -->
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Digite seu nome"
                        v-model="nome"
                        required
                      />
                      <div class="invalid-feedback">
                        Seu nome é obrigatório.
                      </div>
                    </div>

                    <div class="col">
                      <!-- Sobrenome -->
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Digite seu sobrenome"
                        v-model="sobrenome"
                        required
                      />
                      <div class="invalid-feedback">
                        Seu sobrenome é obrigatório.
                      </div>
                    </div>
                  </div>
                  <br />

                  <div class="form-row">
                    <!-- Data e Sexo -->
                    <div class="col">
                      <!-- Data -->
                      <input
                        type="date"
                        class="form-control"
                        placeholder="Data de nascimento"
                        v-model="data"
                        required
                      />
                      <div class="invalid-feedback">
                        Sua data de nascimento é obrigatória.
                      </div>
                    </div>

                    <div class="form-group col-md-4">
                      <!-- Sexo -->
                      <select class="custom-select" v-model="sexo" required>
                        <option selected>Selecione o sexo</option>
                        <option>Feminino</option>
                        <option>Masculino</option>
                        <option>Outro...</option>
                      </select>
                      <div class="invalid-feedback">Selecione o sexo.</div>
                    </div>
                  </div>

                  <div class="form-row">
                    <!-- Celular e Telefone Fixo -->
                    <div class="form-group col">
                      <!-- Celular -->
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Digite seu celular"
                        pattern="\([0-9]{2})\[\s][0-9]{4}-[0-9]{4,5}"
                        data-mask="(00) 00000-0000"
                        v-model="celular"
                      />
                    </div>

                    <div class="form-group col">
                      <!-- Telefone -->
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Digite seu telefone fixo"
                        pattern="\([0-9]{2})\[\s][0-9]{4}-[0-9]{4,5}"
                        data-mask="(00) 00000-0000"
                        v-model="telefone"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <!-- CNPJ -->
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Caso seja empresa, digite seu CNPJ"
                      pattern="/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/"
                      data-mask="00.000.000/0000-00"
                      v-model="cnpj"
                    />
                  </div>
                </div>
                <hr />

                <div>
                  <!-- Endereço -->
                  <label for=""
                    ><i class="fas fa-map-marker-alt"></i> Endereço</label
                  >

                  <div class="form-row">
                    <!-- Rua e CEP -->
                    <div class="form-group col-md-8">
                      <!-- Rua -->
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Digite a rua"
                        v-model="rua"
                        required
                      />
                      <div class="invalid-feedback">
                        Seu endereço é obrigatório.
                      </div>
                    </div>

                    <div class="form-group col-md-4">
                      <!-- CEP -->
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Digite o CEP"
                        pattern="\[0-9]{5}\[\s]-[0-9]{3}"
                        data-mask="00000-000"
                        v-model="cep"
                      />
                    </div>
                  </div>

                  <div class="form-row">
                    <!-- Nº e Complemento -->
                    <div class="form-group col-md-4">
                      <!-- Nº -->
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Digite o Nº"
                        v-model="numero"
                      />
                    </div>

                    <div class="form-group col-md-8">
                      <!-- Complemento -->
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Digite o complemento"
                        v-model="complemento"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <!-- Referência -->
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Digite um ponto de referência"
                      v-model="referencia"
                    />
                  </div>

                  <div class="form-group">
                    <!-- Bairro -->
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Digite o Bairro"
                      v-model="bairro"
                    />
                  </div>

                  <div class="form-row">
                    <!-- Cidade e Estado -->
                    <div class="form-group col-md-7">
                      <!-- Cidade -->
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Digite a cidade"
                        v-model="cidade"
                        required
                      />
                      <div class="invalid-feedback">
                        Digite uma cidade válida.
                      </div>
                    </div>

                    <div class="form-group col-md-5">
                      <!-- Estado -->
                      <select class="custom-select" v-model="estado" required>
                        <option selected>UF</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                        <option value="EX">Estrangeiro</option>
                      </select>
                      <div class="invalid-feedback">
                        O estado é obrigatório.
                      </div>
                    </div>
                  </div>
                  <hr />

                  <button
                    type="submit"
                    class="btn btn-success btn-block"
                    @click="postSingUp"
                  >
                    Cadastrar
                  </button>
                  <hr />

                  <router-link to="/">
                    <div class="text-center">
                      <a class="small text-success"
                        >Já tem uma conta? Faça Login!</a
                      >
                    </div>
                  </router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingUp",
  data() {
    return {
      email: "",
      senha: "",
      confirSenha: "",
      nome: "",
      sobrenome: "",
      data: "",
      sexo: "",
      celular: "",
      telefone: "",
      cnpj: "",
      rua: "",
      cep: "",
      numero: "",
      complemento: "",
      referencia: "",
      bairro: "",
      cidade: "",
      estado: "",
      baseURI: "http://localhost:8080/rede_seletiva/api/users/singup",
    };
  },
  created: function () {
    if (localStorage.getItem("user")) {
      this.$router.replace("/");
    }
  },
  methods: {
    postLogin: function () {
      let obj = {
        email: this.email,
        senha: this.senha,
        confirSenha: this.confirSenha,
        nome: this.nome,
        sobrenome: this.sobrenome,
        data: this.data,
        sexo: this.sexo,
        celular: this.celular,
        telefone: this.telefone,
        cnpj: this.cnpj,
        rua: this.rua,
        cep: this.cep,
        numero: this.numero,
        complemento: this.complemento,
        referencia: this.referencia,
        bairro: this.bairro,
        cidade: this.cidade,
        estado: this.estado,
      };

      this.$http.post(this.baseURI, obj).then((result) => {
        if (result.data != "") {
          localStorage.setItem("user", JSON.stringify(result.data));
          location.reload();
        } else {
          alert("Verifique os campos.");
        }
      });
    },
    checkForm(event) {
      event.preventDefault();
      event.target.classList.add("was-validated");
    },
  },
};
</script>

<style>
</style>