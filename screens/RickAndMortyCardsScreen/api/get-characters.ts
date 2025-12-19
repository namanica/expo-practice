const URL = "https://rickandmortyapi.com/api/character";

export const getCharacters = async ({ pageParam }: { pageParam?: string }) => {
  const url = pageParam || URL;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch characters");
  }

  return res.json();
};
