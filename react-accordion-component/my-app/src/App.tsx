import './App.css';
import Accordion from './accordion-components/Accordion';

export type Topics = { uuid: string; topic: string; description: string }[];

const topics: Topics = [
  {
    uuid: '7d76a2b6-f1fd-4de6-b571-13253192b803',
    topic: 'Hypertext Markup Language',
    description:
      'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.',
  },
  {
    uuid: '2a30e58a-d9cd-4fdc-86d7-f028f3e53d87',
    topic: 'Cascading Style Sheets',
    description:
      'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web alongside HTML and JavaScript.',
  },
  {
    uuid: '910f17df-608a-4f10-94dd-8360460c9519',
    topic: 'JavaScript',
    description:
      'JavaScript, often abbreviated as JS, is a high-level interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation and first-class functions.',
  },
];

export default function App() {
  return (
    <div>
      <Accordion topics={topics} />
    </div>
  );
}
