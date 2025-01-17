// import another component
import mermaid from 'mermaid';
// import { mermaidAPI }   from 'mermaid';
import classes from '../css/main.css';

const { mermaidAPI } = mermaid;
console.warn('Here', mermaid);

mermaidAPI.render(
  'the-id', 
  `%%{init: {'themeVariables': { 'edgeLabelBackground': 'transparent'}}}%%
   graph TD
        A([Start]):::start_node ==> B[Step 1]:::active_node
        B:::active_node ==> C{Flow 1}:::active_node
        C:::active_node -- Choice 1.1 --> D[Step 2.1]:::unactive_node
        C -- Choice 1.3 --> I[Step 2.3]:::bugged_node
        C:::active_node == Choice 1.2 ==> E[Step 2.2]:::active_node
        D:::unactive_node --> F{Flow 2}:::active_node
        E:::active_node ==> F{Flow 2}:::active_node
        F{Flow 2}:::active_node == Choice 2.1 ==> H[Feedback node]:::active_node
        H[Feedback node]:::active_node ==> B[Step 1]:::active_node
        F{Flow 2}:::active_node == Choice 2.2 ==> G((Finish)):::finish_node
        
        linkStyle 0,1,4,6,7,8,9 stroke:gold, stroke-width:4px
        
        classDef start_node fill:#3B1,stroke:#391,stroke-width:8px
        classDef active_node fill:#0CF,stroke:#09F,stroke-width:6px
        classDef unactive_node fill:#e0e0e0,stroke:#bdbdbd,stroke-width:3px
        classDef finish_node fill:#3B1,stroke:#391,stroke-width:8px
        classDef bugged_node fill:#F88,stroke:#F22,stroke-width:3px
    `, 
  g => {
    document.querySelector('#result').innerHTML(g);
  }
);

