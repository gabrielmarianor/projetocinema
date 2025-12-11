import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '@/components/Navbar';

function Sessoes() {
  const [sessoes, setSessoes] = useState<any[]>([]);
  const [filmes, setFilmes] = useState<any[]>([]);
  const [salas, setSalas] = useState<any[]>([]);

  // States do formulário
  const [filmeId, setFilmeId] = useState('');
  const [salaId, setSalaId] = useState('');
  const [dataHora, setDataHora] = useState('');

  // Carregar dados iniciais
  useEffect(() => {
    axios.get('http://localhost:3000/sessoes').then(res => setSessoes(res.data));
    axios.get('http://localhost:3000/filmes').then(res => setFilmes(res.data));
    axios.get('http://localhost:3000/salas').then(res => setSalas(res.data));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const novaSessao = {
      filmeId: parseInt(filmeId),
      salaId: parseInt(salaId),
      dataHora
    };
    axios.post('http://localhost:3000/sessoes', novaSessao).then(res => {
      setSessoes([...sessoes, res.data]);
      // Limpar form
      setFilmeId(''); setSalaId(''); setDataHora('');
    });
  };

  const handleDelete = (id: number) => {
    axios.delete(`http://localhost:3000/sessoes/${id}`).then(() => {
      setSessoes(sessoes.filter(s => s.id !== id));
    });
  };

  // Helpers para exibir nome em vez de ID
  const getNomeFilme = (id: number) => filmes.find(f => f.id === id)?.titulo || 'Filme não encontrado';
  const getNumeroSala = (id: number) => salas.find(s => s.id === id)?.numero || '?';

  return (
    // AQUI É A MUDANÇA: Alterado de 'bg-dark' para 'bg-light' para o fundo branco
    <div className="min-vh-100 bg-light">
      <Navbar />
      <div className="container py-4">
        <div className="d-flex align-items-center mb-4">
          {/* Mantido o estilo original preto e amarelo para os títulos */}
          <i className="bi bi-calendar-event text-primary display-5 me-3"></i>
          <div>
            {/* Cor do texto alterada para 'text-dark' para contrastar com o fundo branco */}
            <h1 className="text-dark mb-0">Sessões</h1>
            <p className="text-secondary mb-0">Agende e gerencie as sessões de exibição</p>
          </div>
        </div>

        {/* Card de Agendamento - Mantido o estilo original Preto e Amarelo */}
        <div className="row">
          {/* Coluna Esquerda: Formulário de Agendamento */}
          <div className="col-lg-4 mb-5">
            <div className="sticky-top" style={{ top: '20px', zIndex: 1 }}>
              <div className="card border-0 shadow-sm bg-dark text-light">
                <div className="card-header bg-primary text-white py-3 border-bottom border-dark">
                  <h5 className="mb-0 fw-bold">
                    <i className="bi bi-plus-circle me-2"></i> Agendar Sessão
                  </h5>
                </div>
                <div className="card-body p-4">
                  <form onSubmit={handleSubmit} className="row g-3">
                    <div className="col-12">
                      <label className="form-label fw-medium text-light">Filme *</label>
                      <select
                        className="form-select bg-secondary text-light border-secondary"
                        value={filmeId}
                        onChange={e => setFilmeId(e.target.value)}
                        required
                      >
                        <option value="">Selecione um filme</option>
                        {filmes.map(f => (
                          <option key={f.id} value={f.id}>{f.titulo}</option>
                        ))}
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-medium text-light">Sala *</label>
                      <select
                        className="form-select bg-secondary text-light border-secondary"
                        value={salaId}
                        onChange={e => setSalaId(e.target.value)}
                        required
                      >
                        <option value="">Selecione uma sala</option>
                        {salas.map(s => (
                          <option key={s.id} value={s.id}>Sala {s.numero}</option>
                        ))}
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-medium text-light">Data e Horário *</label>
                      <input
                        type="datetime-local"
                        className="form-control bg-secondary text-light border-secondary"
                        value={dataHora}
                        onChange={e => setDataHora(e.target.value)}
                        required
                      />
                    </div>

                    <div className="col-12 mt-4">
                      <button type="submit" className="btn btn-primary fw-bold w-100">
                        <i className="bi bi-check2 me-2"></i> Agendar Sessão
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Lista de Sessões */}
          <div className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="fw-bold text-dark mb-0">
                <i className="bi bi-list-ul me-2"></i> Sessões Agendadas
              </h4>
              <span className="badge bg-primary text-white">{sessoes.length} sessão(ões)</span>
            </div>

            <div className="card bg-dark text-light border-0 shadow-sm">
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-dark table-hover mb-0 align-middle">
                    <thead className="table-secondary">
                      <tr>
                        <th scope="col" className="py-3 ps-4">Filme</th>
                        <th scope="col" className="py-3">Sala</th>
                        <th scope="col" className="py-3">Data/Horário</th>
                        <th scope="col" className="py-3 text-end pe-4">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sessoes.map(sessao => (
                        <tr key={sessao.id}>
                          <td className="ps-4">
                            <h6 className="mb-1 text-primary">{getNomeFilme(sessao.filmeId)}</h6>
                            <small className="text-secondary">Duração: - min</small>
                          </td>
                          <td>
                            <span className="badge bg-secondary text-light">
                              Sala {getNumeroSala(sessao.salaId)}
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <i className="bi bi-clock text-primary me-2"></i>
                              <div>
                                <div>{new Date(sessao.dataHora).toLocaleDateString()}</div>
                                <small className="text-secondary">
                                  {new Date(sessao.dataHora).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </small>
                              </div>
                            </div>
                          </td>
                          <td className="text-end pe-4">
                            <button className="btn btn-sm btn-outline-success me-2" title="Vender Ingresso">
                              <i className="bi bi-ticket-perforated"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-primary me-2" title="Editar">
                              <i className="bi bi-pencil"></i>
                            </button>
                            <button onClick={() => handleDelete(sessao.id)} className="btn btn-sm btn-outline-danger" title="Excluir">
                              <i className="bi bi-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                      {sessoes.length === 0 && (
                        <tr>
                          <td colSpan={4} className="text-center py-4 text-secondary">
                            Nenhuma sessão agendada.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sessoes;