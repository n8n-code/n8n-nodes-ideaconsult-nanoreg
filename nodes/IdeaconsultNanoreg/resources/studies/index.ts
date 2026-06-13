import type { INodeProperties } from 'n8n-workflow';

export const studiesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					]
				}
			},
			"options": [
				{
					"name": "Get Investigation Results",
					"value": "Get Investigation Results",
					"action": "Details of multiple studies",
					"description": "Multiple studies in tabular form",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/enm/{{$parameter[\"db\"]}}/investigation"
						}
					}
				},
				{
					"name": "Get Endpoint Summary",
					"value": "Get Endpoint Summary",
					"action": "Search endpoint summary",
					"description": "Returns endpoint summary",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/enm/{{$parameter[\"db\"]}}/query/study"
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
			"displayName": "GET /enm/{db}/investigation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"Get Investigation Results"
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
						"Studies"
					],
					"operation": [
						"Get Investigation Results"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "query type",
			"default": "bystudytype",
			"type": "options",
			"options": [
				{
					"name": "Byinvestigation",
					"value": "byinvestigation"
				},
				{
					"name": "Byassay",
					"value": "byassay"
				},
				{
					"name": "Bysubstance",
					"value": "bysubstance"
				},
				{
					"name": "Byprovider",
					"value": "byprovider"
				},
				{
					"name": "Bycitation",
					"value": "bycitation"
				},
				{
					"name": "Bystudytype",
					"value": "bystudytype"
				},
				{
					"name": "Bystructure Inchikey",
					"value": "bystructure_inchikey"
				},
				{
					"name": "Bystructure Smiles",
					"value": "bystructure_smiles"
				},
				{
					"name": "Bystructure Name",
					"value": "bystructure_name"
				},
				{
					"name": "Bysubstance Name",
					"value": "bysubstance_name"
				},
				{
					"name": "Bysubstance Type",
					"value": "bysubstance_type"
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
						"Studies"
					],
					"operation": [
						"Get Investigation Results"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"required": true,
			"description": "Search parameter, UUID of the investigation or a substance",
			"default": "PC_GRANULOMETRY_SECTION",
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
						"Studies"
					],
					"operation": [
						"Get Investigation Results"
					]
				}
			}
		},
		{
			"displayName": "Inchikey",
			"name": "inchikey",
			"description": "Search parameter, InChI key(s) of the substance component(s), comma delimited",
			"default": "YUYCVXFAYWRXLS-UHFFFAOYSA-N",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "inchikey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"Get Investigation Results"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"description": "Search parameter, chemical structure or substance identifier(s), comma delimited",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"Get Investigation Results"
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
						"Studies"
					],
					"operation": [
						"Get Investigation Results"
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
						"Studies"
					],
					"operation": [
						"Get Investigation Results"
					]
				}
			}
		},
		{
			"displayName": "GET /enm/{db}/query/study",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"Get Endpoint Summary"
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
						"Studies"
					],
					"operation": [
						"Get Endpoint Summary"
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
						"Studies"
					],
					"operation": [
						"Get Endpoint Summary"
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
						"Studies"
					],
					"operation": [
						"Get Endpoint Summary"
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
						"Studies"
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
						"Studies"
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
						"Studies"
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
						"Studies"
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
						"Studies"
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
						"Studies"
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
						"Studies"
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
						"Studies"
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
						"Studies"
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
						"Studies"
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
						"Studies"
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
						"Studies"
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
						"Studies"
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
						"Studies"
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
						"Studies"
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
						"Studies"
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
						"Studies"
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
						"Studies"
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
						"Studies"
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
						"Studies"
					],
					"operation": [
						"Get Substance Study Summary"
					]
				}
			}
		},
];
