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
                <h1 class="h4 text-gray-900 mb-4">Esqueceu sua senha?</h1>
                <p class="text-black-50 mb-4">
                  Nós entendemos, coisas acontecem. Basta inserir seu endereço
                  de e-mail abaixo e enviaremos um link para redefinir sua
                  senha!
                </p>
              </div>
              <hr />

              <form
                name="form"
                @submit="checkForm"
                class="needs-validation"
                novalidate
              >
                <div>
                  <!-- Login -->
                  <div class="form-group left-inner-addon mb-4 mt-4">
                    <!-- E-mail -->
                    <i class="fas fa-envelope"></i>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      v-model="email"
                      class="form-control"
                      placeholder="Digite seu e-mail"
                      required
                    />
                    <div class="invalid-feedback">E-mail incorreto.</div>
                  </div>

                  <button
                    type="submit"
                    class="btn btn-success btn-block"
                    @click="postRecover"
                  >
                    Redefinir Senha
                  </button>

                  <hr />

                  <router-link to="/singup">
                    <div class="text-center">
                      <a class="small text-success">Crie a sua conta aqui!</a>
                    </div>
                  </router-link>

                  <router-link to="/">
                    <div class="text-center">
                      <a class="small text-success"
                        >Já tem uma conta? Faça Login!</a
                      >
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
  name: "SingUp",
  data() {
    return {
      email: "",
      baseURI: "http://localhost:8080/rede_seletiva/api/users/recover",
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