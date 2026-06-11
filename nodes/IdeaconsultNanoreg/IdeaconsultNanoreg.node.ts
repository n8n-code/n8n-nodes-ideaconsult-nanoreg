import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { searchDescription } from './resources/search';
import { structuresDescription } from './resources/structures';
import { substancesDescription } from './resources/substances';
import { studiesDescription } from './resources/studies';
import { facetsDescription } from './resources/facets';

export class IdeaconsultNanoreg implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Ideaconsult Nanoreg',
		name: 'N8nDevIdeaconsultNanoreg',
		icon: { light: 'file:./ideaconsult-nanoreg.svg', dark: 'file:./ideaconsult-nanoreg.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'REST API for eNanoMapper nanomaterial data with free-text and faceted search.',
		defaults: { name: 'Ideaconsult Nanoreg' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevIdeaconsultNanoregApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Search",
					"value": "Search",
					"description": "Multi-DB aggregated free text and faceted search"
				},
				{
					"name": "Structures",
					"value": "Structures",
					"description": "Chemical structures"
				},
				{
					"name": "Substances",
					"value": "Substances",
					"description": "Chemical substances and (nano)materials"
				},
				{
					"name": "Studies",
					"value": "Studies",
					"description": "Measurements or calculations attached to a substance"
				},
				{
					"name": "Facets",
					"value": "Facets",
					"description": "Summaries"
				}
			],
			"default": ""
		},
		...searchDescription,
		...structuresDescription,
		...substancesDescription,
		...studiesDescription,
		...facetsDescription
		],
	};
}
