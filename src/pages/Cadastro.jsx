import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Step1Empresa from '../components/cadastro/Step1Empresa';
import Step2Responsavel from '../components/cadastro/Step2Responsavel';
import Step3Conta from '../components/cadastro/Step3Conta';
import Step4Caracteristicas from '../components/cadastro/Step4Caracteristicas';
import { validateCNPJ, validateEmail, validatePassword } from '../utils/validations';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';

const Cadastro = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        nomeEmpresa: '',
        nomeResponsavel: '',
        cnpj: '',
        subdomain: '',
        email: '',
        //senha: '',
        setor: '',
        porte: '',
        numeroProjetos: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        // Limpa o erro do campo quando ele é alterado
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const validateStep = () => {
        const newErrors = {};

        switch (currentStep) {
            case 1:
                if (!formData.nomeEmpresa) {
                    newErrors.nomeEmpresa = 'Nome da empresa é obrigatório';
                }
                if (!formData.cnpj) {
                    newErrors.cnpj = 'CNPJ é obrigatório';
                } else if (!validateCNPJ(formData.cnpj)) {
                    newErrors.cnpj = 'CNPJ inválido';
                }
                break;
            case 2:
                if (!formData.nomeResponsavel) {
                    newErrors.nomeResponsavel = 'Nome do responsável é obrigatório';
                }
                if (!formData.email) {
                    newErrors.email = 'Email é obrigatório';
                } else if (!validateEmail(formData.email)) {
                    newErrors.email = 'Email inválido';
                }
                break;
            case 3:
                if (!formData.subdomain) {
                    newErrors.subdomain = 'Subdomínio é obrigatório';
                } else if (formData.subdomain.length < 3) {
                    newErrors.subdomain = 'Subdomínio deve ter pelo menos 3 caracteres';
                } else if (!/^[a-z0-9-]+$/.test(formData.subdomain)) {
                    newErrors.subdomain = 'Subdomínio deve conter apenas letras minúsculas, números e hífen';
                }
                if (false) {
                    newErrors.senha = 'Senha é obrigatória';
                } else if (false) {
                    newErrors.senha = 'A senha deve ter no mínimo 8 caracteres, incluindo letras maiúsculas, minúsculas e números';
                }
                break;
            case 4:
                if (!formData.setor) {
                    newErrors.setor = 'Setor é obrigatório';
                }
                if (!formData.porte) {
                    newErrors.porte = 'Porte da empresa é obrigatório';
                }
                if (!formData.numeroProjetos) {
                    newErrors.numeroProjetos = 'Número de projetos é obrigatório';
                } else if (parseInt(formData.numeroProjetos) < 1) {
                    newErrors.numeroProjetos = 'Número de projetos deve ser maior que zero';
                }
                break;
            default:
                break;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        const isValid = validateStep();
        if (isValid) {
            setCurrentStep(prev => prev + 1);
            window.scrollTo(0, 0);
        } else {
            // Adiciona um feedback visual quando houver erros
            const errorMessage = document.createElement('div');
            errorMessage.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #ff4d4f;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        font-size: 14px;
      `;
            errorMessage.textContent = 'Por favor, corrija os erros antes de prosseguir';
            document.body.appendChild(errorMessage);

            // Remove a mensagem após 2 segundos
            setTimeout(() => {
                document.body.removeChild(errorMessage);
            }, 2000);
        }
    };

    const prevStep = () => {
        setCurrentStep(prev => prev - 1);
        window.scrollTo(0, 0);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepara os parâmetros para o template do email
        const templateParams = {
            to_name: formData.nomeResponsavel,
            empresa: formData.nomeEmpresa,
            cnpj: formData.cnpj,
            email: formData.email,
            subdomain: formData.subdomain,
            setor: formData.setor,
            porte: formData.porte,
            projetos: formData.numeroProjetos,
            message: `Nova solicitação de cadastro:
                Empresa: ${formData.nomeEmpresa}
                CNPJ: ${formData.cnpj}
                Responsável: ${formData.nomeResponsavel}
                Email: ${formData.email}
                Subdomínio: ${formData.subdomain}
                Setor: ${formData.setor}
                Porte: ${formData.porte}
                Número de Projetos: ${formData.numeroProjetos}`
        };

        try {
            // Envia o email usando EmailJS
            await emailjs.send(
                'service_qhsvgw6',
                'template_kz9nnbc',
                templateParams,
                '4VGvIndVHSvfqcmPm'
            );

            console.log('Email enviado com sucesso!');

            // Adiciona um feedback visual quando houver erros
            const errorMessage = document.createElement('div');
            errorMessage.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #ff4d4f;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        font-size: 14px;
      `;
            errorMessage.textContent = 'Ocorreu um erro no cadastro. Por favor, tente novamente mais tarde.';
            document.body.appendChild(errorMessage);

            // Remove a mensagem após 4 segundos
            setTimeout(() => {
                document.body.removeChild(errorMessage);
            }, 4000);
            // Limpa o formulário
            setFormData({
                nomeEmpresa: '',
                nomeResponsavel: '',
                cnpj: '',
                subdomain: '',
                email: '',
                setor: '',
                porte: '',
                numeroProjetos: ''
            });

            // Redireciona para a página inicial após mostrar a mensagem
            setTimeout(() => {
                navigate('/');
            }, 2000);

        } catch (error) {
            console.error('Erro ao enviar email:', error);

            // Cria e mostra a mensagem de erro
            const errorMessage = document.createElement('div');
            errorMessage.style.cssText = `
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background-color: #ff4d4f;
                color: white;
                padding: 16px 32px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                z-index: 1000;
                font-size: 16px;
                text-align: center;
                max-width: 90%;
                width: 400px;
            `;
            errorMessage.innerHTML = `
                <div style="margin-bottom: 8px; font-weight: 600;">Ops! Algo deu errado</div>
                <div style="font-size: 14px;">
                    Não se preocupe, seus dados foram salvos.<br/>
                    Por favor, tente novamente mais tarde ou entre em contato com nosso suporte.
                </div>
            `;
            document.body.appendChild(errorMessage);

            // Remove a mensagem após 5 segundos
            setTimeout(() => {
                if (document.body.contains(errorMessage)) {
                    document.body.removeChild(errorMessage);
                }
            }, 5000);

            // Redireciona para a página inicial mesmo com erro
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
    };

    const cardStyle = {
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        padding: '40px',
        margin: '20px auto',
        maxWidth: '1200px',
        minWidth: '800px',
        minHeight: '600px',
        position: 'relative',
        overflow: 'hidden'
    };

    const inputStyle = {
        padding: '16px',
        borderRadius: '12px',
        border: '2px solid #eef0f7',
        width: '100%',
        fontSize: '16px',
        transition: 'all 0.3s ease',
        backgroundColor: '#f8fafc',
        marginBottom: '8px'
    };

    const inputFocusStyle = {
        borderColor: '#4F9CF9',
        boxShadow: '0 0 0 3px rgba(79, 156, 249, 0.1)',
        outline: 'none'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '8px',
        color: '#4a5568',
        fontSize: '14px',
        fontWeight: '500'
    };

    const sectionTitleStyle = {
        color: '#0B1D41',
        fontSize: '24px',
        fontWeight: '600',
        marginBottom: '24px',
        paddingBottom: '16px',
        borderBottom: '2px solid #eef0f7'
    };

    const stepIndicatorStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '40px',
        gap: '8px'
    };

    const stepDotStyle = (active, completed) => ({
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: completed ? '#4F9CF9' : active ? '#4F9CF9' : '#eef0f7',
        border: completed ? 'none' : active ? '3px solid #4F9CF9' : 'none',
        transition: 'all 0.3s ease'
    });

    const buttonStyle = {
        padding: '16px 32px',
        borderRadius: '12px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        border: 'none',
        margin: '0 8px'
    };

    const nextButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#0B1D41',
        color: '#ffffff',
        boxShadow: '0 4px 6px rgba(79, 156, 249, 0.2)'
    };

    const prevButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#f8fafc',
        color: '#4a5568',
        border: '2px solid #eef0f7'
    };

    const renderStepIndicator = () => (
        <div style={stepIndicatorStyle}>
            {[1, 2, 3, 4].map((step) => (
                <div
                    key={step}
                    style={stepDotStyle(currentStep === step, currentStep > step)}
                    title={`Etapa ${step}`}
                />
            ))}
        </div>
    );

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return <Step1Empresa formData={formData} handleChange={handleChange} errors={errors} setErrors={setErrors} />;
            case 2:
                return <Step2Responsavel formData={formData} handleChange={handleChange} errors={errors} setErrors={setErrors} />;
            case 3:
                return <Step3Conta formData={formData} handleChange={handleChange} errors={errors} setErrors={setErrors} />;
            case 4:
                return <Step4Caracteristicas formData={formData} handleChange={handleChange} errors={errors} />;
            default:
                return null;
        }
    };

    return (
        <div style={{ backgroundColor: '#0B1D41' }}>
            <Navbar />
            <div className="cadastro-area" style={{
                minHeight: '100%',
                padding: '40px 20px',
                backgroundColor: '#0B1D41',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={cardStyle}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '300px',
                        height: '300px',
                        background: 'linear-gradient(45deg, rgba(33, 119, 224, 0.1), rgba(255, 228, 146, 0.1))',
                        borderRadius: '50%',
                        transform: 'translate(30%, -30%)',
                        zIndex: 0
                    }} />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div className="text-center mb-5">
                            <h2 className='text-blue-500' style={{
                                fontSize: '32px',
                                fontWeight: '700',
                                marginBottom: '12px'
                            }}>
                                Cadastro da Empresa
                            </h2>
                            <p style={{
                                color: '#64748b',
                                fontSize: '16px',
                                maxWidth: '500px',
                                margin: '0 auto'
                            }}>
                                {currentStep === 1 && "Comece informando os dados básicos da sua empresa"}
                                {currentStep === 2 && "Agora, vamos cadastrar as informações do responsável"}
                                {currentStep === 3 && "Configure as informações de acesso ao sistema"}
                                {currentStep === 4 && "Por fim, defina as características da sua empresa"}
                            </p>
                        </div>

                        {renderStepIndicator()}

                        <form onSubmit={handleSubmit}>
                            {renderStepContent()}

                            {errors.submit && (
                                <div className="text-red-500 text-sm mt-2 text-center">
                                    {errors.submit}
                                </div>
                            )}

                            <div className="text-center mt-5">
                                {currentStep > 1 && (
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        style={prevButtonStyle}
                                        onMouseOver={(e) => {
                                            e.target.style.backgroundColor = '#eef0f7';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.backgroundColor = '#f8fafc';
                                        }}
                                    >
                                        Voltar
                                    </button>
                                )}

                                {currentStep < 4 ? (
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        style={nextButtonStyle}
                                        onMouseOver={(e) => {
                                            e.target.style.backgroundColor = '#3d8de0';
                                            e.target.style.transform = 'translateY(-2px)';
                                            e.target.style.boxShadow = '0 6px 8px rgba(79, 156, 249, 0.3)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.backgroundColor = '#0B1D41';
                                            e.target.style.transform = 'translateY(0)';
                                            e.target.style.boxShadow = '0 4px 6px rgba(79, 156, 249, 0.2)';
                                        }}
                                    >
                                        Próximo
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        style={nextButtonStyle}
                                        onMouseOver={(e) => {
                                            e.target.style.backgroundColor = '#3d8de0';
                                            e.target.style.transform = 'translateY(-2px)';
                                            e.target.style.boxShadow = '0 6px 8px rgba(79, 156, 249, 0.3)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.backgroundColor = '#4F9CF9';
                                            e.target.style.transform = 'translateY(0)';
                                            e.target.style.boxShadow = '0 4px 6px rgba(79, 156, 249, 0.2)';
                                        }}
                                    >
                                        Finalizar Cadastro
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <br />
            <>
            <div className="backgrond mt-12 w-full" id="footer">
              <Footer />
            </div>
          </>
        </div>
    );
};

export default Cadastro; 