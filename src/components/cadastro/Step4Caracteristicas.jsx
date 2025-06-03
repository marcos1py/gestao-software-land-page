import React from 'react';

const Step4Caracteristicas = ({ formData, handleChange, errors }) => {
  return (
    <div>
      <h3 className='text-blue-500' style={{
        fontSize: '24px',
        fontWeight: '600',
        marginBottom: '24px',
        paddingBottom: '16px',
        borderBottom: '2px solid #eef0f7'
      }}>
        Características da Empresa
      </h3>
      <div className="row">
        <div className="col-md-4 mb-4">
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#4a5568',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            Setor de Atuação
          </label>
          <select
            name="setor"
            value={formData.setor}
            onChange={handleChange}
            required
            style={{
              padding: '16px',
              borderRadius: '12px',
              border: errors.setor ? '2px solid #ff4d4f' : '2px solid #eef0f7',
              width: '100%',
              fontSize: '16px',
              transition: 'all 0.3s ease',
              backgroundColor: '#f8fafc',
              marginBottom: '8px'
            }}
          >
            <option value="">Selecione o setor</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="saude">Saúde</option>
            <option value="educacao">Educação</option>
            <option value="financeiro">Financeiro</option>
            <option value="outros">Outros</option>
          </select>
          {errors.setor && (
            <span style={{ color: '#ff4d4f', fontSize: '12px' }}>{errors.setor}</span>
          )}
        </div>
        <div className="col-md-4 mb-4">
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#4a5568',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            Porte da Empresa
          </label>
          <select
            name="porte"
            value={formData.porte}
            onChange={handleChange}
            required
            style={{
              padding: '16px',
              borderRadius: '12px',
              border: errors.porte ? '2px solid #ff4d4f' : '2px solid #eef0f7',
              width: '100%',
              fontSize: '16px',
              transition: 'all 0.3s ease',
              backgroundColor: '#f8fafc',
              marginBottom: '8px'
            }}
          >
            <option value="">Selecione o porte</option>
            <option value="1-10">1-10 funcionários</option>
            <option value="11-50">11-50 funcionários</option>
            <option value="51-200">51-200 funcionários</option>
            <option value="201+">201+ funcionários</option>
          </select>
          {errors.porte && (
            <span style={{ color: '#ff4d4f', fontSize: '12px' }}>{errors.porte}</span>
          )}
        </div>
        <div className="col-md-4 mb-4">
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#4a5568',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            Número de Projetos
          </label>
          <input
            type="number"
            name="numeroProjetos"
            placeholder="Quantidade de projetos"
            value={formData.numeroProjetos}
            onChange={handleChange}
            required
            min="1"
            style={{
              padding: '16px',
              borderRadius: '12px',
              border: errors.numeroProjetos ? '2px solid #ff4d4f' : '2px solid #eef0f7',
              width: '100%',
              fontSize: '16px',
              transition: 'all 0.3s ease',
              backgroundColor: '#f8fafc',
              marginBottom: '8px'
            }}
          />
          {errors.numeroProjetos && (
            <span style={{ color: '#ff4d4f', fontSize: '12px' }}>{errors.numeroProjetos}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step4Caracteristicas; 