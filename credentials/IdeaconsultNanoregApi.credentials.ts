import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class IdeaconsultNanoregApi implements ICredentialType {
        name = 'N8nDevIdeaconsultNanoregApi';

        displayName = 'Ideaconsult Nanoreg API';

        icon: Icon = { light: 'file:../nodes/IdeaconsultNanoreg/ideaconsult-nanoreg.svg', dark: 'file:../nodes/IdeaconsultNanoreg/ideaconsult-nanoreg.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.ideaconsult.net/nanoreg1',
                        required: true,
                        placeholder: 'https://api.ideaconsult.net/nanoreg1',
                        description: 'The base URL of your Ideaconsult Nanoreg API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
