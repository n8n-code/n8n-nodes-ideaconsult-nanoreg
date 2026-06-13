import type { INodeProperties } from 'n8n-workflow';

export const searchDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					]
				}
			},
			"options": [
				{
					"name": "Solrquery Get",
					"value": "Solrquery Get",
					"action": "Apache Solr powered search",
					"description": "GET is simpler to use, but imposes restrictions on the complexity and the lenght of the parameters.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/select"
						}
					}
				},
				{
					"name": "Solrquery Post",
					"value": "Solrquery Post",
					"action": "Apache Solr powered search",
					"description": "POST is more complex to use, but also allows for much for complex and lengthy queries.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/select"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /select",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Solrquery Get"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "The query",
			"default": "*:*",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Solrquery Get"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "Starting page",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "start",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Solrquery Get"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "Page size",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "rows",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Solrquery Get"
					]
				}
			}
		},
		{
			"displayName": "Wt",
			"name": "wt",
			"description": "Response format",
			"default": "json",
			"type": "options",
			"options": [
				{
					"name": "JSON",
					"value": "json"
				},
				{
					"name": "XML",
					"value": "xml"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "wt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Solrquery Get"
					]
				}
			}
		},
		{
			"displayName": "POST /select",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Solrquery Post"
					]
				}
			}
		},
		{
			"displayName": "Wt",
			"name": "wt",
			"description": "Response format",
			"default": "json",
			"type": "options",
			"options": [
				{
					"name": "JSON",
					"value": "json"
				},
				{
					"name": "XML",
					"value": "xml"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "wt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Solrquery Post"
					]
				}
			}
		},
		{
			"displayName": "Facet",
			"name": "facet",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "facet",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Solrquery Post"
					]
				}
			}
		},
		{
			"displayName": "Params",
			"name": "params",
			"type": "json",
			"default": "{\n  \"fl\": [\n    null\n  ]\n}",
			"routing": {
				"send": {
					"property": "params",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Solrquery Post"
					]
				}
			}
		},
];
