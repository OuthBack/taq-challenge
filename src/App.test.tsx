import { render, fireEvent, waitFor, act } from "@testing-library/react";
import { BigTitle } from "./components/atoms/BigTitle";
import Button from "./components/atoms/Button";
import { Logo } from "./components/atoms/Logo";
import { SubTitle } from "./components/atoms/Subtitle";
import { Title } from "./components/atoms/Title";
import { CharacterCard } from "./components/molecules/CharacterCard";
import { CharacterList } from "./components/organisms/CharacterList";
import { HomeList } from "./components/templates/HomeList";
import AppProvider from "./contexts";
import {
  ICharacterDetail,
  ICharacterDetailEpisodes,
  ICharacterIDStatus,
} from "./types";
import { BrowserRouter, Route, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { CharacterInfo } from "./components/templates/CharacterInfo";
import { EpisodesInfo } from "./components/organisms/EpisodesInfo";
import { Error } from "./components/templates/Error";
import "intersection-observer";
import { Sentinel } from "./components/atoms/Sentinel";
import CharacterInfoCard from "./components/molecules/CharacterInfoCard";

const characters: ICharacterIDStatus[] = [
  {
    name: "Rick Sanchez",
    status: "Alive",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    id: 1,
  },
  {
    name: "Morty Smith",
    status: "Alive",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    id: 2,
  },
  {
    name: "Summer Smith",
    status: "Alive",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    id: 3,
  },
];

const character: ICharacterDetailEpisodes = {
  name: "Rick Sanchez",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  species: "Human",
  gender: "Male",
  location: {
    name: "Earth (Replacement Dimension)",
  },
  origin: {
    name: "Earth (C-137)",
  },
  episode: [
    {
      name: "Pilot",
    },
    {
      name: "Lawnmower Dog",
    },
  ],
};

describe("Should render atoms", () => {
  it("BigTitle", () => {
    const { getByRole } = render(
      <AppProvider>
        <BigTitle />
      </AppProvider>
    );
    const bigTitle = getByRole("heading");
    expect(bigTitle).toBeInTheDocument();
  });

  it("MediumTitle", () => {
    const { getByRole } = render(
      <AppProvider>
        <BigTitle />
      </AppProvider>
    );
    const mediumTitle = getByRole("heading");
    expect(mediumTitle).toBeInTheDocument();
  });

  it("Title", () => {
    const { getByRole } = render(
      <AppProvider>
        <Title />
      </AppProvider>
    );
    const title = getByRole("heading");
    expect(title).toBeInTheDocument();
  });

  it("SubTitle", () => {
    const { getByRole } = render(
      <AppProvider>
        <SubTitle />
      </AppProvider>
    );
    const subtitle = getByRole("heading");
    expect(subtitle).toBeInTheDocument();
  });

  it("Status Button", () => {
    const { getByRole } = render(
      <AppProvider>
        <Button />
      </AppProvider>
    );
    const button = getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("Logo", () => {
    const { getByRole } = render(
      <AppProvider>
        <Logo />
      </AppProvider>
    );
    const img = getByRole("img");
    expect(img).toBeInTheDocument();
  });

  it("Sentinel", () => {
    const { getByTestId } = render(
      <AppProvider>
        <Sentinel callback={() => {}} />
      </AppProvider>
    );
    const sentinel = getByTestId("sentinel");
    expect(sentinel).toBeInTheDocument();
  });
});

describe("Should render molecules", () => {
  it("Character Card", () => {
    const { name, id, image, status } = characters[0];
    const { getByRole, getByText } = render(
      <AppProvider>
        <CharacterCard name={name} id={id} image={image} status={status} />
      </AppProvider>
    );
    const img = getByRole("img");
    const button = getByRole("button");
    const text = getByText(new RegExp(`${name}`, "i"));
    expect(img).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(text.innerHTML).toEqual(name);
  });

  it("Character Info Card", () => {
    const { name, image, gender, location, origin, species } = character;
    const { getAllByRole, getByRole, getByText } = render(
      <AppProvider>
        <CharacterInfoCard
          name={name}
          gender={gender}
          location={location}
          origin={origin}
          species={species}
          image={image}
        />
      </AppProvider>
    );
    const img = getByRole("img");
    const title = getAllByRole("heading");
    getByText(new RegExp(`${name}`, "i"));
    getByText(/gender/i);
    getByText(/location/i);
    getByText(/origin/i);
    getByText(/species/i);

    expect(title.length).toEqual(5);
    expect(img).toBeInTheDocument();
  });
});

describe("Should render organisms", () => {
  it("Character List", () => {
    const { name } = characters[0];
    const setPage = () => {};
    const { getAllByRole, getByText } = render(
      <AppProvider>
        <CharacterList characters={characters} setPage={setPage} />
      </AppProvider>
    );
    const imgs = getAllByRole("img");
    const buttons = getAllByRole("button");
    const text = getByText(name);
    const headTitle = getAllByRole("heading");
    const titles = headTitle.filter((title) => {
      const classnames = title.className.split(" ");
      return classnames.includes("subtitle") || classnames.includes("title");
    });
    const bigTitles = headTitle.filter((title) =>
      title.className.split(" ").includes("big-title")
    );

    imgs.forEach((img) => expect(img).toBeInTheDocument());
    buttons.forEach((button) => expect(button).toBeInTheDocument());
    expect(text.innerHTML).toEqual(name);
    expect(titles.length).toEqual(2);
    expect(imgs.length).toEqual(3);
    expect(buttons.length).toEqual(3);
    expect(bigTitles.length).toEqual(3);
  });

  it("Episodes Info", () => {
    const { episode } = character;
    const { queryByText } = render(
      <AppProvider>
        <EpisodesInfo episode={episode} />
      </AppProvider>
    );

    const text = queryByText(/episódios/i);
    expect(text).toBeInTheDocument();

    episode.forEach(({ name }) => {
      const episodeText = queryByText(new RegExp(name));
      expect(episodeText).toBeInTheDocument();
    });
  });
});

describe("Should render Error", () => {
  it("Error Compoennt", () => {
    const { getByRole } = render(
      <AppProvider>
        <Error>error</Error>
      </AppProvider>
    );

    const text = getByRole("heading");
    const button = getByRole("button");

    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});

describe("Should change page on click", () => {
  it("Home List redirect to Character Details", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <AppProvider>
        <Router history={history}>
          <HomeList characters={characters} setPage={() => {}} />
        </Router>
      </AppProvider>
    );

    act(() => {
      const card = getByTestId("character-1");
      fireEvent.click(card);
    });

    expect(history.location.pathname).toBe("character/1");
  });

  it("Character Details redirect to Home List", () => {
    const { name, episode, image, gender, location, origin, species } =
      character;
    const history = createMemoryHistory();
    const { getByRole } = render(
      <AppProvider>
        <Router history={history}>
          <CharacterInfo
            episode={episode}
            name={name}
            image={image}
            gender={gender}
            location={location}
            origin={origin}
            species={species}
          />
        </Router>
      </AppProvider>
    );

    act(() => {
      const button = getByRole("button");
      fireEvent.click(button);
    });

    expect(history.location.pathname).toBe("../");
  });

  it("Error redirect to Home List", () => {
    const history = createMemoryHistory();
    const { getByRole } = render(
      <AppProvider>
        <Router history={history}>
          <Error />
        </Router>
      </AppProvider>
    );

    act(() => {
      const button = getByRole("button");
      fireEvent.click(button);
    });

    expect(history.location.pathname).toBe("/");
  });
});
