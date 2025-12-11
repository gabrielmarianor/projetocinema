import { Link } from 'react-router-dom';

const Index = () => {
  return (
    // MUDANÇA 1: Fundo da página agora é claro (bg-light)
    <div className="min-vh-100 d-flex flex-column bg-light">

      {/* Hero Section */}
      <section className="flex-grow-1 d-flex align-items-center py-5">
        <div className="container">
          <div className="d-flex flex-column align-items-center gap-5">

            {/* Seção Superior: Texto Centralizado */}
            <div className="text-center mw-800">

              <h1 className="display-3 fw-bold mb-4 text-dark">
                <span className="text-primary">Cine</span>Web
              </h1>
              <p className="lead text-secondary mb-4 mx-auto" style={{ maxWidth: '700px' }}>
                A solução definitiva para o gerenciamento do seu cinema. Controle total de filmes, salas e sessões em uma interface moderna e intuitiva.
              </p>
            </div>

            {/* Seção Inferior: Cards Horizontais */}
            <div className="w-100">
              <div className="row g-4">
                <div className="col-md-6 col-lg-3">
                  <Link to="/filmes" className="text-decoration-none">
                    <div className="card bg-dark text-white border-0 h-100 shadow-sm hover-scale transition-all">
                      <div className="card-body text-center py-5">
                        <i className="bi bi-film text-primary display-4 mb-3 d-block"></i>
                        <h5 className="fw-bold mb-0">Filmes</h5>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-3">
                  <Link to="/salas" className="text-decoration-none">
                    <div className="card bg-dark text-white border-0 h-100 shadow-sm hover-scale transition-all">
                      <div className="card-body text-center py-5">
                        <i className="bi bi-door-open text-primary display-4 mb-3 d-block"></i>
                        <h5 className="fw-bold mb-0">Salas</h5>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-3">
                  <Link to="/sessoes" className="text-decoration-none">
                    <div className="card bg-dark text-white border-0 h-100 shadow-sm hover-scale transition-all">
                      <div className="card-body text-center py-5">
                        <i className="bi bi-calendar-check text-primary display-4 mb-3 d-block"></i>
                        <h5 className="fw-bold mb-0">Sessões</h5>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-3">
                  <Link to="/lanches" className="text-decoration-none">
                    <div className="card bg-dark text-white border-0 h-100 shadow-sm hover-scale transition-all">
                      <div className="card-body text-center py-5">
                        <i className="bi bi-cup-straw text-primary display-4 mb-3 d-block"></i>
                        <h5 className="fw-bold mb-0">Lanches</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer - Estilo Escuro para fechar a página */}
      <footer className="bg-dark text-secondary py-4 border-top border-secondary mt-auto">
        <div className="container text-center">
          <small>
            <i className="bi bi-code-slash me-1 text-primary"></i>
            CineWeb © 2025 - Sistema de Gestão de Cinema
          </small>
        </div>
      </footer>
    </div>
  );
};

export default Index;