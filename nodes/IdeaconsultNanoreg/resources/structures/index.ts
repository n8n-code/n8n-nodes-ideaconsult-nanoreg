import type { INodeProperties } from 'n8n-workflow';

export const structuresDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					]
				}
			},
			"options": [
				{
					"name": "Search By Identifier",
					"value": "Search By Identifier",
					"action": "Exact chemical structure search",
					"description": "Returns compounds found",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/enm/{{$parameter[\"db\"]}}/query/compound/{{$parameter[\"term\"]}}/{{$parameter[\"representation\"]}}"
						}
					}
				},
				{
					"name": "Search By Similarity",
					"value": "Search By Similarity",
					"action": "Exact similarity search",
					"description": "Returns similar compounds",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/enm/{{$parameter[\"db\"]}}/query/similarity"
						}
					}
				},
				{
					"name": "Search By Smarts",
					"value": "Search By Smarts",
					"action": "Substructure search",
					"description": "Returns compounds with the specified substructure",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/enm/{{$parameter[\"db\"]}}/query/smarts"
						}
					}
				},
				{
					"name": "Get Substance Composition",
					"value": "Get Substance Composition",
					"action": "Substance composition",
					"description": "Returns substance composition",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/enm/{{$parameter[\"db\"]}}/substance/{{$parameter[\"uuid\"]}}/composition"
						}
					}
				},
				{
					"name": "Get Substance Structures",
					"value": "Get Substance Structures",
					"action": "Get substance composition as a dataset",
					"description": "Returns substance composition",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/enm/{{$parameter[\"db\"]}}/substance/{{$parameter[\"uuid\"]}}/structures"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /enm/{db}/query/compound/{term}/{representation}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Identifier"
					]
				}
			}
		},
		{
			"displayName": "DB",
			"name": "db",
			"required": true,
			"description": "Database ID",
			"default": "nanoreg1",
			"type": "options",
			"options": [
				{
					"name": "Calibrate",
					"value": "calibrate"
				},
				{
					"name": "Enanomapper",
					"value": "enanomapper"
				},
				{
					"name": "Enpra",
					"value": "enpra"
				},
				{
					"name": "Marina",
					"value": "marina"
				},
				{
					"name": "Nanogenotox",
					"value": "nanogenotox"
				},
				{
					"name": "Nanoinformatix",
					"value": "nanoinformatix"
				},
				{
					"name": "Nanoreg 1",
					"value": "nanoreg1"
				},
				{
					"name": "Nanoreg 2",
					"value": "nanoreg2"
				},
				{
					"name": "Nanotest",
					"value": "nanotest"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Identifier"
					]
				}
			}
		},
		{
			"displayName": "Term",
			"name": "term",
			"required": true,
			"description": "search term type",
			"default": "search",
			"type": "options",
			"options": [
				{
					"name": "Search",
					"value": "search"
				},
				{
					"name": "URL",
					"value": "url"
				},
				{
					"name": "Inchikey",
					"value": "inchikey"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Identifier"
					]
				}
			}
		},
		{
			"displayName": "Representation",
			"name": "representation",
			"required": true,
			"default": "all",
			"type": "options",
			"options": [
				{
					"name": "All",
					"value": "all"
				},
				{
					"name": "Smiles",
					"value": "smiles"
				},
				{
					"name": "Reach",
					"value": "reach"
				},
				{
					"name": "Stdinchi",
					"value": "stdinchi"
				},
				{
					"name": "Stdinchikey",
					"value": "stdinchikey"
				},
				{
					"name": "Names",
					"value": "names"
				},
				{
					"name": "Iupac Name",
					"value": "iupac_name"
				},
				{
					"name": "Synonym",
					"value": "synonym"
				},
				{
					"name": "Cas",
					"value": "cas"
				},
				{
					"name": "Einecs",
					"value": "einecs"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Identifier"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"description": "Compound identifier (SMILES, InChI, name, registry identifiers)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Identifier"
					]
				}
			}
		},
		{
			"displayName": "B 64 Search",
			"name": "b64search",
			"description": "Base64 encoded mol file; if included, will be used instead of the 'search' parameter",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "b64search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Identifier"
					]
				}
			}
		},
		{
			"displayName": "Casesens",
			"name": "casesens",
			"description": "Case sensitive search if yes",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "casesens",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Identifier"
					]
				}
			}
		},
		{
			"displayName": "Bundle Uri",
			"name": "bundle_uri",
			"description": "Bundle URI",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "bundle_uri",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Identifier"
					]
				}
			}
		},
		{
			"displayName": "Sameas",
			"name": "sameas",
			"description": "Ontology URI to define groups of columns",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sameas",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Identifier"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Starting page",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Identifier"
					]
				}
			}
		},
		{
			"displayName": "Pagesize",
			"name": "pagesize",
			"description": "Page size",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pagesize",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Identifier"
					]
				}
			}
		},
		{
			"displayName": "GET /enm/{db}/query/similarity",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Similarity"
					]
				}
			}
		},
		{
			"displayName": "DB",
			"name": "db",
			"required": true,
			"description": "Database ID",
			"default": "nanoreg1",
			"type": "options",
			"options": [
				{
					"name": "Calibrate",
					"value": "calibrate"
				},
				{
					"name": "Enanomapper",
					"value": "enanomapper"
				},
				{
					"name": "Enpra",
					"value": "enpra"
				},
				{
					"name": "Marina",
					"value": "marina"
				},
				{
					"name": "Nanogenotox",
					"value": "nanogenotox"
				},
				{
					"name": "Nanoinformatix",
					"value": "nanoinformatix"
				},
				{
					"name": "Nanoreg 1",
					"value": "nanoreg1"
				},
				{
					"name": "Nanoreg 2",
					"value": "nanoreg2"
				},
				{
					"name": "Nanotest",
					"value": "nanotest"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Similarity"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"description": "Compound identifier (SMILES, InChI, name, registry identifiers)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Similarity"
					]
				}
			}
		},
		{
			"displayName": "B 64 Search",
			"name": "b64search",
			"description": "Base64 encoded mol file; if included, will be used instead of the 'search' parameter",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "b64search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Similarity"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Defines the expected content of the search parameter",
			"default": "smiles",
			"type": "options",
			"options": [
				{
					"name": "Smiles",
					"value": "smiles"
				},
				{
					"name": "Mol",
					"value": "mol"
				},
				{
					"name": "URL",
					"value": "url"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Similarity"
					]
				}
			}
		},
		{
			"displayName": "Threshold",
			"name": "threshold",
			"description": "Similarity threshold",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "threshold",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Similarity"
					]
				}
			}
		},
		{
			"displayName": "Dataset Uri",
			"name": "dataset_uri",
			"description": "Restrict the search within the AMBIT dataset specified with the URI",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "dataset_uri",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Similarity"
					]
				}
			}
		},
		{
			"displayName": "Filter By Substance",
			"name": "filterBySubstance",
			"description": "Restrict the search within the set of structures with assigned substances",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "filterBySubstance",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Similarity"
					]
				}
			}
		},
		{
			"displayName": "Bundle Uri",
			"name": "bundle_uri",
			"description": "If the structure is used in the specified bundle URI, the selection tag will be returned",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "bundle_uri",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Similarity"
					]
				}
			}
		},
		{
			"displayName": "Sameas",
			"name": "sameas",
			"description": "Ontology URI to define groups of columns",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sameas",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Similarity"
					]
				}
			}
		},
		{
			"displayName": "Mol",
			"name": "mol",
			"description": "Only for application/json; to include mol as JSON field",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "mol",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Similarity"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Starting page",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Similarity"
					]
				}
			}
		},
		{
			"displayName": "Pagesize",
			"name": "pagesize",
			"description": "Page size",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pagesize",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Similarity"
					]
				}
			}
		},
		{
			"displayName": "GET /enm/{db}/query/smarts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Smarts"
					]
				}
			}
		},
		{
			"displayName": "DB",
			"name": "db",
			"required": true,
			"description": "Database ID",
			"default": "nanoreg1",
			"type": "options",
			"options": [
				{
					"name": "Calibrate",
					"value": "calibrate"
				},
				{
					"name": "Enanomapper",
					"value": "enanomapper"
				},
				{
					"name": "Enpra",
					"value": "enpra"
				},
				{
					"name": "Marina",
					"value": "marina"
				},
				{
					"name": "Nanogenotox",
					"value": "nanogenotox"
				},
				{
					"name": "Nanoinformatix",
					"value": "nanoinformatix"
				},
				{
					"name": "Nanoreg 1",
					"value": "nanoreg1"
				},
				{
					"name": "Nanoreg 2",
					"value": "nanoreg2"
				},
				{
					"name": "Nanotest",
					"value": "nanotest"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Smarts"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"description": "Compound identifier (SMILES, InChI, name, registry identifiers)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Smarts"
					]
				}
			}
		},
		{
			"displayName": "B 64 Search",
			"name": "b64search",
			"description": "Base64 encoded mol file; if included, will be used instead of the 'search' parameter",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "b64search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Smarts"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Defines the expected content of the search parameter",
			"default": "smiles",
			"type": "options",
			"options": [
				{
					"name": "Smiles",
					"value": "smiles"
				},
				{
					"name": "Mol",
					"value": "mol"
				},
				{
					"name": "URL",
					"value": "url"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Smarts"
					]
				}
			}
		},
		{
			"displayName": "Dataset Uri",
			"name": "dataset_uri",
			"description": "Restrict the search within the AMBIT dataset specified with the URI",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "dataset_uri",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Smarts"
					]
				}
			}
		},
		{
			"displayName": "Filter By Substance",
			"name": "filterBySubstance",
			"description": "Restrict the search within the set of structures with assigned substances",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "filterBySubstance",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Smarts"
					]
				}
			}
		},
		{
			"displayName": "Bundle Uri",
			"name": "bundle_uri",
			"description": "If the structure is used in the specified bundle URI, the selection tag will be returned",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "bundle_uri",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Smarts"
					]
				}
			}
		},
		{
			"displayName": "Sameas",
			"name": "sameas",
			"description": "Ontology URI to define groups of columns",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sameas",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Smarts"
					]
				}
			}
		},
		{
			"displayName": "Mol",
			"name": "mol",
			"description": "Only for application/json; to include mol as JSON field",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "mol",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Smarts"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Starting page",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Smarts"
					]
				}
			}
		},
		{
			"displayName": "Pagesize",
			"name": "pagesize",
			"description": "Page size",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pagesize",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Search By Smarts"
					]
				}
			}
		},
		{
			"displayName": "GET /enm/{db}/substance/{uuid}/composition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Get Substance Composition"
					]
				}
			}
		},
		{
			"displayName": "DB",
			"name": "db",
			"required": true,
			"description": "Database ID",
			"default": "nanoreg1",
			"type": "options",
			"options": [
				{
					"name": "Calibrate",
					"value": "calibrate"
				},
				{
					"name": "Enanomapper",
					"value": "enanomapper"
				},
				{
					"name": "Enpra",
					"value": "enpra"
				},
				{
					"name": "Marina",
					"value": "marina"
				},
				{
					"name": "Nanogenotox",
					"value": "nanogenotox"
				},
				{
					"name": "Nanoinformatix",
					"value": "nanoinformatix"
				},
				{
					"name": "Nanoreg 1",
					"value": "nanoreg1"
				},
				{
					"name": "Nanoreg 2",
					"value": "nanoreg2"
				},
				{
					"name": "Nanotest",
					"value": "nanotest"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Get Substance Composition"
					]
				}
			}
		},
		{
			"displayName": "Uuid",
			"name": "uuid",
			"required": true,
			"description": "Substance UUID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Get Substance Composition"
					]
				}
			}
		},
		{
			"displayName": "All",
			"name": "all",
			"description": "true (Show all compositions) false (do not show hidden compositions)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "all",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Get Substance Composition"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Starting page",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Get Substance Composition"
					]
				}
			}
		},
		{
			"displayName": "Pagesize",
			"name": "pagesize",
			"description": "Page size",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pagesize",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Get Substance Composition"
					]
				}
			}
		},
		{
			"displayName": "GET /enm/{db}/substance/{uuid}/structures",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Get Substance Structures"
					]
				}
			}
		},
		{
			"displayName": "DB",
			"name": "db",
			"required": true,
			"description": "Database ID",
			"default": "nanoreg1",
			"type": "options",
			"options": [
				{
					"name": "Calibrate",
					"value": "calibrate"
				},
				{
					"name": "Enanomapper",
					"value": "enanomapper"
				},
				{
					"name": "Enpra",
					"value": "enpra"
				},
				{
					"name": "Marina",
					"value": "marina"
				},
				{
					"name": "Nanogenotox",
					"value": "nanogenotox"
				},
				{
					"name": "Nanoinformatix",
					"value": "nanoinformatix"
				},
				{
					"name": "Nanoreg 1",
					"value": "nanoreg1"
				},
				{
					"name": "Nanoreg 2",
					"value": "nanoreg2"
				},
				{
					"name": "Nanotest",
					"value": "nanotest"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Get Substance Structures"
					]
				}
			}
		},
		{
			"displayName": "Uuid",
			"name": "uuid",
			"required": true,
			"description": "Substance UUID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Get Substance Structures"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Starting page",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Get Substance Structures"
					]
				}
			}
		},
		{
			"displayName": "Pagesize",
			"name": "pagesize",
			"description": "Page size",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pagesize",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Structures"
					],
					"operation": [
						"Get Substance Structures"
					]
				}
			}
		},
];
