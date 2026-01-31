import S from './sejaVoluntario.module.scss'
import Voluntario from '../../components/cards/cardVoluntario'

export default function SejaVoluntario() {
  return (
    <main>
      <section className={S.voluntario}>
        <h2>Seja Voluntário</h2>
        <p>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>
      </section>

      <Voluntario />
      
      <section className={S.formulario}>
        <article className={S.containerForm}>
          <h4>Inscrição para Voluntários</h4>

          <form action="">
            <h5>Dados Pessoais</h5>
            <div className={S.twoColumn}>
              <input type="text" name="nome" placeholder="Seu Nome *" required />
              <input type="tel" name="telefone" placeholder="Seu Telefone *" required />
            </div>

            <input type="email" name="email" placeholder="Seu E-mail *" required />

            <h5>Mensagem Adicional</h5>

            <textarea name="mensagem" placeholder="Conte-nos porque você quer ser voluntario..." ></textarea>

            <div className={S.bottomForm}>
              <p>Entraremos em contato para mais informações</p>

              <button type="button" name="button">Enviar Inscrição</button>
            </div>
          </form>
        </article>
      </section>
    </main>
  )
}
