import type { INodeProperties } from 'n8n-workflow';

export const facetsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Facets"
					]
				}
			},
			"options": [
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
				}
			],
			"default": ""
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
						"Facets"
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
						"Facets"
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
						"Facets"
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
						"Facets"
					],
					"operation": [
						"Get Endpoint Summary"
					]
				}
			}
		},
];
