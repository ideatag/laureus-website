import "./Annual.css";
import "../team/about.css";
import Image from "next/image";
import authorimage from "./paul_schif_tomsolo.jpg";

const Jahresbereicht = () => (
  <main>
    <div className="annualreport-body-style">
      <header className="about-above" />
      <div className="annualreport-container">
        <div className="annualreport-image">
          <Image
            src={authorimage}
            width={400}
            height={400}
            alt="Paul Schif Tomsolo"
          />
        </div>
        <div className="annualreport-text">
          <h2>JAHRESBERICHT</h2>
          <p className="annualreport-bold-text">
            Liebe Freundinnen und Freunde, liebe Unterstützerinnen und
            Unterstützer von Laureus Sport for Good,
          </p>
          <p>
            in was für einer Gesellschaft wollen wir leben? Welche Werte geben
            wir unseren Kindern weiter? Und wie schaffen wir es, die
            Herausforderungen unserer Zeit zu meistern? Diese persönlichen
            Gedanken sind auch Kern der Arbeit von Laureus Sport for Good. Mit
            unserer Arbeit setzen wir uns Tag für Tag dafür ein, dass Kinder in
            Deutschland und Österreich mithilfe von Sport in einem gesunden und
            sicheren Umfeld zu wissbegierigen jungen Menschen heranwachsen, die
            aktiv daran mitarbeiten, unsere Gesellschaften in der Zukunft zu
            stärken und zu gestalten.
          </p>
          <p>
            Bei Laureus Sport for Good, wie auch bei vielen unserer Partner, ist
            dabei das Thema Nachhaltigkeit von besonderer Bedeutung. Der
            Dreiklang zwischen ökonomischer, ökologischer und sozialer
            Verantwortung ist sozusagen der Triathlon unserer Arbeit. Die
            Förderung von Kindern und Jugendlichen, die von Haus aus nicht die
            Unterstützung bekommen, die sie bräuchten, um ihr Potenzial zu
            entfalten, ist unser Herzensanliegen. Aber nicht rein aus
            mildtätiger Motivation, sondern weil wir davon überzeugt sind, dass
            dies eine der wichtigsten Investitionen in die Zukunft ist.
          </p>
          <p>
            Durch die Förderung von 16 verschiedenen Programmen hat Laureus
            Sport for Good mit Ihrer Unterstützung dazu beitragen können, dass
            mehr als 9.000 Kinder und Jugendliche weiterhin in Bewegung
            geblieben sind – im körperlichen Sinne, aber vor allem auch in ihrer
            Persönlichkeitsentwicklung. Sie hatten das Glück, Teil von
            Programmen zu sein, die schon vor der Pandemie die Resilienz der
            Kinder stärkten, also die Fähigkeit, bei Unsicherheiten
            handlungsfähig zu bleiben – und Unsicherheiten bot das Jahr 2021
            genug.
          </p>
          <p>
            Somit sind wir sehr froh, bei unserer Arbeit verlässliche
            Unterstützerinnen und Unterstützer an der Seite zu haben, die diese
            Auffassung teilen. Die Herausforderungen des zweiten „Corona-Jahres“
            hat von viele Unternehmen und auch Laureus Sport for Good viel
            Flexibilität und Agilität gefordert – und doch sind auch Krisenjahre
            immer ein Katalysator für neue Ideen bei den Programmen, neue
            Entwicklungen bei Finanzierungsstrategien und neue Partnerschaften,
            wie die mit den Maloja Pushbikers. Über all dies möchten wir Ihnen
            in unserem Jahresbericht 2021 berichten.
          </p>
          <p>
            An dieser Stelle möchte ich noch einmal herzlich Danke sagen an
            unser langjähriges Vorstandsmitglied Dr. Carsten Oder. 2021 hat er
            sein Amt an seinen Nachfolger Jörg Heinermann, Leiter Mercedes-Benz
            Vertrieb Deutschland, übergeben. Wir sind froh, mit der Nachfolge
            die Kontinuität in der engen Beziehung zu Mercedes-Benz fortführen
            zu können und die Partnerschaft in Zukunft noch auszubauen.
          </p>
          <p>
            2021 war ein Jahr in dem vieles wieder ging und vieles dann (doch)
            nicht. Ein Jahr in dem mir immer wieder deutlich wurde, wie
            zerbrechlich unsere Gesellschaft doch sein kann und wie wichtig es
            ist, kontinuierlich und im Team mit allen Stakeholdern daran zu
            arbeiten, dass das System „Gesellschaft“ funktioniert.
            Selbstwirksamkeit, die Überzeugung, dass jeder wichtig ist und einen
            Unterschied machen kann, diese Kompetenz vermitteln viele unserer
            Förderprogramme an ihre Teilnehmenden. Denn wir alle können unseren
            Beitrag dazu leisten, die Zukunft nachhaltig zu gestalten. Was ist
            Ihrer?
          </p>
          <p className="annualreport-bold-text">
            Paul Schif
            <br />
            Geschäftsführer Laureus Sport for Good Deutschland, Österreich
          </p>
        </div>
      </div>
    </div>
  </main>
);

export default Jahresbereicht;
