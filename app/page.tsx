import { fetchCars } from "@utils";
import { HomeProps } from "@types";
// import { fuels, yearsOfProduction } from "@constants";
import { CarCard, ShowMore, SearchBar, Hero } from "@components";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    name: searchParams.name || "",
    origin: searchParams.origin || "",
    length: searchParams.length || "",
    max_life: searchParams.max_life || 10,
    image: searchParams.image || "",
    playfulness: searchParams.playfulness || 0,
    offset: searchParams.offset || 0,
  });

  

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Cat Finder</h1>
          <p>Play with any cat for a day</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          
        </div>
        

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.offset || 10) / 10}
              isNext={(searchParams.offset || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
