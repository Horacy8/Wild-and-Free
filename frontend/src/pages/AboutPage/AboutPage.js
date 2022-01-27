import React from "react";
import Plant from "../../components/Plant/Plant";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-page__item">
        <div className="about-page__text">
          <h4>NARAVE</h4>
          <p>
            to Polska marka założona w niewielkim mieście znanym jako{" "}
            <span className="about-page__span--bold">Perła Renesansu</span>. Tutaj skupia
            się cała produkcja począwszy od projektów, przez szycie, na sprzedaży kończąc.
            A właściwie nie kończąc, bo ... właśnie w tym miejscu nasza odzież rozpoczyna
            nowe życie w Twoich rękach.
          </p>
          <h4>Dlaczego „NARAVE" ?</h4>
          <p>
            NARAVE znaczy <span className="about-page__span--bold">Natura</span>, ponieważ
            głównym założeniem firmy jest tworzenie modnych, praktycznych i jak
            najbardziej naturalnych kolekcji ubrań. Marka powstała jako odpowiedź na
            rosnącą świadomość społeczeństwa w kwestii naturalnych, wolnych od substancji
            szkodliwych i wysokogatunkowych produktów oraz potrzebę dbania o środowisko i
            przestrzeganie zasad etyki.
          </p>
        </div>
        <img src="/img/about1.jpeg" alt="Opis firmy" />
      </div>
      <div className="about-page__item">
        <div className="about-page__text">
          <h4>Materiały</h4>
          <p>
            Chcemy by nasze ubrania nosiły się komfortowo i służyły Ci jak najdłużej,
            dlatego przykładamy ogromną wagę do materiałów, z których powstają. Materiały
            używane do produkcji pochodzą od sprawdzonych polskich producentów tkanin.
            Odznaczają się one bardzo dobrym składem, jakością i co ważne, posiadają
            certyfikaty będące wiodącym znakiem bezpieczeństwa wyrobów włókienniczych (
            <span className="about-page__span--bold">OEKO-TEX Standard 100</span>).
            Materiały, z których korzystamy:
          </p>
          <div className="about-page__material-list">
            <h5>Bawełna organiczna</h5>
            <ul className="about-page__list">
              <li className="about-page__list-item">
                <p>
                  przy jej produkcji stosuje się wyłącznie naturalne metody i substancje,
                  dzięki czemu cały proces jest ekologiczny
                </p>
              </li>
              <li className="about-page__list-item">
                <p>
                  uprawia się ją na plantacjach bez użycia pestycydów, środków
                  owadobójczych i GMO - genetycznie modyfikowanych organizmów
                </p>
              </li>
              <li className="about-page__list-item">
                <p>
                  do uprawy takiej bawełny wykorzystuje się wyłącznie substancje
                  podlegające biodegradacji, m.in.: kwas cytrynowy, owadobójczy czosnek i
                  papryczki chilli, lucernę czy pożyteczne owady, a więc żadne szkodliwe
                  substancje nie przedostają się do obiegu wody w przyrodzie
                </p>
              </li>
              <li className="about-page__list-item">
                <p>
                  przy jej produkcji ogranicza się eksploatację zasobów wody - uprawy
                  bawełny organicznej w{" "}
                  <span className="about-page__span--bold">80%</span> są podlewane
                  deszczówką
                </p>
              </li>
            </ul>
            <h5>Bambus</h5>
            <ul className="about-page__list">
              <li className="about-page__list-item">
                <p>
                  bambus jest jedną z najbardziej wydajnych roślin, ponieważ jest źródłem
                  szybko odnawialnym - rośnie nawet do ponad 1 metra w ciągu doby
                </p>
              </li>
              <li className="about-page__list-item">
                <p>
                  roślina jest odporna na grzyby, pasożyty i bakterie, więc nie ma
                  potrzeby przy jej uprawie stosować chemicznych oprysków czy pestycydów
                </p>
              </li>
              <li className="about-page__list-item">
                <p>
                  jako materiał również posiada właściwości{" "}
                  <span className="about-page__span--bold">antybakteryjne</span> i{" "}
                  <span className="about-page__span--bold">bakteriostatyczne</span> - jest
                  więc idealny dla skóry wrażliwej, osób z alergiami oraz AZS
                </p>
              </li>
              <li className="about-page__list-item">
                <p>
                  ubrania z bambusa mają 3-4 krotnie wyższą higroskopijność niż bawełna,
                  dlatego wykazują się dużą chłonnością wilgoci i szybkim schnięciem
                </p>
              </li>
              <li className="about-page__list-item">
                <p>
                  w chłodne dni tkanina daje uczucie ciepła, natomiast w upalne przyjemnie
                  chłodzi
                </p>
              </li>
              <li className="about-page__list-item">
                <p>
                  włókna bambusowe są w{" "}
                  <span className="about-page__span--bold">100% biodegradowalne</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <img src="/img/about2.jpg" alt="Opis firmy" />
      </div>
      <div className="about-page__item">
        <div className="about-page__text">
          <h4>Produkcja</h4>
          <p>
            Wszystkie ubrania kroimy i szyjemy lokalnie u krawcowej. Każdy szczegół musi
            być dopracowany do perfekcji, dlatego każdej rzeczy z osobna poświęcamy dużo
            czasu i uwagi. Kolekcje, które tworzymy w myśl{" "}
            <span className="about-page__span--bold">Slow Fashion</span> są wielosezonowe
            i uniwersalne, ponieważ nie opieramy się na chwilowych trendach. Ponadto nie
            lubimy marnotrawstwa i kierujemy się zasadą{" "}
            <span className="about-page__span--bold">Less Waste</span> - szablony na
            materiałach układamy tak, by każdy metr wykorzystać w pełni, a z
            nieuniknionych ścinków tworzymy przydatne akcesoria (skarpetki, opaski na
            włosy i gumki scrunchie, torby, saszetki/kosmetyczki) lub wykorzystujemy je
            jako ozdobne detale na ubraniach.
          </p>
        </div>
        <img src="/img/about3.jpg" alt="Opis firmy" />
      </div>
      <div className="about-page__item">
        <div className="about-page__text">
          <h4>Dodatki</h4>
          <p>
            Elementy, których używamy przy pakowaniu zamówień dobierane są w taki sposób,
            żeby jak najbardziej odpowiadały naturalnym i ekologicznym założeniom marki.
          </p>
          <ul className="about-page__list">
            <li className="about-page__list-item">
              <p>
                Kartki z podziękowaniami wykonane są z pięknego papieru SH Recycling w
                naturalnym, niebarwionym kolorze, który jest w{" "}
                <span className="about-page__span--bold">100% z surowców wtórnych</span>.
              </p>
            </li>
            <li className="about-page__list-item">
              <p>
                Naklejki posiadają{" "}
                <span className="about-page__span--bold">certyfikat FSC</span> i są
                częściowo wykonane z papieru recyklingowego.
              </p>
            </li>
            <li className="about-page__list-item">
              <p>
                Sznurek lniany, który używamy przy metkach jest dużo bardziej ekologiczny
                w porównaniu do tradycyjnych sznurków bawełnianych. Do jego produkcji
                potrzeba zdecydowanie mniej wody, a więc ogranicza się eksploatację
                zasobów naturalnych.
              </p>
            </li>
          </ul>
        </div>
        <img src="/img/about4.jpg" alt="Opis firmy" />
      </div>
      <div className="about-page__item">
        <div className="about-page__text">
          <p>
            Skoro tu trafiłaś z pewnością podzielasz nasze zamiłowanie do etycznej mody i
            natury, dlatego zachęcamy Cię byś została na dłużej i dołączyła do naszego
            teamu <span className="about-page__span--hash">#naravepl</span>
          </p>
          <p className="about-page__text--hug">Ściskamy,</p>
          <p className="about-page__text--narave">Zespół Narave</p>
          <Plant />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
