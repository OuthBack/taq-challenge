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
import { ICharacterEpisode, ICharacterIDStatus } from "./types";
import { BrowserRouter, Route, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { CharacterInfo } from "./components/templates/CharacterInfo";
import { CharacterDetail } from "./components/organisms/CharacterDetail";
import { Error } from "./components/templates/Error";

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

const character: ICharacterEpisode = {
  name: "Rick Sanchez",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
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
    const text = getByText(name);
    expect(img).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(text.innerHTML).toEqual(name);
  });
});

describe("Should render ", () => {
  it("Character Card", () => {
    const { name } = characters[0];
    const { getAllByRole, getByText } = render(
      <AppProvider>
        <CharacterList characters={characters} loading={false} />
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
});

describe("Should render organisms", () => {
  it("Character Card", () => {
    const { name } = characters[0];
    const { getAllByRole, getByText } = render(
      <AppProvider>
        <CharacterList characters={characters} loading={false} />
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
          <HomeList characters={characters} loading={false} />
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
    const { name, episode, image } = character;
    const history = createMemoryHistory();
    const { getByRole } = render(
      <AppProvider>
        <Router history={history}>
          <CharacterInfo episode={episode} name={name} image={image} />
        </Router>
      </AppProvider>
    );

    act(() => {
      const button = getByRole("button");
      fireEvent.click(button);
    });

    expect(history.location.pathname).toBe("../");
  });

  it("Error redirect to Home List", async () => {
    const history = createMemoryHistory();
    const { getByRole } = render(
      <AppProvider>
        <Router history={history}>
          <Error />
        </Router>
      </AppProvider>
    );

    await act(async () => {
      const button = getByRole("button");
      fireEvent.click(button);
    });

    expect(history.location.pathname).toBe("./");
  });
});
