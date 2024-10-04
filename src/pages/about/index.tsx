import "./styles.css";
import Icon, { TypeIcon } from "../../components/icon";
import Logo from "../../components/logo";
import BackButton from "../../components/backButton";
import Options from "../../components/options";

export interface ISocialNetworks {
  title: string;
  icon: TypeIcon;
  link: string;
}

const SOCIAL_NETWORKS: ISocialNetworks[] = [
  {
    title: "Twitter",
    icon: "twitter",
    link: "https://twitter.com/ostjh",
  },
  {
    title: "Github",
    icon: "github",
    link: "https://github.com/Jorger",
  },
  {
    title: "Linkedin",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jorge-rubiano-a8616319",
  },
  {
    title: "Dev.to",
    icon: "devto",
    link: "https://dev.to/jorger",
  },
  {
    title: "bio.link",
    icon: "games",
    link: "https://bio.link/jorgerub",
  },
];

const AboutPage = () => (
  <div className="about-game">
    <BackButton />
    <Options />
    <div className="about-game-body">
      <Logo />
      <p>
        The objective of the game is to maneuver a series of arrows, each with a
        predefined path. You must select the correct order for the arrows to
        avoid colliding with others. Have fun!
      </p>
      <p>
        This game was developed by{" "}
        <a
          title="Jorge Rubiano"
          href="https://twitter.com/ostjh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jorge Rubiano
        </a>{" "}
        for the{" "}
        <a
          title="React JAM"
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjam.com/"
        >
          React JAM
        </a>{" "}
        Fall 2024, where participants had just 10 days to create a game using{" "}
        <a
          title="ReactJS"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ReactJS
        </a>
        . The theme of the game was Retro Minimalism!
      </p>
    </div>
    <div className="about-game-social">
      {SOCIAL_NETWORKS.map(({ title, icon, link }, key) => (
        <a
          className="button yellow about-game-social-link"
          key={key}
          title={`Jorge Rubiano on ${title}`}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon type={icon} fill="#8b5f00" />
        </a>
      ))}
    </div>
  </div>
);

export default AboutPage;
