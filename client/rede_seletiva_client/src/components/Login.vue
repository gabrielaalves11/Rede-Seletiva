<template>
  <div class="container">
    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <div class="row">
          <div class="col-lg-5 d-none d-lg-block bg-success">
            <div class="col mx-auto text-center">
              <img src="LogoRS.png" class="logo" />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Seja bem vindo!</h1>
              </div>
              <hr />

              <form
                name="form"
                class="needs-validation"
                novalidate
                @submit="checkForm"
              >
                <!--Login -->
                <div>
                  <!-- E-mail -->
                  <div class="form-group left-inner-addon">
                    <i class="fas fa-envelope"></i>
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      placeholder="Digite seu e-mail"
                      v-model="email"
                      required
                    />
                    <div class="invalid-feedback">E-mail inválido.</div>
                  </div>
                  <!-- Senha -->
                  <div class="form-group left-inner-addon">
                    <i class="fas fa-lock"></i>
                    <input
                      type="password"
                      id="senha"
                      name="senha"
                      class="form-control"
                      pattern="[0-9a-fA-F]{8}"
                      placeholder="Digite sua senha"
                      v-model="senha"
                      required
                    />
                    <div class="invalid-feedback">Senha inválida.</div>
                  </div>

                  <button
                    type="submit"
                    class="btn btn-success btn-lg btn-block"
                    @click="postLogin"
                  >
                    Entrar
                  </button>

                  <hr />

                  <router-link to="/recover">
                    <div class="text-center">
                      <a class="small text-success">Esqueceu sua senha?</a>
                    </div>
                  </router-link>

                  <router-link to="/singup">
                    <div class="text-center">
                      <a class="small text-success">Crie a sua conta aqui!</a>
                    </div>
                  </router-link>

                  <footer>
                    <p class="mt-5 mb-3 text-muted text-center">
                      RedeSeletiva &copy; 2020
                    </p>
                  </footer>
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
  name: "Login",
  data() {
    return {
      email: "",
      senha: "",
      baseURI: "http://localhost:8080/rede_seletiva/api/users/login",
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