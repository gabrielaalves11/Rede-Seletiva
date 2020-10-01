<template id="page-top">
  <div id="wrapper">
    <ul
      class="navbar-nav bg-success sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="pgInicial.html"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <img src="Símbolo1.png" alt="" width="70%" />
        </div>
        <div class="sidebar-brand-text mx-2">Rede Seletiva</div>
      </a>

      <hr class="sidebar-divider my-0" />

      <li class="nav-item">
        <a class="nav-link" href="pgInicial.html">
          <i class="fas fa-home"></i>
          <span>Página Inicial</span></a
        >
      </li>

      <li class="nav-item">
        <a class="nav-link" href="editarUser.html">
          <i class="fas fa-edit"></i>
          <span>Editar perfil</span></a
        >
      </li>

      <li class="nav-item">
        <a class="nav-link" href="index.html">
          <i class="fas fa-sign-in-alt"></i>
          <span>Sair</span></a
        >
      </li>

      <hr class="sidebar-divider d-none d-md-block" />
    </ul>

    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <nav
          class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
        >
          <button
            id="sidebarToggleTop"
            class="btn btn-link d-md-none rounded-circle mr-3"
          >
            <i class="fa fa-bars"></i>
          </button>

          <form
            class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
          >
            <div class="input-group">
              <input
                type="text"
                class="form-control bg-light border-0 small"
                placeholder="Pesquisar..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-success" type="button">
                  <i class="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>

          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link active" href="editarUser.html">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small"
                  >João Pereira</span
                >
                <img class="img-profile rounded-circle" src="Avatar.png" />
              </a>
            </li>
          </ul>
        </nav>

        <div class="row">
          <div class="col offset">
            <div class="shadow-lg">
              <div class="card text-center">
                <div class="card-body">
                  <div class="mr-2">
                    <img
                      class="rounded-circle"
                      width="15%"
                      src="Avatar.png"
                      alt=""
                    />
                  </div>
                  <div class="h6">joao@gmail.com</div>
                  <div class="h7 text-muted">Nome: João Pereira</div>
                  <div class="h7 text-muted">
                    Reciclador de: Papel, Vidro e Materias organicos.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="configdiv">
          <div class="col-md-7 offset-md-3">
            <div class="shadow-lg">
              <div class="card gedf-card">
                <div class="card-header">
                  <ul
                    class="nav nav-tabs card-header-tabs"
                    id="myTab"
                    role="tablist"
                  >
                    <li class="nav-item">
                      <a
                        class="nav-link active text-success"
                        id="posts-tab"
                        data-toggle="tab"
                        href="#posts"
                        role="tab"
                        aria-controls="posts"
                        aria-selected="true"
                        >Fazer uma publicação</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link text-success"
                        id="images-tab"
                        data-toggle="tab"
                        role="tab"
                        aria-controls="images"
                        aria-selected="false"
                        href="#images"
                        >Inserir imagem</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="card-body">
                  <div class="tab-content" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="posts"
                      role="tabpanel"
                      aria-labelledby="posts-tab"
                    >
                      <div class="form-group">
                        <label class="sr-only" for="message">post</label>
                        <textarea
                          class="form-control"
                          id="message"
                          rows="3"
                          placeholder="O que você está reciclando?"
                        ></textarea>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="images"
                      role="tabpanel"
                      aria-labelledby="images-tab"
                    >
                      <div class="form-group">
                        <div class="custom-file">
                          <input
                            type="file"
                            class="custom-file-input"
                            id="customFile"
                          />
                          <label class="custom-file-label" for="customFile"
                            >Enviar Imagem</label
                          >
                        </div>
                      </div>
                      <div class="py-4"></div>
                    </div>
                  </div>
                  <div class="btn-toolbar justify-content-between">
                    <div class="btn-group">
                      <button type="submit" class="btn btn-success">
                        Compartilhar
                      </button>
                    </div>
                    <!--<div class="btn-group">
                                            <button id="btnGroupDrop1" type="button"
                                                class="btn btn-link dropdown-toggle" data-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">
                                                <i class="fa fa-globe"></i>
                                            </button>
                                            <div class="dropdown-menu dropdown-menu-right"
                                                aria-labelledby="btnGroupDrop1">
                                                <a class="dropdown-item" href="#"><i class="fa fa-globe"></i>
                                                    Publico</a>
                                                <a class="dropdown-item" href="#"><i class="fa fa-users"></i>
                                                    Amigos</a>
                                                <a class="dropdown-item" href="#"><i class="fa fa-user"></i> Somente
                                                    eu</a>
                                        </div>-->
                  </div>
                </div>
              </div>
            </div>

            <div class="card gedf-card">
              <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="mr-2">
                      <img
                        class="rounded-circle"
                        width="45"
                        src="Avatar.png"
                        alt=""
                      />
                    </div>
                    <div class="ml-2">
                      <div class="h5 m-0">joaopereira@gmail.com</div>
                    </div>
                  </div>
                  <div>
                    <div class="dropdown">
                      <button
                        class="btn btn-success dropdown-toggle"
                        type="button"
                        id="gedf-drop1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fa fa-ellipsis-h"></i>
                      </button>
                      <div
                        class="dropdown-menu dropdown-menu-right"
                        aria-labelledby="gedf-drop1"
                      >
                        <div class="h6 dropdown-header">Configurações</div>
                        <a class="dropdown-item" href="#">Editar</a>
                        <a class="dropdown-item" href="#">Excluir</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="text-muted h7 mb-2">
                  <i class="fa fa-clock-o"></i>10 min ago
                </div>
                <p class="card-text">
                  Vidros recicláveis, para a fabricação de novos produtos, na
                  maior parte das vezes, embalagens.
                </p>
                <div><img src="img/Teste1" alt="" class="img-thumbnail" /></div>
              </div>
              <div class="card-footer">
                <a href="#" class="card-link text-success"
                  ><i class="fa fa-gittip"></i> Curtir</a
                >
                <a href="#" class="card-link text-success"
                  ><i class="fa fa-comment"></i> Comentar</a
                >
                <a href="#" class="card-link text-success"
                  ><i class="fa fa-mail-forward"></i> Compartilhar</a
                >
              </div>
            </div>

            <div class="card gedf-card">
              <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="mr-2">
                      <img
                        class="rounded-circle"
                        width="45"
                        src="Avatar.png"
                        alt=""
                      />
                    </div>
                    <div class="ml-2">
                      <div class="h5 m-0">joaopereira@gmail.com</div>
                    </div>
                  </div>
                  <div>
                    <div class="dropdown">
                      <button
                        class="btn btn-success dropdown-toggle"
                        type="button"
                        id="gedf-drop1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fa fa-ellipsis-h"></i>
                      </button>
                      <div
                        class="dropdown-menu dropdown-menu-right"
                        aria-labelledby="gedf-drop1"
                      >
                        <div class="h6 dropdown-header">Configurações</div>
                        <a class="dropdown-item" href="#">Editar</a>
                        <a class="dropdown-item" href="#">Excluir</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="text-muted h7 mb-2">
                  <i class="fa fa-clock-o"></i>10 min ago
                </div>
                <p class="card-text">
                  Vidros recicláveis, para a fabricação de novos produtos, na
                  maior parte das vezes, embalagens.
                </p>
                <div><img src="Teste1" alt="" class="img-thumbnail" /></div>
              </div>
              <div class="card-footer">
                <a href="#" class="card-link text-success"
                  ><i class="fa fa-gittip"></i> Curtir</a
                >
                <a href="#" class="card-link text-success"
                  ><i class="fa fa-comment"></i> Comentar</a
                >
                <a href="#" class="card-link text-success"
                  ><i class="fa fa-mail-forward"></i> Compartilhar</a
                >
              </div>
            </div>
          </div>
        </div>

        <footer class="sticky-footer bg-white">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>Copyright &copy; Rede Seletiva 2020</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "User",
};
</script>

<style>
</style>