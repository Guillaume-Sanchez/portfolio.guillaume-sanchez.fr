// == Import npm
import React from 'react';

import { Link } from "react-router-dom";

// == Import
import './mention.scss';

// == Composant
const Mention = () => (
  <main className="mention">
    <h1 className="mention-title">Mentions Légales</h1>
    <p className="mention-content">
      Merci de lire avec attention les différentes modalités d’utilisation du présent site avant d’y parcourir ses pages. En vous connectant sur ce site, vous acceptez sans réserves les présentes modalités. Aussi, conformément à l’article n°6 de la Loi n°2004-575 du 21 Juin 2004 pour la confiance dans l’économie numérique, le responsable du présent site internet <Link to="/">guillaume-sanchez.fr</Link> est :
    </p>
    <h2 className="mention-titre">Propriétaire</h2>
    <ul className="mention-ul">
      <li className="mention-li">Identité du propriétaire : Guillaume Sanchez</li>
      <li className="mention-li">Numéro de SIRET :</li>
      <li className="mention-li">adresse mail : sanchez.guillaume116@gmail.com</li>
      <li className="mention-li">site web : <Link to="/">guillaume-sanchez.fr</Link></li>
    </ul>
    <h2 className="mention-titre">Hébergement</h2>
    <ul className="mention-ul">
      <li className="mention-li">Hébergeur : OVH</li>
      <li className="mention-li">Siège social : 2 rue Kellermann – 59000 Roubaix – France</li>
      <li className="mention-li">site web :  <a href="https://www.ovh.com">ovh.com</a></li>
    </ul>
    <h2 className="mention-titre">Conditions générales d’utilisation</h2>
    <p className="mention-content">
      Ce site (<Link to="/">https://guillaume-sanchez.fr/</Link>) est proposé en différents langages web (HTML, HTML5, Javascript, CSS, etc…) pour un meilleur confort d’utilisation et un graphisme plus agréable, nous vous recommandons de recourir à des navigateurs modernes comme Internet explorer, Safari, Firefox, Google Chrome, etc… <br /> <br />
      Guillaume Sanchez met en œuvre tous les moyens dont il dispose, pour assurer une information fiable et une mise à jour fiable de ses sites internet. Toutefois, des erreurs ou omissions peuvent survenir. L’internaute devra donc s’assurer de l’exactitude des informations et signaler toutes modifications du site qu’il jugerait utile. Le propriétaire n’est en aucun cas responsable de l’utilisation faite de ces informations, et de tout préjudice direct ou indirect pouvant en découler.
    </p>
    <h2 className="mention-titre">Cookie</h2>
    <p className="mention-content">
      Le site <Link to="/">guillaume-sanchez.fr</Link> est peut-être amené à vous demander l’acceptation des cookies pour des besoins statistiques et d’affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez. Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier auquel un seriveur accède pour lire et enregistrer des informations. Certaines parties de ce site ne peuvent être fonctionnelle sans l’acceptation de cookies.
    </p>
    <h2 className="mention-titre">Liens hypertextes</h2>
    <p className="mention-content">
      Les sites internet peuvent offrir des liens vers d’autres sites internet ou d’autres ressources disponibles sur internet. Guillaume Sanchez ne dispose d’aucun moyen pour contrôler les sites en connexion avec ses sites internet, ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit. Il ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes, et notamment des informations, produits ou services qu’ils proposent, ou de tout usage qui peut être fait de ces éléments. Les risques liés à cette utilisation incombent pleinement à l’internaute, qui doit se conformer à leurs conditions d’utilisation. <br /> <br />

      Les tuilisateurs, les abonnés et les visiteurs des sites internet ne peuvent pas mettre en place un hyperlien en direction de ce site sans l’autorisation expresse et préalable de Guillaume Sanchez. <br /> <br />

      Dans l’hypothèse où un utilisateur ou visiteur souhaiterait mettre en place un lien hypertexte en direction d’un des sites internet de Guillaume Sanchez, il lui appartiendra d’adresser un email accessible sur le site afin de formuler sa demande de mise en plce d’un hyperlien. Guillaume Sanchez se réserve le droit d’accepter ou de refuser un hyperlien sans avoir à en justifier sa décision.
    </p>
    <h2 className="mention-titre">Services fournis</h2>
    <p className="mention-content">
      L’ensemble des activités de la société ainsi que ses informations sont présentés sur mon site <Link to="/">guillaume-sanchez.fr</Link>. <br /> <br />

      Guillaume Sanchez s’efforce de fournir sur le site <Link to="/">guillaume-sanchez.fr</Link> des informations aussi précises que possible. Les renseignements figurant sur le site <Link to="/">guillaume-sanchez.fr</Link> ne sont pas exhaustifs et les photos non contractuelles. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne. Par ailleurs, toutes les informations indiquées sur le site <Link to="/">guillaume-sanchez.fr</Link> sont données à titre indicatif, et sont susceptibles de changer ou d’évoluer sans préavis. 
    </p>
    <h2 className="mention-titre">Limitation contractuelles sur les données</h2>
    <p className="mention-content">
      Les informations contenues sur ce site sont aussi précises et le site remis à jour à différentes périodes de l’année, mais peut toutefois contenir des inexactitudes ou des omissions. Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, à l’adresse <a className="mailto" href="mailto:sanchez.guillaume116@gmail.com">sanchez.guillaume116@gmail.com</a> en décrivant le problème de la manìère la plus précise possible (page posant problème, type d’ordinateur et de navigateur utilisé,…). <br /> <br />

      Tout contenu téléchargé se fait aux risques et périls de l’utilisateur et sous sa seule responsabilité. En conséquence, ne saurait être tenu responsable d’un quelconque dommage subi par l’ordinateur de l’utilisateur ou d’une quelconque perte de données consécutives au téléchargement. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis à jour. <br /> <br />

      Les liens hypertextes mis en place dans le cadre du présent site internet en direction d’autres ressources présentes sur le réseau internet ne sauraient engager la responsabilité de Guillaume Sanchez.
    </p>
    <h2 className="mention-titre">Propriété intellectuelle</h2>
    <p className="mention-content">
      Tout le contenu du présent site <Link to="/">guillaume-sanchez.fr</Link>, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de la société à l’exception des marques, logos ou contenus appartenant à d’autres sociétés partenaires ou auteurs. <br /> <br />

      Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l’accord exprès par écrit de Guillaume Sanchez. Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle. Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur. En outre, les propriétaires des Contenus copiés pourraient intenter une action en justice à votre encontre.
    </p>
    <h2 className="mention-titre">Litiges</h2>
    <p className="mention-content">
      Les présentes conditions du site <Link to="/">guillaume-sanchez.fr</Link> sont régies par les lois françaises et toute contestation ou litiges qui pourraient naître de l’interprétation ou de l’exécution de celles-ci seront de la compétence exclusive des tribunaux dont dépend le siège social de la société. La langue de référence, pour le règlement de contentieux éventuels, est le français.
    </p>
    <h2 className="mention-titre">Données personnelles</h2>
    <p className="mention-content">
      De manière générale, vous n’êtes pas tenu de nous communiquer vos données personnelles lorsque vous visitez notre site Internet <Link to="/">guillaume-sanchez.fr</Link>. <br /> <br />

      Cependant, ce principe comporte certaines exceptions. En effet, pour certains services proposés par notre site, vous pouvez être amenés à nous communiquer certaines données telles que : votre nom, votre fonction, le nom de votre société, votre adresse électronique, et votre numéro de téléphone. Tel est le cas lorsque vous remplissez le formulaire qui vous est proposé en ligne, dans la rubrique « contact ». <br /> <br />

      Dans tous les cas, vous pouvez refuser de fournir vos données personnelles. Dans ce cas, vous ne pourrez pas utiliser les services du site, notamment celui de solliciter des renseignements sur notre société, ou de recevoir les lettres d’information. <br /> <br />

      Enfin, nous pouvons collecter de manière automatique certaines informations vous concernant lors d’une simple navigation sur notre site Internet, notamment : des informations concernant l’utilisation de notre site, comme les zones que vous visitez et les services auxquels vous accédez, votre adresse IP, le type de votre navigateur, vos temps d’accès. <br /> <br />

      De telles informations sont utilisées exclusivement à des fins de statistiques internes, de manière à améliorer la qualité des services qui vous sont proposés. Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.
    </p>

    <Link to="/">Retour à l'Accueil</Link>
  </main>
);

// == Export
export default Mention;
