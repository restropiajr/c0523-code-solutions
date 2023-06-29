import { useState } from 'react';

type AccordionProps = {
  topics: { uuid: string; topic: string; description: string }[];
};

export default function Accordion({ topics }: AccordionProps) {
  const [expandTopic, setExpandTopic] = useState('');

  function handleClick(uuid: string) {
    if (expandTopic === uuid) {
      setExpandTopic((prevExpandTopic) => {
        return '';
      });
    } else {
      setExpandTopic((prevExpandTopic) => {
        return uuid;
      });
    }
  }

  return (
    <>
      {topics.map(({ uuid, topic, description }) => {
        return (
          <div
            className="w-[900px] flex flex-col justify-center items-center"
            key={uuid}>
            <button
              onClick={() => handleClick(uuid)}
              className="w-1/4 bg-blue-400 p-2 border border-solid border-black rounded">
              {topic}
            </button>
            {expandTopic === uuid && (
              <p className="w-1/4 text-xs p-2 border border-solid border-black rounded">
                {description}
              </p>
            )}
          </div>
        );
      })}
    </>
  );
}
