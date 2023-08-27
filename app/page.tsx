import Event, { HeaderCard } from "@/components/EventCards";
import { Column, Row } from "@/components/Flex";

export default function Home() {
  return (
    <>
      {/*  Hero */}
      <div className="h-[75vh] w-full flex flex-col justify-center items-center">
        <div className="text-main text-center text-3xl sm:text-5xl font-semibold m-4">
          The biggest tech symposium of India
        </div>
        <div className="flex-1 bg-red"> {/* illustration */}</div>
        <div className="text-text text-sm sm:text-lg max-w-xs sm:max-w-2xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          nostrum atque non iure reiciendis provident ab, hic officia eaque quos
          debitis, fugiat temporibus. Explicabo tempora sequi, placeat veniam
          eius necessitatibus cum sapiente sit
        </div>
      </div>

      {/* Event Cards */}
      {/* TODO: make this responsive */}
      <div className="hidden  mt-[10rem] m-8 md:flex flex-col justify-center items-center">
        <Row>
          <HeaderCard />
          <Column>
            <Row>
              <Event
                text="Sudocrypt"
                image="/sudocrypt.svg"
                className="rounded-b-max"
              />
              <Event
                text="Locus"
                image="/locus.svg"
                className="rounded-b-max"
              />
              <Event
                text="exML"
                image="/exML.svg"
                className="rounded-se-max rounded-es-max"
              />
            </Row>
            <Row>
              <Event
                text="Group Discussion"
                image="/GD.svg"
                className="rounded-max"
              />
              <Event
                text="Build"
                image="/build.svg"
                className="rounded-l-max"
                long
              />
            </Row>
          </Column>
        </Row>
        <Row>
          <Event
            text="Competitive Programming"
            image="/CP.svg"
            className="rounded-r-max"
          />
          <Event
            text="Robotics"
            image="/robotics.svg"
            className="rounded-max"
          />
          <Event
            text="SpaceTech"
            image="/Spacetech.svg"
            className="rounded-max"
          />
          <Event
            text="Hardware"
            image="/hardware.svg"
            className="rounded-l-max"
          />
        </Row>
        <Row>
          <Column>
            <Event
              text="Surprise"
              image="/surprise.svg"
              className="rounded-r-max"
              long
            />
            <Row>
              <Event
                text="Crossword"
                image="cross.svg"
                className="rounded-se-max rounded-es-max"
              />
              <Event
                text="Girls in Tech"
                image="girls in tech.svg"
                className="rounded-t-max"
              />
            </Row>
          </Column>
          <Column>
            <Row>
              <Event
                text="Gaming"
                image="/gaming.svg"
                className="rounded-max"
              />
              <Event
                text="Junior Quiz"
                image="/junior quiz.svg"
                className="rounded-l-max"
              />
            </Row>
            <Row>
              <Event
                text="Open Quiz"
                image="/open quiz.svg"
                className="rounded-t-max"
              />
              <Event
                text="CubXL"
                image="/cubxl.svg"
                className="rounded-ss-max rounded-ee-max"
              />
            </Row>
          </Column>
        </Row>
      </div>
    </>
  );
}