import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import snorlax from "public/snorlax.webp";
import moves from "../data/moves.json";
import { useCallback, useMemo } from "react";
import { Move } from "../types/moves";
import { Table } from "../components/molecules/Table";

const Home: NextPage = () => {
  const getCellProps = useCallback(() => {
    return { className: "px-2 py-6 text-center" };
  }, []);

  const getRowProps = useCallback(() => {
    return {
      className: "border-b",
    };
  }, []);

  const columns = useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "Type", accessor: "type" },
      { Header: "Damage", accessor: "damage" },
      { Header: "pp", accessor: "pp" },
    ],
    []
  );

  return (
    <>
      <Head>
        <title>Body Slam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <div className="flex">
          <Image
            src={snorlax}
            alt="Snorlax image"
            height={513}
            className="pr-12"
          />
          <Table
            columns={columns}
            data={moves as Move[]}
            getCellProps={getCellProps}
            getRowProps={getRowProps}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
