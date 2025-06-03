import React from 'react';
import { validateEmail } from '../../utils/validations';

const Step2Responsavel = ({ formData, handleChange, errors, setErrors }) => {
  const handleEmailChange = (e) => {
    const { value } = e.target;
    handleChange(e);
    
    if (value) {
      const isValid = validateEmail(value);
      setErrors(prev => ({
        ...prev,
        email: isValid ? '' : 'Email inválido'
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
        Informações do Responsável
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
            Nome do Responsável
          </label>
          <input
            type="text"
            name="nomeResponsavel"
            placeholder="Digite o nome completo"
            value={formData.nomeResponsavel}
            onChange={handleChange}
            required
            style={{
              padding: '16px',
              borderRadius: '12px',
              border: errors.nomeResponsavel ? '2px solid #ff4d4f' : '2px solid #eef0f7',
              width: '100%',
              fontSize: '16px',
              transition: 'all 0.3s ease',
              backgroundColor: '#f8fafc',
              marginBottom: '8px'
            }}
          />
          {errors.nomeResponsavel && (
            <span style={{ color: '#ff4d4f', fontSize: '12px' }}>{errors.nomeResponsavel}</span>
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
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={handleEmailChange}
            required
            style={{
              padding: '16px',
              borderRadius: '12px',
              border: errors.email ? '2px solid #ff4d4f' : '2px solid #eef0f7',
              width: '100%',
              fontSize: '16px',
              transition: 'all 0.3s ease',
              backgroundColor: '#f8fafc',
              marginBottom: '8px'
            }}
          />
          {errors.email && (
            <span style={{ color: '#ff4d4f', fontSize: '12px' }}>{errors.email}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step2Responsavel; 