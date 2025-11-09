import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const supabaseUrl = "https://vdelsauscerfthldiviv.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkZWxzYXVzY2VyZnRobGRpdml2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2MjA5OTksImV4cCI6MjA3ODE5Njk5OX0.REAhs6mCKYe1EsZS5u8wt36rEg1TPxI8wW2Xdrg3QZ8";

const supabase = createClient(supabaseUrl, supabaseKey);

console.log("✅ Supabase conectado correctamente");

document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const Telefono = document.getElementById("telefono").value;
    const Edad = document.getElementById("edad").value;
    const Genero = document.getElementById("genero").value;
    const Frecuencia = document.getElementById("frecuencia").value;
    const Momento = document.getElementById("momento").value;
    const Conciertos = document.getElementById("conciertos").value;
    const Grupo = document.getElementById("grupo").value;

    const { data, error } = await supabase
        .from("Encuesta")
        .insert([{ Telefono, Edad, Genero, Frecuencia, Momento, Conciertos, Grupo }]);

    if (error) {
        console.error("❌ Error al guardar:", error);
        alert("Hubo un problema al enviar tus datos 😢");
        return;
    }

    alert("🎉 ¡Gracias! Tu respuesta fue registrada correctamente!");
    e.target.reset();
});
