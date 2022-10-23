import React from 'react';
import { useState } from 'react';
import { getOptions } from '../utils/getRandom';

export default function Compare() {
  //const [ids, setIds] = useState(getOptions());

  //const [a, b] = ids;

  const [voteA, setVoteA] = useState(0);
  const [voteB, setVoteB] = useState(0);

  const handleSubmitA = () => {
    setVoteA(voteA + 1);
  };

  const handleSubmitB = () => {
    setVoteB(voteB + 1);
  };

  return (
    <div>
      <div className="w-6/12 mx-auto p-4 border border-gray-100 rounded drop-shadow-md">
        <div className="text-center flex flex-row justify-evenly">
          <div
            className="w-20 h-20 mr-2 bg-red-500 hover:bg-red-400 rounded drop-shadow-md"
            onClick={handleSubmitA}
          >
            A
          </div>
          <div
            className="w-20 h-20 mr-2 bg-blue-500 hover:bg-blue-400 rounded drop-shadow-md"
            onClick={handleSubmitB}
          >
            B
          </div>
        </div>
        <div className="p-3">
          <h2>Results </h2>
          <ul>
            <li>A {voteA}</li>
            <li>B {voteB}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
