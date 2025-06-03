import React from "react";

const Step3Conta = ({ formData, handleChange, errors }) => {
    return (
        <div>
            <h2 style={sectionTitleStyle}>Configurações da Conta</h2>
            <p className="text-gray-600 mb-6">
                Escolha um subdomínio único para acessar sua área administrativa.
            </p>

            <div className="space-y-4">
                <div>
                    <label htmlFor="subdomain" style={labelStyle}>
                        Subdomínio
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            id="subdomain"
                            name="subdomain"
                            value={formData.subdomain}
                            onChange={handleChange}
                            placeholder="exemplo"
                            required
                            style={inputStyle}
                            className="pr-24"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                            .seudominio.com
                        </span>
                    </div>
                    {errors.subdomain && (
                        <p className="text-red-500 text-sm mt-1">{errors.subdomain}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

const sectionTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#0B1D41",
    marginBottom: "1rem"
};

const labelStyle = {
    display: "block",
    marginBottom: "0.5rem",
    color: "#374151",
    fontWeight: "500"
};

const inputStyle = {
    width: "100%",
    padding: "0.75rem",
    borderRadius: "0.5rem",
    border: "1px solid #E5E7EB",
    backgroundColor: "white",
    transition: "all 0.3s ease",
    outline: "none"
};

export default Step3Conta; 