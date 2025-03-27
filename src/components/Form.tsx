"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

export default function Form() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    instagram: "",
    tiktok: "",
    facebook: "",
    tipoFiesta: "",
    asistentes: "",
    fecha: "",
    ubicacion: "",
    tematica: "",
    contenido: "Sí",
    influencer: "",
    justificacion: "",
    beneficio: "",
    mayorEdad: false,
    consumo: false,
    autorizacion: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };


  const handleFocus = (field: keyof typeof form) => {
    if (!form[field]) {
      setForm((prev) => ({ ...prev, [field]: "@" }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({
          nombre: "",
          email: "",
          telefono: "",
          instagram: "",
          tiktok: "",
          facebook: "",
          tipoFiesta: "",
          asistentes: "",
          fecha: "",
          ubicacion: "",
          tematica: "",
          contenido: "Sí",
          influencer: "",
          justificacion: "",
          beneficio: "",
          mayorEdad: false,
          consumo: false,
          autorizacion: false,
        });
      } else throw new Error();
    } catch {
      alert("Hubo un error. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle =
    "w-full max-w-[600px] p-2 bg-zinc-800 text-white rounded mx-auto block";

  const selectStyle =
    "w-full max-w-[600px] p-2 bg-zinc-800 text-white rounded mx-auto block appearance-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-center">
      <h2 className="text-xl text-red-500 pb-2" style={{ fontFamily: "Frontage" }}>
        Información Personal
      </h2>
      <input type="text" name="nombre" placeholder="Nombre completo" onChange={handleChange} value={form.nombre} className={inputStyle} required />
      <input type="email" name="email" placeholder="Correo electrónico" onChange={handleChange} value={form.email} className={inputStyle} required />
      <input type="tel" name="telefono" placeholder="Número de teléfono" onChange={handleChange} value={form.telefono} className={inputStyle} required />
      <input type="text" name="instagram" placeholder="Instagram" onChange={handleChange} value={form.instagram} onFocus={() => handleFocus("instagram")} className={inputStyle} />
      <input type="text" name="tiktok" placeholder="TikTok" onChange={handleChange} value={form.tiktok} onFocus={() => handleFocus("tiktok")} className={inputStyle} />
      <input type="text" name="facebook" placeholder="Facebook" onChange={handleChange} value={form.facebook} onFocus={() => handleFocus("facebook")} className={inputStyle} />

      <h2 className="text-xl text-red-500 pb-2" style={{ fontFamily: "Frontage" }}>
        Detalles del evento
      </h2>
      <select name="tipoFiesta" onChange={handleChange} value={form.tipoFiesta} className={selectStyle} required>
        <option value="">Tipo de fiesta</option>
        <option value="Aire Libre">Aire Libre</option>
        <option value="Pool Party">Pool Party</option>
        <option value="Interiores">Interiores</option>
        <option value="Evento Formal">Evento Formal</option>
        <option value="Activación en Bar/Restaurante">Activación en Bar/Restaurante</option>
      </select>
      <input type="text" name="asistentes" placeholder="Cantidad estimada de asistentes" onChange={handleChange} value={form.asistentes} className={inputStyle} required />
      <input type="date" name="fecha" onChange={handleChange} value={form.fecha} className={inputStyle} required />
      <input type="text" name="ubicacion" placeholder="Ubicación del evento" onChange={handleChange} value={form.ubicacion} className={inputStyle} required />
      <input type="text" name="tematica" placeholder="Temática (opcional)" onChange={handleChange} value={form.tematica} className={inputStyle} />

      <h2 className="text-xl text-red-500 pb-2" style={{ fontFamily: "Frontage" }}>
        Compromiso con la marca
      </h2>
      <select name="contenido" onChange={handleChange} value={form.contenido} className={selectStyle} required>
        <option value="Sí">Disponibilidad para generar contenido: Sí</option>
        <option value="No">Disponibilidad para generar contenido: No</option>
      </select>
      <input type="text" name="influencer" placeholder="¿Eres influencer o embajador?" onChange={handleChange} value={form.influencer} className={inputStyle} />

      <h2 className="text-xl text-red-500 pb-2" style={{ fontFamily: "Frontage" }}>
        Justificación del Patrocinio
      </h2>
      <textarea name="justificacion" placeholder="¿Por qué Mil Diablos debería patrocinar este evento?" onChange={handleChange} value={form.justificacion} className={`${inputStyle} resize-none`} rows={3} required />
      <textarea name="beneficio" placeholder="¿Cómo beneficiará este evento a la marca?" onChange={handleChange} value={form.beneficio} className={`${inputStyle} resize-none`} rows={3} required />

      <h2 className="text-xl text-red-500 pb-2" style={{ fontFamily: "Frontage" }}>
        Términos y Condiciones
      </h2>
      <div className="flex flex-col items-start gap-2 max-w-[600px] mx-auto text-sm text-left" style={{ fontFamily: "Frontage" }}>
        <label className="flex items-center gap-2">
          <input type="checkbox" name="mayorEdad" checked={form.mayorEdad} onChange={handleChange} required />
          Confirmo ser mayor de edad
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" name="consumo" checked={form.consumo} onChange={handleChange} required />
          Acepto el consumo responsable
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" name="autorizacion" checked={form.autorizacion} onChange={handleChange} required />
          Autorizo uso de imagen para contenido promocional
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full max-w-[600px] mx-auto block py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded"
        style={{ fontFamily: "Frontage" }}
      >
        {loading ? "Enviando..." : "Enviar Solicitud"}
      </button>

      {success && <p className="text-green-400 mt-2">¡Solicitud enviada con éxito!</p>}
    </form>
  );
}
