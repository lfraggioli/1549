"use client";

export function ContactForm() {
  async function handleSubmit(e: any) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "b90fd834-35c3-4b53-8ff7-b3cf39144dac",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <div>
      <form
        className="flex bg-gradient-to-bl from-transparent to-indigo-300/20 shadow-lg border-1 border-gray-600/10 px-14 py-10 rounded-lg flex-col gap-4 w-full"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="subject" value="Nuevo mensaje de cliente" />
        <div className="w-11/12 flex flex-col gap-4">
          {" "}
          <div className="flex flex-col gap-1 w-1/2">
            <label className="px-2 text-xl" htmlFor="name">
              Nombre:
            </label>
            <input
              className="w-[400px] px-2 py-2 text-lg rounded-lg"
              type="text"
              name="name"
              required
              placeholder="¿Cuál es tu nombre?"
            />
          </div>
          <div className="flex flex-col gap-1 w-[400px]">
            <label className="px-2 text-xl " htmlFor="email">
              Correo electrónico:
            </label>
            <input
              className="w-[400px] px-2 py-2 text-lg rounded-lg"
              type="email"
              name="email"
              required
              placeholder="correo@mail.com"
            />
          </div>
          <div className="flex flex-col gap-1 w-[400px]">
            <label className="px-2 text-xl " htmlFor="message">
              Tu consulta:
            </label>
            <textarea
              className="w-[400px] px-2 rounded-lg"
              name="message"
              required
              rows={4}
              placeholder="Escriba su consulta..."
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="w-2/5 py-2 rounded-full text-slate-100 hover:text-white hover:font-bold text-xl font-semibold hover:bg-gradient-to-tr bg-[#444cb9] mx-auto hover:from-[#653ab4] hover:to-[#4272bb]  hover:scale-105 duration-300 transition-all ease-in-out shadow-md"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
