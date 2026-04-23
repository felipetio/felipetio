## context

Climate journalists, researchers, and activists need official citable data in real-time. However, accessing the World Bank's Data360 API (10,000+ indicators) requires technical knowledge most lack. Generic AI assistants hallucinate numbers, worsening the misinformation crisis.

## problem

How to make a giant institutional asset accessible via natural language without falling into the hallucination trap. The AI needs to interpret and narrate, but never manufacture data.

## action

Co-created the project with Gustavo Faleiros (InfoAmazonia/Pulitzer Center). I led the technical architecture and implementation. The solution is a chat interface that translates NL questions into API queries. A key piece is an open-source MCP server that ensures the AI only narrates official data.

## result

Submitted to the Data360 Global Challenge. The MCP server was published as open-source, allowing adoption by other agents and journalistic projects.
