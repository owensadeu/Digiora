import Image from "next/image";
import 'remixicon/fonts/remixicon.css'

export default function Home() {
  return (
    <div className="m-5 p-3">

      {/* HEADER */}

      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src="" alt="" width={30} height={30} />
          <h1 className="font-black">DIGIORA</h1>
        </div>
        <ul className="flex gap-5 pr-30 ">
          <a href=""><li className="font-normal"> Boutique </li></a>
          <a href=""><li className="font-normal"> Categorie </li></a>
          <a href=""><li className="font-normal"> A propos </li></a>
          <a href=""><li className="font-normal"> Contact </li></a>
        </ul>
        <a href="" className="bg-blue-900 p-3 rounded-full"><i className="ri-shopping-cart-line text-2xl text-white"></i></a>
      </div>

    {/* HERO SECTION */}

    <div className="mt-35">
      <h1 className="text-center text-4xl font-extrabold"> <span className="text-blue-600">Developper</span> vos ambitions, <br /> <span className="text-blue-600"> Ameliorer </span> vos idees </h1>
      <p className="text-center text-lg mt-5 font-medium"> Des E-books de qualités, formations pratiques <br /> accessibles instantanément. </p>
      <div className=" mt-10 flex gap-10 justify-center">
        <a href="#" className="bg-blue-900 text-white p-5 font-medium"> Decouvrer nos offres</a>
        <a href="#" className="p-5 font-medium text-blue-900 bg-blue-50"> En savoir plus</a>
      </div>
    </div>

    {/* SECTION 1*/}

    <div className="mt-20 bg-slate-50 p-10">
      <div>
        <h2 className="text-center text-3xl font-bold"> Nos Offres </h2>
        <p className="text-center text-lg mt-5 font-medium"> Découvrez notre gamme complète de livres pour vous <br /> accompagner dans votre développement. </p>
        <div className="mt-10 grid grid-cols-2 gap-5">
          <div className="bg-blue-50 p-5">
            <img src="/Meta.jpg" width={300} height={100} alt="logo_Meta" />
            <h2 className="pt-5 text-2xl font-bold"> Meta Ads </h2>
            <p className="pt-3"> Apprenez à créer des publicités efficaces sur les plateformes Meta (Facebook, Instagram) pour atteindre votre public cible et maximiser vos résultats. </p>
            <div className="mt-5">
              <a href="" className="bg-blue-900 font-bold p-3 mt-5 text-white"> Voir les details</a>
            </div>
          </div>

          <div className="bg-blue-50 p-5">
            <img src="/zonite.png" alt="logo_Zonite" width={240} height={100} />
            <h1 className="pt-5 text-2xl font-bold"> Zonite Market </h1>
            <p className="pt-3"> Zonite Market, la plateforme de dropshipping Camerounaise qui vous permet de gagner de l'argent depuis chez vous sans stock, sans capital de depart </p>
            <div className="mt-5">
              <a href="" className="bg-blue-900 font-bold p-3 mt-5 text-white"> Voir les details</a>
            </div>
          </div>  
        </div>
      </div>
    </div>

    {/* FOOTER */}

    <footer className="bg-blue-900 text-white p-5 mt-20">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-1xl">DIGIORA</h1>
          <p className="mt-3"> Votre bibliotheques numériques <br /> et de formations en ligne, accessible <br /> instantannement </p>
        </div>

        <div>
          <h1 className="font-bold text-1xl"> Navigation</h1>
          <ul className="mt-3">
            <li> Boutique </li>
            <li> Categorie </li>
            <li> A propos </li>
            <li> Contact </li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold text-1xl"> Support</h1>
          <ul className="mt-3">
            <li> FAQ </li>
            <li> Support </li>
            <li> Assistance </li>
            <li> Confidentialite </li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold text-1xl"> Newsletter</h1>
          <p className="mt-3"> Recevez nos recommandations </p>
        </div>  
      </div>

      <div className="mt-5">
        <hr/>
        <p className="text-center pt-3"> Copyright © 2026 DIGIORA. Tous droits réservés. </p>
      </div>
      
    </footer>

    </div>
  );
}
