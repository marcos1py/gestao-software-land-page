import React from 'react';
import { validateCNPJ, formatCNPJ } from '../../utils/validations';

const Step1Empresa = ({ formData, handleChange, errors, setErrors }) => {
  const handleCNPJChange = (e) => {
    const { value } = e.target;
    const formattedValue = formatCNPJ(value);
    
    // Atualiza o valor formatado
    handleChange({
      target: {
        name: 'cnpj',
        value: formattedValue
      }
    });

    // Valida o CNPJ
    if (value.length === 18) { // CNPJ formatado tem 18 caracteres
      const isValid = validateCNPJ(value);
      setErrors(prev => ({
        ...prev,
        cnpj: isValid ? '' : 'CNPJ inválido'
      }));
    }
  };

  return (
    <div>
      <h3 className='text-blue-500' style={{
        fontSize: '24px',
        fontWeight: '600',
        marginBottom: '24px',
        paddingBottom: '16px',
        borderBottom: '2px solid #eef0f7'
      }}>
        Informações da Empresa
      </h3>
      <div className="row">
        <div className="col-md-6 mb-4">
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#4a5568',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            Nome da Empresa
          </label>
          <input
            type="text"
            name="nomeEmpresa"
            placeholder="Digite o nome da empresa"
            value={formData.nomeEmpresa}
            onChange={handleChange}
            required
            style={{
              padding: '16px',
              borderRadius: '12px',
              border: errors.nomeEmpresa ? '2px solid #ff4d4f' : '2px solid #eef0f7',
              width: '100%',
              fontSize: '16px',
              transition: 'all 0.3s ease',
              backgroundColor: '#f8fafc',
              marginBottom: '8px'
            }}
          />
          {errors.nomeEmpresa && (
            <span style={{ color: '#ff4d4f', fontSize: '12px' }}>{errors.nomeEmpresa}</span>
          )}
        </div>
        <div className="col-md-6 mb-4">
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#4a5568',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            CNPJ
          </label>
          <input
            type="text"
            name="cnpj"
            placeholder="00.000.000/0000-00"
            value={formData.cnpj}
            onChange={handleCNPJChange}
            required
            maxLength={18}
            style={{
              padding: '16px',
              borderRadius: '12px',
              border: errors.cnpj ? '2px solid #ff4d4f' : '2px solid #eef0f7',
              width: '100%',
              fontSize: '16px',
              transition: 'all 0.3s ease',
              backgroundColor: '#f8fafc',
              marginBottom: '8px'
            }}
          />
          {errors.cnpj && (
            <span style={{ color: '#ff4d4f', fontSize: '12px' }}>{errors.cnpj}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step1Empresa; 