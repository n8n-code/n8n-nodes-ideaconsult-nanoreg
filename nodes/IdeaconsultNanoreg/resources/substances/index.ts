import type { INodeProperties } from 'n8n-workflow';

export const substancesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Substances"
					]
				}
			},
			"options": [
				{
					"name": "Get Substances",
					"value": "Get Substances",
					"action": "List substances",
					"description": "Returns a list of substances, according to the search criteria",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/enm/{{$parameter[\"db\"]}}/substance"
						}
					}
				},
				{
					"name": "Get Substance By UUID",
					"value": "Get Substance By UUID",
					"action": "Get a substance",
					"description": "Returns substance representation",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/enm/{{$parameter[\"db\"]}}/substance/{{$parameter[\"uuid\"]}}"
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
				},
				{
					"name": "Get Substance Study",
					"value": "Get Substance Study",
					"action": "get substance study",
					"description": "Returns substance study representation",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/enm/{{$parameter[\"db\"]}}/substance/{{$parameter[\"uuid\"]}}/study"
						}
					}
				},
				{
					"name": "Get Substance Study Summary",
					"value": "Get Substance Study Summary",
					"action": "Get study summary for the substance",
					"description": "Study summary",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/enm/{{$parameter[\"db\"]}}/substance/{{$parameter[\"uuid\"]}}/studySummary"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /enm/{db}/substance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Substances"
					],
					"operation": [
						"Get Substances"
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
						"Substances"
					],
					"operation": [
						"Get Substances"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"description": "Search parameter",
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
						"Substances"
					],
					"operation": [
						"Get Substances"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"default": "substancetype",
			"type": "options",
			"options": [
				{
					"name": "Substancetype",
					"value": "substancetype"
				},
				{
					"name": "Name",
					"value": "name"
				},
				{
					"name": "Like",
					"value": "like"
				},
				{
					"name": "Regexp",
					"value": "regexp"
				},
				{
					"name": "Uuif",
					"value": "uuif"
				},
				{
					"name": "Comp Tox",
					"value": "CompTox"
				},
				{
					"name": "DOI",
					"value": "DOI"
				},
				{
					"name": "Reliability",
					"value": "reliability"
				},
				{
					"name": "Purpose Flag",
					"value": "purposeFlag"
				},
				{
					"name": "Study Result Type",
					"value": "studyResultType"
				},
				{
					"name": "Is Robust Study",
					"value": "isRobustStudy"
				},
				{
					"name": "Citation",
					"value": "citation"
				},
				{
					"name": "Citationowner",
					"value": "citationowner"
				},
				{
					"name": "Topcategory",
					"value": "topcategory"
				},
				{
					"name": "Endpointcategory",
					"value": "endpointcategory"
				},
				{
					"name": "Params",
					"value": "params"
				},
				{
					"name": "Owner Name",
					"value": "owner_name"
				},
				{
					"name": "Owner Uuid",
					"value": "owner_uuid"
				},
				{
					"name": "Related",
					"value": "related"
				},
				{
					"name": "Reference",
					"value": "reference"
				},
				{
					"name": "Facet",
					"value": "facet"
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
						"Substances"
					],
					"operation": [
						"Get Substances"
					]
				}
			}
		},
		{
			"displayName": "Compound Uri",
			"name": "compound_uri",
			"description": "If type=related finds all substances containing this compound; if typ =reference - finds all substances with this compound as reference structure",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "compound_uri",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Substances"
					],
					"operation": [
						"Get Substances"
					]
				}
			}
		},
		{
			"displayName": "Bundle Uri",
			"name": "bundle_uri",
			"description": "Retrieves if selected in this bundle",
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
						"Substances"
					],
					"operation": [
						"Get Substances"
					]
				}
			}
		},
		{
			"displayName": "Add Dummy Substance",
			"name": "addDummySubstance",
			"description": "Adds a compound record as substance in JSON; only if type=related",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "addDummySubstance",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Substances"
					],
					"operation": [
						"Get Substances"
					]
				}
			}
		},
		{
			"displayName": "Studysummary",
			"name": "studysummary",
			"description": "If true retrieves study summary for each substance",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "studysummary",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Substances"
					],
					"operation": [
						"Get Substances"
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
						"Substances"
					],
					"operation": [
						"Get Substances"
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
						"Substances"
					],
					"operation": [
						"Get Substances"
					]
				}
			}
		},
		{
			"displayName": "GET /enm/{db}/substance/{uuid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Substances"
					],
					"operation": [
						"Get Substance By UUID"
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
						"Substances"
					],
					"operation": [
						"Get Substance By UUID"
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
						"Substances"
					],
					"operation": [
						"Get Substance By UUID"
					]
				}
			}
		},
		{
			"displayName": "Property Uris",
			"name": "property_uris%5B%5D",
			"description": "Property URIs",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "property_uris[]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Substances"
					],
					"operation": [
						"Get Substance By UUID"
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
						"Substances"
					],
					"operation": [
						"Get Substance By UUID"
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
						"Substances"
					],
					"operation": [
						"Get Substance By UUID"
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
						"Substances"
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
						"Substances"
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
						"Substances"
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
						"Substances"
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
						"Substances"
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
						"Substances"
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
						"Substances"
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
						"Substances"
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
						"Substances"
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
						"Substances"
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
						"Substances"
					],
					"operation": [
						"Get Substance Structures"
					]
				}
			}
		},
		{
			"displayName": "GET /enm/{db}/substance/{uuid}/study",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Substances"
					],
					"operation": [
						"Get Substance Study"
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
						"Substances"
					],
					"operation": [
						"Get Substance Study"
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
						"Substances"
					],
					"operation": [
						"Get Substance Study"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"description": "Top endpoint category",
			"default": "P-CHEM",
			"type": "options",
			"options": [
				{
					"name": "P CHEM",
					"value": "P-CHEM"
				},
				{
					"name": "ECOTOX",
					"value": "ECOTOX"
				},
				{
					"name": "ENV FATE",
					"value": "ENV FATE"
				},
				{
					"name": "TOX",
					"value": "TOX"
				},
				{
					"name": "EXPOSURE",
					"value": "EXPOSURE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Substances"
					],
					"operation": [
						"Get Substance Study"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "category",
			"description": "Endpoint category (The value in the protocol.category.code field)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "category",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Substances"
					],
					"operation": [
						"Get Substance Study"
					]
				}
			}
		},
		{
			"displayName": "Property Uri",
			"name": "property_uri",
			"description": "Property URI https://data.enanomapper.net/property/{UUID} , see Property service",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "property_uri",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Substances"
					],
					"operation": [
						"Get Substance Study"
					]
				}
			}
		},
		{
			"displayName": "Property",
			"name": "property",
			"description": "Property UUID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "property",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Substances"
					],
					"operation": [
						"Get Substance Study"
					]
				}
			}
		},
		{
			"displayName": "Investigation Uuid",
			"name": "investigation_uuid",
			"description": "Investigation UUID, a code to link different studies",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "investigation_uuid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Substances"
					],
					"operation": [
						"Get Substance Study"
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
						"Substances"
					],
					"operation": [
						"Get Substance Study"
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
						"Substances"
					],
					"operation": [
						"Get Substance Study"
					]
				}
			}
		},
		{
			"displayName": "GET /enm/{db}/substance/{uuid}/studySummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Substances"
					],
					"operation": [
						"Get Substance Study Summary"
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
						"Substances"
					],
					"operation": [
						"Get Substance Study Summary"
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
						"Substances"
					],
					"operation": [
						"Get Substance Study Summary"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"description": "Top endpoint category",
			"default": "P-CHEM",
			"type": "options",
			"options": [
				{
					"name": "P CHEM",
					"value": "P-CHEM"
				},
				{
					"name": "ECOTOX",
					"value": "ECOTOX"
				},
				{
					"name": "ENV FATE",
					"value": "ENV FATE"
				},
				{
					"name": "TOX",
					"value": "TOX"
				},
				{
					"name": "EXPOSURE",
					"value": "EXPOSURE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Substances"
					],
					"operation": [
						"Get Substance Study Summary"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "category",
			"description": "Endpoint category (The value in the protocol.category.code field)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "category",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Substances"
					],
					"operation": [
						"Get Substance Study Summary"
					]
				}
			}
		},
		{
			"displayName": "Property Uri",
			"name": "property_uri",
			"description": "Property URI https://data.enanomapper.net/property/{UUID} , see Property service",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "property_uri",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Substances"
					],
					"operation": [
						"Get Substance Study Summary"
					]
				}
			}
		},
		{
			"displayName": "Property",
			"name": "property",
			"description": "Property UUID, see Property service",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "property",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Substances"
					],
					"operation": [
						"Get Substance Study Summary"
					]
				}
			}
		},
		{
			"displayName": "Result",
			"name": "result",
			"description": "If true will group by topcategory,endpointcategory,interpretation result",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "result",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Substances"
					],
					"operation": [
						"Get Substance Study Summary"
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
						"Substances"
					],
					"operation": [
						"Get Substance Study Summary"
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
						"Substances"
					],
					"operation": [
						"Get Substance Study Summary"
					]
				}
			}
		},
];
