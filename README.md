# @n8n-dev/n8n-nodes-ideaconsult-nanoreg

![ideaconsult-nanoreg Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-ideaconsult-nanoreg.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-ideaconsult-nanoreg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing ideaconsult-nanoreg API integrations by hand.**

Every time you connect n8n to ideaconsult-nanoreg, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to ideaconsult-nanoreg took 5 minutes, not half a day?**

This node gives you **7+ resources** out of the box: **Search**, **Structures**, **Substances**, **Studies**, **Data Analysis**, and 2 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-ideaconsult-nanoreg
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-ideaconsult-nanoreg`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **ideaconsult-nanoreg API** → paste your API key
3. Drag the **ideaconsult-nanoreg** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Search</b> (2 operations)</summary>

- Get Apache Solr powered search
- Post Apache Solr powered search

</details>

<details>
<summary><b>Structures</b> (5 operations)</summary>

- Get Exact chemical structure search
- Get Exact similarity search
- Get Substructure search
- Get Substance composition
- Get substance composition as a dataset

</details>

<details>
<summary><b>Substances</b> (6 operations)</summary>

- Get List substances
- Get a substance
- Get Substance composition
- Get substance composition as a dataset
- Get substance study
- Get study summary for the substance

</details>

<details>
<summary><b>Studies</b> (4 operations)</summary>

- Get Details of multiple studies
- Get Search endpoint summary
- Get substance study
- Get study summary for the substance

</details>

<details>
<summary><b>Facets</b> (1 operations)</summary>

- Get Search endpoint summary

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from ideaconsult-nanoreg docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official ideaconsult-nanoreg OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **ideaconsult-nanoreg** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the ideaconsult-nanoreg API updates, this node updates too.

---


## License

MIT © [kelvinzer0](https://github.com/n8n-code)
